# DOKAZI, SLOTOVI I FAZNA IZGRADNJA

Ovo je dio skilla koji rješava najčešću stvarnu situaciju: **klijent nema sve dokaze
u trenutku kad se stranica radi.**

**Načelo:** stranica se pušta u promet na v0. Svaka sljedeća verzija dodaje **samo
dokazni sloj**, nikad ne dira strukturu ni copy okosnicu. Zato se v0 mora napisati tako
da dokazni blokovi budu **prazni slotovi koji se pune**, a ne rupe koje ruše tekst.

---

## 1. HIJERARHIJA DOKAZA

Poredano po omjeru **uvjerljivost / trošak nabave**.

| Rang | Tip dokaza | Uvjerljivost | Trošak | Faza |
|---|---|---|---|---|
| 1 | **Native screenshot razgovora** — DM, WhatsApp, FB komentar, s originalnim chromeom platforme, lica i imena blurana | Vrlo visoka | ~0 — klijent to već ima u telefonu | v0/v1 |
| 2 | **Case study s imenom i brojkom** | Vrlo visoka | Srednji | v2 |
| 3 | **Video testimonijal** | Vrlo visoka | Visok | v3 |
| 4 | **Show-the-output galerija** (rezultat rada, ne mišljenje) | Visoka | Nizak | v0 |
| 5 | **Posuđeni autoritet** — brendovi, klijenti, mediji, gosti | Visoka | ~0 ako postoji | v0 |
| 6 | **Agregatna brojka** | Srednje visoka | ~0 | v0 |
| 7 | **Embed društvene mreže s brojem lajkova** | Srednja | ~0 | v1 |
| 8 | **Tekstualni testimonijal s imenom + fotkom** | Srednja | Nizak (3-7 dana) | v2 |
| 9 | **Certifikat / diploma / godine prakse** | Niska-srednja | ~0 | v0 |
| 10 | **Tekstualni testimonijal bez imena** | Vrlo niska | ~0 | ne koristiti |

### Dva zaključka koja mijenjaju način rada

**(a) Rang 1 pobjeđuje rang 8, a besplatan je.**
signali.net nosi cijelu stranicu na sirovim screenshotovima poruka — bez ijednog
formatiranog testimonijala, bez ijednog imena, bez ijedne fotografije osobe. Zato što
izgleda **neproizvedeno**, a formatirani testimonial card izgleda kao marketing.

**Za klijenta koji kaže "nemam testimonijale" ovo je gotovo uvijek neistina** — ima ih
u WhatsAppu i DM-ovima. Skill to nikad ne prihvaća kao konačan odgovor prije nego se
postavi pitanje B1 iz `pitanja-klijentu`.

**(b) Verifikacijski marker vrijedi više od duljine teksta.**
`Verified Purchase`, plava kvačica, FB reakcije, vidljiv broj lajkova, IG chrome.
Kratak dokaz s markerom > dugačak dokaz bez njega.

---

## 2. TABLICA PROOF SLOTOVA — obavezni output LP Blueprinta

Ovo je tablica koju skill **uvijek** popuni i stavi u LP Blueprint. Ona je odgovor na
"nemam sve testimonijale" — ne blokira izradu, nego je pretvara u plan.

| Slot | Blok | Što je idealno | Imamo? | Ako nemamo — supstitut | Puni se u |
|---|---|---|---|---|---|
| P1 | B6 (rani dokaz) | 3-4 native screenshota (rang 1) | DA/NE | agregatna brojka + posuđeni autoritet | v0 → v1 |
| P2 | B7 (mehanizam) | mjerljivi dokaz mehanizma (protokol, test) | DA/NE | godine prakse + imenovan protokol | v0 |
| P3 | B8 (autoritet) | vlastite brojke + fotografija klijenta | DA/NE | vremenska dubina + certifikati | v0 |
| P4 | B10 (stack) | show-the-output galerija | DA/NE | screenshot procesa/alata/dokumenata | v0 |
| P5 | B14 (kasni dokaz) | 3-5 tekstualnih testimonijala s imenom i fotkom | DA/NE | dodatni screenshotovi razgovora | v0 → v2 |
| P6 | B5a (VSL) | VSL po pobjedničkom kutu | DA/NE | **tekstualni hero B5b** | v3 |

**Pravilo popunjavanja:** za svaki slot označen NE, skill u LP Blueprint upisuje
(1) supstitut koji ide na v0 i (2) konkretno pitanje za klijenta iz sekcije 4.

---

## 3. SUPSTITUTI — što raditi kad klijent nema traženo

