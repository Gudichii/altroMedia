---
name: lp-structure
description: Radi direct response landing (call-booking) stranicu za CC DELIVERY klijenta iz Offer Blueprinta, Brand Booka i Internal Doca. Radi u DVIJE FAZE — prvo izbaci LP Blueprint (dijagram strukture + 3 varijante naslova + tablicu proof slotova) koji Karlo odobrava, i tek nakon odobrenja piše copy i gradi stranicu. Pokreni kad Karlo kaže "napravi landing za X", "treba mi stranica za [klijent]", "napravi lp strukturu", "sales page za [klijent]", "gotov je offer doc, radi stranicu" ili slično. Skill NE izmišlja ponudu — ako Offer Blueprint ne postoji ili nije POTVRĐEN, staje i traži ga.
---

# LP Structure — direct response call-booking stranica

## Svrha

Ovo je zadnja karika u CC DELIVERY lancu prije nego se pusti promet. Stranica stoji u
funnelu `FB cold → landing → forma → poziv`.

**Najvažnija stvar koju treba razumjeti: ova stranica ne prodaje uslugu — prodaje POZIV.**
Naša ponuda je 4.000-16.000 €. Stranica koja pokuša prodati uslugu na hladnom prometu
odgovori na sve i time ubije razlog za poziv.

Znanje na kojem skill stoji izvedeno je iz analize 5 stvarnih stranica koje rade na
hladan promet, ne iz teorije — `references/baza-znanja.md`.

---

## DVIJE FAZE — i zašto

Skill **nikad** ne ide od Offer Blueprinta ravno do gotove stranice.

| | FAZA 1 | FAZA 2 |
|---|---|---|
| Output | **LP Blueprint** — dijagram strukture, 3 varijante H1, tablica proof slotova, popis onoga što fali | Copy + gotova stranica |
| Traje | 10-20 min | 45-90 min |
| Završava | **STOP — čeka Karlovo odobrenje** | QA checklist |

**Razlog za dvije faze:** klijent gotovo nikad nema sve dokaze u trenutku izrade. Ako
skill odmah napiše cijeli copy, a struktura je kriva ili dokazni slot prazan, baci se i
copy. LP Blueprint je jeftina kontrolna točka — Karlo vidi kostur i čime se puni prije
nego se potroši sat vremena na pisanje.

**Faza 2 se NE pokreće dok Karlo eksplicitno ne odobri LP Blueprint.**

---

## Preduvjet — Offer Blueprint mora postojati i biti POTVRĐEN

Ovaj skill ne izmišlja ponudu, avatar ni mehanizam. Sve to dolazi iz Offer Blueprinta,
koji nastaje iz Internal Doca + ispunjenog upitnika + transkripta poziva za
strukturiranje ponude.

**Ako Offer Blueprint ne postoji ili mu je status DRAFT — skill staje i kaže Karlu što
fali.** Ne radi se stranica na pretpostavkama; to je najskuplja greška u procesu jer se
promet pusti na krivu poruku.

---

## FAZA 1

### Korak 1 — Pronađi izvore

Klijentski folderi žive u Google Driveu pod `CC DELIVERY` → `Edukatori` ili `Klinike` →
`[Naziv klijenta]`. Koristi `mcp__Google_Drive__search_files` (fuzzy match na ime —
imena foldera nisu uvijek identična onome kako Karlo izgovori klijenta).

Treba ti:

| Izvor | Obavezno? | Što iz njega uzimaš |
|---|---|---|
| **Offer Blueprint** (`[Klijent] - Offer Blueprint - [Ponuda]`) | **DA — GATE** | sve o ponudi, avataru, mehanizmu, dokazu, formi |
| **Internal Doc** | da | bio klijenta, godine, brendovi, web |
| **Brand Book** | da | boje, fontovi, ton, copy formula |
| **Slike klijenta** | ne | blok autoriteta, hero |
| **Testimonijali / screenshotovi** | ne | proof slotovi |

Ako ne možeš jednoznačno odrediti folder ili ima više Offer Blueprinta — pitaj Karla
koji je PRIMARY, ne nagađaj.

### Korak 2 — GATE provjere

Prođi svih 7 provjera iz `references/lp-blueprint-template.md`, sekcija 0.

Najvažnije tri, jer najčešće padaju:

- **Točno JEDNA ponuda je PRIMARY.** Dvije publike = dvije stranice, dva Blueprinta.
- **Mehanizam ima IME.** Ako je mehanizam pridjev ("holistički pristup",
  "individualiziran program") — to nije mehanizam. Prijavi kao fail i traži od Karla da
  se imenuje, jer je mehanizam najjača diferencijacija na cijeloj stranici.
- **Proof Bank ima barem jedan red "Smijemo tvrditi = DA".** Nijedna brojka ne ide na
  stranicu ako nije u Proof Banku i odobrena.

Ako provjera padne — stani, ispiši što točno fali i gdje se to popunjava. Ne popunjavaj sam.

### Korak 3 — Inventar dokaza i proof slotovi

Ovo je korak koji najviše određuje kvalitetu stranice. Pročitaj
`references/dokazi-i-faze.md` i popuni tablicu od 6 slotova (P1-P6).

**Za svaki slot označen NE:** upiši supstitut koji ide na v0 (tablica supstituta) i
konkretno pitanje za klijenta.

