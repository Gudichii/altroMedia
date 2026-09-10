# SWIPE FILE — Funneli i eventi info-product giganata (2015–2026)

Veliki swipe za gradnju funnela. Napravljeno kao radni alat, ne kao članak.
Svaki funnel je razbijen stranicu-po-stranicu: koja stranica, koja cijena, koji
upsell, koji copy pattern, i **što od toga kradeš za Expert Launch**.

---

## ⚠️ Pročitaj prvo — što je ovdje, a što nije

**Što JEST u ovom folderu:**
- Rekonstrukcija funnela stranicu-po-stranicu (URL → cijena → upsell → mehanika)
- Cijene i njihova evolucija kroz godine
- Copy formule i skripte (Perfect Webinar, VSL, challenge, book funnel)
- Kronologija eventova 2015–2026 s cijenama ulaznica i onim što se prodavalo sa stagea
- Konverzijski benchmarkovi po tipu funnela
- Direktni live URL-ovi da sam odeš skinuti/screenshotati

**Što NIJE u ovom folderu:**
- Sirovi HTML/screenshotovi njihovih stranica.

Razlog je tehnički: sesija u kojoj je ovo napravljeno ima zaključan mrežni
egress (dopušteni su samo GitHub i package registryji). `dotcomsecrets.com`,
`acquisition.com`, `imangadzhi.clickfunnels.com`, pa čak i Wayback Machine
(`archive.org`) — sve blokirano. Web **pretraga** radi (ide serverski), skidanje
stranica ne.

**Zato je u svakom dokumentu naveden live URL.** Otvoriš ga u browseru,
prođeš funnel do kraja (kupi najjeftiniji proizvod da vidiš cijeli upsell
stack — to je najbolje potrošenih 10-100$ u tvom marketinškom obrazovanju),
i snimiš u `_captures/`. Kako to točno raditi → `00-metodologija/kako-funnel-hackati.md`.

---

## 📄 Sve u jednom dokumentu

Ako hoćeš samo čitati i Ctrl+F kroz cijeli swipe:
**[`SVE-U-JEDNOM.md`](SVE-U-JEDNOM.md)** — svih 31 dokumenata spojenih u jedan fajl (~5.000 linija).

Pojedinačne dokumente ispod koristi kad radiš na konkretnom klijentu.

---

## Struktura foldera

```
swipe-file/
├── 00-metodologija/
│   ├── kako-funnel-hackati.md       # Proces: kako sam skidaš tuđi funnel
│   ├── anatomija-funnela.md         # 9 tipova funnela + kad koji
│   └── brojke-i-benchmarks.md       # Konverzije, cijene, AOV, ad spend
├── 01-russell-brunson/              # Otac funnela. ClickFunnels.
├── 02-alex-hormozi/                 # Ponuda + volumen. Acquisition.com.
├── 03-iman-gadzhi/                  # YouTube → VSL → low-ticket → workshop.
├── 04-ostali-giganti/               # Ovens, Walker, Cardone, Graziosi,
│                                    # Deiss, Porterfield, Tate, ostali
├── 05-eventi/
│   └── svi-eventi-2015-2026.md      # Master tablica svih eventova
├── 06-templates/                    # Skripte koje kopiraš i popuniš
│   ├── perfect-webinar-script.md
│   ├── vsl-skripta.md
│   ├── book-funnel-blueprint.md
│   ├── challenge-funnel-blueprint.md
│   ├── low-ticket-workshop-funnel.md
│   ├── high-ticket-application-funnel.md
│   ├── email-sekvence.md
│   └── headline-formule.md
├── 07-expert-launch/
│   └── sto-kradem-za-svoje-klijente.md   # Filter: što od ovoga radi na Balkanu
└── IZVORI.md                        # Svi izvori s URL-ovima
```

---

## Kako koristiti — 3 scenarija

### 1. Gradiš funnel klijentu i ne znaš koji tip
→ `00-metodologija/anatomija-funnela.md` (odabir tipa)
→ `06-templates/<tip>.md` (blueprint)
→ `07-expert-launch/sto-kradem-za-svoje-klijente.md` (filter za Balkan)