| Nema | Supstitut koji radi odmah |
|---|---|
| Testimonijale | Screenshotovi razgovora, blurani (rang 1 — često **bolji** od testimonijala) |
| Brojke o rezultatima klijenata | Vlastita brojka i vlastiti rezultat + godine prakse + imenovan protokol |
| Case study | "Tipičan slučaj" opisan kao priča bez imena, s naznakom da je anonimizirano |
| Video / VSL | **Tekstualni hero B5b.** Sve 3 analizirane direct-sale stranice funkcioniraju i bez gledanja videa |
| Poznate klijente | Mediji, gostovanja, podcasti, predavanja, konferencije |
| Fotografije outputa | Show-the-process: screenshotovi alata, protokola, dokumenata koje koristi |
| Fotografiju klijenta | Blok autoriteta ide bez fotke, ali onda mora imati jaču brojku |
| Bilo kakav dokaz (potpuno nov klijent) | Self-referential dokaz (*"ova stranica je napravljena metodom koju učimo"*) + garancija na poziv + preuzimanje rizika |

---

## 4. PITANJA KLIJENTU — copy-paste, ide u LP Blueprint

Skill generira ovaj blok kao **gotovu poruku koju Karlo pošalje klijentu**, s upisanim
samo onim pitanjima čiji je slot označen NE.

> **B1 — screenshotovi (najveći ROI od svih pitanja):**
> "Pretraži WhatsApp i Instagram DM po riječima 'hvala', 'uspjelo', 'preporučila'.
> Pošalji mi 10 screenshotova — ne moraš ništa brisati ni uređivati, mi bluramo lica
> i imena."
>
> **B2 — brojke:** godine rada, broj klijenata, broj obrađenih slučajeva, broj polaznika.
> Traži **precizne** brojeve, ne raspon.
>
> **B3 — imena brendova / poznatih klijenata / medija** + izričito dopuštenje za spominjanje.
>
> **B4 — certifikati, diplome, edukacije, članstva.**
>
> **B5 — prije/poslije ili output rada:** fotke, rezultati, dokumenti, snimke.
>
> **B6 — 3 najgledanija posta/reela** + brojke ispod njih.
>
> **B7 — link na Google/FB recenzije.**
>
> **B9 — jedna dobra fotografija** (ne stock, ne selfie).
>
> **B12 — pravni podaci:** naziv subjekta, OIB, adresa, kontakt mail, postojeći
> privacy/uvjeti ako ih ima.

---

## 5. FAZE v0 → v3

### v0 — tekstualna stranica *(dan 1-3)*
Svi blokovi iz `blokovi.md` osim VSL-a. Dokazni sloj: brojke, kvalifikacije, posuđeni
autoritet, i screenshotovi ako ih je klijent poslao.

**Ovo je 80% konverzijskog potencijala stranice. Pušta se promet.**

> Obrana ove odluke prema klijentu: sve tri direct-sale stranice iz analize čitljive su
> i uvjerljive **bez ijednog odgledanog videa**. Video je pojačalo, nije nosač.

### v1 — + native social proof *(tjedan 1-2, nula produkcije)*
Blurani screenshotovi DM-ova, WhatsApp poruka, FB/IG komentara + embed 1-2 najbolja posta.
Jedini korak koji podiže konverziju bez ijednog sata produkcije — zato ide odmah nakon
launcha i **ne čeka se s v0**.

### v2 — + tekstualni dokaz i prvi case study *(tjedan 2-4)*
Izvor materijala nije nova produkcija nego **ono što je funnel u međuvremenu proizveo**:
reaktivacija baze i pilot kampanja generirale su stvarne razgovore → iz njih izlaze
citati; prvi obavljeni pozivi → iz njih izlaze prigovori za FAQ.

**Ovdje se radi i prva revizija copyja na temelju podataka: koji kut iz oglasa ima
najbolji CTR → taj kut postaje H1 na stranici.**

### v3 — + video *(mjesec 1-2)*
**Kritično: VSL se piše po pobjedničkom kutu iz ads testa, nikad prije.**
Snimiti 8-minutni VSL prije nego znaš koji kut konvertira je najskuplja pojedinačna
greška u procesu — potroši se 2-4 tjedna produkcije na poruku koja možda ne radi.

Redoslijed unutar v3: **prvo video testimonijali** (kraći, jeftiniji, viši rang), **pa VSL.**

### Što se NIKAD ne čeka
Puni brand book · profesionalna fotosesija · redizajn logotipa · finalni video ·
"kad klijent bude imao vremena". Ništa od toga nije na kritičnom putu stranice.
