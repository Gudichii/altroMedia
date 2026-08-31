# DIRECT RESPONSE LANDING PAGE — BAZA ZNANJA

**Namjena:** sirovina za budući skill `sales-page`. Sve u ovom dokumentu izvedeno je iz analize 5 stvarnih stranica koje rade na hladan promet, ne iz teorije. Svaki princip ima izvor.

**Status:** v1 — izvedeno iz 5 primjera. Nadopunjavati kad se analizira novi swipe.

---

## ISPRAVCI — odluke koje nadjačavaju ovaj dokument

*Dodano 31.8.2026. Ovaj dokument je v1 analiza; odluke ispod donesene su kasnije i imaju
prednost. Skill `lp-structure` slijedi ISPRAVKE, ne originalni tekst.*

**I1 — Value stack IDE na stranicu, cijena NE.** (nadjačava blok 12 i sekciju 6 →POZIV)

Originalni tekst tvrdi da cijeli blok "Ponuda / stack / cijena" ide isključivo na poziv.
Ispravljeno: ako je konverzija konzultacijski poziv, stranica **odmah govori o tome što
se radi na programu/edukaciji** — value stack IDE na stranicu.

**Cijena NIKAD ne ide na stranicu, osim ako je ponuda ispod 200 EUR.**
Ne idu ni anchor cijena, prekrižena cijena ni postotak popusta.

Razlika je smislena: "što dobivaš" nije isto što i "koliko košta". Stack gradi
percipiranu vrijednost prije nego se traži poziv; cijena bez konteksta poziva samo
diskvalificira.

**Posljedica:** odmah ispod value stacka ide CTA, bez umetnutog bloka između.

**I2 — VSL slot se ne ostavlja prazan.** (dopunjuje sekciju 7, v0)

Kad klijent nema VSL (što je pravilo, ne iznimka, jer se VSL snima tek u v3 po
pobjedničkom kutu), slot se **zamjenjuje tekstualnim herojem**: blame removal → false
solutions → cost of inaction. Stranica ne smije imati rupu na mjestu gdje je predviđen
video.

**I3 — FAQ ima 10+ pitanja.** Originalni tekst ne daje broj. Minimum je 10.

---

## 0. ŠTO JE ANALIZIRANO

| # | Stranica | Tip ponude | Cijena | Arhetip stranice |
|---|---|---|---|---|
| 1 | lowticketbook.com (Hernan Vazquez, *Low Ticket Profits*) | fizička knjiga, free + shipping | $9.95 s/h | **Low-ticket direct sale** (tripwire) |
| 2 | contentcreator.com (Anthony Gallo, *AI Creator Course*) | snimljeni tečaj | $98 (anchor $298) | **Mid-ticket direct sale** |
| 3 | istokpavlovic.com — *Masterbox 2.0* | snimljeni tečaj, 12 modula / 150 lekcija | 365 € | **Mid-ticket direct sale, regionalno tržište** |
| 4 | Fempire (Istok Pavlović + mentorice) | 3-mjesečni group program s live dijelom | 600 € / 200 € mj. | **High-touch program, letter-style** |
| 5 | signali.net (*Signali Strasti*) | besplatan trening (VSL) | 0 € | **VSL bridge / lead magnet stranica** |

**Ključna napomena za nas:** nijedna od ovih 5 nije *call-booking* stranica — a naš funnel je `FB cold → landing → forma → poziv`. Zato: **svi elementi ispod prenose se 1:1, OSIM ponude i cijene.** Kod nas ponuda i cijena idu na poziv, a stranica prodaje POZIV. To znači da blok "Ponuda/Stack/Cijena" iz ovih primjera kod nas postaje blok "Ponuda poziva" — sve ostalo (headline, mehanizam, dokaz, prigovori, CTA disciplina) ostaje identično.

---

## 1. ANATOMIJA STRANICE — BLOK PO BLOK

Redoslijed ispod je zajednički nazivnik sve 5 stranica. Ne mora svaki blok postojati, ali **redoslijed se ne mijenja** — svaki blok otvara pitanje na koje sljedeći odgovara.

### Blok 1 — Eyebrow / kontekst label
Kratka linija iznad naslova koja daje kontekst ili razlog zašto si baš sad tu.
- `FREE BOOK: LOW TICKET PROFITS`
- `Cyber Monday Sale!`
- `💞 Uspešno si otključala BESPLATNI trening 💞` ← potvrđuje mikro-obavezu koju je posjetitelj upravo napravio (kliknuo oglas), umjesto da ga baci u prazno

**Pravilo:** ako dolazi s oglasa koji je nešto obećao, eyebrow mora **potvrditi to obećanje istim riječima**. Nedosljednost oglas→stranica je najskuplji leak u funnelu.

### Blok 2 — H1 / glavno obećanje
Najvažnijih 10 riječi na stranici. Tri formule koje su korištene:

**Formula A — "How to" s trostrukom negacijom (najjača, signali.net):**
> `Kako [relatable identitet] [postižu željeni ishod] – Bez [žrtve 1], [žrtve 2] I [žrtve 3] – Uz [nešto o čemu niko ne priča]`
>
> *"Kako Prosečne Žene Na Balkanu Uživo Privlače Pažnju Najkvalitetnijih Muškaraca – Bez Razgolićavanja, Aplikacija I Glume – Uz Nešto O Čemu Niko Ne Priča"*

