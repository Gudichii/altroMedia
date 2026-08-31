---
name: lp-structure
description: Radi direct response landing (call-booking) stranicu za CC DELIVERY klijenta iz Offer Blueprinta, Brand Booka i Internal Doca. Radi u DVIJE FAZE — prvo izbaci LP Blueprint (dijagram strukture + 3 varijante naslova + tablicu proof slotova + poruku za klijenta) koji Karlo odobrava, i tek nakon odobrenja piše copy i gradi stranicu. Pokreni kad Karlo kaže "napravi landing za X", "treba mi stranica za [klijent]", "napravi lp strukturu", "sales page za [klijent]", "gotov je offer doc, radi stranicu" ili slično. Skill NE izmišlja ponudu — ako Offer Blueprint ne postoji ili nije POTVRĐEN, staje i traži ga.
---

# LP STRUCTURE — direct response call-booking stranica

Ovaj dokument je i **proces** (što skill radi, kojim redom) i **baza znanja** (zašto se
radi tako). Znanje je izvedeno iz analize 5 stvarnih stranica koje rade na hladan
promet, ne iz teorije — svaki princip ima izvor.

---

# DIO I — PROCES

## 0. Svrha i mjesto u lancu

Ovo je zadnja karika u CC DELIVERY lancu prije nego se pusti promet. Stranica stoji u
funnelu `FB cold → landing → forma → poziv`.

**Najvažnija stvar koju treba razumjeti: ova stranica ne prodaje uslugu — prodaje POZIV.**
Naša ponuda je 4.000-16.000 €. Stranica koja pokuša prodati uslugu na hladnom prometu
odgovori na sve i time ubije razlog za poziv.

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

## 1. Dvije faze — i zašto

Skill **nikad** ne ide od Offer Blueprinta ravno do gotove stranice.

| | FAZA 1 | FAZA 2 |
|---|---|---|
| Output | **LP Blueprint** — dijagram strukture, 3 varijante H1, tablica proof slotova, popis onoga što fali | Copy + gotova stranica |
| Traje | 10-20 min | 45-90 min |
| Završava | **STOP — čeka Karlovo odobrenje** | QA checklist |

**Razlog:** klijent gotovo nikad nema sve dokaze u trenutku izrade. Ako skill odmah
napiše cijeli copy, a struktura je kriva ili je dokazni slot prazan, baci se i copy.
LP Blueprint je jeftina kontrolna točka — Karlo vidi kostur i čime se puni prije nego
se potroši sat vremena na pisanje.

**Faza 2 se NE pokreće dok Karlo eksplicitno ne odobri LP Blueprint.**

## 2. Preduvjet — Offer Blueprint mora biti POTVRĐEN

Skill ne izmišlja ponudu, avatar ni mehanizam. Sve dolazi iz Offer Blueprinta, koji
nastaje iz Internal Doca + ispunjenog upitnika + transkripta poziva za strukturiranje
ponude.

**Ako Offer Blueprint ne postoji ili mu je status DRAFT — skill staje i kaže Karlu što
fali.** Ne radi se stranica na pretpostavkama; to je najskuplja greška u procesu jer se
promet pusti na krivu poruku.

---

## 3. FAZA 1

### Korak 1 — Pronađi izvore

Klijentski folderi žive u Google Driveu pod `CC DELIVERY` → `Edukatori` ili `Klinike` →
`[Naziv klijenta]`. Koristi `mcp__Google_Drive__search_files` (fuzzy match na ime —
imena foldera nisu uvijek identična onome kako Karlo izgovori klijenta, npr. folder
"Ines - EUOO" za klijenticu Ines).

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

| # | Provjera | Zašto |
|---|---|---|
| 1 | Offer Blueprint postoji i status je POTVRĐENO | bez toga se radi na pretpostavkama |
| 2 | Točno JEDNA ponuda je PRIMARY | dvije publike = dvije stranice, dva Blueprinta |
| 3 | **Mehanizam ima IME** (nije pridjev) | najjača diferencijacija na cijeloj stranici |
| 4 | Proof Bank ima barem jedan red "Smijemo tvrditi = DA" | nijedna brojka ne ide na stranicu bez odobrenja |
| 5 | Sekcija 9 popunjena — ime poziva, trajanje, što odnosi | to je jedina stvar koju stranica prodaje |
| 6 | Sekcija 10 popunjena — polja forme | forma je konverzija |
| 7 | Pravni podaci klijenta postoje | Meta odbija stranice bez disclaimera |

Provjera 3 najčešće pada. Ako je mehanizam pridjev ("holistički pristup",
"individualiziran program") — to nije mehanizam. Prijavi kao fail i traži da se imenuje.

**Ako provjera padne — stani, ispiši što točno fali i gdje se popunjava. Ne popunjavaj sam.**

### Korak 3 — Inventar dokaza i proof slotovi

Ovo je korak koji najviše određuje kvalitetu stranice. Popuni tablicu od 6 slotova
(detalji u DIJELU II, sekcija 7).

**Za svaki slot označen NE:** upiši supstitut koji ide na v0 i konkretno pitanje za klijenta.

**Pravilo koje se ne preskače:** kad klijent kaže "nemam testimonijale", to je gotovo
uvijek neistina — ima ih u WhatsAppu i DM-ovima. Native screenshot razgovora je **rang 1
dokaz**, jači od formatiranog testimonijala, i besplatan je. Uvijek postavi pitanje B1
prije nego slot označiš kao nepopunjiv.

**VSL:** ako ga nema, slot se **ne ostavlja prazan** — zamjenjuje se tekstualnim herojem
(blok B5b). VSL se snima tek u v3, po pobjedničkom kutu iz ads testa, nikad prije.

### Korak 4 — Napiši LP Blueprint i STANI

Popuni predložak (sekcija 4 ispod). Uploadaj kao Google Doc u folder klijenta pod imenom
`[Klijent] - LP Blueprint - [Ponuda]`.

Onda **ispiši Karlu sažetak u chatu** — ne tjeraj ga da otvara doc da bi znao o čemu odlučuje:

1. koliko je od 6 proof slotova popunjeno
2. tri varijante H1 s preporukom
3. što fali i koja poruka ide klijentu
4. konkretna pitanja na koja treba odgovoriti

**Zatim stani. Ne piši copy. Ne gradi stranicu.**

---

## 4. PREDLOŽAK LP BLUEPRINTA

