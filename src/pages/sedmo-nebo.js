import Head from 'next/head';

const CLIENT_URL = 'https://www.sedmonebo.hr';

const benefits = [
  {
    title: 'Duboko opuštanje uma',
    text: 'Um uđe u theta stanje — isto stanje kao neposredno prije sna. Misli se smiruju, buka svijeta nestaje.',
  },
  {
    title: 'Nestanak boli i napetosti',
    text: 'Bestežinsko stanje skida pritisak s kralježnice, zglobova i mišića. Tijelo se dekomprimira do zadnjeg kralješka.',
  },
  {
    title: 'Bolji san iste večeri',
    text: '500 kg magnezijeve soli upija se kroz kožu i smiruje živčani sustav — klijenti prijavljuju najbolji san u mjesecima.',
  },
  {
    title: 'Mentalna jasnoća',
    text: 'Kad tijelo prestane slati signale, um konačno dobije prostora. Izlazite s jasnijom glavom nego što ste ušli.',
  },
  {
    title: 'Regeneracija i oporavak',
    text: 'Za sportaše i rekreativce — brži oporavak mišića, manje upale, manje umora nakon treninga.',
  },
  {
    title: 'Sat vremena samo za sebe',
    text: 'Bez telefona, bez obaveza, bez ikoga tko nešto od vas traži. Jednostavno — ništa raditi.',
  },
];

const services = [
  {
    tag: 'Najtraženije',
    title: 'Float terapija',
    duration: '60 ili 90 min',
    price: 'od 57 €',
    desc:
      'Plutate u 500 kg otopljene magnezijeve soli, u bestežinskom stanju i potpunoj senzornoj deprivaciji. Tijelo se dekomprimira, um uđe u duboko meditativno stanje, a koža upija magnezij. Prva je stvar koju isprobate — i razlog zašto se ljudi vraćaju svaki mjesec.',
    points: [
      'Bestežinsko stanje — nulti pritisak na kralježnicu i zglobove',
      'Voda filtrirana 4x između svakog gosta + ozon + UV',
      'Vrata kabine mogu ostati otvorena — vi kontrolirate iskustvo',
    ],
  },
  {
    tag: 'Za brz oporavak',
    title: 'Red & Near-Infrared Light Therapy',
    duration: '30 min',
    price: 'od 25 €',
    desc:
      'PlatinumLED uređaj, valne duljine 630–850 nm koje prodiru do 5 cm duboko u tkivo. Potiče stanice na obnovu energije, smanjuje upale i bolove, ubrzava oporavak nakon treninga.',
    points: [
      'Bez UV zračenja — samo terapeutsko crveno i infracrveno svjetlo',
      'Osjećaj olakšanja često već nakon prvog tretmana',
      'Idealno kombinirano s Floatom — zovemo ga Regeneracijski paket',
    ],
  },
  {
    tag: 'Za znatiželjne',
    title: 'Test metala, minerala i vitamina',
    duration: 'do 5 min mjerenje',
    price: '150 €',
    desc:
      'Spektrofotometrijski uređaj skenira nakupljanje teških metala i razinu minerala i vitamina unutar stanica — ne samo ono što trenutno kruži krvlju. Rezultati u par minuta, s objašnjenjem i konkretnim preporukama.',
    points: [
      'Koristi se u 300+ centara i klinika u svijetu',
      'Dobivate izvještaj, analizu i wellness preporuke — ne samo brojke',
      'Preporučeno ponavljanje svakih 6 mjeseci',
    ],
  },
];

const steps = [
  {
    n: '01',
    title: 'Dolazak i priprema',
    text: 'Ispunite kratki disclaimer, pogledate video vodič i dobijete savjete za potpun doživljaj prvog Floata.',
  },
  {
    n: '02',
    title: 'Tuširanje i ulazak',
    text: 'Istuširate se, upoznate s daljinskim upravljačem u kabini i uđete kad ste spremni — bez žurbe.',
  },
  {
    n: '03',
    title: '60 ili 90 minuta mira',
    text: 'Voda vas nosi, svjetlo i zvuk su pod vašom kontrolom. Zadnjih 5 minuta glazba vas nježno najavi kraj.',
  },
  {
    n: '04',
    title: 'Povratak i razgovor',
    text: 'Istuširate se, sjednete u naš lobby i podijelite iskustvo — većina odmah rezervira sljedeći termin.',
  },
];