Zašto radi: `Prosečne` = identifikacija (nisi poseban slučaj, ovo je za tebe) · `Uživo` = specifičnost mehanizma · `Bez X, Y, Z` = unaprijed ubija tri najveća straha · `Nešto o čemu niko ne priča` = curiosity gap koji tjera na scroll.

**Formula B — ishod + rok (contentcreator, lowticketbook):**
> `[Postigni konkretan ishod] u [kratkom roku]`
>
> *"Master AI Filmmaking In 2 Days"* · *"How To Turn Cheap Digital Products Into Customer-Getting Machines In 7 Days Or Less!"*

**Formula C — kategorija + recentnost (Masterbox):**
> `Kompletan kurs digitalnog marketinga za 2026`

Slabija sama po sebi — radi samo ako je ime iznad naslova već autoritet (`ISTOK PAVLOVIĆ`). **Za nas: ne koristiti, klijent nema prepoznatljivost na cold trafficu.**

**Zabranjeno u H1:** ime programa, "Pridruži se...", "Dobrodošli", naziv usluge. To je product-aware copy, a FB cold traffic je *nesvjestan* ili *svjestan problema*.

### Blok 3 — Podnaslov (deck)
Jedna do dvije rečenice: **za koga je** + **što točno dobiva** + **jedan removal prigovora**.
- *"The AI Creator Course is for anyone who wants to master AI tools (the easy way). Learn how to go viral, grow your audience, and scale a business."* + `No Subscriptions required.` ← prigovor ubijen već u heru
- *"Nauči sve najnovije – od veštačke inteligencije, copywritinga i brendinga, do Meta oglasa i short-form videa"*

### Blok 4 — Blame removal (jedna rečenica, ogromna težina)
> **"Problem nikada nije bio u tebi."** (signali.net)

Jedna od najjačih rečenica u cijelom setu. Skida krivnju s posjetitelja i time otvara ga da prizna problem. Ekvivalenti:
- *"Most people teach ads like it's still 2010."* — krivnja se prebacuje na tržište/edukatore
- *"Ljudi se ne rađaju zanimljivi, to se uči."* — krivnja se prebacuje na mit
- *"Dizajneri nisu 'rođeni sa smislom za lepo'. To je samo niz pravila za koja ljudi ni ne znaju da postoje."*

**Pravilo:** krivnja uvijek ide na sustav, mit ili lošu informaciju — **nikad na posjetitelja i nikad na neimenovanog "njih".**

### Blok 5 — False solutions (što je već probao i zašto nije upalilo)
Doslovno nabrajanje savjeta koje je avatar već čuo i odbacio. Ovo je dokaz da ga razumiješ.
- *"Bez glupih saveta tipa 'budi fina', 'samo imaj samopouzdanja' ili 'čekaj pravog, doći će'..."*
- *"Forget the fluff. This isn't another 'guru' book filled with recycled ideas."*
- *"Ovo nisu AI gluposti tipa 'Dodik i Tramp jedu ćevape', koje klinci prave u ChatGPTu."*
- *"Prestanite da snimate krindž scenarije koje vam piše ChatGPT"*

**Ovo je najlakši blok za napisati iz upitnika (Q23) i najčešće preskočen.**

### Blok 6 — Mehanizam problema (UMP) → mehanizam rješenja (UMS)
Par. Prvo zašto dosad nije radilo, pa zašto ovo radi.

> *"The secret to making ads work in 2025 is NOT fancy videos or complex funnels… It's low-ticket offers that cover your ad spend and build an unstoppable customer list from Day 1."*

Mehanizam mora biti **imenovan** da bi bio zapamćen i da bi se mogao braniti od "svi to nude":
- `UAVE — tajni metod Istoka Pavlovića za savršenu reklamu`
- `metod jedinstvenog ugla i vizuelnog dokaza`
- `Bilbord test` (kako početi video)
- `The "Ugly Ads" method`
- `The 7 Day Framework`

**Test kvalitete mehanizma:** ima ime · objašnjiv laiku u dvije rečenice · iza njega stoji nešto opipljivo (broj, protokol, godine, mjerenje). Ako je mehanizam pridjev ("holistički pristup", "individualiziran program") — nije mehanizam.

### Blok 7 — Autoritet / tko si ti da to tvrdiš
Uvijek u prvom licu, uvijek s pozicioniranjem protiv kategorije, uvijek s brojkama.

> *"Hi, I'm Hernan Vazquez — and **unlike most 'ad experts' out there**, I've been running ads every single day since 2012 — **not just talking about them.** I've managed over $100M in ad spend, generated over $250M in sales, and built campaigns for Grant Cardone, Frank Kern, Tony Robbins, Russell Brunson… Lionel Messi."*

Tri poluge autoriteta, po padajućoj snazi:
1. **Vlastite brojke** — `$275,000 potrošeno na testiranje AI oglasa` · `160,000 studenata` · `5000+ kompanija na edukacijama` · `140.000 pratilaca za dva meseca`
2. **Posuđeni autoritet** — imena brendova i ljudi s kojima si radio (`Fashion And Friends`, `Grant Cardone`), gostujući eksperti (Fempire nabraja poznata imena s prošlih programa)
3. **Vremenska dubina** — `15 godina` · `od 2012 svaki dan`

