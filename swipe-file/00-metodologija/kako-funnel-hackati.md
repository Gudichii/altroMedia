# Kako sam skidaš tuđi funnel (funnel hacking proces)

Ovaj dokument postoji jer swipe file koji ne raste je mrtav swipe file.
Ovdje je proces kojim sam dodaješ nove funnele u ovaj folder.

---

## Pravilo #0

**Moraš kupiti.** Ne možeš funnel-hackati ono što nisi prošao do kraja.
Većina funnela skriva 60–80% svoje mehanike iza prve transakcije: upsell stack,
downsell, order bump, email sekvenca nakon kupnje, retargeting, SMS.

Brunsonova knjiga košta 9.95$ poštarine. Gadzhijev low-ticket 45–75$.
To nije trošak, to je školarina. Jedan Gadzhijev $45 downsell ti pokaže
cijelu arhitekturu koju onda naplatiš klijentu 1.500€.

Budžet: **200–300€ godišnje za kupovanje tuđih funnela.** Najbolji ROI u struci.

---

## Korak 1 — Uđi u funnel na 3 načina

Isti funnel se drugačije ponaša ovisno o tome odakle dolaziš. Uvijek testiraj sva tri:

| Ulaz | Kako | Što vidiš |
|------|------|-----------|
| **Hladno, s oglasa** | Facebook Ad Library → traži brand → klikni aktivni oglas | Pravi hook, pravi angle, pravi ad→page match |
| **Organski, s YouTubea** | Njegov YouTube → link u opisu / pinned komentar | Warm funnel, drugi copy, manje agresivan |
| **Direktno na domenu** | Utipkaš domenu | Često redirect na trenutnu glavnu ponudu — pokazuje ti što im je PRIORITET sad |

**Facebook Ad Library je tvoj najbolji besplatni alat.**
`facebook.com/ads/library` → Search by advertiser → upiši ime.
Vidiš svaki aktivni oglas, datum kad je pokrenut, i sve varijacije creativea.
Oglas koji vrti 6+ mjeseci = pobjednik. Taj hook kradeš.

---

## Korak 2 — Mapiraj svaku stranicu

Za svaku stranicu u funnelu zabilježi:

```
STRANICA: [naziv, npr. "Order form"]
URL: [pun URL]
CILJ: [jedna akcija koju stranica traži]
HEADLINE: [doslovno prepisan]
SUB: [doslovno prepisan]
BULLETS: [svi, doslovno]
CTA TEXT: [doslovno — "Yes, send me my free book!" nije isto što i "Kupi"]
CIJENA: [i kako je prikazana — precrtana? rate? "samo poštarina"?]
ORDER BUMP: [checkbox uz narudžbu, cijena, copy]
SOCIAL PROOF: [koliko testimoniala, koji format, video ili tekst]
GARANCIJA: [doslovno prepisana]
SCARCITY: [countdown? broj mjesta? "zatvara se u ponedjeljak"?]
ODLAZAK: [exit popup? što nudi?]
```

**Snimi stranicu, ne samo tekst.** Dizajn je pola poruke.
- Screenshot cijele stranice: Chrome → F12 → Ctrl+Shift+P → "Capture full size screenshot"
- Ili spremi HTML: Ctrl+S → "Web Page, Complete"
- Spremi u `swipe-file/_captures/<ime>/<datum>/`

---

## Korak 3 — Prođi upsell stack do kraja

Ovo je dio koji 95% ljudi preskoči i zato im funneli ne zarađuju.

Kupi front-end. Onda **ne zatvaraj tab.** Zabilježi:

1. **OTO 1** — cijena, što je, koliko je "diskontirano", ima li video
2. **Downsell 1** — ako klikneš "no thanks", što se dogodi? Ista stvar jeftinije? Rate plan?
3. **OTO 2** — obično skuplji ili continuity (mjesečna pretplata)
4. **Downsell 2**
5. **Thank you page** — što je sljedeći korak? Community? Booking poziva? App download?

**Zapiši AOV logiku:** ako front-end 9.95$ a upsellovi 37$+97$+297$, njihov AOV
nije 9.95$ nego možda 45–60$. Zato mogu platiti 30$ za lead. Ti s 9.95$ AOV-a ne možeš.

---

