// Centralna konfiguracija landinga "Tvornica Edukacija".
// Sve što se mijenja bez diranja koda (cijene, Stripe linkovi, tekstovi) je ovdje.

// TODO: zamijeni pravim Stripe Payment Link URL-ovima (Stripe -> Payment links -> Create link).
// Dok su prazni, gumbi vode na kontakt sekciju umjesto na checkout.
export const CHECKOUT = {
  start: '',
  pro: '',
  launch: '',
};

export const CONTACT = {
  email: 'karlo@tvornicaedukacija.com',
  calendar: '', // npr. link na GHL/Calendly booking stranicu
  instagram: 'https://instagram.com/',
};

export const BRAND = {
  name: 'Tvornica Edukacija',
  domain: 'tvornicaedukacija.com',
  tagline: 'Platforma na kojoj edukatori grade, prodaju i skaliraju svoje online programe.',
};

// Alati koje platforma zamjenjuje — prosječne mjesečne cijene u EUR.
export const REPLACES = [
  { name: 'ClickFunnels', price: 276 },
  { name: 'ActiveCampaign', price: 92 },
  { name: 'Kajabi', price: 185 },
  { name: 'Calendly', price: 15 },
  { name: 'Typeform', price: 46 },
  { name: 'Zapier', price: 65 },
  { name: 'Hotjar', price: 39 },
  { name: 'Alat za recenzije', price: 55 },
];

export const FEATURES = [
  {
    icon: 'funnel',
    title: 'Funnels i landing stranice',
    text: 'Drag & drop builder s gotovim predlošcima za webinar, VSL, lead magnet i prodajnu stranicu. Bez developera.',
  },
  {
    icon: 'users',
    title: 'CRM i pipeline',
    text: 'Svaki lead na jednom mjestu. Vidiš tko je otvorio mail, tko je bookirao poziv i tko je platio — bez Excela.',
  },
  {
    icon: 'mail',
    title: 'Email marketing',
    text: 'Neograničene kampanje, welcome sekvence, segmentacija i A/B testovi. Isporuka i statistika ugrađeni.',
  },
  {
    icon: 'chat',
    title: 'SMS i WhatsApp',
    text: 'Dvosmjerna komunikacija iz jednog inboxa. Podsjetnici na poziv, follow-up nakon prijave, reaktivacija.',
  },
  {
    icon: 'calendar',
    title: 'Kalendar i booking',
    text: 'Klijenti sami rezerviraju termin. Automatski podsjetnici smanjuju no-show na minimum.',
  },
  {
    icon: 'play',
    title: 'Tečajevi i membership',
    text: 'Hostaj video lekcije, module i zajednicu pod svojim brendom. Pristup se otvara automatski nakon plaćanja.',
  },
  {
    icon: 'bolt',
    title: 'Automatizacije',
    text: 'Vizualni workflow builder. Prijava pokreće email, SMS, zadatak i promjenu statusa — dok ti spavaš.',
  },
  {
    icon: 'card',
    title: 'Plaćanja i pretplate',
    text: 'Stripe checkout, jednokratna plaćanja, rate i mjesečne pretplate. Fakture i pristup idu automatski.',
  },
  {
    icon: 'star',
    title: 'Recenzije i reputacija',
    text: 'Automatski traži recenziju nakon odrađenog programa i skupljaj društveni dokaz na jednom mjestu.',
  },
  {
    icon: 'chart',
    title: 'Analitika',
    text: 'Vidiš odakle dolazi svaka prijava i koliko te košta. Prihod po funnelu, ne po osjećaju.',
  },
  {
    icon: 'form',
    title: 'Forme, kvizovi i ankete',
    text: 'Kvalificiraj polaznike prije poziva. Odgovori idu ravno u CRM i pokreću automatizaciju.',
  },
  {
    icon: 'phone',
    title: 'Mobilna aplikacija',
    text: 'Odgovaraj na poruke, prati pipeline i naplati s mobitela — pod tvojim brendom.',
  },
];

export const STEPS = [
  {
    n: '01',
    title: 'Poziv i strategija',
    text: 'U 60 minuta definiramo ponudu, cijenu i strukturu programa. Dobiješ jasan plan lansiranja, ne popis savjeta.',
  },
  {
    n: '02',
    title: 'Postavljamo ti sve u 48h',
    text: 'Ubacimo tvoj brend, domenu, funnel, email sekvencu i checkout. Ti ne diraš tehniku — dobiješ gotov račun.',
  },
  {
    n: '03',
    title: 'Lansiranje i skaliranje',
    text: 'Puštaš program u prodaju, platforma vodi leadove kroz automatizaciju, a ti gledaš brojke na jednom dashboardu.',
  },
];

