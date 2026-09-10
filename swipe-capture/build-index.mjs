// Slozi lokalnu galeriju svih skinutih screenshotova.
// Pokretanje: node build-index.mjs   ->  SWIPE/index.html (otvori dvoklikom)

import fs from 'node:fs/promises';
import path from 'node:path';

const OUT = 'SWIPE';
const shots = [];

async function walk(dir) {
  let ents;
  try { ents = await fs.readdir(dir, { withFileTypes: true }); } catch { return; }
  for (const e of ents) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else if (e.name.endsWith('.png')) {
      const rel = path.relative(OUT, p);
      const parts = rel.split(path.sep);
      shots.push({
        rel: rel.split(path.sep).join('/'),
        guru: parts[0] || '?',
        group: parts.slice(1, -1).join(' / ') || '—',
        name: path.basename(e.name, '.png'),
        pdf: await fs.access(p.replace(/\.png$/, '.pdf')).then(() => true).catch(() => false),
      });
    }
  }
}
await walk(OUT);
shots.sort((a, b) => (a.guru + a.group + a.name).localeCompare(b.guru + b.group + b.name));

const byGuru = {};
for (const s of shots) (byGuru[s.guru] ||= []).push(s);

const body = Object.entries(byGuru).map(([guru, list]) => {
  const cards = list.map(s => `
    <figure>
      <a href="${s.rel}" target="_blank"><img loading="lazy" src="${s.rel}" alt="${s.name}"></a>
      <figcaption>
        <b>${s.group}</b><span>${s.name}</span>
        ${s.pdf ? `<a class="pdf" href="${s.rel.replace(/\.png$/, '.pdf')}" target="_blank">PDF</a>` : ''}
      </figcaption>
    </figure>`).join('');
  return `<section><h2>${guru} <em>${list.length}</em></h2><div class="grid">${cards}</div></section>`;
}).join('');

const html = `<!doctype html><html lang="hr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Swipe — capture galerija</title><style>
:root{--pa:#F7F5F0;--ink:#1A1D1A;--ink2:#6B6D66;--rule:#DDD8CB;--gr:#17604E}
@media(prefers-color-scheme:dark){:root{--pa:#15171A;--ink:#E8E6DF;--ink2:#9A9C94;--rule:#2C3037;--gr:#5FBFA0}}
*{box-sizing:border-box}
body{margin:0;background:var(--pa);color:var(--ink);font:16px/1.5 system-ui,sans-serif;padding:32px 24px 80px}
h1{font-size:26px;margin:0 0 4px}
.lead{color:var(--ink2);margin:0 0 32px;font-size:14px}
section{margin-bottom:44px}
h2{font-size:14px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink2);
   border-bottom:1px solid var(--rule);padding-bottom:8px;margin:0 0 18px}
h2 em{font-style:normal;color:var(--gr);margin-left:6px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:20px}
figure{margin:0;background:var(--pa);border:1px solid var(--rule);border-radius:4px;overflow:hidden}
img{width:100%;display:block;aspect-ratio:3/4;object-fit:cover;object-position:top;
    max-width:100%;background:var(--rule)}
figcaption{padding:9px 11px;font-size:12px;border-top:1px solid var(--rule);
  display:flex;flex-direction:column;gap:2px}
figcaption b{font-weight:600}
figcaption span{color:var(--ink2);font-size:11px;font-family:ui-monospace,monospace}
.pdf{align-self:flex-start;margin-top:5px;font-size:10px;letter-spacing:.08em;
  color:var(--gr);text-decoration:none;border:1px solid var(--gr);padding:2px 6px;border-radius:2px}
</style></head><body>
<h1>Swipe — capture galerija</h1>
<p class="lead">${shots.length} screenshotova · generirano ${new Date().toLocaleString('hr-HR')} · klik otvara punu velicinu</p>
${body || '<p>Nema jos ni jednog screenshota. Pokreni <code>node capture.mjs</code>.</p>'}
</body></html>`;

await fs.mkdir(OUT, { recursive: true });
await fs.writeFile(path.join(OUT, 'index.html'), html);
console.log(`Galerija: ${OUT}/index.html  (${shots.length} screenshotova)`);