### 2. Trebaš copy i blokirao si se
→ `06-templates/headline-formule.md`
→ `01-russell-brunson/swipe-copy.md` (najgušći copy patterni)
→ `02-alex-hormozi/swipe-copy.md` (offer stack i garancije)

### 3. Hoćeš vidjeti kako netko konkretan to radi
→ Otvoriš njegov folder → `funnels.md` → nađeš URL → sam prođeš funnel

---

## Brzi index — 20 najvrjednijih funnela u ovom swipeu

| # | Funnel | Tko | Tip | Front-end | Zašto ga kradeš |
|---|--------|-----|-----|-----------|-----------------|
| 1 | DotCom Secrets book funnel | Brunson | Free+Shipping | $9.95 shipping | Etalon knjiga-kao-lead-magnet |
| 2 | Expert Secrets book funnel | Brunson | Free+Shipping | $9.95 | Isti skelet, drugi hook |
| 3 | Traffic Secrets book funnel | Brunson | Free+Shipping | $9.95 | Value stack $509.95 za "besplatno" |
| 4 | One Funnel Away Challenge | Brunson | Challenge | $100 | Najkopiraniji challenge funnel ikad |
| 5 | Your First Funnel Challenge | Brunson | Challenge | $0–147 | Free challenge → SaaS trial |
| 6 | Perfect Webinar | Brunson | Webinar | $997–1997 | Skripta koju svi koriste |
| 7 | 30 Days Summit | Brunson | Summit | $0 → $100 | Summit kao list-build |
| 8 | 2 Comma Club X | Brunson | High-ticket | $25k/god | Backend maksimizacija |
| 9 | $100M Offers book funnel | Hormozi | Free/knjiga | $0–20 | Knjiga kao filter za $5k workshop |
| 10 | $100M Money Models launch | Hormozi | Event launch | $5,998 bundle | "Doniraj 200 knjiga" viral loop |
| 11 | Acquisition.com Scaling Workshop | Hormozi | Application | $5,000 | Kvalifikacija prije naplate |
| 12 | Gym Launch licenciranje | Hormozi | High-ticket | $6k–16k | Kako pretvoriti DFY u licencu |
| 13 | Skool free community | Hormozi | Community | $0 | Free → paid continuity |
| 14 | Gadzhi YouTube → VSL | Gadzhi | VSL | $0 | Organski YouTube kao jedini traffic |
| 15 | Gadzhi $75 → $45 downsell → $2k workshop | Gadzhi | Low→High | $75 | Bihevioralni filter, ne prihod |
| 16 | Agency Navigator webinar | Gadzhi | Webinar | $1,499 | Webinar → aplikacija |
| 17 | Consulting Accelerator webinar | Ovens | Webinar | $1,999 | 2.5h webinar, priča prije taktike |
| 18 | Product Launch Formula | Walker | Launch | $2k | 4 videa, PSP struktura |
| 19 | KBB / Knowledge Broker Blueprint | Graziosi+Robbins | Launch | $1,997 | 250k ljudi na live castu |
| 20 | Hustlers University / TRW | Tate | Continuity | $49/mj | Affiliate armija kao traffic |

---

## Jedna rečenica koju trebaš zapamtiti iz cijelog swipea

Nijedan od ovih ljudi ne zarađuje na front-endu.
**Front-end kupuje kupca. Backend kupuje kuću.**

Brunson daje knjigu za cijenu poštarine da bi ti prodao ClickFunnels na 297$/mj.
Hormozi daje knjigu besplatno da bi našao firmu u koju može uložiti.
Gadzhi naplaćuje 75$ ne zbog 75$, nego da vidi tko je spreman izvaditi karticu —
pa tom čovjeku prodaje workshop od 2.000$.

Ako gradiš funnel i računica ti se mora zatvoriti na prvoj prodaji — nemaš funnel,
imaš webshop.
