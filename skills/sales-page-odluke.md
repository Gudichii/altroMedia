# sales-page — odluke i otvorena pitanja

> **Ovo NIJE skill.** Ovo su bilješke iz razgovora s Karlom (rujan 2026) koje treba
> potvrditi prije nego išta uđe u `skills/sales-page/`. Ne gradi skill iz ovoga bez
> Karlove potvrde — dio je još otvoren.

## Gdje smo stali

`offer-creation` je napravljen i pushan. `sales-page` NIJE započet — namjerno, jer se
prvo skuplja materijal. Redoslijed dogovoren s Karlom:

1. DR referentni dokument (sve naučeno iz swipe filea + izvora dolje) → Karlo pregleda i vrati
2. Client intake lista + fazni plan izrade stranice
3. Tek onda `skills/sales-page/`

## BLOKADA — swipe file je na Karlovom desktopu

Karlo ima mapu PDF-ova landing pageva **lokalno na desktopu** (spominjao je putanju tipa
`Copywrithing > LANDING`). Cloud sesija ju ne vidi. Pretražen cijeli Drive — nije tamo.

**Skill se treba slagati po tim stranicama.** Bez njih se ne kreće dalje s korakom 1.

Ako radiš iz lokalnog terminala: nađi tu mapu na desktopu, pročitaj PDF-ove, i predloži
Karlu da ih uploada u `CC DELIVERY > INTERNAL DOCS > Landing Swipes` (paralelno s
`Ad Swipes` koji već postoji i na koji se `brand-book` poziva) da postanu trajni dio sustava.

## Potvrđene odluke

| Tema | Odluka |
|---|---|
| Output stranice | GoHighLevel — copy + struktura sekcija, NE gotov HTML |
| Cijena na stranici | Nikad, osim ako je ispod 200 EUR |
| Cijena kod 2-3k ponude | "Book a call" / prijava umjesto cijene — cijena bez konteksta ubija konverziju |
| Value stack kod konzultacijskog poziva | Opisuje **edukaciju/program**, ne poziv |
| Testimonial caption | Mora biti REZULTAT, ne kompliment ("s 2k na 8k/mj", ne "puno sam naučio") |
| Broj case studyja | 3 jaka > 20 kratkih (za DWY/uslugu) |
| Urgency bez cijene | Datumi grupa, "radim s 3 klijenta mjesečno" — samo ako je istinito |
| "Ovo je za tebe ako..." | Ide na stranicu (pozitivna kvalifikacija) |
| VSL na dan 1 | Ne postoji — banner/slika placeholder + **dvije verzije hero copyja** |
| VSL brief | Zaseban deliverable (task + struktura za klijenta). Predloženo unutar `sales-page` |

## Otvorena pitanja za Karla

1. **CTA na više mjesta** — Karlo je rekao "ne mora", ali DIT stranica ga ima na tri mjesta
   (ispod VSL-a, sticky na vrhu, u sekciji termina). Standard ili opcionalno?
2. **Redoslijed sekcija** — treba doći iz swipe filea, ne iz generičkog predloška.
3. **Koja polja su stvarno obavezna** prije nego stranica smije van.

## Napomena o `offer-creation`

`references/handoff-polja.md` sadrži mapiranje na 11 GHL sekcija i popis od 14 obaveznih
polja. **To je napisano bez Karlove potvrde i treba izaći odande** — struktura stranice je
briga `sales-page` skilla, ne `offer-creation`. Popis polja koje ponuda proizvodi ostaje.

Konkretno: `cijena` je tamo označena kao obavezna, što je u sukobu s pravilom da cijena
najčešće ne ide na stranicu.

## Izvori

**Na Driveu (fileId, čitaj preko Google Drive MCP-a):**

| Što | fileId | Zašto |
|---|---|---|
| `KOSTUR` | `1jKiRwhf9HoPEl0AJVYy9_PNgfHNm2BmyKL26JFp5iOw` | Karlov teardown Istokove stranice — izvor većine pravila u tablici gore |
| `LANDING` | `15Nieb58Vl8I8Y4siK68HTvUr1rwz9V-i_4g_CMzj5yc` | Karlova vlastita stranica (Expert Factory) |
| `HOOKS-2.pdf` | `1rG--ZOjQSs8qRNQxKrUICI41q-pFAfLv` | Sirovina za `hooks.md` |
| `HeadlineWrithing.pdf` | `1q1ZB99_wQicEtyMiDyXo1UZWgxkn7tUK` | Sirovina za `hooks.md` |
| `copywriting-puskice.pdf` | `1VMq_aI4Pnx4_7k27TsewIocCW6X1qhe_` | Sirovina za `copy-fundamentals.md` |
| `SWIPE FILE🗃️` (mapa) | `1vxa9QOpQfzjCX9pVOVvOIrPwu_ffwvOl` | Sadrži gornja tri |
| `MAIN🫵🏻 > LANDING` (mapa) | `1D8BgrYfoZuY_lRQC1Jt7s5fip12yPOUT` | Karlova radna mapa: KOSTUR, LP-2, VELIKE RUPE, TESTEMONIALS |

**Živi primjer:** `ditinstitut.com` — stranica koju je Karlo napravio za klijenticu.
Egress policy cloud sesije ju blokira; iz lokalnog terminala je dostupna, pročitaj ju.

Struktura koju sam iščitao sa screenshotova (potvrditi protiv živog sajta):

1. Announcement bar s datumima grupa
2. Eyebrow (ime instituta + eksperta) → H1 (serif) → subheadline
3. VSL 47 min + CTA odmah ispod
4. Sticky CTA na scroll
5. Stat traka (15+ država / 5 ocjena / 5 dana) + badgevi (CERTIFIKAT, MEĐUNARODNO PRIZNATO)
6. Video testimonijali u gridu 4×, 8+ komada, s imenima
7. "Ovo je za tebe ako..." — 5 checkmarkova + fotka eksperta
8. "Zašto klasične metode ne rješavaju problem do kraja" — problem/neprijatelj, U TEKSTU
9. Mehanizam *(screenshot nedostaje)*
10. Value stack *(screenshot nedostaje)*
11. "Dostupni termini edukacije" — tablica grupa/termin/format + booking kartica + 3 koraka
12. FAQ 10+ *(screenshot nedostaje)*
13. Footer *(screenshot nedostaje)*

Nedostaju screenshotovi 9, 10, 12, 13 — zatraži ih od Karla ili pročitaj sa živog sajta.

**Web tokeni s DIT stranice** (`brand-book` ih nema, a `sales-page` ih treba — vidi
`skills/README.md`): krem pozadina, tamno tirkizni CTA, tamnoplavi tekst, lavanda sekcijska
pozadina, žuti announcement bar, serif naslovi + sans body. Uzmi točne hex vrijednosti sa
živog sajta, ne s procjene sa screenshota.

## Karlov originalni plan-doc

https://docs.google.com/document/d/1EbLiSJzZWpGbIGqUj4Lm7x3Z3Kdwy2U502syGxlHXgg/edit

Linkovi u njemu pokazuju na `/blob/main/copywriting/...` i ne rade — skillovi su pod
`skills/` u ovom repou. Vrijedi ispraviti doc.
