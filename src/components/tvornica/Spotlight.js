import styles from '@/styles/tvornica.module.scss';
import { Check, Icon } from './icons';

const AUTOMATION = [
  { icon: 'form', title: 'Prijava na besplatni webinar', sub: 'Lead ulazi u CRM i dobiva tag' },
  { icon: 'mail', title: 'Email sekvenca kreće odmah', sub: '5 emailova kroz 7 dana' },
  { icon: 'chat', title: 'SMS podsjetnik prije termina', sub: 'No-show pada za oko 40%' },
  { icon: 'card', title: 'Checkout i pristup programu', sub: 'Naplata, faktura i pristup automatski' },
];

const COURSES = [
  { title: 'Modul 1 — Temelji', meta: '6 lekcija · 48 min', progress: 100 },
  { title: 'Modul 2 — Program u praksi', meta: '9 lekcija · 71 min', progress: 62 },
  { title: 'Modul 3 — Napredne metode', meta: '7 lekcija · 55 min', progress: 18 },
];

const Spotlight = () => (
  <>
    <section className={styles.section}>
      <div className={styles.spotlight}>
        <div>
          <span className={styles.eyebrow}>Automatizacije</span>
          <h2 className={styles.h2} style={{ fontSize: 36 }}>
            Prodaja se odvija i kad ti ne gledaš mobitel
          </h2>
          <p className={styles.lead}>
            Postaviš jednom, radi stalno. Svaki lead prolazi kroz isti put — od prijave do plaćanja —
            bez tvoje ručne intervencije.
          </p>
          <ul className={styles.checkList}>
            <li><Check /> Vizualni workflow builder, bez koda</li>
            <li><Check /> Gotovi predlošci za webinar, VSL i lead magnet</li>
            <li><Check /> Automatski follow-up na neodgovorene poruke</li>
            <li><Check /> Obavijest na mobitel čim netko kupi</li>
          </ul>
        </div>

        <div className={styles.panel}>
          {AUTOMATION.map((s, i) => (
            <div key={s.title}>
              <div className={styles.flowStep}>
                <span className={styles.flowIcon}><Icon name={s.icon} width={17} height={17} /></span>
                <span className={styles.flowText}>
                  {s.title}
                  <small>{s.sub}</small>
                </span>
              </div>
              {i < AUTOMATION.length - 1 && <div className={styles.flowLine} />}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className={styles.section}>
      <div className={`${styles.spotlight} ${styles.spotlightReverse}`}>
        <div>
          <span className={styles.eyebrow}>Tečajevi i membership</span>
          <h2 className={styles.h2} style={{ fontSize: 36 }}>
            Tvoj program živi pod tvojim brendom
          </h2>
          <p className={styles.lead}>
            Video lekcije, moduli, materijali i zajednica na jednom mjestu. Polaznik plati i pristup
            se otvara sam — bez slanja linkova i lozinki na WhatsApp.
          </p>
          <ul className={styles.checkList}>
            <li><Check /> Neograničene lekcije i moduli</li>
            <li><Check /> Postupno otključavanje sadržaja (drip)</li>
            <li><Check /> Praćenje napretka svakog polaznika</li>
            <li><Check /> Vlastita domena i logo, bez tuđeg brendinga</li>
          </ul>
        </div>

        <div className={styles.panel}>
          {COURSES.map((c) => (
            <div className={styles.courseCard} key={c.title}>
              <span className={styles.thumb} />
              <span style={{ flex: 1 }}>
                <span className={styles.flowText}>
                  {c.title}
                  <small>{c.meta}</small>
                </span>
                <span className={styles.progressTrack}>
                  <span className={styles.progressFill} style={{ width: `${c.progress}%` }} />
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Spotlight;