**Story arc koji se ponavlja u 3 od 5:** skeptik → uložio vrijeme/novac u testiranje → pogriješio → "cracked the code" → sad ovo. (*"When AI first started blowing up, I thought it was a gimmick... And at the time... I wasn't wrong... But eventually, I cracked the code."*) Ovaj arc čini autoritet probavljivim umjesto hvalisavim.

### Blok 8 — Dokaz (najvažniji blok; detaljna hijerarhija u sekciji 3)
Uvijek se pojavljuje **najmanje dva puta** na stranici: rani blok (odmah nakon herja ili autoriteta) i kasni blok pod naslovom tipa `STILL NOT CONVINCED? SEE WHAT OTHERS ARE SAYING...`

### Blok 9 — Što točno dobivaš (sadržaj / plan)
Dva različita načina, ovisno o arhetipu:

**a) Direct sale → curiosity bullets**
> `WHAT'S ACTUALLY INSIDE THIS BOOK (NO FLUFF. NO FILLER.)`
> · The 7 Day Framework for launching profitable low-ticket offers
> · The "Ugly Ads" method that crushes fancy creatives
> · How to turn $5 buyers into high-ticket clients

Svaki bullet = imenovana stvar + implicirana korist + curiosity gap. Nikad "Modul 3: Napredne tehnike".

**b) High-touch program → plan u koracima**
Fempire nabraja korak 1–6 (uvodni poziv → tutorijali → tjedni Zoom live → dnevni chat → zajednica → picnic day). Svaki korak objašnjava **mehaniku** i **usput ubija prigovor**:
> *"Bez brige, ne moraš da gledaš ako te to smara ili nemaš vremena, učićeš sa Zoomova ili nas pitaj na Whatsappu."*

**Za nas je (b) relevantniji** — naša ponuda je program, ne proizvod. Ali plan na stranici opisuje **put klijenta**, ne našu stavku iz ponude.

### Blok 10 — Show, don't tell (dokaz outputa)
Contentcreator ne opisuje kakve slike AI radi — pokaže 20+ galerija (fashion, wildlife, logotipi, thumbnaili, product shots) i doda cijenu: `koštalo me manje od 25 centi`. Masterbox ugrađuje Instagram postove s brojem lajkova.

**Self-referential dokaz — koristi obje stranice, i vrlo je jak:**
> *"So much of this page that you're viewing right now was created with AI."* (contentcreator)
> *"Cela ova stranica koju sada gledate drži pažnju jer je primenjeno ovo znanje. Vidite?"* (Masterbox)

Stranica sama sebi postaje dokaz. Ovo je besplatno i uvijek dostupno.

### Blok 11 — Kvalifikacija i diskvalifikacija
> `This course is for you if:` … / `You Probably Shouldn't Join If...`

Diskvalifikacija diže percipiranu selektivnost i filtrira loše leadove. Contentcreator ide dalje i diskvalifikaciju piše kao provokaciju: *"You do not care about SPEED!"*

### Blok 12 — Ponuda / cijena / anchor  **(kod nas: NE ide na stranicu)**
Kako to rade oni:
- Anchor + popust: `$98` prekriženo `$298`, `68% off`
- Bonus stack s vrijednošću: `An extra $196 worth of training & templates included during this sale`
- Reframe cijene na trivijalnu usporedbu: *"Za samo 200 evra mesečno... Seti se koliko puta si izdvojila više novca za neki komad garderobe koji si obukla svega jednom."*
- Jasni uvjeti pristupa: `150 lekcija u 12 modula, pristup traje 6 meseci`

**Kod nas ovo cijelo ide na poziv.** Na stranicu ide samo blok 13.

### Blok 13 — Ponuda POZIVA *(naš ekvivalent blokova 12)*
Poziv mora imati vlastitu vrijednost neovisno o kupnji. Model iz Fempire koraka 1:
> *"Zakazaćemo Zoom konsultacije. Tu ćemo da vidimo gde ste sada i šta treba da uradite... Napravićemo plan koji ćete dobiti kao pisani dokument i odatle krećemo dalje."*

Opipljiv output poziva (**pisani dokument**) — to je ono što se prodaje na stranici.
Loše: "besplatne konzultacije". Dobro: `[Ime] razgovor: dobiješ [konkretan uvid] i [prvi korak] — bez obzira radiš li s nama.`

### Blok 14 — Preuzimanje rizika
> *"I'm so confident this book will deliver that I'll take on all the risk: if you don't LOVE the book and feel it's worth **at least 10x** what you paid… email us within 30 days, full refund, no questions asked."*

Struktura: **izjava sigurnosti → mjerilo (10x) → rok → mehanizam (jedan email) → "no questions asked".**
Kod nas na stranici nema garancije na uslugu (nema kupnje) — ali postoji ekvivalent: **garancija na poziv** ("nema prodaje pod pritiskom", "traje točno 30 minuta", "odlaziš s planom").