const faqs = [
  {
    q: 'Bojim se zatvorenog prostora — hoću li izdržati?',
    a: 'Taj strah gotovo uvijek nestane čim vidite kabinu — puno je veća nego što ljudi zamišljaju. Poklopac možete držati otvoren ili pritvoren cijelo vrijeme, terapiju možete završiti kad god poželite, a mi vas čujemo preko ugrađenog interkoma ako vam nešto zatreba.',
  },
  {
    q: 'Je li voda čista i higijenska?',
    a: 'Visoka koncentracija Epsom soli (35%) čini gotovo nemogućim da mikroorganizmi prežive. Nakon svakog gosta voda prolazi četverostruku filtraciju, UV lampu i ozonizaciju — dokazano 3000x bržu i 50x jaču dezinfekciju od klora.',
  },
  {
    q: 'Što trebam ponijeti?',
    a: 'Ništa. Sve vas čeka kod nas. Jedino ako želite, možete ponijeti svoj češalj za kosu.',
  },
  {
    q: 'Isplati li se test na metale i minerale po toj cijeni?',
    a: 'Ovo je test koji vjerojatno nikad niste probali, a otkriva stanje unutar stanica — ne samo trenutni presjek iz krvi. Dobivate konkretne preporuke za prehranu, suplemente i način života, ne samo brojke.',
  },
  {
    q: 'Mogu li kombinirati usluge?',
    a: 'Da — Float i Red/NIR light terapija odlično se nadopunjuju (zovemo ih Regeneracijski paket), a mnogi klijenti prvo prođu test metala i minerala kako bi znali gdje krenuti.',
  },
];

