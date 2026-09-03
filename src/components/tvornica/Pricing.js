import styles from '@/styles/tvornica.module.scss';
import { PLANS, CHECKOUT } from '@/data/tvornica';
import { Check } from './icons';

// Ako Stripe link jos nije postavljen, gumb vodi na kontakt sekciju.
const hrefFor = (id) => CHECKOUT[id] || '#kontakt';

const Pricing = () => (
  <section className={styles.section} id="cijene">
    <span className={styles.eyebrow}>Cijene</span>
    <h2 className={styles.h2}>
      Odaberi paket i <span className={styles.gradText}>kreni ovaj tjedan</span>
    </h2>
    <p className={styles.lead}>
      Bez skrivenih troškova i bez ugovora na godinu dana. Postavljanje platforme je uključeno u
      svaki paket.
    </p>

    <div className={styles.pricing}>
      {PLANS.map((plan) => (
        <article
          className={`${styles.plan} ${plan.featured ? styles.planFeatured : ''}`}
          key={plan.id}
        >
          <span className={styles.planNote}>{plan.note}</span>
          <div className={styles.planName}>{plan.name}</div>
          <div className={styles.planPrice}>
            <strong>{plan.price} EUR</strong>
            <span>{plan.period}</span>
          </div>

          <ul className={styles.planList}>
            {plan.features.map((f) => (
              <li key={f}><Check /> {f}</li>
            ))}
          </ul>

          <div className={styles.planCta}>
            <a
              className={`${styles.btn} ${styles.btnBlock} ${plan.featured ? styles.btnPrimary : styles.btnGhost}`}
              href={hrefFor(plan.id)}
              {...(CHECKOUT[plan.id] ? { rel: 'noopener' } : {})}
            >
              {plan.cta}
            </a>
          </div>
        </article>
      ))}
    </div>

    <p className={styles.pricingNote}>
      Cijene su bez PDV-a. SMS i pozivi se naplaćuju po potrošnji. Nisi siguran koji paket?{' '}
      <a href="#kontakt" className={styles.gradText}>Javi se i posložimo zajedno.</a>
    </p>
  </section>
);

export default Pricing;
