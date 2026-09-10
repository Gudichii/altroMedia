// Skida live funnel stranice: full-page PNG + PDF + HTML.
// Pokretanje:  node capture.mjs           (sve)
//              node capture.mjs 02-hormozi (samo jedan guru)

import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const OUT = 'SWIPE';
const CONC = 3;                 // paralelnih tabova
const NAV_TIMEOUT = 45000;
const filter = process.argv[2] || null;

const cfg = JSON.parse(await fs.readFile('targets.json', 'utf8'));
let jobs = cfg.targets;
if (filter) jobs = jobs.filter(t => t.guru.includes(filter) || t.funnel.includes(filter));

const stamp = new Date().toISOString().slice(0, 10);
const failed = [];
const manifest = [];

// Najcesci cookie/consent gumbi - best effort, ne pada ako ih nema.
const CONSENT = [
  'button:has-text("Accept")', 'button:has-text("Accept all")',
  'button:has-text("I agree")', 'button:has-text("Got it")',
  'button:has-text("Prihvati")', '#onetrust-accept-btn-handler',
  '[aria-label="Accept cookies"]', '.cc-allow',
];

async function dismissOverlays(page) {
  for (const sel of CONSENT) {
    try {
      const el = await page.$(sel);
      if (el && await el.isVisible()) { await el.click({ timeout: 1500 }); await page.waitForTimeout(400); break; }
    } catch {}
  }
  // Zatvori modale/popupe koji prekrivaju stranicu
  try { await page.keyboard.press('Escape'); } catch {}
}

async function autoScroll(page) {
  // Skrola do dna da se ucitaju lazy slike, pa nazad na vrh.
  await page.evaluate(async () => {
    await new Promise(res => {
      let y = 0;
      const t = setInterval(() => {
        window.scrollBy(0, 600); y += 600;
        if (y >= document.body.scrollHeight + 1000) { clearInterval(t); res(); }
      }, 60);
    });
  });
  await page.waitForTimeout(1200);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
}

async function grab(ctx, job) {
  const dir = path.join(OUT, job.guru, job.funnel);
  await fs.mkdir(dir, { recursive: true });
  const base = path.join(dir, `${job.step}_${stamp}`);

  // Preskoci ako vec postoji (resume)
  try { await fs.access(`${base}.png`); console.log(`  skip  ${job.guru}/${job.funnel}/${job.step}`); return; } catch {}

  const page = await ctx.newPage();
  page.setDefaultTimeout(NAV_TIMEOUT);
  try {
    const resp = await page.goto(job.url, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT });
    const status = resp ? resp.status() : 0;
    await page.waitForTimeout(2500);
    await dismissOverlays(page);
    await autoScroll(page);

    await page.screenshot({ path: `${base}.png`, fullPage: true });
    await page.pdf({ path: `${base}.pdf`, format: 'A4', printBackground: true, scale: 0.72 })
      .catch(() => {}); // pdf radi samo u headless chromiumu
    await fs.writeFile(`${base}.html`, await page.content(), 'utf8');

    manifest.push({ ...job, status, finalUrl: page.url(), title: await page.title(), files: `${base}.*` });
    console.log(`  ok    ${job.guru}/${job.funnel}/${job.step}  [${status}]`);
  } catch (e) {
    failed.push({ ...job, error: String(e).split('\n')[0] });
    console.log(`  FAIL  ${job.guru}/${job.funnel}/${job.step}  ${String(e).split('\n')[0]}`);
  } finally {
    await page.close().catch(() => {});
  }
}

console.log(`\nCapture: ${jobs.length} stranica -> ./${OUT}/\n`);
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 2,                       // retina, citljiv tekst na screenshotu
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36',
  locale: 'en-US',
});

const queue = [...jobs];
await Promise.all(Array.from({ length: CONC }, async () => {
  while (queue.length) await grab(ctx, queue.shift());
}));

await browser.close();
await fs.mkdir(OUT, { recursive: true });
await fs.writeFile(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
if (failed.length) await fs.writeFile(path.join(OUT, 'FAILED.txt'),
  failed.map(f => `${f.url}\n  -> ${f.error}`).join('\n\n'));

console.log(`\nGotovo. ${manifest.length} uspjesno, ${failed.length} palo.`);
if (failed.length) console.log(`Pale stranice: ${OUT}/FAILED.txt (vecinom mrtvi linkovi ili bot-zastita - te otvori rucno)`);