### Blok 15 — Hitnost / oskudica
Tri korištena oblika, po padajućem poštenju:
1. **Countdown timer** na stvarnu akciju (contentcreator: Cyber Monday, `00 DAYS 21 HOURS 55 MINS`)
2. **Ograničen kapacitet** (lowticketbook: `Hurry! Stock of this book as of August 30 is low` — **datum se dinamički ispisuje na današnji dan**, što je na granici; ali print run knjige je stvaran)
3. **Cjenovni prozor** (`68% off` do datuma)

**Naše pravilo:** lažna hitnost na cold trafficu radi jednom i ubija povjerenje kod publike koja te tek upoznaje. Ako kapacitet nije stvaran → blok se izostavlja. Kod nas je kapacitet **stvarno ograničen** (broj klijenata mjesečno) i to se smije koristiti doslovno.

### Blok 16 — FAQ = prigovori
Kritično zapažanje: FAQ na ovim stranicama **ne odgovara na pitanja o proizvodu, nego na prigovore na samu konverzijsku radnju.**
lowticketbook (besplatna knjiga): *"Is there really no catch?" · "Do I need to buy anything else?" · "Why are you giving this away for free?" · "What if I don't like the book?"*

**Prevedeno na nas (stranica prodaje poziv), FAQ mora glasiti:** Hoće li mi netko prodavati? · Koliko stvarno traje? · Je li stvarno besplatno? · Je li ovo za mene ako [situacija]? · Što ako nemam [preduvjet]?
**Prigovori na kupnju (cijena, "moram pitati partnera", "nemam vremena") NE idu na stranicu** — rješavaju se na pozivu.

### Blok 17 — Finalni CTA + P.S.
> *"P.S. ✉ If you're tired of complex funnels, dead leads, and ad costs that burn your budget… This book will give you the proven roadmap to finally make your ads profitable. But remember — once this print run is gone, it's gone."*

P.S. je zadnji blok teksta koji ljudi čitaju kad skrolaju. Struktura: **ponovi bol → ponovi obećanje → ponovi rok/ograničenje → CTA.**

### Blok 18 — Pravni podnožje
Sve tri američke stranice imaju identičan set i to nije ukras:
- **FB disclaimer:** *"This site is not a part of the Facebook website or Facebook Inc. … FACEBOOK is a trademark of FACEBOOK, Inc."*
- **Earnings/results disclaimer:** *"Please understand my results are not typical. I'm not implying you'll duplicate them… The average person who buys any 'how to' information gets little to no results."*
- Privacy Policy · Terms & Conditions · Refund Policy · pravni subjekt i adresa

**Ovo nam treba jer oglašavamo edukatore koji obećavaju poslovni/zdravstveni ishod.** Meta odbija stranice bez toga i to je čest razlog odbijenog oglasa.

---

## 2. COPY MEHANIKA — pravila koja se ponavljaju

**2.1 CTA se ponavlja 4–7 puta i tekst je DOSLOVNO isti.**
lowticketbook: `CLAIM MY FREE BOOK NOW` — 7 puta, uvijek s istom pratećom linijom `YOU PAY JUST $9.95 FOR SHIPPING AND HANDLING`. Masterbox: `PRIJAVI SE` — 5 puta, uvijek s `Ovladaj svetom marketinga za samo 365EUR`.
Različite formulacije čitaju se kao različite radnje i troše odluku.

**2.2 Svaki CTA nosi svoj "qualifier" ispod gumba.**
Cijena, uvjet, ili scarcity linija. Nikad goli gumb.

**2.3 Specifičnost je valuta.**
`$275,000` ne `stotine tisuća` · `8 centi` ne `jeftino` · `236.000 evra` ne `veliki promet` · `u 2 dana` ne `brzo` · `1-2 nedelje po videu → danas` ne `puno brže`. **Okrugli broj zvuči izmišljeno, precizan zvuči izmjereno.**

**2.4 Feature → benefit → uklonjen prigovor, u istoj rečenici.**
> *"Create Spectacular Thumbnails in seconds!"* + *"Traditionally you'd need an expensive camera, lens, and professional lighting… or hire a designer for $100-$400. With AI, you can avoid all of this."*

**2.5 "Bez X" konstrukcija se koristi svugdje, ne samo u headlineu.**
`No Subscriptions required` · `Bez aplikacija. Bez igrica.` · `bez skupih studija i komplikacija` · `bez ulaganja u reklame` · `No expensive cameras / No complex software / No HOURS`
Svaki "bez" je jedan strah manje.

**2.6 Pisati u 2. licu, jednini, kao pismo.**
Fempire otvara doslovno pismom: *"Piše: Istok Pavlović / Zdravo,"*. Cijeli tekst je "ti", ne "vi" i ne "polaznice".

**2.7 Konkretna, vizualna slika ishoda umjesto apstrakcije.**
> *"predivan Instagram profil koji te nije sramota da pokažeš ni Rihanni ako je slučajno upoznaš na konferenciji"*
> *"da sve zajedno izgleda kao Netflix serija koju ljudi žele da binge-uju"*
> *"Da vam fotke izgledaju kao sa Pinteresta, a ne 'slikala baba u bašti'"*

Formula: **[željeno stanje] naspram [smiješno konkretno loše stanje]**. Loše stanje mora biti nešto što avatar prepoznaje kao svoje.