> # LP BLUEPRINT — [KLIJENT] / [NAZIV PONUDE]
>
> **STATUS: ČEKA ODOBRENJE** → nakon odobrenja mijenja se u ODOBRENO [datum].
>
> ## 0. Izvori i GATE
>
> | Izvor | Pronađen? | Napomena |
> |---|---|---|
> | Offer Blueprint (POTVRĐENO) | | |
> | Internal Doc | | |
> | Brand Book | | |
> | Slike klijenta | | |
> | Testimonijali / screenshotovi | | |
>
> GATE provjere 1-7: prolaz / fail + što fali
>
> ## 1. Odluka arhetipa i opsega
>
> | | |
> |---|---|
> | Arhetip | C — call booking |
> | Cilj konverzije | ispunjena forma |
> | Ciljana duljina | 10-15 ekrana |
> | Razina svjesnosti publike | *(Offer BP sek. 2)* |
> | Sofisticiranost tržišta (1-5) | → implikacija za copy: |
> | Cijena na stranici? | NE *(osim ako je ponuda ispod 200 EUR)* |
> | Value stack na stranici? | DA — što se radi na programu, bez cijene |
>
> ## 2. DIJAGRAM STRUKTURE
>
> | # | Blok | Što ide unutra | Izvor | Status |
> |---|---|---|---|---|
> | B1 | Eyebrow | | Offer BP sek. 13 | v0 |
> | B2 | H1 | *(3 varijante — sekcija 3)* | sek. 5 | v0 |
> | B3 | Podnaslov | | sek. 2 | v0 |
> | B4 | CTA #1 | | sek. 12 | v0 |
> | B5 | VSL **ili** tekstualni hero | | sek. 3 + 5 | |
> | B6 | Dokaz — rani | | sek. 8 | |
> | B7 | UMP → UMS | | sek. 3 + 4 | v0 |
> | B8 | Autoritet | | sek. 8 + Internal Doc | v0 |
> | B9 | CTA #2 | isti tekst | | v0 |
> | B10 | Value stack (bez cijene) | | sek. 6, samo Core | v0 |
> | B11 | Plan u koracima | | sek. 6 + 9 | v0 |
> | B12 | Kvalifikacija / diskvalifikacija | | sek. 2 | v0 |
> | B13 | CTA #3 — odmah ispod stacka | isti tekst | | v0 |
> | B14 | Dokaz — kasni | | sek. 8 | |
> | B15 | Ponuda poziva | | sek. 9 | v0 |
> | B16 | Garancija na poziv | | sek. 9 | v0 |
> | B17 | FAQ (10+) | | sek. 11, lijeva tablica | v0 |
> | B18 | Forma + 3 koraka | | sek. 10 | v0 |
> | B19 | P.S. | | sek. 5 | v0 |
> | B20 | Pravni footer | | pravni podaci | v0 |
>
> ## 3. PREDLOŽAK NASLOVA — 3 varijante H1
>
> | # | Formula | H1 | Zašto ova |
> |---|---|---|---|
> | A1 | A — trostruka negacija | | |
> | A2 | A — druga identifikacija | | |
> | A3 | B — ishod + rok | | |
>
> **Preporuka: ____**
> **Podnaslov uz preporučeni H1:** …
> **Eyebrow uz preporučeni H1:** …
>
> *Provjera: koristi li H1 iste riječi kao obećanje iz oglasa?*
>
> ## 4. MEHANIZAM — provjera
>
> | | |
> |---|---|
> | Ime mehanizma | |
> | UMP u jednoj rečenici | "Nije [uobičajena krivnja]. Pravi razlog je [mehanizam] — i zato [uobičajeno rješenje] ne radi." |
> | UMS u dvije rečenice | |
> | Ima ime? / Objašnjiv laiku? / Nešto opipljivo iza? | DA / NE |
>
> ## 5. TABLICA PROOF SLOTOVA
>
> | Slot | Blok | Idealno | Imamo? | Supstitut za v0 | Puni se u |
> |---|---|---|---|---|---|
> | P1 | B6 rani dokaz | 3-4 native screenshota | | | v0 → v1 |
> | P2 | B7 mehanizam | mjerljivi dokaz | | | v0 |
> | P3 | B8 autoritet | brojke + fotka | | | v0 |
> | P4 | B10 stack | show-the-output | | | v0 |
> | P5 | B14 kasni dokaz | 3-5 testimonijala | | | v0 → v2 |
> | P6 | B5 VSL | VSL po pobj. kutu | | tekstualni hero B5b | v3 |
>
> **Stranica ide live na v0 s ____ od 6 popunjenih slotova.**
>
> ## 6. CTA
>
> | | |
> |---|---|
> | Tekst gumba *(doslovno isti 4-6 puta)* | |
> | Qualifier ispod gumba | |
> | Odredište | forma na stranici / booking sustav |
>
> ## 7. FORMA
>
> Kontakt polja + najviše 3 kvalifikacijska + 3 koraka ispod forme.
>
> ## 8. ŠTO FALI — copy-paste poruka za klijenta
>
> ## 9. ODLUKE KOJE ČEKAJU KARLA
>
> ## 10. Napomene i rizici

---

## 5. FAZA 2 — tek nakon odobrenja

### Korak 5 — Copy

Piši blok po blok redom iz DIJELA II, sekcija 1. **Redoslijed blokova se ne mijenja** —
svaki blok otvara pitanje na koje sljedeći odgovara.

Tri pravila koja se najčešće krše:

1. **CTA tekst je doslovno identičan na svim 4-6 mjesta.** Ispod svakog gumba stoji
   qualifier linija.
2. **Cijena NE ide na stranicu — nikad — osim ako je ponuda ispod 200 EUR.** Value stack
   IDE, i odmah ispod njega ide CTA.
3. **FAQ odgovara na prigovore na REZERVIRANJE POZIVA, ne na kupnju.**

Ton, boje i fontovi iz Brand Booka. Piši u 2. licu jednine, kao pismo.

### Korak 6 — Stranica

Isporuči oboje:

- **Copy dokument** u Drive (`[Klijent] - LP Copy - [Ponuda]`) — blok po blok, spreman za
  paste u GHL/Webflow
- **Samostalna HTML stranica** — jedan fajl, inline CSS, bez vanjskih ovisnosti, boje i
  fontovi iz Brand Booka, mobile-first (85%+ prometa dolazi s IG-a)

### Korak 7 — QA

Prođi checklist iz DIJELA II, sekcija 10 (30 provjera) i ispiši rezultat. Svaki NE mora
imati obrazloženje ili se popravlja prije launcha.

---
---

# DIO II — BAZA ZNANJA

*Izvedeno iz analize 5 stvarnih stranica:*

| # | Stranica | Tip ponude | Cijena | Arhetip |
|---|---|---|---|---|
| 1 | lowticketbook.com (Hernan Vazquez) | fizička knjiga, free + shipping | $9.95 s/h | Low-ticket direct sale |
| 2 | contentcreator.com (Anthony Gallo) | snimljeni tečaj | $98 (anchor $298) | Mid-ticket direct sale |
| 3 | istokpavlovic.com — Masterbox 2.0 | tečaj, 12 modula / 150 lekcija | 365 € | Mid-ticket, regionalno |
| 4 | Fempire (Istok Pavlović) | 3-mj. group program s live dijelom | 600 € / 200 € mj. | High-touch, letter-style |
| 5 | signali.net (Signali Strasti) | besplatan trening (VSL) | 0 € | VSL bridge |