export const PLANS = [
  {
    id: 'start',
    name: 'Start',
    price: '97',
    period: '/mj',
    note: 'Za prvi online program',
    cta: 'Započni sa Start',
    featured: false,
    features: [
      'Neograničene funnels i landing stranice',
      'CRM i pipeline',
      'Email marketing do 5.000 kontakata',
      'Kalendar i online booking',
      '1 tečaj / membership',
      'Stripe checkout i pretplate',
      'Mobilna aplikacija pod tvojim brendom',
      'Podrška emailom (24h)',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '197',
    period: '/mj',
    note: 'Najpopularnije',
    cta: 'Započni s Pro',
    featured: true,
    features: [
      'Sve iz Start paketa',
      'Neograničeni kontakti i emailovi',
      'SMS i WhatsApp iz jednog inboxa',
      'Neograničeni tečajevi i membership',
      'Napredne automatizacije i workflowi',
      'A/B testovi i napredna analitika',
      'Automatsko skupljanje recenzija',
      'Prioritetna podrška + mjesečni strateški poziv',
    ],
  },
  {
    id: 'launch',
    name: 'Lansiranje',
    price: '1.500',
    period: ' jednokratno',
    note: 'Radimo umjesto tebe',
    cta: 'Rezerviraj lansiranje',
    featured: false,
    features: [
      'Sve iz Pro paketa (prva 2 mjeseca uključena)',
      'Pozicioniranje ponude i cijene',
      'Kompletna prodajna stranica — napisana i objavljena',
      'Email sekvenca (5 emailova) postavljena',
      '3 varijante oglasnog copyja',
      'Checkout i automatizacije do kraja posložene',
      '2x tjedno check-in poziv kroz 30 dana',
      'Nakon 2 mjeseca: 97 EUR/mj za platformu',
    ],
  },
];

export const FAQ = [
  {
    q: 'Trebam li tehničko znanje?',
    a: 'Ne. Sve postavljamo mi — domenu, funnel, email, checkout. Ti dobiješ gotov račun i kratku edukaciju kako sve koristiti. Ako nešto zapne, javiš se i riješimo.',
  },
  {
    q: 'Što ako već imam web stranicu?',
    a: 'Nema problema. Platforma se spaja na tvoju postojeću domenu ili radi na poddomeni. Web ostaje kakav jest, a prodajni dio prelazi ovdje.',
  },
  {
    q: 'Mogu li otkazati?',
    a: 'Da, bilo kada. Nema ugovora na godinu dana. Otkažeš u jednom kliku, a svoje kontakte možeš izvesti u CSV.',
  },
  {
    q: 'Koliko kontakata mogu imati?',
    a: 'Start paket ide do 5.000 kontakata. Pro paket nema ograničenje na kontakte ni broj poslanih emailova.',
  },
  {
    q: 'Kako se naplaćuju SMS i pozivi?',
    a: 'Email je uključen u cijenu. SMS i pozivi idu po potrošnji preko tvog telefonskog broja — tipično 5 do 15 EUR mjesečno kod uobičajenog volumena.',
  },
  {
    q: 'Mogu li prebaciti postojeći tečaj?',
    a: 'Možeš. Prebacujemo video lekcije, module i popis polaznika s Kajabija, Teachablea ili Google Drivea — bez prekida pristupa.',
  },
  {
    q: 'Je li ovo samo GoHighLevel?',
    a: 'Platforma je izgrađena na GoHighLevel infrastrukturi, ali radi pod našim brendom i s predlošcima, automatizacijama i postavkom prilagođenom edukatorima na hrvatskom tržištu. Ne dobiješ prazan alat, nego posložen sustav.',
  },
  {
    q: 'Za koga ovo nije?',
    a: 'Ako još nemaš publiku ni prve klijente, prerano je. Platforma je za edukatore koji već prodaju znanje jedan na jedan i žele to pretvoriti u online program.',
  },
];

// Prazno dok ne postoje prave recenzije — sekcija se ne renderira ako je lista prazna.
// Primjer: { name: 'Ime Prezime', role: 'Personalni trener', text: 'Rezultat...', initials: 'IP' }
export const TESTIMONIALS = [];
