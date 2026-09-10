// Povlaci POVIJESNE verzije funnela s Wayback Machinea, po godini.
// Ovdje je stvarno "sve sto su radili kroz 10 godina" - vidis evolciju stranice.
// Pokretanje:  node wayback.mjs           (sve)
//              node wayback.mjs 01-brunson (samo jedan guru)

import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const OUT = 'SWIPE';
const CONC = 2;                  // Wayback je spor i limitira - ne dizi ovo
const filter = process.argv[2] || null;

const cfg = JSON.parse(await fs.readFile('targets.json', 'utf8'));
let doms = cfg.wayback;
if (filter) doms = doms.filter(d => d.guru.includes(filter) || d.domain.includes(filter));

// Za svaku domenu+godinu pitaj Wayback koji snapshot postoji
async function findSnapshot(domain, year) {
  const api = `https://archive.org/wayback/available?url=${encodeURIComponent(domain)}&timestamp=${year}0601`;
  try {
    const r = await fetch(api, { signal: AbortSignal.timeout(20000) });
    const j = await r.json();
    const s = j?.archived_snapshots?.closest;
    if (s?.available && s.url) return { url: s.url.replace(/^http:/, 'https:'), ts: s.timestamp };
  } catch {}
  return null;
}

const jobs = [];
for (const d of doms) for (const y of d.years) jobs.push({ ...d, year: y });

console.log(`\nWayback: trazim ${jobs.length} snapshotova...\n`);

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 2,
});

const failed = [];
let done = 0;
const queue = [...jobs];

await Promise.all(Array.from({ length: CONC }, async () => {
  while (queue.length) {
    const j = queue.shift();
    const dir = path.join(OUT, j.guru, '_wayback', j.domain.replace(/\./g, '_'));
    await fs.mkdir(dir, { recursive: true });
    const base = path.join(dir, `${j.year}`);
    try { await fs.access(`${base}.png`); console.log(`  skip  ${j.domain} ${j.year}`); continue; } catch {}

    const snap = await findSnapshot(j.domain, j.year);
    if (!snap) { console.log(`  --    ${j.domain} ${j.year}  (nema snapshota)`); continue; }

    const page = await ctx.newPage();
    try {
      // if_ sufiks = original bez Wayback trake preko stranice
      const clean = snap.url.replace(/\/web\/(\d+)\//, '/web/$1if_/');
      await page.goto(clean, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await page.waitForTimeout(3500);
      await page.evaluate(async () => {
        await new Promise(res => { let y = 0;
          const t = setInterval(() => { window.scrollBy(0, 700); y += 700;
            if (y >= document.body.scrollHeight + 800) { clearInterval(t); res(); } }, 60); });
      });
      await page.waitForTimeout(1200);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: `${base}.png`, fullPage: true });
      await page.pdf({ path: `${base}.pdf`, format: 'A4', printBackground: true, scale: 0.72 }).catch(() => {});
      done++;
      console.log(`  ok    ${j.domain} ${j.year}  (${snap.ts})`);
    } catch (e) {
      failed.push(`${j.domain} ${j.year}: ${String(e).split('\n')[0]}`);
      console.log(`  FAIL  ${j.domain} ${j.year}`);
    } finally { await page.close().catch(() => {}); }
  }
}));

await browser.close();
if (failed.length) await fs.writeFile(path.join(OUT, 'FAILED_wayback.txt'), failed.join('\n'));
console.log(`\nGotovo. ${done} povijesnih snapshotova skinuto.`);