## Korak 4 — Uđi u email sekvencu (i ne izlazi)

Koristi **poseban email** samo za funnel hacking. Nikad svoj glavni.
Gmail trik: `tvojmail+swipe-brunson@gmail.com` — sve dolazi u tvoj inbox, ali
znaš tko je prodao/procurio adresu.

Zabilježi za svaki email:
- Dan slanja (D+0, D+1, D+3...)
- Subject line (doslovno)
- Preheader
- Dužina (kratki teaser ili duga priča?)
- Jedan CTA ili više?
- Kada se ton mijenja iz "vrijednost" u "kupi"

**Dvije sekvence koje moraš uhvatiti:**
- **Soap Opera Sequence** (5 emailova, priča s cliffhangerima) — što šalju NOVOM leadu
- **Seinfeld emails** (dnevni, o "ničemu", uvijek s linkom) — što šalju STAROM leadu

---

## Korak 5 — Namjerno napusti (abandon)

Dođi do checkouta, upiši email, **ne dovrši kupnju**, i čekaj 72h.

Ovo otkriva cart abandonment sekvencu — često najbolji copy u cijelom funnelu,
jer je pisan za nekoga tko je BIO spreman kupiti pa se predomislio.
To je copy koji rješava zadnju objekciju. To je copy koji vrijedi najviše.

---

## Korak 6 — Pogledaj im tech stack

Chrome ekstenzija **Wappalyzer** ili pogledaj source (Ctrl+U):

- `clickfunnels.com` u source-u → ClickFunnels
- `kajabi` → Kajabi
- `msgsndr.com` → GoHighLevel (tvoj stack)
- `thrivecart` / `samcart` → checkout
- `deadlinefunnel` → evergreen countdown (lažna scarcity, radi)
- `hyros` / `wicked reports` → ozbiljan tracking, znači da troše ozbiljan novac na ads

Tech stack ti kaže **koliko su ozbiljni**. Netko na Kajabiju s Deadline Funnelom
i Hyrosom troši 6-znamenkasto mjesečno na oglase. Netko na Carrdu testira.

---

## Korak 7 — Zapiši ŠTO KRADEŠ (ne sve)

Najvažniji korak i svi ga preskoče.

Nakon svakog funnel hacka napiši **tri bulleta**:

```
KRADEM: [jedan konkretan element — headline formula, order bump angle, garancija]
NE KRADEM: [što ne radi na Balkanu ili za moj avatar]
TESTIRAM SLJEDEĆI PUT KOD: [ime klijenta / projekta]
```

Bez ovoga imaš arhivu. S ovim imaš oružje.

---

## Funnel hacking etika (i pravna granica)

**Legalno i normalno:** kopirati STRUKTURU, redoslijed stranica, tip ponude,
mehaniku upsella, formulu headlinea, tip garancije, cjenovnu arhitekturu.
Cijela industrija je izgrađena na ovome — Brunson je izmislio termin "funnel hacking"
i doslovno uči ljude da to rade njemu.

**Nelegalno:** copy-paste tuđeg teksta doslovno, njihove slike, njihov brand,
njihove testimoniale, njihove rezultate kao svoje.

**Praktično pravilo:** ako bi te bilo neugodno da klijent vidi original
pored tvoje verzije — otišao si predaleko.

---

## Alati (svi besplatni ili jeftini)

| Alat | Za što | Cijena |
|------|--------|--------|
| Facebook Ad Library | Aktivni oglasi bilo kojeg brenda | 0€ |
| Wappalyzer (Chrome) | Tech stack stranice | 0€ |
| GoFullPage (Chrome) | Full-page screenshot | 0€ |
| SingleFile (Chrome) | Spremi cijelu stranicu kao 1 HTML | 0€ |
| Wayback Machine | Stare verzije funnela (2015-danas) | 0€ |
| Similarweb | Odakle im traffic | 0€ (limitirano) |
| Gmail `+alias` | Praćenje email sekvenci | 0€ |

**Wayback Machine trik za "10 godina unatrag":**
`web.archive.org/web/2016*/dotcomsecrets.com` → vidiš svaki snapshot iz 2016.
Tako vidiš kako je funnel izgledao 2016 vs 2020 vs danas. Evolucija ti pokaže
što su testirali i zadržali — a to što su zadržali je pobjednik.
