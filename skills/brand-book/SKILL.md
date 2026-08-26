---
name: brand-book
description: Radi brand book po klijentu — po defaultu BRZU verziju (strukturirani Google Doc s bojama, fontovima, tonom, USP-om i copy formulom, ispod 5 min), a FENSY dizajniranu PDF verziju samo na eksplicitan zahtjev. Služi kao referenca AI-u kad kasnije generira oglase/kreative (fal.ai, Facebook Ads). Pokreni kad Karlo kaže nešto poput "napravi brand book za X", "gotov je strateški poziv #2 za X, napravi brand book", "treba mi brand book za [klijent]", "napravi brand bookove za sve klijente u [folder]". Skill NE istražuje web ispočetka — čita ono što su client-internal-doc i izrada-upitnika (Koraci 8-9) već pripremili.
---

# Izrada brand booka za CC DELIVERY klijenta

## Svrha

Brand book je zadnja karika prije nego se počnu generirati stvarni oglasi/kreative. Cilj mu je
da AI kasnije konzistentno generira kreative bez nagađanja boja/fontova/tona.

Postoje **dvije verzije** i to je najvažnija odluka u ovom skillu:

| | BRZA (default) | FENSY (na zahtjev) |
|---|---|---|
| Format | Google Doc (HTML→Doc) | Design canvas → PDF |
| Trajanje | pod 5 min po klijentu | 20-30 min po klijentu |
| Web fetch | ne | ne (koristi Internal Doc) |
| Svrha | referenca za AI generiranje oglasa | prezentacija klijentu |

**Uvijek radi BRZU verziju osim ako Karlo eksplicitno ne traži fensy.** Fensy verzija je skupa
i sporo se radi; nije potrebna za ono za što se brand book stvarno koristi (input AI-u za oglase).

Ovaj skill NE prikuplja nove sirove podatke s weba — to je posao `client-internal-doc` skilla.
Ovaj skill SKLAPA ono što je već prikupljeno.

## Korak 1 — Pronađi izvore

Pronađi folder klijenta (`CC DELIVERY > Klinike/Edukatori > [Klijent]`), u njemu
`[Klijent] - Internal Doc` i podfolder `Vizuali`.

## Korak 2 — Gate check

Pročitaj Internal Doc i provjeri ima li polja označenih **"DRAFT — nepotvrđeno"**.

- **Brza verzija:** DRAFT polja NE blokiraju. Nastavi, ali oznaku DRAFT prenesi vidljivo u
  brand book i navedi je u završnom sažetku. Ne pretvaraj pretpostavku u potvrđenu činjenicu.
- **Fensy verzija:** upozori Karla prije nego kreneš — "Internal doc za [klijent] još ima
  nepotvrđena polja ([navedi koja]) — brand book će biti manje pouzdan dok se ne odradi
  izrada-upitnika Korak 9. Nastaviti ipak, ili pričekati?" — i čekaj potvrdu.

Ako Internal Doc uopće ne postoji, stani i reci da prvo treba `client-internal-doc`.

## Korak 3 — Pročitaj sve dostupno

Pročitaj cijeli Internal Doc (linkovi, web sažetak, boje, fontovi, imagery stil, Brand Overview /
USP / target audience / ton / customer journey) i popiši fajlove u `Vizuali` folderu (logo,
brand vizuali, fotke decision makera). Ne fetchaj web ispočetka.

## Korak 4 — Odaberi format: brzi (default) ili fensy (na eksplicitan zahtjev)

**Default: BRZA verzija.** Ako Karlo ne kaže eksplicitno "fensy", "dizajnirano",
"prezentabilno za klijenta" ili slično, uvijek radi brzu verziju ispod. Cilj: pod 5 minuta po
klijentu, bez novog web fetcha, bez Design canvasa, bez PDF/headless Chrome pipelinea — samo
strukturirani Google Doc iz podataka koji već postoje u Internal Docu.

Sastavi HTML sadržaj (h1/h2 naslovi, bold, tablice — isti stil kao Internal Doc) sa sekcijama:

1. **Boje** — hex kodovi iz Internal Doca (tablica), + jedna rečenica preporuke koja je
   dominantna / koja je akcent za ads.
2. **Fontovi** — iz Internal Doca.
3. **Logo** — kratka napomena (boje/stil) + link na `Vizuali` folder gdje stvarni fajl već leži.
   Ne uploadaj ništa novo.
4. **Ton glasa / Voice** — pridjevi iz Internal Doca + 2-3 primjer fraze izvedene iz tog tona
   (piši ih ti, kratko).
5. **USP i ciljna publika** — iz Brand Overview sekcije Internal Doca. Ako je označeno DRAFT,
   zadrži tu oznaku vidljivo i ovdje.
6. **Stil imageryja** — opisno (iz Internal Doca), + direktni URL-ovi slika koje nisu automatski
   uploadane u `Vizuali` (ako ih Internal Doc navodi).
