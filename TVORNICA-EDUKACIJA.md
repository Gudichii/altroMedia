# Tvornica Edukacija — landing

Landing stranica za GoHighLevel white-label pretplatu, namijenjena edukatorima
(treneri, nutricionisti, coachevi, instruktori).

- Ruta: `/tvornica-edukacija`
- Stranica: `src/pages/tvornica-edukacija.js`
- Sekcije: `src/components/tvornica/*`
- Stilovi: `src/styles/tvornica.module.scss`
- **Sav sadržaj i cijene: `src/data/tvornica.js`**

## Što se mijenja gdje

Sve što se realno mijenja (cijene, tekstovi paketa, FAQ, popis alata, kontakt,
Stripe linkovi) je u `src/data/tvornica.js`. Komponente se ne diraju.

### 1. Stripe checkout

U Stripeu: **Payment links → Create link** (jedan link po paketu), pa u
`src/data/tvornica.js`:

```js
export const CHECKOUT = {
  start: 'https://buy.stripe.com/...',   // 97 EUR/mj pretplata
  pro: 'https://buy.stripe.com/...',     // 197 EUR/mj pretplata
  launch: 'https://buy.stripe.com/...',  // 1.500 EUR jednokratno
};
```

Dok su prazni, gumbi na paketima vode na `#kontakt` sekciju — landing je
upotrebljiv i prije nego što je Stripe posložen.

Nakon plaćanja u Stripeu postavi *success URL* na thank-you stranicu i (kad
budeš spreman) Stripe webhook koji u GHL-u otvara sub-account.

### 2. Kontakt i booking

```js
export const CONTACT = {
  email: 'karlo@tvornicaedukacija.com',
  calendar: '',   // GHL/Calendly booking link — ako je prazan, gumb otvara mail
  instagram: 'https://instagram.com/...',
};
```

### 3. Recenzije

`TESTIMONIALS` je namjerno prazan niz — sekcija se **ne renderira** dok ne
dodaš prave recenzije klijenata:

```js
export const TESTIMONIALS = [
  { name: 'Ime Prezime', role: 'Personalni trener', initials: 'IP', text: 'Rezultat...' },
];
```

## Postavljanje na vlastitu domenu

Landing trenutno živi unutar AltroMedia Next.js projekta na ruti
`/tvornica-edukacija`. Dvije opcije:

**A) Zasebna domena (preporuka).** Deploy ovog repoa na Vercel kao zaseban
projekt, u `next.config.js` dodaj redirect s `/` na landing ili preimenuj
`src/pages/tvornica-edukacija.js` u `src/pages/index.js` u toj instanci, pa
u Vercelu spoji domenu (`tvornicaedukacija.com`).

**B) Poddomena / putanja.** Ostavi kako jest i domenu spoji na
`https://altromedia.com/tvornica-edukacija`.

Nakon odabira domene ažuriraj `BRAND.domain` u `src/data/tvornica.js` — koristi
se za canonical i OG meta tagove.

## Lokalno pokretanje

```bash
npm install
npm run dev     # http://localhost:3000/tvornica-edukacija
npm run build   # provjera produkcijskog builda
```