export default function SedmoNebo() {
  return (
    <div className="page">
      <Head>
        <title>Sedmo nebo — Float terapija Split | Vaše mjesto za potpuni reset</title>
        <meta
          name="description"
          content="Float terapija, Red & Near-Infrared Light Therapy i test metala, minerala i vitamina u Splitu. 2000+ klijenata, ocjena 5.0 na Googleu. Rezervirajte svoj termin."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
      </Head>

      {/* HERO */}
      <section className="hero">
        <div className="heroInner">
          <span className="eyebrow">Sedmo nebo · Split</span>
          <h1>
            Vaše mjesto za <span className="accent">potpuni reset.</span>
          </h1>
          <p className="lead">
            Ne morate nikamo bježati da biste se odmorili. Dovoljno je stati,
            prepustiti se — i jednostavno ne raditi ništa.
          </p>
          <div className="ctaRow">
            <a className="btnPrimary" href={CLIENT_URL} target="_blank" rel="noopener noreferrer">
              Rezerviraj svoj Float
            </a>
            <span className="ctaNote">Prvi dolazak? Pitajte za upgrade opciju.</span>
          </div>
          <div className="trustBar">
            <div className="trustItem">
              <strong>5,0</strong>
              <span>na Googleu · 192+ recenzija</span>
            </div>
            <div className="trustDivider" />
            <div className="trustItem">
              <strong>2000+</strong>
              <span>zadovoljnih klijenata</span>
            </div>
            <div className="trustDivider" />
            <div className="trustItem">
              <strong>4,5 god</strong>
              <span>iskustva u Splitu</span>
            </div>
          </div>
        </div>
        <div className="heroGlow" />
      </section>

      {/* PROBLEM */}
      <section className="section problem">
        <div className="container narrow">
          <h2>Prepoznajete li se u ovome?</h2>
          <ul className="problemList">
            <li>Um se ne isključuje ni kad legnete u krevet.</li>
            <li>Probali ste masaže, saunu, meditaciju — pomogne, ali kratko.</li>
            <li>Tijelo je umorno čak i nakon "odmora".</li>
            <li>Treba vam pauza od svega, a nemate gdje otići.</li>
          </ul>
          <p className="bridge">
            Sedmo nebo nije još jedan wellness tretman. To je sat vremena u
            kojem vaše tijelo i um doslovno nemaju izbora nego se opustiti.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services" id="usluge">
        <div className="container">
          <h2 className="centerHeading">Tri usluge, jedan cilj — vaš reset</h2>
          <div className="serviceGrid">
            {services.map((s) => (
              <div className="serviceCard" key={s.title}>
                <span className="serviceTag">{s.tag}</span>
                <h3>{s.title}</h3>
                <div className="serviceMeta">
                  <span>{s.duration}</span>
                  <span className="dot">·</span>
                  <span className="price">{s.price}</span>
                </div>
                <p>{s.desc}</p>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section how">
        <div className="container">
          <h2 className="centerHeading">Kako izgleda vaš prvi Float</h2>
          <div className="stepsGrid">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <span className="stepNum">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section benefits">
        <div className="container">
          <h2 className="centerHeading">Što osjetite nakon jednog dolaska</h2>
          <div className="benefitGrid">
            {benefits.map((b) => (
              <div className="benefitCard" key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section testimonial">
        <div className="container narrow">
          <blockquote>
            "Do sada sam iskusila nekoliko sesija plutanja i svaka je bila
            duboko transformativna. Svaki put kad uđem u bazen, osjećam se
            kao da se svijet otapa — buka, napetost, beskrajne liste obaveza
            — sve jednostavno nestaje.
            <br />
            <br />
            90 minuta prolazi bez napora; moje tijelo se osjeća bestežinsko,
            um bistar, a živčani sustav potpuno resetiran."
          </blockquote>
          <span className="testimonialAuthor">— klijentica, Google recenzija</span>
        </div>
      </section>

      {/* PRICING */}
      <section className="section pricing" id="cijene">
        <div className="container narrow">
          <h2 className="centerHeading">Cijene i paketi</h2>
          <div className="priceTable">
            <div className="priceRow">
              <span>Float terapija — 60 min</span>
              <strong>57 €</strong>
            </div>
            <div className="priceRow">
              <span>Float terapija — 90 min</span>
              <strong>67 €</strong>
            </div>
            <div className="priceRow">
              <span>Red & NIR Light Therapy — 30 min</span>
              <strong>25 €</strong>
            </div>
            <div className="priceRow">
              <span>Red & NIR Light Therapy — paket 3x</span>
              <strong>60 €</strong>
            </div>
            <div className="priceRow">
              <span>Test metala, minerala i vitamina</span>
              <strong>150 €</strong>
            </div>
          </div>
          <p className="priceNote">
            Redoviti klijenti biraju mjesečnu opciju od 1x, 2x ili 4x Floata
            mjesečno, uz mogućnost kombiniranja s Red/NIR terapijom u
            Regeneracijski paket.
          </p>
          <div className="ctaCenter">
            <a className="btnPrimary" href={CLIENT_URL} target="_blank" rel="noopener noreferrer">
              Rezerviraj termin
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq" id="pitanja">
        <div className="container narrow">
          <h2 className="centerHeading">Najčešća pitanja</h2>
          <div className="faqList">
            {faqs.map((f) => (
              <details className="faqItem" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section finalCta">
        <div className="container narrow">
          <h2>Sedmo nebo je vaše mjesto za potpuni reset.</h2>
          <p>
            Trenutak kada se isključujete od svijeta, opuštate tijelo i um
            te ponovno punite energijom.
          </p>
          <a className="btnPrimary large" href={CLIENT_URL} target="_blank" rel="noopener noreferrer">
            Rezerviraj svoj Float
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>Sedmo nebo · Split</span>
        <a href={CLIENT_URL} target="_blank" rel="noopener noreferrer">
          sedmonebo.hr
        </a>
      </footer>

      <style jsx>{`
        .page {
          --bg: #08161c;
          --bg-alt: #0d1f27;
          --card: #102830;
          --teal: #2fa39b;
          --teal-light: #6fd4ca;
          --gold: #cfa25a;
          --text: #eaf3f2;
          --text-dim: #a9c0bd;
          --border: rgba(255, 255, 255, 0.08);
          background: var(--bg);
          color: var(--text);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif;
          line-height: 1.6;
          overflow-x: hidden;
        }
        .page :global(*) {
          color: inherit;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .container.narrow {
          max-width: 760px;
        }

        .section {
          padding: 88px 0;
        }

        h1,
        h2,
        h3 {
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .centerHeading {
          text-align: center;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          margin-bottom: 48px;
        }

        /* HERO */
        .hero {
          position: relative;
          padding: 120px 24px 90px;
          text-align: center;
          overflow: hidden;
        }
        .heroGlow {
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 900px;
          background: radial-gradient(
            circle,
            rgba(47, 163, 155, 0.25) 0%,
            rgba(47, 163, 155, 0) 65%
          );
          pointer-events: none;
        }
        .heroInner {
          position: relative;
          max-width: 720px;
          margin: 0 auto;
        }
        .eyebrow {
          display: inline-block;
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }
        .hero h1 {
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          line-height: 1.12;
          margin-bottom: 20px;
        }
        .accent {
          color: var(--teal-light);
        }
        .lead {
          font-size: 1.15rem;
          color: var(--text-dim);
          max-width: 540px;
          margin: 0 auto 36px;
        }
        .ctaRow {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 56px;
        }
        .ctaNote {
          font-size: 0.85rem;
          color: var(--text-dim);
        }
        .btnPrimary {
          display: inline-block;
          background: linear-gradient(135deg, var(--teal-light), var(--teal));
          color: #06181a;
          font-weight: 700;
          padding: 16px 34px;
          border-radius: 100px;
          font-size: 1rem;
          box-shadow: 0 10px 30px rgba(47, 163, 155, 0.35);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .btnPrimary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(47, 163, 155, 0.45);
        }
        .btnPrimary.large {
          padding: 18px 42px;
          font-size: 1.1rem;
        }

        .trustBar {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }
        .trustItem {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .trustItem strong {
          font-size: 1.3rem;
          color: var(--gold);
        }
        .trustItem span {
          font-size: 0.8rem;
          color: var(--text-dim);
        }
        .trustDivider {
          width: 1px;
          height: 32px;
          background: var(--border);
        }

        /* PROBLEM */
        .problem {
          background: var(--bg-alt);
        }
        .problem h2 {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          margin-bottom: 24px;
          text-align: center;
        }
        .problemList {
          list-style: none;
          display: grid;
          gap: 14px;
          margin-bottom: 32px;
        }
        .problemList li {
          position: relative;
          padding-left: 28px;
          color: var(--text-dim);
          font-size: 1.05rem;
        }
        .problemList li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--gold);
        }
        .bridge {
          text-align: center;
          font-size: 1.15rem;
          color: var(--text);
        }

        /* SERVICES */
        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }
        .serviceCard {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 28px;
          display: flex;
          flex-direction: column;
        }
        .serviceTag {
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--teal-light);
          margin-bottom: 10px;
        }
        .serviceCard h3 {
          font-size: 1.25rem;
          margin-bottom: 8px;
        }
        .serviceMeta {
          display: flex;
          gap: 8px;
          align-items: center;
          color: var(--text-dim);
          font-size: 0.9rem;
          margin-bottom: 14px;
        }
        .serviceMeta .price {
          color: var(--gold);
          font-weight: 700;
        }
        .serviceCard p {
          color: var(--text-dim);
          font-size: 0.95rem;
          margin-bottom: 16px;
        }
        .serviceCard ul {
          list-style: none;
          display: grid;
          gap: 8px;
          margin-top: auto;
        }
        .serviceCard ul li {
          position: relative;
          padding-left: 20px;
          font-size: 0.88rem;
          color: var(--text);
        }
        .serviceCard ul li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--teal-light);
        }

        /* HOW */
        .how {
          background: var(--bg-alt);
        }
        .stepsGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 28px;
        }
        .step {
          text-align: left;
        }
        .stepNum {
          display: block;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--teal);
          margin-bottom: 10px;
        }
        .step h3 {
          font-size: 1.05rem;
          margin-bottom: 8px;
        }
        .step p {
          color: var(--text-dim);
          font-size: 0.92rem;
        }

        /* BENEFITS */
        .benefitGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 22px;
        }
        .benefitCard {
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 22px;
        }
        .benefitCard h3 {
          font-size: 1.02rem;
          margin-bottom: 8px;
          color: var(--teal-light);
        }
        .benefitCard p {
          color: var(--text-dim);
          font-size: 0.9rem;
        }

        /* TESTIMONIAL */
        .testimonial {
          background: var(--bg-alt);
          text-align: center;
        }
        .testimonial blockquote {
          font-size: 1.2rem;
          line-height: 1.7;
          color: var(--text);
          font-style: italic;
          margin-bottom: 20px;
        }
        .testimonialAuthor {
          color: var(--gold);
          font-size: 0.9rem;
        }

        /* PRICING */
        .priceTable {
          display: grid;
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 24px;
        }
        .priceRow {
          display: flex;
          justify-content: space-between;
          padding: 16px 22px;
          background: var(--card);
        }
        .priceRow strong {
          color: var(--gold);
        }
        .priceNote {
          text-align: center;
          color: var(--text-dim);
          font-size: 0.92rem;
          margin-bottom: 32px;
        }
        .ctaCenter {
          text-align: center;
        }

        /* FAQ */
        .faqList {
          display: grid;
          gap: 12px;
        }
        .faqItem {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 18px 22px;
        }
        .faqItem summary {
          cursor: pointer;
          font-weight: 600;
          list-style: none;
        }
        .faqItem summary::-webkit-details-marker {
          display: none;
        }
        .faqItem summary::after {
          content: '+';
          float: right;
          color: var(--teal-light);
        }
        .faqItem[open] summary::after {
          content: '−';
        }
        .faqItem p {
          color: var(--text-dim);
          margin-top: 12px;
          font-size: 0.94rem;
        }

        /* FINAL CTA */
        .finalCta {
          text-align: center;
          background: linear-gradient(180deg, var(--bg-alt), var(--bg));
        }
        .finalCta h2 {
          font-size: clamp(1.6rem, 3.4vw, 2.3rem);
          margin-bottom: 16px;
        }
        .finalCta p {
          color: var(--text-dim);
          margin-bottom: 32px;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 24px;
          max-width: 1100px;
          margin: 0 auto;
          color: var(--text-dim);
          font-size: 0.85rem;
        }
        .footer a {
          color: var(--teal-light);
        }
      `}</style>
    </div>
  );
}
