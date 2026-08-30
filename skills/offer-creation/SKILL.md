---
name: offer-creation
description: Strukturira ponudu CC DELIVERY klijenta prema njegovim kupcima — veliko obećanje, mehanizam, deliverables, cijena, garancija, dokazi, prigovori — i sprema je kao Google Doc u folder klijenta, plus handoff blok koji kasnije troše sales-page i ad-creation. Pokreni kad Karlo kaže "napravi ponudu za X", "strukturiraj ponudu za [klijent]", "gotov je poziv za strukturiranje ponude za X", "treba mi offer za [klijent]" ili slično. Skill NE izmišlja cijenu, garanciju ni rezultate — traži transkript poziva #2 u folderu klijenta i odbija generirati ponudu ako ga nema.
---

# Strukturiranje ponude za CC DELIVERY klijenta

## Svrha

Ponuda je zglob delivery lanca. Sve prije nje (upitnik, internal doc, brand book) proizvodi
**razumijevanje** klijenta. Sve poslije nje (`sales-page`, `ad-creation`) proizvodi **prodajne
assete**. Landing page ne prodaje klijenta — prodaje njegovu ponudu. Ako ponuda nije
strukturirana, headline stranice nema što reći, pa svaki nizvodni output postaje generički.

**Važno razgraničenje:** ovdje se strukturira ponuda **klijenta prema NJEGOVIM kupcima**
(program, tretman, tečaj koji klijent prodaje), ne ponuda agencije prema klijentu.

Zato su dva pravila neprekršiva:

1. **Ne izmišljaj ono što mora doći od klijenta.** Cijena, garancija, trajanje, brojevi,
   rezultati i testimonijali postoje ili ne postoje. Ako ne postoje — označi `NEDOSTAJE` i
   navedi u sažetku. Ponuda s izmišljenom cijenom je gora od ponude bez cijene, jer se
   izmišljotina propagira u landing page i u oglase.
2. **Konkretno pobjeđuje široko.** "Pomažemo ljudima da budu zdraviji" nije obećanje. Obećanje
   ima adresata, mjerljiv ishod i rok.

## Korak 1 — Pronađi folder klijenta

Klijentski folderi žive u `CC DELIVERY` → `Edukatori` ili `Klinike` → `[Naziv klijenta]`.
Koristi `mcp__Google_Drive__search_files` (fuzzy match na naslov foldera — imena nisu uvijek
identična onome kako Karlo izgovori klijenta).

Ako ne možeš jednoznačno odrediti folder (više kandidata ili nula rezultata), pitaj umjesto da
nagađaš.

## Korak 2 — Gate check

Pretraži sadržaj foldera (`parentId` search) i provjeri:

1. **Transkript poziva #2** — Google Doc čiji naslov sadrži "transkript" i upućuje na strateški
   poziv / strukturiranje ponude (nazivi variraju: "Strateški poziv - Transkript", "Poziv 2
   TRANSKRIPT", "Call strukturiranje ponude - transkript"). **Ovo je obavezno.**

**Ako transkript poziva #2 ne postoji, STANI.** Javi: "Ne mogu strukturirati ponudu za
[klijent] — nema transkripta poziva za strukturiranje ponude. Ponuda se definira na tom pozivu;
bez njega bih je izmišljao. Transkriptiraj poziv, spremi u folder, pa mi javi."

Ne nadomještaj izostanak transkripta upitnikom ili internal docom. Upitnik daje sirovine
(publika, bolne točke, dokazi), ali **odluke** o ponudi — što se prodaje, po kojoj cijeni, uz
kakvu garanciju — padaju na pozivu #2.

2. **Ispunjen upitnik** — `[Klijent] upitnik nakon onboarding calla`. Ovo **nije** blokirajuće,
   ali je jako: upitnik sadrži prave odgovore klijenta (citati, brojevi, priče) koji su najbolji
   materijal za sekcije Dokazi i Prigovori. Ako ne postoji ili je očito neispunjen (prazna polja
   ispod pitanja), nastavi, ali upozori Karla u sažetku da su te sekcije tanke i zašto.

## Korak 3 — Pročitaj sve izvore

Redoslijed prioriteta kad se izvori razilaze — **niži broj uvijek pobjeđuje**:

1. **Transkript poziva #2** — odluke o ponudi. Izvor istine za cijenu, deliverables, garanciju.
2. **Ispunjen upitnik** — stvarni odgovori klijenta. Izvor istine za publiku, bolne točke,
   dokaze, prigovore.
3. **Transkript onboarding poziva (#1)** — kontekst, povijest, kako klijent govori o sebi.
4. **Internal Doc** — istraženo s weba. Polja označena `DRAFT — nepotvrđeno` su pretpostavke,
   ne činjenice.
5. **Brand Book** — ton glasa i pridjevi. Utječe na to KAKO je ponuda formulirana, ne ŠTO je.

Ako se transkript #2 i upitnik razilaze oko istog polja, prednost ima transkript #2 (novije,
i to je trenutak odluke) — ali to razilaženje **navedi u sažetku**, ne progutaj ga tiho.

## Korak 4 — Sastavi ponudu

Koristi strukturu iz `references/offer-struktura.md`. Sekcije i njihov redoslijed su fiksni za
svakog klijenta — to je ono što omogućuje da `sales-page` i `ad-creation` konzumiraju bilo kojeg
klijenta istim promptom.

Za svaku sekciju:
- Piši u tonu iz Brand Booka, ali **citate klijenta ostavi doslovno**. Klijentova rečenica iz
  upitnika je jača od tvoje parafraze — landing page se gradi na njegovom jeziku, ne na tvom.
- Gdje izvor postoji, navedi ga inline u zagradi: `(poziv #2)`, `(upitnik, p. 34)`,
  `(internal doc — DRAFT)`. Karlo mora vidjeti odakle je što došlo.
- Gdje izvora nema, napiši doslovno `NEDOSTAJE — pitati klijenta` i kratko što točno treba.
  Ne ostavljaj praznu sekciju bez oznake.

## Korak 5 — Stress test ponude

Prije spremanja, provjeri ponudu protiv ovih pitanja i **rezultat upiši u sam dokument** kao
sekciju "Stress test". Ovo je interna sekcija za Karla, ne za klijenta:

1. Je li veliko obećanje mjerljivo i vremenski omeđeno? (ima li broj i rok)
2. Postoji li mehanizam — objašnjenje ZAŠTO baš ovo radi, a ne generično "individualan pristup"?
3. Bi li konkurent iz iste niše mogao doslovno prepisati ovu ponudu? Ako da, nije diferencirana.
4. Postoji li cijena? Garancija? Ako ne — je li označeno kao NEDOSTAJE?
5. Ima li barem jedan konkretan dokaz (broj, prije/poslije, testimonijal s imenom)?
6. Je li jasno za koga ponuda NIJE?

Na svako pitanje odgovori jednom rečenicom: prolazi / ne prolazi + zašto. **Ne popravljaj
izmišljanjem** — ako obećanje nema broj jer ga klijent nije dao, to je "ne prolazi, treba
pitati klijenta", a ne prilika da izmisliš broj.

## Korak 6 — Handoff blok

Na kraj dokumenta dodaj sekciju **"HANDOFF — za sales-page i ad-creation"** po specifikaciji iz
`references/handoff-polja.md`.

Ovo je ugovor prema nizvodnim skillovima: `sales-page` iz njega gradi sekcije GHL stranice, a
`ad-creation` iz njega vuče kutove i claimove umjesto da ih nagađa iz Brand Booka. Polja moraju
biti popunjena doslovno onim tekstom koji ide na stranicu — ne opisom onoga što bi tamo trebalo
pisati.

Polja koja nemaju izvor upiši kao `NEDOSTAJE` i tu vrijednost ostavi — nizvodni skillovi je
prepoznaju i stanu, umjesto da improviziraju.

## Korak 7 — Spremi u Drive

Kreiraj Google Doc `[Klijent] - Ponuda` u root folderu klijenta (isti nivo kao upitnik i
internal doc), preko `mcp__Google_Drive__create_file` s `contentMimeType: "text/html"` i
`textContent: <html>` — isti pouzdan mehanizam kao Internal Doc i Brand Book. Nikad base64,
nikad PDF.

**Poznata kvirka:** `create_file` za HTML→Google Doc ponekad odmah nakon kreacije vrati
`"fileSize": 1`. To je trenutni metapodatak, ne gubitak sadržaja — ne vjeruj tom broju, nego
provjeri `read_file_content` na novom fileId-u.

**Ako `[Klijent] - Ponuda` već postoji:** ne prepisuj ga tiho. Pitaj Karla želi li rebuild
(kreiraj novi pa `trash_file` na stari) ili novu verziju uz postojeću.

## Korak 8 — Sažetak

Javi Karlu, kratko:
- link na dokument
- **što nedostaje** — popis svih `NEDOSTAJE` polja, grupirano, jer to je lista pitanja za
  klijenta i najkorisniji dio sažetka
- rezultat stress testa (koliko od 6 prolazi)
- eventualna razilaženja između transkripta #2 i upitnika
- je li upitnik nedostajao ili bio neispunjen
- je li ponuda spremna za `sales-page` (spremna je samo ako nijedno **obavezno** handoff polje
  nije NEDOSTAJE — vidi `references/handoff-polja.md`)

## Napomena o dosljednosti

Struktura ponude je fiksna kroz sve klijente i sve niše; mijenja se samo sadržaj. Ne popuštaj
strukturu ni kad se čini da bi za konkretnog klijenta imalo smisla — dosljednost je ono što
omogućuje da isti `sales-page` prompt radi za edukatora i za kliniku bez prepravljanja.