**2.8 Cost of inaction, konkretno a ne prijeteće.**
> *"The world of advertising is changing and if you don't embrace these new trends, you'll be left behind wondering why it always feels like you're lighting your marketing budget on fire."*
> *"AI won't replace creators — but creators who leverage AI will absolutely replace the ones who don't."*

**2.9 Anti-guru pozicioniranje kao standardni potez.**
*"unlike most 'ad experts'"* · *"This isn't another 'guru' book"* · *"Most tutorials online are outdated or way too generic"* · *"fake GURU's are running around teaching..."* (u samom testimonijalu!)

**2.10 Modul/sekcija se piše kao transformacija u glasu čitatelja, ne kao popis tema.**
Masterbox, sekcija Dizajn:
> *"Naučićete zašto je nešto lepo, a ne samo da blenete i kažete 'jao što je ovo lepo'."*
> *"Napravićete sami stvari koje ćete gledati i reći 'bože koliko je ovo lepo ispalo, ne verujem'."*

**2.11 Emoji i vizualni markeri koriste se kao skener-pomoć**, ne kao ukras: `✅ ❌ ⚠️ 🎁 👉 💡 ⭐`. Rade jer 90% ljudi skenira, ne čita.

**2.12 Stranica mora imati "smjer".** `Pogledaj ispod` · `Look closely at the AI generated thumbnails above` · `Za kompletnu listu svih lekcija kliknite ovde`. Nikad ne pretpostavljaj da će sam znati što dalje.

---

## 3. HIJERARHIJA DOKAZA  ← ovo određuje faznu izgradnju

Poredano po **omjeru uvjerljivost / trošak nabave**. Ovo je najvažnija tablica u dokumentu jer određuje što se može napraviti u kojem tjednu.

| Rang | Tip dokaza | Uvjerljivost | Trošak / vrijeme | Izvor u analiziranim stranicama |
|---|---|---|---|---|
| 1 | **Native screenshot razgovora** — DM, WhatsApp, FB komentar, s originalnim chromeom platforme, lica i imena blurana | **Vrlo visoka** | ~0 — klijent to već ima u telefonu | signali.net: cijeli proof sloj su IG DM-ovi i FB komentari, ništa drugo |
| 2 | **Case study s imenom i brojkom** | Vrlo visoka | Srednji — treba dopuštenje i podatak | *"Sparrow reklama koja je zaradila milion evra"* · *"Jeat Meals: 200% povećana cela firma zbog jednog videa"* · *"Zlatna haljina: vizuelni dokaz doneo 236.000 evra"* |
| 3 | **Video testimonijal** | Vrlo visoka | Visok — traži organizaciju i montažu | Masterbox: zid od 14+ `PLAY VIDEO` pločica · Fempire: video utisci od 100+ polaznica |
| 4 | **Show-the-output galerija** (rezultat rada, ne mišljenje) | Visoka | Nizak — klijent ima portfolio | contentcreator: 20+ galerija AI slika, thumbnaila, logotipa |
| 5 | **Posuđeni autoritet** — brendovi, klijenti, mediji, gosti | Visoka | ~0 ako postoji | *"Marketing metode Istoka Pavlovića su stvorile najpoznatije domaće brendove"* · imena gostiju na Fempireu |
| 6 | **Agregatna brojka** | Srednje visoka | ~0 — klijent zna napamet | `5000+ kompanija` · `160,000 studenata` · `100M ad spend` |
| 7 | **Embed društvene mreže s brojem lajkova** | Srednja | ~0 | Masterbox i Fempire ugrađuju IG postove s `755 likes`, `169 likes` |
| 8 | **Tekstualni testimonijal s imenom + fotkom** | Srednja | Nizak — 3-7 dana | lowticketbook: 20+ Amazon recenzija s `Verified Purchase ★★★★★` |
| 9 | **Certifikat / diploma / godine prakse** | Niska-srednja | ~0 | `15 years` · `od 2012` |
| 10 | **Tekstualni testimonijal bez imena** | Vrlo niska | ~0 | — nijedna od 5 ovo ne koristi |

**Dva zaključka koja mijenjaju način rada:**

**(a) Rang 1 pobjeđuje rang 8, a besplatan je.** signali.net nosi cijelu stranicu na sirovim screenshotovima poruka — bez ijednog formatiranog testimonijala, bez ijednog imena, bez ijedne fotografije osobe. Zato što izgleda **neproizvedeno**, a formatirani testimonial card izgleda kao marketing. Za klijenta koji "nema testimonijale" ovo je gotovo uvijek neistina — ima ih u WhatsAppu i DM-ovima.

**(b) Verifikacijski marker vrijedi više od duljine teksta.** `Verified Purchase`, plava kvačica, FB reakcije, vidljiv broj lajkova, IG chrome. Kratak dokaz s markerom > dugačak dokaz bez njega.

---

## 4. TRI ARHETIPA STRANICE I KADA KOJI

| | **A — VSL bridge** | **B — Direct sale** | **C — Call booking** ← naš |
|---|---|---|---|
| Primjer | signali.net | lowticketbook, contentcreator, Masterbox | (nema u setu) |
| Duljina | 5-7 ekrana | 30-45 ekrana | **10-15 ekrana** |
| Cilj konverzije | gledanje videa / opt-in | kupnja | ispunjena forma |
| Ponuda i cijena na stranici | ne | da, detaljno | **ne — na pozivu** |
| Dokaz | 4-6 native screenshotova | masivno, u 2-3 bloka | 5-8 komada, 2 bloka |
| Prigovori | nema | FAQ na kupnju | **FAQ na poziv** |
| Garancija | nema | povrat novca | garancija na poziv |