**Ključna napomena:** nijedna od ovih 5 nije call-booking stranica. Svi elementi se
prenose 1:1, **osim ponude i cijene** — kod nas cijena ide na poziv, a stranica prodaje
poziv.

---

## 1. ANATOMIJA STRANICE — 7 zona, 20 blokova

Redoslijed je zajednički nazivnik sve 5 stranica. Blok se smije **izostaviti** (ako nema
inputa), ali se ne smije **premjestiti**.

### ZONA 1 — HERO

#### B1. Eyebrow / kontekst label
Kratka linija iznad naslova koja daje kontekst ili razlog zašto si baš sad tu.
- `FREE BOOK: LOW TICKET PROFITS`
- `💞 Uspešno si otključala BESPLATNI trening 💞` ← potvrđuje mikro-obavezu koju je
  posjetitelj upravo napravio (kliknuo oglas), umjesto da ga baci u prazno

**Pravilo:** ako dolazi s oglasa koji je nešto obećao, eyebrow mora **potvrditi to
obećanje istim riječima**. Nedosljednost oglas→stranica je najskuplji leak u funnelu.

*Izvor: Offer Blueprint sek. 13 (kut oglasa koji vodi na ovu stranicu)*

#### B2. H1 — glavno obećanje
Najvažnijih 10 riječi na stranici.

**Formula A — "How to" s trostrukom negacijom (najjača, default):**
> `Kako [relatable identitet] [postižu željeni ishod] – Bez [žrtve 1], [žrtve 2] I [žrtve 3] – Uz [nešto o čemu niko ne priča]`
>
> *"Kako Prosečne Žene Na Balkanu Uživo Privlače Pažnju Najkvalitetnijih Muškaraca – Bez
> Razgolićavanja, Aplikacija I Glume – Uz Nešto O Čemu Niko Ne Priča"*

Zašto radi: `Prosečne` = identifikacija (nisi poseban slučaj, ovo je za tebe) · `Uživo` =
specifičnost mehanizma · `Bez X, Y, Z` = unaprijed ubija tri najveća straha · `Nešto o
čemu niko ne priča` = curiosity gap koji tjera na scroll.

**Formula B — ishod + rok:** `[Postigni konkretan ishod] u [kratkom roku]`
> *"Master AI Filmmaking In 2 Days"* · *"How To Turn Cheap Digital Products Into
> Customer-Getting Machines In 7 Days Or Less!"*

**Formula C — kategorija + recentnost:** `Kompletan kurs digitalnog marketinga za 2026`
**ZABRANJENA za nas** — radi samo ako je ime iznad naslova već autoritet
(`ISTOK PAVLOVIĆ`). Naši klijenti nemaju prepoznatljivost na cold trafficu.

**Zabranjeno u H1:** ime programa, "Pridruži se...", "Dobrodošli", naziv usluge. To je
product-aware copy, a FB cold traffic je *nesvjestan* ili *svjestan problema*.

*Izvor: Offer Blueprint sek. 5 (obećanje) + sek. 2 (avatar, njegove riječi)*

#### B3. Podnaslov (deck)
1-2 rečenice: **za koga je** + **što točno dobiva** + **jedan removal prigovora**.
- *"The AI Creator Course is for anyone who wants to master AI tools (the easy way)..."*
  + `No Subscriptions required.` ← prigovor ubijen već u heru

*Izvor: sek. 2 + sek. 11 (lijeva tablica)*

#### B4. CTA #1 + qualifier
Prvi od 4-6 CTA-ova. Tekst gumba **doslovno identičan** na svim mjestima. Ispod gumba
uvijek qualifier linija (trajanje, uvjet, "bez obveze"). Nikad goli gumb.

---

### ZONA 2 — VSL ili tekstualna zamjena

#### B5a. VSL slot *(ako postoji)*
**VSL se snima TEK nakon što ads test pokaže pobjednički kut** (v3). Prije toga je ovo
prazan slot.

#### B5b. Tekstualni hero *(default kad nema VSL-a)*
Kad VSL-a nema, slot se **ne ostavlja prazan** — zamjenjuje se dužim tekstualnim blokom
koji nosi isti teret. Tri stvari, tim redom:

**1. Blame removal** — jedna rečenica, ogromna težina
> **"Problem nikada nije bio u tebi."** (signali.net)

Skida krivnju s posjetitelja i time ga otvara da prizna problem. Ekvivalenti:
- *"Most people teach ads like it's still 2010."* — krivnja na tržište/edukatore
- *"Ljudi se ne rađaju zanimljivi, to se uči."* — krivnja na mit
- *"Dizajneri nisu 'rođeni sa smislom za lepo'. To je samo niz pravila za koja ljudi ni
  ne znaju da postoje."*

**Pravilo:** krivnja uvijek ide na sustav, mit ili lošu informaciju — **nikad na
posjetitelja i nikad na neimenovanog "njih".**

**2. False solutions** — doslovno nabrajanje savjeta koje je avatar već čuo i odbacio.
Ovo je dokaz da ga razumiješ.
- *"Bez glupih saveta tipa 'budi fina', 'samo imaj samopouzdanja' ili 'čekaj pravog, doći će'..."*
- *"Forget the fluff. This isn't another 'guru' book filled with recycled ideas."*
- *"Prestanite da snimate krindž scenarije koje vam piše ChatGPT"*

**Najlakši blok za napisati iz upitnika (Q23) i najčešće preskočen.**

**3. Cost of inaction** — konkretno, ne prijeteće
> *"The world of advertising is changing and if you don't embrace these new trends,
> you'll be left behind wondering why it always feels like you're lighting your marketing
> budget on fire."*

*Izvor: sek. 3 (UMP) + sek. 2 (Q23) + sek. 5*

---

### ZONA 3 — DOKAZ (rani blok)

#### B6. Prvi dokazni blok
Ide **odmah nakon herja** — dok je skepsa najveća. Dokaz se na stranici pojavljuje
**najmanje dva puta**: rani blok i kasni blok (B14).

Sadržaj bira hijerarhija dokaza (sekcija 7).

*Izvor: sek. 8 (Proof Bank), samo redovi "Smijemo tvrditi = DA"*
**Nijedna brojka ne smije biti na stranici ako nije u Proof Banku.**

---

### ZONA 4 — MEHANIZAM

#### B7. UMP → UMS
Par, tim redom. Prvo zašto dosad nije radilo, pa zašto ovo radi.