**Pravilo koje se ne preskače:** kad klijent kaže "nemam testimonijale", to je gotovo
uvijek neistina — ima ih u WhatsAppu i DM-ovima. Native screenshot razgovora je **rang 1
dokaz**, jači od formatiranog testimonijala, i besplatan je. Uvijek postavi pitanje B1
prije nego slot označiš kao nepopunjiv.

**VSL:** ako ga nema, slot se **ne ostavlja prazan** — zamjenjuje se tekstualnim herojem
(blok B5b: blame removal → false solutions → cost of inaction). VSL se snima tek u v3,
po pobjedničkom kutu iz ads testa, nikad prije.

### Korak 4 — Napiši LP Blueprint i STANI

Popuni `references/lp-blueprint-template.md`. Uploadaj kao Google Doc u folder klijenta
pod imenom `[Klijent] - LP Blueprint - [Ponuda]`.

Onda **ispiši Karlu sažetak u chatu** — ne tjeraj ga da otvara doc da bi znao o čemu
odlučuje:

1. koliko je od 6 proof slotova popunjeno
2. tri varijante H1 s preporukom
3. što fali i koja poruka ide klijentu
4. konkretna pitanja na koja treba odgovoriti

**Zatim stani.** Ne piši copy. Ne gradi stranicu.

---

## FAZA 2 — tek nakon odobrenja

### Korak 5 — Copy

Piši blok po blok redom iz `references/blokovi.md`. Redoslijed blokova se **ne mijenja** —
svaki blok otvara pitanje na koje sljedeći odgovara.

Tri pravila koja se najčešće krše, pa ih provjeri dok pišeš:

1. **CTA tekst je doslovno identičan na svim 4-6 mjesta.** Različite formulacije čitaju
   se kao različite radnje i troše odluku. Ispod svakog gumba stoji qualifier linija.
2. **Cijena NE ide na stranicu — nikad — osim ako je ponuda ispod 200 EUR.** Value stack
   (što se radi na programu) IDE, i odmah ispod njega ide CTA. Anchor cijene, prekrižene
   cijene i postoci popusta ne idu.
3. **FAQ odgovara na prigovore na REZERVIRANJE POZIVA, ne na kupnju.** Prigovori na
   kupnju (cijena, "moram pitati partnera") rješavaju se na pozivu, ne na stranici.

Ton, boje i fontovi dolaze iz Brand Booka. Piši u 2. licu jednine, kao pismo.

### Korak 6 — Stranica

Isporuči oboje:

- **Copy dokument** u Drive (`[Klijent] - LP Copy - [Ponuda]`) — blok po blok, spreman za
  paste u GHL/Webflow
- **Samostalna HTML stranica** — jedan fajl, inline CSS, bez vanjskih ovisnosti, boje i
  fontovi iz Brand Booka, mobile-first (85%+ prometa dolazi s IG-a)

### Korak 7 — QA

Prođi `references/qa-checklist.md` (30 provjera) i ispiši rezultat. Svaki NE mora imati
obrazloženje ili se popravlja prije nego stranica ide live.

---

## Verzioniranje — stranica se ne "završava"

Stranica ide live na **v0** i puni se dokaznim slojem kako funnel proizvodi materijal.
Struktura i copy okosnica se pritom **ne diraju** — mijenja se samo dokazni sloj.

| Verzija | Kad | Što se dodaje |
|---|---|---|
| v0 | dan 1-3 | tekstualna stranica, brojke, posuđeni autoritet — **80% konverzijskog potencijala** |
| v1 | tjedan 1-2 | native screenshotovi, embed postova — nula produkcije |
| v2 | tjedan 2-4 | testimonijali i case study iz onoga što je funnel proizveo + **H1 se mijenja u pobjednički kut iz adsa** |
| v3 | mjesec 1-2 | video testimonijali, pa VSL po pobjedničkom kutu |

**Nikad se ne čeka:** puni brand book, profesionalna fotosesija, redizajn logotipa,
finalni video, "kad klijent bude imao vremena".

---

## Mjesto u delivery lancu

```
Klijent plaća → Onboarding call → Google Drive folder
                                   ↓
        client-internal-doc → izrada-upitnika → brand-book
                                   ↓
                    Call za strukturiranje ponude
                                   ↓
                    OFFER BLUEPRINT (status POTVRĐENO)
                          ↓                    ↓
                   ad-creation           lp-structure  ← ovaj skill
                                              ↓
                                    FAZA 1: LP Blueprint
                                              ↓
                                     [Karlo odobrava]
                                              ↓
                                    FAZA 2: copy + stranica
```

---

## Reference

| Fajl | Kada ga čitaš |
|---|---|
| `references/blokovi.md` | Faza 2, dok pišeš copy — katalog svih 20 blokova, copy formule, anti-patterns |
| `references/dokazi-i-faze.md` | Faza 1, korak 3 — rangovi dokaza, supstituti, pitanja klijentu, faze v0-v3 |
| `references/lp-blueprint-template.md` | Faza 1, korak 4 — predložak outputa |
| `references/qa-checklist.md` | Faza 2, korak 7 |
| `references/baza-znanja.md` | kad trebaš izvor ili primjer iza nekog pravila |