**Pravilo izbora:** što je cijena viša i odluka teža, to stranica manje prodaje proizvod a više prodaje **sljedeći korak**. Naša ponuda je 4.000–16.000 € → stranica ne smije ni pokušati prodati uslugu. Prodaje poziv.

**Anti-pattern koji vidim kao najveći rizik za nas:** kopirati duljinu i strukturu direct-sale stranice (arhetip B) na call-booking stranicu. Rezultat je stranica koja odgovori na sve i time ubije razlog za poziv.

---

## 5. ANTI-PATTERNS (iz onoga što ove stranice namjerno NE rade)

1. **Nema "Dobrodošli" ni "O nama" na vrhu.** Prva rečenica je o čitatelju.
2. **Nema više različitih CTA-ova.** Jedan cilj, jedan tekst gumba.
3. **Nema navigacije u headeru.** Nijedna od 5 nema izbornik — svaki link je izlaz iz funnela.
4. **Nema stručnog žargona bez prijevoda.** *"He doesn't drown you in jargon."*
5. **Nema generičkih stock fotki nasmijanih ljudi.** Sve slike su ili output rada, ili stvarna osoba, ili screenshot.
6. **Nema obećanja bez izvora.** Svaka brojka ima kontekst i vlasnika.
7. **Nema miješanja dvije publike na jednoj stranici.** Fempire je isključivo ženski program i cijeli copy to nosi.
8. **Nema "kontaktirajte nas".** Uvijek konkretna radnja s poznatim ishodom.

---

## 6. POPIS ULAZA OD KLIJENTA
### Što nam treba da bismo uopće mogli isporučiti kvalitetnu stranicu

Podijeljeno na **GATE** (bez ovoga se ne piše ni redak), **BRZO** (ima ga ili ga skupi u 48h) i **SPORO** (traži produkciju).

---

### 6.1 GATE — bez ovoga stranica se ne radi

| # | Što tražimo | Zašto (koji blok stranice ovisi o tome) |
|---|---|---|
| G1 | **Potvrđena ponuda** — koja je JEDNA ponuda koju guramo (PRIMARY), za koju publiku | Cijela stranica. Dvije publike = dvije stranice. |
| G2 | **Avatar u njegovim riječima** — dob, situacija, svakodnevica, i **doslovni citati kako sam opisuje problem** | H1, podnaslov, blame removal, kvalifikatori |
| G3 | **Što je avatar već probao i zašto nije upalilo** — konkretni savjeti/rješenja koja je odbacio | Blok 5 (false solutions) — bez ovoga stranica zvuči kao svaka druga |
| G4 | **Okidač** — što se dogodi u životu da baš sad traži rješenje | Hook, prvi paragraf |
| G5 | **Mehanizam problema (UMP)** — klijentovo objašnjenje zašto ljudi ne uspijevaju | Blok 6, i najjača diferencijacija na stranici |
| G6 | **Mehanizam rješenja (UMS) + IME metode** | Blok 6, H1 opcija, ads kutovi |
| G7 | **Obećanje:** konkretan ishod + rok + najveća žrtva koje se boji ("bez čega") | H1 |
| G8 | **Prvi vidljivi pomak** — što klijent osjeti/vidi prvo i kada | Value equation, "vrijeme do rezultata" |
| G9 | **Što se smije tvrditi, a što ne** — eksplicitno, potpisano | Proof Bank. Bez ovoga riskiramo Meta ban i klijentov pravni problem |
| G10 | **Cijena i model plaćanja** (NE ide na stranicu, ide na poziv) | Kvalifikacijska pitanja u formi, priprema poziva |
| G11 | **Definicija poziva:** ime, trajanje, tko ga vodi, što posjetitelj odnosi i ako ne kupi | Blok 13 — to je jedina stvar koju stranica prodaje |
| G12 | **Top 5 prigovora na REZERVIRANJE poziva** (ne na kupnju) | FAQ blok |
| G13 | **Tko NIJE za ovo** | Diskvalifikacijski blok |

---

### 6.2 BRZO — dokazi i imovina koje klijent već ima (traži se u 48h)

