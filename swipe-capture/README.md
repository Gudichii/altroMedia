# SWIPE CAPTURE — skini prave stranice funnela na svoj desktop

Ovo skida **screenshotove, PDF-ove i cijele stranice** funnela Brunsona, Hormozija,
Gadzhija i ostalih — i live verzije i povijesne kroz zadnjih 10 godina.

Rezultat je folder `SWIPE/` koji držiš na desktopu.

---

## Pokretanje (4 naredbe, jednom)

Trebaš **Node.js 18+** ([nodejs.org](https://nodejs.org) → LTS → instaliraj → gotovo).

```bash
cd swipe-capture
npm run setup      # instalira Playwright + Chromium (~200 MB, jednom)
npm run all        # skine sve: live + povijesno + galerija
```

`npm run all` traje **20–40 minuta**. Pusti da radi.

Ako hoćeš po dijelovima:
```bash
npm run live       # samo trenutne stranice (38 komada, ~5 min)
npm run history    # samo Wayback povijest (100 snapshotova, ~25 min)
npm run index      # samo presloži galeriju
```

Samo jedan guru:
```bash
node capture.mjs 02-hormozi
node wayback.mjs 01-brunson
```

---

## Što dobiješ

```
SWIPE/
├── index.html                      ← OTVORI OVO. Galerija svih screenshotova.
├── manifest.json                   ← što je skinuto, status, naslovi
├── FAILED.txt                      ← što nije prošlo i zašto
│
├── 01-brunson/
│   ├── dotcomsecrets/
│   │   ├── 01-salespage_2026-09-10.png    ← full-page screenshot, retina
│   │   ├── 01-salespage_2026-09-10.pdf    ← ista stranica kao PDF
│   │   └── 01-salespage_2026-09-10.html   ← cijeli HTML
│   ├── onefunnelaway/
│   ├── funnelhackinglive/
│   └── _wayback/
│       └── dotcomsecrets_com/
│           ├── 2015.png   ← kako je izgledao 2015
│           ├── 2016.png
│           ├── ...
│           └── 2026.png   ← kako izgleda danas
│
├── 02-hormozi/   03-gadzhi/   04-ovens/   05-walker/
├── 06-graziosi/  07-cardone/  08-ostali/
```

**`_wayback/` je najvrjedniji dio.** Poredaš 2016 → 2020 → 2026 jednu do druge
i vidiš točno što su mijenjali i što su zadržali. Ono što su zadržali kroz
10 godina i milijune u ad spendu — to je pobjednik. To kradeš.

Screenshotovi su retina (2×), full-page, s učitanim lazy slikama.

---

## ⚠️ Što ovo NE može skinuti (budi svjestan prije nego pokreneš)

**Upsell / OTO / downsell stranice.** One postoje tek nakon što platiš.
Nema skripte koja to zaobilazi — moraš kupiti da ih vidiš.

To je konkretno:
- Brunsonov order bump i 2 OTO-a nakon knjige od $9.95
- Gadzhijev $45 downsell nakon što odbiješ $75
- Sve thank-you stranice i post-purchase sekvence

**Ali to je najjeftiniji dio.** Brunsonova knjiga je $9.95 poštarine i za taj novac
vidiš cijeli upsell stack. Kupi jednu, prođi funnel do kraja, screenshotaj sam
(`Ctrl+Shift+P` → "Capture full size screenshot" u Chrome DevToolsu) i spremi
u isti folder. Puni proces: `../swipe-file/00-metodologija/kako-funnel-hackati.md`.

**Email sekvence** također ne — moraš se upisati na listu. Koristi
`tvojmail+brunson@gmail.com` da znaš tko ti je prodao adresu.

**Neke stranice će pasti.** Mrtvi linkovi, redirecti, Cloudflare bot-zaštita.
Završe u `FAILED.txt` — te otvori ručno u browseru i screenshotaj.
Očekuj da 15–25% padne, to je normalno.

---

## Facebook Ad Library — radi to ručno, vrijedi

Skripta ne dira Ad Library (traži login i mijenja se stalno), a to je
**najbolji besplatni izvor stvarnih oglasa**:

`facebook.com/ads/library` → *Search by advertiser* → upiši `ClickFunnels`,
`Acquisition.com`, `Iman Gadzhi`, `Grant Cardone`.

Vidiš svaki aktivni oglas, **datum kad je pokrenut**, i sve varijacije creativea.
Oglas koji vrti 6+ mjeseci je pobjednik — taj hook kradeš.
Screenshotaj i spremi u `SWIPE/<guru>/_ads/`.

---

## Dodavanje svojih ciljeva

Otvori `targets.json`, dodaj red:

```json
{ "guru": "09-moji", "funnel": "netko-hrvatski", "step": "01-salespage",
  "url": "https://primjer.hr/ponuda" }
```

Pa `npm run live`. Već skinuto se preskače, skida samo novo.

**Preporuka:** dodaj hrvatske funnele koje vidiš u divljini. Usporedba
"kako to radi Brunson" vs "kako to radi netko na Balkanu" ti je vrjednija
od bilo kojeg američkog primjera, jer pokazuje gdje je rupa na tržištu.