> *"The secret to making ads work in 2025 is NOT fancy videos or complex funnels… It's
> low-ticket offers that cover your ad spend and build an unstoppable customer list from
> Day 1."*

**Mehanizam mora biti IMENOVAN** da bi bio zapamćen i da bi se mogao braniti od "svi to nude":
- `UAVE — tajni metod Istoka Pavlovića za savršenu reklamu`
- `metod jedinstvenog ugla i vizuelnog dokaza`
- `Bilbord test` · `The "Ugly Ads" method` · `The 7 Day Framework`

**Test kvalitete:** ima ime · objašnjiv laiku u dvije rečenice · iza njega stoji nešto
opipljivo (broj, protokol, godine, mjerenje). Ako je mehanizam pridjev ("holistički
pristup", "individualiziran program") — nije mehanizam, i skill to prijavljuje kao GATE fail.

*Izvor: sek. 3 (UMP) → sek. 4 (UMS, ime mehanizma)*

#### B8. Autoritet — tko si ti da to tvrdiš
Prvo lice, pozicioniranje protiv kategorije, brojke.

> *"Hi, I'm Hernan Vazquez — and **unlike most 'ad experts' out there**, I've been running
> ads every single day since 2012 — **not just talking about them.** I've managed over
> $100M in ad spend, generated over $250M in sales, and built campaigns for Grant Cardone,
> Frank Kern, Tony Robbins, Russell Brunson… Lionel Messi."*

Tri poluge autoriteta, po padajućoj snazi:
1. **Vlastite brojke** — `$275,000 potrošeno na testiranje` · `160,000 studenata` ·
   `5000+ kompanija` · `140.000 pratilaca za dva meseca`
2. **Posuđeni autoritet** — imena brendova i ljudi s kojima si radio, gostujući eksperti
3. **Vremenska dubina** — `15 godina` · `od 2012 svaki dan`

**Story arc koji se ponavlja u 3 od 5:** skeptik → uložio vrijeme/novac u testiranje →
pogriješio → "cracked the code" → sad ovo. Ovaj arc čini autoritet probavljivim umjesto
hvalisavim.

*Izvor: sek. 8 + Internal Doc*

#### B9. CTA #2 + qualifier

---

### ZONA 5 — VALUE STACK

#### B10. Što se radi na programu / edukaciji

**PRAVILO (Karlova odluka — odstupa od izvorne analize, vidi sekciju 11):**
> Ako je konverzija konzultacijski poziv, stranica **odmah govori o tome što se radi na
> edukaciji X** — value stack za offer IDE na stranicu.
>
> **CIJENA NE IDE NA STRANICU — nikad — osim ako je ispod 200 EUR.**

Znači: **stack DA, cijena NE.** "Što dobivaš" nije isto što i "koliko košta". Anchor
cijene, prekrižene cijene i postoci popusta također NE idu.

Format: imenovana komponenta + implicirana korist + curiosity gap.
Nikad "Modul 3: Napredne tehnike".

Kako to izgleda kad se radi dobro (curiosity bullets):
> `WHAT'S ACTUALLY INSIDE THIS BOOK (NO FLUFF. NO FILLER.)`
> · The 7 Day Framework for launching profitable low-ticket offers
> · The "Ugly Ads" method that crushes fancy creatives
> · How to turn $5 buyers into high-ticket clients

I kad se piše kao transformacija u glasu čitatelja, ne kao popis tema:
> *"Naučićete zašto je nešto lepo, a ne samo da blenete i kažete 'jao što je ovo lepo'."*

*Izvor: sek. 6 (stack) — samo komponente označene "Core"*

#### B11. Plan u koracima — put klijenta
Korak 1-6: što se konkretno događa nakon poziva. Svaki korak objašnjava **mehaniku** i
**usput ubija prigovor**:
> *"Bez brige, ne moraš da gledaš ako te to smara ili nemaš vremena, učićeš sa Zoomova
> ili nas pitaj na Whatsappu."*

Plan opisuje **put klijenta**, ne našu stavku iz ponude.

*Izvor: sek. 6 + sek. 9*

#### B12. Kvalifikacija / diskvalifikacija
`Ovo je za tebe ako:` … `Ovo NIJE za tebe ako:`

Diskvalifikacija diže percipiranu selektivnost i filtrira loše leadove. Smije biti i
provokacija: *"You do not care about SPEED!"*

*Izvor: sek. 2 + G13*

#### B13. CTA #3 + qualifier
**CTA ide ODMAH ispod value stacka.** Bez umetnutog bloka između.

---

### ZONA 6 — DOKAZ (kasni blok)

#### B14. Drugi dokazni blok
Naslov tipa `STILL NOT CONVINCED? SEE WHAT OTHERS ARE SAYING...` / `Još uvijek nisi
siguran? Pogledaj što kažu drugi.`

Ovdje ide i **show, don't tell** — dokaz outputa:
contentcreator ne opisuje kakve slike AI radi, nego pokaže 20+ galerija i doda
`koštalo me manje od 25 centi`. Masterbox ugrađuje IG postove s brojem lajkova.

**Self-referential dokaz — jak i besplatan:**
> *"So much of this page that you're viewing right now was created with AI."*
> *"Cela ova stranica koju sada gledate drži pažnju jer je primenjeno ovo znanje. Vidite?"*

Stranica sama sebi postaje dokaz. Uvijek dostupno, čak i klijentu bez ijednog dokaza.

---

### ZONA 7 — ZATVARANJE

#### B15. Ponuda POZIVA — ono što stranica zapravo prodaje
Poziv mora imati vlastitu vrijednost **neovisno o kupnji**, i opipljiv output.

Model:
> *"Zakazaćemo Zoom konsultacije. Tu ćemo da vidimo gde ste sada i šta treba da uradite...
> Napravićemo plan koji ćete dobiti kao **pisani dokument** i odatle krećemo dalje."*

Opipljiv output poziva (pisani dokument) — to je ono što se prodaje na stranici.

- **Loše:** "besplatne konzultacije" — nula vrijednosti, zvuči kao prodajni poziv
- **Dobro:** `[Ime] razgovor: dobiješ [konkretan uvid] i [prvi korak] — bez obzira radiš li s nama.`

*Izvor: sek. 9*

#### B16. Garancija na poziv
Nema kupnje pa nema garancije na uslugu — ali postoji ekvivalent.

Struktura preuzimanja rizika kakvu koriste direct-sale stranice:
**izjava sigurnosti → mjerilo (10x) → rok → mehanizam (jedan email) → "no questions asked".**

Naš ekvivalent: "nema prodaje pod pritiskom" · "traje točno 30 minuta" · "odlaziš s planom".

#### B17. FAQ — 10+ pitanja
**Kritično zapažanje: FAQ na ovim stranicama ne odgovara na pitanja o proizvodu, nego na
prigovore na samu konverzijsku radnju.**

lowticketbook (besplatna knjiga): *"Is there really no catch?" · "Do I need to buy
anything else?" · "Why are you giving this away for free?"*

**Prevedeno na nas:** Hoće li mi netko prodavati? · Koliko stvarno traje? · Je li stvarno
besplatno? · Je li ovo za mene ako [situacija]? · Što ako nemam [preduvjet]?

**Prigovori na kupnju (cijena, "moram pitati partnera", "nemam vremena") NE idu na
stranicu** — rješavaju se na pozivu.

*Izvor: sek. 11, samo lijeva tablica*

#### B18. Forma + 3 koraka nakon slanja
Kontakt polja + **najviše 3** kvalifikacijska. Svako dodatno polje reže broj leadova, ali
diže kvalitetu. Na hladnom startu idi na MANJE polja — treba ti volumen da naučiš tko
uopće dolazi.

Ispod forme 3 koraka "što se događa nakon slanja" — podiže dovršavanje forme.

*Izvor: sek. 10*

#### B19. P.S.
Zadnji blok teksta koji ljudi čitaju kad skrolaju.
> *"P.S. ✉ If you're tired of complex funnels, dead leads, and ad costs that burn your
> budget… This book will give you the proven roadmap. But remember — once this print run
> is gone, it's gone."*

Struktura: **ponovi bol → ponovi obećanje → ponovi rok/ograničenje → CTA.**

#### B20. Pravni footer
Sve tri američke stranice imaju identičan set i to nije ukras:
- **FB disclaimer:** *"This site is not a part of the Facebook website or Facebook Inc. …
  FACEBOOK is a trademark of FACEBOOK, Inc."*
- **Earnings/results disclaimer:** *"Please understand my results are not typical..."*
- Privacy Policy · Uvjeti korištenja · pravni subjekt, OIB, adresa, kontakt

**Ovo nam treba jer oglašavamo edukatore koji obećavaju poslovni/zdravstveni ishod. Meta
odbija stranice bez toga i to je čest razlog odbijenog oglasa.**

---

### Hitnost / oskudica — blok koji se najčešće izostavlja
Tri oblika, po padajućem poštenju: countdown timer na stvarnu akciju · ograničen
kapacitet · cjenovni prozor.

**Naše pravilo:** lažna hitnost na cold trafficu radi jednom i ubija povjerenje kod
publike koja te tek upoznaje. **Ako kapacitet nije stvaran → blok se izostavlja.** Kod
nas je kapacitet stvarno ograničen (broj klijenata mjesečno) i to se smije koristiti
doslovno.

---

## 2. COPY MEHANIKA — 12 pravila

**2.1 CTA se ponavlja 4-7 puta i tekst je DOSLOVNO isti.**
lowticketbook: `CLAIM MY FREE BOOK NOW` — 7 puta, uvijek s istom pratećom linijom.
Masterbox: `PRIJAVI SE` — 5 puta. Različite formulacije čitaju se kao različite radnje i
troše odluku.

**2.2 Svaki CTA nosi svoj qualifier ispod gumba.** Nikad goli gumb.

**2.3 Specifičnost je valuta.**
`$275,000` ne "stotine tisuća" · `8 centi` ne "jeftino" · `236.000 evra` ne "veliki
promet" · `u 2 dana` ne "brzo". **Okrugli broj zvuči izmišljeno, precizan zvuči izmjereno.**

**2.4 Feature → benefit → uklonjen prigovor, u istoj rečenici.**
> *"Create Spectacular Thumbnails in seconds!"* + *"Traditionally you'd need an expensive
> camera, lens, and professional lighting… or hire a designer for $100-$400. With AI, you
> can avoid all of this."*

**2.5 "Bez X" konstrukcija svugdje, ne samo u headlineu.**
`No Subscriptions required` · `Bez aplikacija. Bez igrica.` · `bez skupih studija i
komplikacija`. Svaki "bez" je jedan strah manje.

**2.6 Pisati u 2. licu, jednini, kao pismo.**
Fempire otvara doslovno pismom: *"Piše: Istok Pavlović / Zdravo,"*. Cijeli tekst je "ti",
ne "vi" i ne "polaznice".

**2.7 Konkretna, vizualna slika ishoda umjesto apstrakcije.**
> *"predivan Instagram profil koji te nije sramota da pokažeš ni Rihanni ako je slučajno
> upoznaš na konferenciji"*
> *"Da vam fotke izgledaju kao sa Pinteresta, a ne 'slikala baba u bašti'"*

Formula: **[željeno stanje] naspram [smiješno konkretno loše stanje]**. Loše stanje mora
biti nešto što avatar prepoznaje kao svoje.

**2.8 Cost of inaction, konkretno a ne prijeteće.**
> *"AI won't replace creators — but creators who leverage AI will absolutely replace the
> ones who don't."*

**2.9 Anti-guru pozicioniranje kao standardni potez.**
*"unlike most 'ad experts'"* · *"This isn't another 'guru' book"* · *"Most tutorials
online are outdated or way too generic"*

**2.10 Modul/sekcija se piše kao transformacija u glasu čitatelja, ne kao popis tema.**

**2.11 Emoji i vizualni markeri kao skener-pomoć**, ne kao ukras: `✅ ❌ ⚠️ 🎁 👉 💡 ⭐`.
Rade jer 90% ljudi skenira, ne čita.

**2.12 Stranica mora imati "smjer".** `Pogledaj ispod` · `Za kompletnu listu kliknite
ovdje`. Nikad ne pretpostavljaj da će sam znati što dalje.

---

## 3. ANTI-PATTERNS

1. **Nema "Dobrodošli" ni "O nama" na vrhu.** Prva rečenica je o čitatelju.
2. **Nema više različitih CTA-ova.** Jedan cilj, jedan tekst gumba.
3. **Nema navigacije u headeru.** Nijedna od 5 nema izbornik — svaki link je izlaz iz funnela.
4. **Nema stručnog žargona bez prijevoda.**
5. **Nema generičkih stock fotki nasmijanih ljudi.** Sve slike su ili output rada, ili
   stvarna osoba, ili screenshot.
6. **Nema obećanja bez izvora.** Svaka brojka ima kontekst i vlasnika (Proof Bank).
7. **Nema miješanja dvije publike na jednoj stranici.** Dvije publike = dvije stranice.
8. **Nema "kontaktirajte nas".** Uvijek konkretna radnja s poznatim ishodom.
9. **Nema kopiranja duljine direct-sale stranice.** Naša je 10-15 ekrana, ne 30-45.
   Stranica koja odgovori na sve ubije razlog za poziv. **Ovo je najveći rizik za nas.**

---

## 4. TRI ARHETIPA STRANICE

| | **A — VSL bridge** | **B — Direct sale** | **C — Call booking** ← naš |
|---|---|---|---|
| Primjer | signali.net | lowticketbook, contentcreator, Masterbox | (nema u setu) |
| Duljina | 5-7 ekrana | 30-45 ekrana | **10-15 ekrana** |
| Cilj konverzije | gledanje videa / opt-in | kupnja | ispunjena forma |
| Cijena na stranici | ne | da, detaljno | **ne** (osim ispod 200 €) |
| Value stack na stranici | ne | da | **da, bez cijene** |
| Dokaz | 4-6 native screenshotova | masivno, 2-3 bloka | 5-8 komada, 2 bloka |
| Prigovori | nema | FAQ na kupnju | **FAQ na poziv** |
| Garancija | nema | povrat novca | garancija na poziv |

**Pravilo izbora:** što je cijena viša i odluka teža, to stranica manje prodaje proizvod
a više prodaje **sljedeći korak**. Naša ponuda je 4.000-16.000 € → stranica ne smije ni
pokušati prodati uslugu.

---

## 5. HIJERARHIJA DOKAZA

Poredano po omjeru **uvjerljivost / trošak nabave**. Ovo određuje što se može napraviti
u kojem tjednu.

| Rang | Tip dokaza | Uvjerljivost | Trošak | Faza | Izvor u analizi |
|---|---|---|---|---|---|
| 1 | **Native screenshot razgovora** — DM, WhatsApp, FB komentar, s originalnim chromeom platforme, lica blurana | Vrlo visoka | ~0 — klijent to već ima u telefonu | v0/v1 | signali.net: cijeli proof sloj su IG DM-ovi i FB komentari |
| 2 | **Case study s imenom i brojkom** | Vrlo visoka | Srednji | v2 | *"Zlatna haljina: vizuelni dokaz doneo 236.000 evra"* |
| 3 | **Video testimonijal** | Vrlo visoka | Visok | v3 | Masterbox: zid od 14+ `PLAY VIDEO` pločica |
| 4 | **Show-the-output galerija** (rezultat rada, ne mišljenje) | Visoka | Nizak | v0 | contentcreator: 20+ galerija |
| 5 | **Posuđeni autoritet** — brendovi, mediji, gosti | Visoka | ~0 ako postoji | v0 | imena gostiju na Fempireu |
| 6 | **Agregatna brojka** | Srednje visoka | ~0 | v0 | `5000+ kompanija` · `100M ad spend` |
| 7 | **Embed društvene mreže s brojem lajkova** | Srednja | ~0 | v1 | IG postovi s `755 likes` |
| 8 | **Tekstualni testimonijal s imenom + fotkom** | Srednja | Nizak (3-7 dana) | v2 | Amazon recenzije `Verified Purchase ★★★★★` |
| 9 | **Certifikat / diploma / godine prakse** | Niska-srednja | ~0 | v0 | `15 years` |
| 10 | **Tekstualni testimonijal bez imena** | Vrlo niska | ~0 | ne koristiti | nijedna od 5 ovo ne koristi |

### Dva zaključka koja mijenjaju način rada

**(a) Rang 1 pobjeđuje rang 8, a besplatan je.**
signali.net nosi cijelu stranicu na sirovim screenshotovima poruka — bez ijednog
formatiranog testimonijala, bez ijednog imena, bez ijedne fotografije osobe. Zato što
izgleda **neproizvedeno**, a formatirani testimonial card izgleda kao marketing.

**Za klijenta koji kaže "nemam testimonijale" ovo je gotovo uvijek neistina** — ima ih u
WhatsAppu i DM-ovima.

**(b) Verifikacijski marker vrijedi više od duljine teksta.**
`Verified Purchase`, plava kvačica, FB reakcije, vidljiv broj lajkova, IG chrome.
Kratak dokaz s markerom > dugačak dokaz bez njega.

---

## 6. TABLICA PROOF SLOTOVA

Obavezni output LP Blueprinta. Ovo je odgovor na "nemam sve testimonijale" — ne blokira
izradu, nego je pretvara u plan.

| Slot | Blok | Što je idealno | Ako nemamo — supstitut | Puni se u |
|---|---|---|---|---|
| P1 | B6 rani dokaz | 3-4 native screenshota (rang 1) | agregatna brojka + posuđeni autoritet | v0 → v1 |
| P2 | B7 mehanizam | mjerljivi dokaz mehanizma (protokol, test) | godine prakse + imenovan protokol | v0 |
| P3 | B8 autoritet | vlastite brojke + fotografija klijenta | vremenska dubina + certifikati | v0 |
| P4 | B10 stack | show-the-output galerija | screenshot procesa/alata/dokumenata | v0 |
| P5 | B14 kasni dokaz | 3-5 tekstualnih testimonijala s imenom i fotkom | dodatni screenshotovi razgovora | v0 → v2 |
| P6 | B5a VSL | VSL po pobjedničkom kutu | **tekstualni hero B5b** | v3 |

**Pravilo popunjavanja:** za svaki slot označen NE, upiši (1) supstitut koji ide na v0 i
(2) konkretno pitanje za klijenta iz sekcije 8.

### Supstituti — puna tablica

| Nema | Supstitut koji radi odmah |
|---|---|
| Testimonijale | Screenshotovi razgovora, blurani (rang 1 — često **bolji** od testimonijala) |
| Brojke o rezultatima klijenata | Vlastita brojka i vlastiti rezultat + godine prakse + imenovan protokol |
| Case study | "Tipičan slučaj" opisan kao priča bez imena, s naznakom da je anonimizirano |
| Video / VSL | **Tekstualni hero B5b.** Sve 3 direct-sale stranice funkcioniraju i bez gledanja videa |
| Poznate klijente | Mediji, gostovanja, podcasti, predavanja, konferencije |
| Fotografije outputa | Show-the-process: screenshotovi alata, protokola, dokumenata |
| Fotografiju klijenta | Blok autoriteta ide bez fotke, ali onda mora imati jaču brojku |
| Bilo kakav dokaz (potpuno nov klijent) | Self-referential dokaz + garancija na poziv + preuzimanje rizika |

---

## 7. POPIS ULAZA OD KLIJENTA

### 7.1 GATE — bez ovoga stranica se ne radi

| # | Što tražimo | Koji blok ovisi o tome |
|---|---|---|
| G1 | **Potvrđena ponuda** — koja je JEDNA ponuda (PRIMARY), za koju publiku | cijela stranica |
| G2 | **Avatar u njegovim riječima** — dob, situacija, doslovni citati kako opisuje problem | H1, podnaslov, blame removal, kvalifikatori |
| G3 | **Što je već probao i zašto nije upalilo** | B5b false solutions — bez ovoga stranica zvuči kao svaka druga |
| G4 | **Okidač** — što se dogodi da baš sad traži rješenje | hook, prvi paragraf |
| G5 | **Mehanizam problema (UMP)** | B7, najjača diferencijacija |
| G6 | **Mehanizam rješenja (UMS) + IME metode** | B7, H1 opcija, ads kutovi |
| G7 | **Obećanje:** ishod + rok + najveća žrtva ("bez čega") | H1 |
| G8 | **Prvi vidljivi pomak** — što klijent osjeti prvo i kada | value equation |
| G9 | **Što se smije tvrditi, a što ne** — eksplicitno | Proof Bank. Bez ovoga riskiramo Meta ban i klijentov pravni problem |
| G10 | **Cijena i model plaćanja** (NE ide na stranicu) | kvalifikacijska pitanja, priprema poziva |
| G11 | **Definicija poziva:** ime, trajanje, tko vodi, što odnosi i ako ne kupi | B15 — jedina stvar koju stranica prodaje |
| G12 | **Top 5 prigovora na REZERVIRANJE poziva** | B17 FAQ |
| G13 | **Tko NIJE za ovo** | B12 diskvalifikacija |

### 7.2 BRZO — imovina koju klijent već ima (traži u 48h)

| # | Što | Kako tražiti da stvarno dobiješ |
|---|---|---|
| B1 | **Screenshotovi razgovora** | *"Pretraži WhatsApp i Instagram DM po riječima 'hvala', 'uspjelo', 'preporučila'. Pošalji 10 screenshotova, ne moraš ništa brisati — mi bluramo."* ← **rang 1 dokaz, najveći ROI od svih pitanja** |
| B2 | **Brojke** — godine rada, broj klijenata, broj polaznika, promet ako smije | traži precizne brojeve, ne raspon |
| B3 | **Imena brendova / poznatih klijenata / medija** + dopuštenje | posuđeni autoritet |
| B4 | **Certifikati, diplome, edukacije, članstva** | B8 |
| B5 | **Prije/poslije ili output rada** | rang 4 |
| B6 | **3 najgledanija posta/reela** + brojke | embed, i signal koji kut radi |
| B7 | **Google / FB recenzije** — link | rang 8, ali s markerom |
| B8 | **Osobna priča klijenta** — kako je došao do metode, gdje je pogriješio | B8 story arc. Traži se **na pozivu, ne pismeno** |
| B9 | **Jedna dobra fotografija** (ne stock, ne selfie) | B8 |
| B10 | **Domena ili subdomena**, tko je vlasnik, gdje su DNS | bez toga nema launcha |
| B11 | **Meta Business pristup + pixel/dataset**, GA ako ima | bez toga se ne mjeri ništa |
| B12 | **Pravni podaci:** naziv subjekta, OIB, adresa, kontakt mail, postojeći privacy/uvjeti | B20 — uvjet za odobrenje oglasa |
| B13 | **Kalendar / booking sustav** i tko preuzima pozive | bez toga forma nema odredište |
| B14 | **Brand osnove:** logo, 2 boje, font — ili odobrenje da mi biramo | **ne čeka se puni brand book** |

### 7.3 SPORO — traži produkciju, NE blokira launch

| # | Što | Realno vrijeme | Kada |
|---|---|---|---|
| S1 | Tekstualni testimonijali s imenom, fotkom, rezultatom (3-5) | 3-7 dana | v2 |
| S2 | Video testimonijali (2-4, po 30-60 s) | 2-4 tjedna | v3 |
| S3 | Case study s brojkom i imenom | 1-2 tjedna | v2/v3 |
| S4 | VSL | 2-4 tjedna | v3, **tek nakon pobjedničkog kuta** |
| S5 | Profesionalna foto/video sesija | 2-4 tjedna | v3 |
| S6 | Puni brand book | — | **nikad kao uvjet za stranicu** |

---

## 8. PITANJA KLIJENTU — copy-paste, ide u LP Blueprint

Skill generira ovaj blok kao **gotovu poruku koju Karlo pošalje klijentu**, s upisanim
samo onim pitanjima čiji je slot označen NE.

> **Screenshotovi (najveći ROI od svih pitanja):**
> "Pretraži WhatsApp i Instagram DM po riječima 'hvala', 'uspjelo', 'preporučila'.
> Pošalji mi 10 screenshotova — ne moraš ništa brisati ni uređivati, mi bluramo lica i imena."
>
> **Brojke:** godine rada, broj klijenata, broj obrađenih slučajeva, broj polaznika.
> Precizni brojevi, ne raspon.
>
> **Imena brendova / poznatih klijenata / medija** + izričito dopuštenje za spominjanje.
>
> **Certifikati, diplome, edukacije, članstva.**
>
> **Prije/poslije ili output rada:** fotke, rezultati, dokumenti, snimke.
>
> **3 najgledanija posta/reela** + brojke ispod njih.
>
> **Link na Google/FB recenzije.**
>
> **Jedna dobra fotografija** (ne stock, ne selfie).
>
> **Pravni podaci:** naziv subjekta, OIB, adresa, kontakt mail, postojeći privacy/uvjeti.

---

## 9. FAZNA IZGRADNJA v0 → v3

**Načelo:** stranica se pušta u promet na v0. Svaka sljedeća verzija dodaje **samo
dokazni sloj**, nikad ne dira strukturu ni copy okosnicu. Zato se v0 mora napisati tako
da dokazni blokovi budu **prazni slotovi koji se pune**, a ne rupe koje ruše tekst.

### v0 — tekstualna stranica *(dan 1-3, sve iz GATE + B1-B4)*
Svi blokovi osim VSL-a. Dokazni sloj: brojke, kvalifikacije, posuđeni autoritet, i
screenshotovi ako ih je klijent poslao.

**Ovo je 80% konverzijskog potencijala stranice. Pušta se promet.**

> Obrana ove odluke prema klijentu: sve tri direct-sale stranice iz analize čitljive su i
> uvjerljive **bez ijednog odgledanog videa**. Video je pojačalo, nije nosač.

### v1 — + native social proof *(tjedan 1-2, nula produkcije)*
Blurani screenshotovi DM-ova, WhatsApp poruka, FB/IG komentara + embed 1-2 najbolja posta.
Jedini korak koji podiže konverziju bez ijednog sata produkcije — zato ide odmah nakon
launcha, **ne čeka se s v0**, nego se paralelno traži od klijenta.

### v2 — + tekstualni dokaz i prvi case study *(tjedan 2-4)*
Izvor materijala nije nova produkcija nego **ono što je funnel u međuvremenu proizveo**:
- reaktivacija baze i pilot kampanja generirale su stvarne razgovore → iz njih izlaze citati
- prvi obavljeni pozivi → iz njih izlaze prigovori za FAQ i rečenice koje su uvjerile ljude

**Ovdje se radi i prva revizija copyja na temelju podataka: koji kut iz oglasa ima
najbolji CTR → taj kut postaje H1 na stranici.**

### v3 — + video *(mjesec 1-2)*
**Kritično: VSL se piše po pobjedničkom kutu iz ads testa, nikad prije.**
Snimiti 8-minutni VSL prije nego znaš koji kut konvertira je najskuplja pojedinačna
greška u cijelom procesu — potroši se 2-4 tjedna produkcije na poruku koja možda ne radi.

Redoslijed unutar v3: **prvo video testimonijali** (kraći, jeftiniji, viši rang), **pa VSL.**

### Što se NIKAD ne čeka
Puni brand book · profesionalna fotosesija · redizajn logotipa · finalni video ·
"kad klijent bude imao vremena". Ništa od toga nije na kritičnom putu stranice.

### Faze mapirane na delivery redoslijed

| Naša faza | Verzija stranice | Što je ulaz |
|---|---|---|
| Onboarding poziv + 100 pitanja | — | prikuplja GATE |
| Offer Blueprint POTVRĐEN | gate se otvara | G1-G13 |
| Reaktivacija baze | v0 live | GATE + B1-B4 |
| Pilot engagement kampanja | v1 | screenshotovi iz reaktivacije |
| Prvi pozivi obavljeni | v2 | citati, novi prigovori, pobjednički kut |
| Booking kampanja / full launch | v3 | VSL po pobjedničkom kutu |

---

## 10. QA CHECKLIST — prije launcha

### Poruka i struktura
1. Obećanje iz oglasa i H1 koriste **iste riječi**?
2. H1 sadrži ishod, i **ne** sadrži ime programa ni "Pridruži se"?
3. Postoji rečenica koja skida krivnju s posjetitelja?
4. Nabrojana su konkretna rješenja koja je avatar već probao?
5. Mehanizam ima **ime**?
6. UMP dolazi prije UMS-a?
7. Stranica je 10-15 ekrana, ne 30-45?

### Dokaz
8. Svaka brojka postoji u Proof Banku i označena je kao dopuštena?
9. Postoje najmanje **dva odvojena** dokazna bloka?
10. Nijedan testimonijal nije bez imena ili markera?
11. Ako VSL-a nema — je li slot zamijenjen tekstualnim herojem, a ne ostavljen prazan?

### CTA i konverzija
12. Tekst CTA gumba je **doslovno identičan** na svih 4-6 mjesta?
13. Ispod svakog CTA stoji qualifier linija?
14. Postoji CTA **odmah ispod value stacka**?
15. Forma: kontakt + **najviše 3** kvalifikacijska polja?
16. Ispod forme stoje 3 koraka "što se događa nakon slanja"?

### Ponuda i cijena
17. **Cijena NIJE na stranici** *(osim ako je ponuda ispod 200 EUR)*?
18. Nema anchor cijene, prekrižene cijene ni postotka popusta?
19. Value stack je na stranici i opisuje što se radi na programu?
20. Poziv ima ime i opipljiv output koji vrijedi i bez kupnje?

### Prigovori
21. FAQ ima 10+ pitanja?
22. FAQ odgovara na prigovore **na poziv**, ne na kupnju?

### Tehnika i pravo
23. Nema navigacije, nema vanjskih linkova osim pravnih?
24. Pravni footer: FB disclaimer, results disclaimer, privacy, uvjeti, pravni subjekt?
25. Testirano na mobitelu (85%+ prometa dolazi s IG-a)?
26. Pixel/dataset okida na view i na submit?
27. Forma ima odredište (booking sustav) i netko preuzima pozive?
28. Postoji P.S. blok?
29. Ako postoji hitnost — je li **stvarna**?
30. Boje i fontovi dolaze iz Brand Booka?

---

## 11. ODSTUPANJA OD IZVORNE ANALIZE

*Izvorna baza znanja je v1 analiza 5 stranica. Odluke ispod donesene su kasnije, u radu,
i imaju prednost nad izvornim tekstom.*

**I1 — Value stack IDE na stranicu, cijena NE.**
Izvorna analiza tvrdi da cijeli blok "Ponuda / stack / cijena" ide isključivo na poziv.
Ispravljeno: ako je konverzija konzultacijski poziv, stranica **odmah govori o tome što
se radi na programu** — value stack IDE. **Cijena NIKAD ne ide, osim ako je ponuda ispod
200 EUR.** Ne idu ni anchor cijena, prekrižena cijena ni postotak popusta.

Razlika drži vodu: "što dobivaš" nije isto što i "koliko košta". Stack gradi percipiranu
vrijednost prije nego se traži poziv; cijena bez konteksta poziva samo diskvalificira.
Posljedica: CTA ide odmah ispod value stacka.

**I2 — VSL slot se ne ostavlja prazan.**
Kad klijent nema VSL (što je pravilo, ne iznimka, jer se snima tek u v3), slot se
**zamjenjuje tekstualnim herojem B5b**. Stranica ne smije imati rupu na mjestu gdje je
predviđen video.

**I3 — FAQ ima minimalno 10 pitanja.** Izvorna analiza ne daje broj.

---

## 12. MAPIRANJE NA OFFER BLUEPRINT

Offer Blueprint pokriva: avatar i razinu svjesnosti (sek. 2), UMP/UMS (3-4), obećanje i
Value Equation (5), stack (6), Proof Bank s pravilom dopuštenja (8), ponudu poziva (9),
formu (10), razdvojene prigovore na poziv vs kupnju (11), output tablice za LP i ads (12-13).

**Što Blueprint nema, a ovaj skill nosi:**

1. Izbor arhetipa stranice — Blueprint ga pretpostavlja
2. Inventar dokazne imovine s rangovima i fazama — Blueprint traži testimonijale, ali ne
   zna za rang-1 screenshotove ni za supstitute
3. Blame removal i false-solutions kao zasebni obavezni output za copy
4. Blok "plan u koracima" — put klijenta nakon poziva
5. Tehnički i pravni preduvjeti (domena, pixel, privacy, disclaimeri, booking)
6. Wireframe / redoslijed blokova — Blueprint daje sadržaj, ne raspored
7. Verzioniranje v0→v3 i pravilo "VSL tek nakon pobjedničkog kuta"

---

*Baza znanja izvedena iz analize: lowticketbook.com · contentcreator.com ·
istokpavlovic.com/masterbox · Fempire (TTB Academy) · signali.net — kolovoz 2026.*

*Okviri: Value Equation i stack — Alex Hormozi, $100M Offers. Character/Problem/Guide/
Plan/Failure/Success — Donald Miller, StoryBrand. Razine svjesnosti i sofisticiranost
tržišta — Eugene Schwartz, Breakthrough Advertising. UMP/UMS par — Stefan Georgi, RMBC.*