| # | Što tražimo | Kako to tražiti da stvarno dobiješ |
|---|---|---|
| B1 | **Screenshotovi razgovora** — DM, WhatsApp, komentari, mailovi zahvale | *"Pretraži WhatsApp i Instagram DM po riječima 'hvala', 'uspjelo', 'preporučila'. Pošalji 10 screenshotova, ne moraš ništa brisati — mi bluramo."* ← **rang 1 dokaz, najveći ROI od svih pitanja** |
| B2 | **Brojke** — godina rada, broj klijenata, broj obrađenih slučajeva, broj polaznika, ukupan promet ako smije | Traži precizne brojeve, ne raspon |
| B3 | **Imena brendova / poznatih klijenata / medija** + dopuštenje za spominjanje | Posuđeni autoritet |
| B4 | **Certifikati, diplome, edukacije, članstva** | Blok autoritet |
| B5 | **Prije/poslije ili output rada** — fotke, rezultati, dokumenti, snimke | Rang 4 dokaz |
| B6 | **Postojeći sadržaj s najboljim rezultatom** — 3 najgledanija posta/reela + brojke | Embed, i ujedno signal koji kut radi |
| B7 | **Google / FB recenzije** — link | Rang 8 dokaz, ali s markerom |
| B8 | **Osobna priča klijenta** — kako je došao do metode, što je pokušao prije, gdje je pogriješio | Blok 7 (story arc). Traži se na pozivu, ne pismeno. |
| B9 | **Jedna dobra fotografija klijenta** (ne stock, ne selfie) | Blok autoritet |
| B10 | **Tehnika:** domena ili subdomena, tko je vlasnik, gdje su DNS | Bez toga nema launcha |
| B11 | **Meta Business pristup + pixel/dataset**, GA ako ima | Tracking; bez toga se ne mjeri ništa |
| B12 | **Pravni podaci:** naziv subjekta, OIB, adresa, kontakt mail, postojeći privacy/uvjeti | Podnožje, blok 18 — uvjet za odobrenje oglasa |
| B13 | **Kalendar / booking sustav** i tko preuzima pozive, u kojim terminima | Bez toga forma nema odredište |
| B14 | **Brand osnove:** logo, 2 boje, font — ili odobrenje da mi biramo | Vizual; **ne čeka se puni brand book** |

---

### 6.3 SPORO — traži produkciju, NE blokira launch

| # | Što | Realno vrijeme | Kada se dodaje |
|---|---|---|---|
| S1 | Tekstualni testimonijali s imenom, fotkom i konkretnim rezultatom (3-5 kom) | 3-7 dana | v2 |
| S2 | Video testimonijali (2-4 kom, po 30-60 s) | 2-4 tjedna | v3 |
| S3 | Case study s brojkom i imenom klijenta | 1-2 tjedna | v2/v3 |
| S4 | VSL | 2-4 tjedna | v3, **tek nakon što ads test pokaže pobjednički kut** |
| S5 | Profesionalna foto/video sesija klijenta | 2-4 tjedna | v3 |
| S6 | Puni brand book | — | nikad kao uvjet za stranicu |

---

### 6.4 Supstituti — što raditi kad klijent nema traženo

| Nema | Supstitut koji radi odmah |
|---|---|
| Testimonijale | Screenshotovi razgovora, blurani (rang 1 — često **bolji** od testimonijala) |
| Brojke o rezultatima klijenata | Vlastita brojka i vlastiti rezultat + godine prakse + imenovan protokol |
| Case study | "Tipičan slučaj" opisan kao priča bez imena, s naznakom da je anonimizirano |
| Video | Statična stranica s jakim tekstom — **sve 3 direct-sale stranice funkcioniraju i bez gledanja videa** |
| Poznate klijente | Mediji, gostovanja, podcasti, predavanja, konferencije |
| Fotografije outputa | Show-the-process: screenshotovi alata, protokola, dokumenata koje koristi |
| Bilo kakav dokaz (potpuno nov) | Self-referential dokaz (*"ova stranica je napravljena metodom koju učimo"*) + preuzimanje rizika + garancija na poziv |

---

## 7. FAZNA IZGRADNJA STRANICE

Ovo je odgovor na "nemam VSL odmah, nemam testimonijale odmah".

**Načelo:** stranica se pušta u promet na v0. Svaka sljedeća verzija dodaje **samo dokazni sloj**, nikad ne dira strukturu ni copy okosnicu. Zato se v0 mora napisati tako da dokazni blokovi budu **prazni slotovi koji se pune**, a ne rupe koje ruše tekst.

---

### v0 — Tekstualna stranica *(dan 1–3, sve iz GATE + B1-B4)*
**Sadrži:** eyebrow · H1 po formuli A · podnaslov · blame removal · false solutions · UMP→UMS s imenom metode · autoritet s brojkama i pričom · plan u koracima (put klijenta) · kvalifikacija/diskvalifikacija · ponuda poziva · FAQ na poziv · forma · pravno podnožje · P.S.
**Dokazni sloj:** samo brojke, kvalifikacije, posuđeni autoritet, i screenshotovi ako ih je klijent poslao.
**Ovo je 80% konverzijskog potencijala stranice.** Pušta se promet.

> Obrana ove odluke prema klijentu: sve tri direct-sale stranice iz analize čitljive su i uvjerljive **bez ijednog odgledanog videa**. Video je pojačalo, nije nosač.

---

### v1 — + native social proof *(tjedan 1–2, nula produkcije)*
Ubacuju se blurani screenshotovi DM-ova, WhatsApp poruka, FB/IG komentara, i embed 1-2 najbolja posta.
Ovo je jedini korak koji podiže konverziju bez ijednog sata produkcije — zato ide odmah nakon launcha, **ne čeka se s v0**, nego se paralelno traži od klijenta.

---

### v2 — + tekstualni dokaz i prvi case study *(tjedan 2–4)*
Izvor materijala nije "nova produkcija" nego **ono što je funnel u međuvremenu proizveo:**
- reaktivacija baze i pilot kampanja već su generirale stvarne razgovore → iz njih izlaze citati
- prvi obavljeni pozivi → iz njih izlaze prigovori koje treba dodati u FAQ i rečenice koje su ljude uvjerile

