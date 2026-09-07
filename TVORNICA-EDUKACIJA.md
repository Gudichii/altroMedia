# Tvornica Edukacija — landing

Landing stranica za GoHighLevel white-label pretplatu, namijenjena edukatorima
(treneri, nutricionisti, coachevi, instruktori).

Postoje **dvije verzije iste stranice**. Ako mijenjaš tekst ili cijene, mijenjaj
onu koju stvarno koristiš — nisu automatski povezane.

## 1. HTML verzija za GoHighLevel (glavni deliverable)

**`public/ghl/tvornica-edukacija.html`** — jedan samostalni fajl: stilovi, markup
i skripta zajedno. Bez Reacta, bez builda, bez vanjskih ovisnosti osim Google
Fontsa (Poppins).

### Paste u GHL

1. Sites → Funnels → New Funnel → nova stranica, template **Blank**
2. Row → Column → element **Custom JS/HTML** (Code)
3. Kopiraj cijeli sadržaj fajla i zalijepi
4. U postavkama Sectiona/Rowa: **Full Width = ON**, padding = 0

Ako Full Width ostane isključen, GHL stisne stranicu u svoj container širine
~1140px. Stranica i tada radi, samo hero pozadina nije preko cijele širine.

### Što se mijenja u fajlu

| Što | Gdje |
|---|---|
| Cijene i sadržaj paketa | potraži oznaku `CIJENE` |
| Stripe checkout linkovi | potraži `TODO:STRIPE` (3 mjesta) |
| Kontakt mail / booking link | potraži `TODO:KONTAKT` |
| Boje | CSS varijable na vrhu, `.te-root { --te-... }` |
| FAQ, mogućnosti, koraci | označene `<!-- ====== SEKCIJA ====== -->` blokovima |

### Zašto su sve klase `te-`

Sva CSS pravila kreću od `.te-root` i koriste `te-` prefiks. Razlog: GHL tema ima
vlastita pravila (`h1, h2, h3 { font-family: ... }`, `a { color: ... }`,
`ul, li { list-style: disc }`) koja bi inače pregazila stranicu. Reset unutar
wrappera postavlja `font-family`, `color`, `font-size` i `line-height` na
`inherit` upravo zato — testirano protiv simulacije GHL stilova.

### Ograničenja custom code pristupa

- GHL builder ne može vizualno editirati ovaj sadržaj — svaka izmjena ide kroz kod.
- GHL native elementi (forme, order form, calendar embed) ne rade unutar custom
  HTML-a. CTA gumbi moraju voditi na Stripe Payment Link ili na zasebnu GHL
  stranicu s formom/checkoutom.
- Ako builder muči s velikim blokom, razbij fajl po sekcijama u više Code
  elemenata — sekcije su međusobno neovisne, samo `<style>` blok mora ostati uz
  prvu.

Fajl radi i samostalno: otvori ga u pregledniku ili posluži na
`/ghl/tvornica-edukacija.html` (Next ga servira iz `public/`).

## 2. React/Next verzija (za hosting na Vercelu)

Ruta `/tvornica-edukacija`, ista stranica komponentizirana:

- Stranica: `src/pages/tvornica-edukacija.js`
- Sekcije: `src/components/tvornica/*`
- Stilovi: `src/styles/tvornica.module.scss`
- Sadržaj i cijene: `src/data/tvornica.js`

Koristi ovu verziju ako stranicu hostaš na vlastitoj domeni preko Vercela, a GHL
koristiš samo za CRM, checkout i automatizacije. Tada se cijene i tekstovi
mijenjaju u `src/data/tvornica.js`, a GHL fajl ne treba.

### Stripe

U Stripeu: **Payment links → Create link** (jedan po paketu), pa u
`src/data/tvornica.js`:

```js
export const CHECKOUT = {
  start: 'https://buy.stripe.com/...',   // 97 EUR/mj pretplata
  pro: 'https://buy.stripe.com/...',     // 197 EUR/mj pretplata
  launch: 'https://buy.stripe.com/...',  // 1.500 EUR jednokratno
};
```

Dok su prazni, gumbi vode na `#kontakt` sekciju.

### Recenzije

`TESTIMONIALS` je namjerno prazan niz — sekcija se ne renderira dok ne dodaš prave
recenzije. HTML verzija tu sekciju uopće nema; dodaj je kad budeš imao recenzije.

## Lokalno pokretanje

```bash
npm install
npm run dev
# React verzija:  http://localhost:3000/tvornica-edukacija
# GHL HTML fajl:  http://localhost:3000/ghl/tvornica-edukacija.html
npm run build     # provjera produkcijskog builda
```
