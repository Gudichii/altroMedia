import styles from '@/styles/tvornica.module.scss';
import { BRAND } from '@/data/tvornica';
import { Check, Arrow } from './icons';

const PIPELINE = [
  {
    title: 'Novi lead',
    count: 24,
    items: [
      { name: 'Ana Kovač', meta: 'Instagram · prijava na webinar' },
      { name: 'Marko Babić', meta: 'Landing "Online program"' },
    ],
  },
  {
    title: 'Poziv bookiran',
    count: 9,
    items: [
      { name: 'Ivana Perić', meta: 'Danas 16:30 · podsjetnik poslan' },
      { name: 'Luka Šimić', meta: 'Sutra 10:00' },
    ],
  },
  {
    title: 'Kupili program',
    count: 6,
    items: [
      { name: 'Petra Novak', meta: '297 EUR · pristup otvoren' },
      { name: 'Filip Jurić', meta: '97 EUR/mj · pretplata' },
    ],
  },
];

const Hero = () => (
  <header className={styles.hero} id="top">
    <div className={styles.heroGrid} />
    <div className={styles.heroGlow} />

    <div className={styles.heroInner}>
      <span className={styles.eyebrow}>Platforma za edukatore</span>

      <h1 className={styles.h1}>
        Cijela tvoja online edukacija na <span className={styles.gradText}>jednoj platformi</span>
      </h1>

      <p className={styles.heroLead}>
        {BRAND.tagline} Funnels, CRM, email, SMS, kalendar, tečajevi i naplata — pod tvojim
        brendom, umjesto osam alata koje plaćaš odvojeno.
      </p>

      <div className={styles.heroBtns}>
        <a className={`${styles.btn} ${styles.btnPrimary}`} href="#cijene">
          Pogledaj pakete <Arrow />
        </a>
        <a className={`${styles.btn} ${styles.btnGhost}`} href="#mogucnosti">
          Što sve dobivaš
        </a>
      </div>

      <div className={styles.heroNote}>
        <span><Check /> Postavljamo ti sve u 48h</span>
        <span><Check /> Bez ugovora, otkaži bilo kada</span>
        <span><Check /> Podrška na hrvatskom</span>
      </div>

      <div className={styles.mock}>
        <div className={styles.mockBar}>
          <i className={styles.dot} />
          <i className={styles.dot} />
          <i className={styles.dot} />
          <span className={styles.mockUrl}>app.{BRAND.domain}/pipeline</span>
        </div>

        <div className={styles.mockBody}>
          <div className={styles.mockStats}>
            <div className={styles.stat}>
              <div className={styles.statLabel}>Prihod ovaj mjesec</div>
              <div className={styles.statValue}>4.860 EUR</div>
              <div className={styles.statTrend}>+38% vs prošli mjesec</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statLabel}>Novi leadovi</div>
              <div className={styles.statValue}>312</div>
              <div className={styles.statTrend}>+64 ovaj tjedan</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statLabel}>Polaznici programa</div>
              <div className={styles.statValue}>128</div>
              <div className={styles.statTrend}>91% aktivnih</div>
            </div>
          </div>

          {PIPELINE.map((col) => (
            <div className={styles.col} key={col.title}>
              <div className={styles.colHead}>
                <span>{col.title}</span>
                <span className={styles.pill}>{col.count}</span>
              </div>
              {col.items.map((item) => (
                <div className={styles.lead1} key={item.name}>
                  <div className={styles.leadName}>{item.name}</div>
                  <div className={styles.leadMeta}>{item.meta}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
