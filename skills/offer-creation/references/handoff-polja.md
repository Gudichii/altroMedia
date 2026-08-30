# HANDOFF polja — ugovor prema sales-page i ad-creation

Ova sekcija ide na kraj dokumenta `[Klijent] - Ponuda`.

Nizvodni skillovi je čitaju umjesto da ponovno interpretiraju cijelu ponudu. Zato vrijedi
jedno pravilo: **upiši doslovan tekst koji ide na stranicu, ne opis onoga što bi tamo trebalo
pisati.** Loše: "headline koji naglašava brzinu rezultata". Dobro: "Do prve bezbolne noći za
6 tjedana — bez tableta."

Polje bez izvora upiši kao `NEDOSTAJE`. Ne popunjavaj ga aproksimacijom — nizvodni skillovi
prepoznaju `NEDOSTAJE` i stanu s jasnom porukom, što je ispravno ponašanje.

---

## Tablica polja

Format u dokumentu: tablica s stupcima **Polje | Vrijednost | Izvor**.

| Polje | Iz koje sekcije ponude | Troši | Obavezno |
|---|---|---|---|
| `hero_headline` | 4. Veliko obećanje | sales-page, ad-creation | ✅ |
| `hero_headline_alt` | 4. (2-3 alternative) | sales-page, ad-creation | ✅ |
| `hero_subheadline` | 1. Ponuda u jednoj rečenici | sales-page | ✅ |
| `cta_tekst` | 14. Sljedeći korak (tekst gumba) | sales-page, ad-creation | ✅ |
| `cta_akcija` | 14. (što se događa nakon klika) | sales-page | ✅ |
| `publika` | 2. Ciljna publika | sales-page, ad-creation | ✅ |
| `bol_citati` | 3. Bolna točka (doslovni citati) | sales-page, ad-creation | ✅ |
| `vec_probali` | 2. (što su probali, zašto nije upalilo) | sales-page | — |
| `mehanizam` | 5. Mehanizam | sales-page, ad-creation | ✅ |
| `deliverables` | 6. Što kupac dobiva (tablica) | sales-page | ✅ |
| `format_trajanje` | 7. Format i trajanje | sales-page | ✅ |
| `cijena` | 8. Cijena | sales-page | ✅ |
| `placanje_opcije` | 8. Opcije plaćanja | sales-page | — |
| `hitnost` | 8. (rok early-bird / sezonska cijena) | sales-page, ad-creation | — |
| `garancija` | 9. Garancija | sales-page | ✅ |
| `bonusi` | 10. Bonusi | sales-page | — |
| `dokazi` | 11. Dokazi | sales-page, ad-creation | ✅ |
| `faq` | 12. Prigovori i odgovori (min 5) | sales-page | ✅ |
| `nije_za` | 13. Za koga NIJE | sales-page | — |
| `ton` | Brand Book (pridjevi + primjer fraze) | sales-page, ad-creation | ✅ |

**Obavezno = 14 polja.** Ponuda je spremna za `sales-page` samo ako nijedno od njih nije
`NEDOSTAJE`. To eksplicitno navedi u završnom sažetku.

---

## Mapiranje na GHL sekcije

`sales-page` isporučuje copy + strukturu sekcija za GoHighLevel page builder. Ovo je redoslijed
sekcija i polja koja svaka troši — držati ga fiksnim znači da Karlo u GHL-u uvijek slaže istu
kosturnicu:

| # | GHL sekcija | Polja |
|---|---|---|
| 1 | Hero (above fold) | `hero_headline`, `hero_subheadline`, `cta_tekst` |
| 2 | Problem / prepoznavanje | `bol_citati`, `publika` |
| 3 | Zašto dosad nije radilo | `vec_probali` |
| 4 | Rješenje / mehanizam | `mehanizam` |
| 5 | Što dobivaš | `deliverables`, `format_trajanje` |
| 6 | Dokazi | `dokazi` |
| 7 | Ponuda i cijena | `cijena`, `placanje_opcije`, `bonusi`, `hitnost` |
| 8 | Garancija | `garancija` |
| 9 | Za koga nije | `nije_za` |
| 10 | FAQ | `faq` |
| 11 | Završni CTA | `hero_headline_alt`, `cta_tekst`, `cta_akcija` |

Jedan CTA kroz cijelu stranicu — `cta_tekst` je isti u sekciji 1 i 11. Ako se pojavi potreba za
drugim CTA-om, to je signal da ponuda ima dva puta i da treba odluka, ne dva gumba.

---

## Napomena za ad-creation

`ad-creation` trenutno izvodi copy formulu (Claim / Mehanizam-dokaz / Stakes / CTA) iz Brand
Booka. Kad `[Klijent] - Ponuda` postoji, ona ima prednost:

- Claim ← `hero_headline` i `hero_headline_alt`
- Mehanizam-dokaz ← `mehanizam` + `dokazi`
- Stakes ← `bol_citati`
- CTA ← `cta_tekst`

Brand Book i dalje daje boje, fontove i ton — ali ne više i sadržaj tvrdnje.