**Ovdje se radi i prva revizija copyja na temelju podataka:** koji kut iz oglasa ima najbolji CTR → taj kut postaje H1 na stranici.

---

### v3 — + video *(mjesec 1–2)*
VSL i video testimonijali. **Kritično: VSL se piše po pobjedničkom kutu iz ads testa, nikad prije.**
Snimiti 8-minutni VSL prije nego znaš koji kut konvertira je najskuplja pojedinačna greška u cijelom procesu — potroši se 2-4 tjedna produkcije na poruku koja možda ne radi.

Redoslijed unutar v3: **prvo video testimonijali** (kraći, jeftiniji, viši rang dokaza), **pa VSL**.

---

### Što se NIKAD ne čeka
Puni brand book · profesionalna fotografska sesija · redizajn logotipa · finalni video · "kad klijent bude imao vremena". Nijedno od toga ne ulazi u kritični put stranice.

---

### Faze mapirane na naš delivery redoslijed

| Naša faza | Verzija stranice | Što je ulaz |
|---|---|---|
| Onboarding poziv + 100 pitanja | — | prikuplja GATE |
| Offer Blueprint POTVRĐEN | gate se otvara | G1–G13 |
| Reaktivacija baze | v0 live | GATE + B1-B4 |
| Pilot engagement kampanja | v1 | screenshotovi razgovora iz reaktivacije |
| Prvi pozivi obavljeni | v2 | citati, novi prigovori, pobjednički kut |
| Booking kampanja / full launch | v3 | VSL po pobjedničkom kutu |

---

## 8. QA CHECKLIST PRIJE LAUNCHA

1. Obećanje iz oglasa i H1 na stranici koriste **iste riječi**?
2. H1 sadrži ishod, i **ne** sadrži ime programa ni "Pridruži se"?
3. Postoji rečenica koja skida krivnju s posjetitelja?
4. Nabrojana su konkretna rješenja koja je već probao?
5. Mehanizam ima **ime**?
6. Svaka brojka na stranici postoji u Proof Banku i označena je kao dopuštena?
7. Tekst CTA gumba je **doslovno identičan** na svih 4-6 mjesta?
8. Ispod svakog CTA stoji qualifier linija?
9. Postoje najmanje dva odvojena dokazna bloka?
10. FAQ odgovara na prigovore **na poziv**, ne na kupnju?
11. Cijena, stack i garancija na uslugu **nisu** na stranici?
12. Poziv ima ime i opipljiv output koji vrijedi i bez kupnje?
13. Nema navigacije, nema vanjskih linkova osim pravnih?
14. Pravno podnožje: FB disclaimer, results disclaimer, privacy, uvjeti, pravni subjekt?
15. Forma: kontakt + **najviše 3** kvalifikacijska polja?
16. Ispod forme stoje 3 koraka "što se događa nakon slanja"?
17. Postoji P.S. blok?
18. Ako postoji hitnost — je li **stvarna**?
19. Testirano na mobitelu (85%+ prometa dolazi s IG-a)?
20. Pixel/dataset okida na view i na submit?

---

## 9. VEZA S POSTOJEĆIM `OFFER-BLUEPRINT` TEMPLATEOM

Blueprint već pokriva: avatar i razinu svjesnosti (sek. 2), UMP/UMS (3-4), obećanje i Value Equation (5), Proof Bank s pravilom dopuštenja (8), ponudu poziva (9), formu (10), razdvojene prigovore na poziv vs kupnju (11), output tablice za LP i ads (12-13), pravilo identičnog CTA teksta.

**Što u blueprintu nedostaje, a proizlazi iz ove analize:**

1. **Izbor arhetipa stranice** (VSL bridge / direct sale / call booking) — trenutno se pretpostavlja
2. **Inventar dokazne imovine s rangovima i fazama** (sekcija 3 i 7 ovog dokumenta) — blueprint traži testimonijale, ali ne zna za rang-1 screenshotove ni za supstitute
3. **Blame removal i false-solutions polja** kao zasebni obavezni output — postoje kao ulaz (Q23), ne kao izlaz za copy
4. **Blok "plan u koracima"** — put klijenta nakon poziva; nema ga u output tablici za LP
5. **Tehnički i pravni preduvjeti** (domena, pixel, privacy, uvjeti, disclaimeri, booking) — nigdje
6. **Wireframe / redoslijed blokova** — blueprint daje sadržaj, ne raspored
7. **Verzioniranje stranice v0→v3** i pravilo *"VSL tek nakon pobjedničkog kuta"*

**Prijedlog:** ovih 7 stvari ne ide u `sales-page` skill kao nove sekcije blueprinta, nego kao **dvije nove sekcije u blueprintu (arhetip + inventar dokaza s fazama)** i **ostatak kao interna logika skilla**. Time blueprint ostaje dokument koji klijent-facing proces puni, a skill nosi znanje.

---

*Dokument izveden iz analize: lowticketbook.com · contentcreator.com · istokpavlovic.com/masterbox · Fempire (TTB Academy) · signali.net — kolovoz 2026.*