7. **Copy formula za ads** — tablica Claim / Mehanizam-dokaz / Stakes / CTA + jedan konkretan
   primjer za tog klijenta.

Napravi podfolder `Brand Book` unutar client foldera, pa `create_file` s
`contentMimeType: "text/html"`, `textContent: <html>`, title `"[Klijent] - Brand Book"`,
`parentId` = taj novi podfolder. Isti pouzdan mehanizam kao Internal Doc upload (tekst, ne
base64) — nikad ne pokušavaj PDF ili binarni upload u ovoj brzoj verziji.

**Poznata kvirka:** `create_file` za HTML→Google Doc konverziju ponekad u odgovoru vrati
`"fileSize": 1` odmah nakon kreacije — to je samo trenutni metapodatak, ne stvarni gubitak
sadržaja. Ne vjeruj tom broju; provjeri `read_file_content` na novom fileId-u da potvrdiš da je
sadržaj stvarno cijeli.

**Više klijenata odjednom:** ako Karlo traži brand bookove za više klijenata (npr. cijeli
Edukatori folder), radi ih paralelno — jedan subagent po klijentu, svaki s vlastitim Internal
Docom. Ne diraj klijente koji već imaju gotov brand book osim ako to eksplicitno ne traži.

## Korak 5 — Fensy verzija (SAMO na eksplicitan zahtjev)

Ako Karlo eksplicitno traži dizajniranu/prezentabilnu verziju: izradi kao Design canvas
(`design` skill), 5-10 stranica (Cover, Brand Overview, Colors, Typography, Logo, Imagery,
Voice, Design Examples).

**Boje — smiješ unaprijediti, ne samo prepisati.** Ako postojeća paleta nije jaka (loš kontrast,
previše boja, ne odgovara niši/tonu), predloži bolju:
- Finance/edukacija → tonovi povjerenja (tamno plavo, tamno zeleno)
- Wellness/duhovnost → topli/zemljani/pastelni tonovi
- Klinike/zdravlje → čisto, medicinski profesionalno

Zadrži primarnu boju SAMO ako klijent već ima jako izgrađenu vizualnu prepoznatljivost — tad
doradi samo sekundarnu/akcent paletu. Provjeri praktičnu čitljivost/kontrast (posebno kombinaciju
za CTA gumbe), ne samo estetiku.

**Tipografija — isto pravilo.** Ako su trenutni fontovi generički (default WordPress/Arial, nema
pairinga), predloži bolji par — display/script naslovni + čist sans/serif tekstualni. Biraj po
TONU klijenta iz Internal Doca, ne nasumično: Playfair Display + Inter (premium/editorial),
Bricolage Grotesque + Lora (edukativno), Athelas + Vanguard (autoritativno), Inter + Times New
Roman (stručno). Provjeri da su dostupni kao Google Fonts ili navedi web-safe fallback.

Uvijek jasno označi **"zadržano"** vs **"predložena nadogradnja"**, uz jednu rečenicu
obrazloženja.

**Design Examples (min. 3 mockupa)** — stvarni logo i fotke iz `Vizuali`, nikad placeholder:
IG/FB feed oglas, carousel/story format, funnel dijagram u klijentovim bojama. Copy po strukturi
Claim → Mehanizam/dokaz → Stakes → CTA, popunjen stvarnim sadržajem iz Internal Doca. Jedan
fokus i jedan CTA po kreativi; naslov čitljiv u manje od 2 sekunde; headline i slika pričaju istu
priču. Ako u `CC DELIVERY > INTERNAL DOCS > Ad Swipes` postoji swipe file, pregledaj ga prije
dizajniranja.

**Export:** koristi headless Chrome print-to-pdf lokalno (spoji sve stranice u jedan HTML s
`page-break-after`, fontove ugradi kao base64 `@font-face` prije renderiranja — Google Fonts
`<link>` se nepouzdano učita na vrijeme unutar headless renderiranja). Rezultatni PDF (obično
500KB-1.5MB) **NE pokušavaj uploadati na Drive** preko `create_file`/`base64Content` — empirijski
potvrđeno da base64 tekst iznad ~15-20KB postaje nepouzdan kao tool-call parametar (1MB PDF =
1.4M znakova base64, izvan svake granice). Umjesto toga: pošalji PDF Karlu direktno
(`SendUserFile`) i po potrebi napravi prazan `Brand Book` podfolder na Driveu za ručni upload.

## Korak 6 — Sažetak

Javi Karlu: koju verziju si napravio (brzu/fensy), link na dokument (ili PDF + napomenu o ručnom
Drive uploadu), koja DRAFT polja čekaju potvrdu, grubo trajanje. Kod fensy verzije dodaj i što je
zadržano vs. predloženo i zašto.

## Napomena o dosljednosti

Ista struktura za svakog klijenta neovisno o niši, ali sadržaj (boje/fontovi/primjeri/copy)
uvijek prilagođen tom konkretnom klijentu — nikad generički predložak sa zamijenjenim imenom.
