import styles from '@/styles/tvornica.module.scss';
import { STEPS } from '@/data/tvornica';

const PROOF = [
  { value: '48h', label: 'Od prijave do posložene platforme' },
  { value: '5+', label: 'Vlastitih lansiranih digitalnih proizvoda' },
  { value: '20k EUR+', label: 'Uloženo u testiranje oglasa i funnela' },
  { value: '10.000', label: 'Korisnika izgrađeno bez oglasnog budžeta' },
];

const Steps = () => (
  <section className={styles.section} id="kako-radi">
    <span className={styles.eyebrow}>Kako radi</span>
    <h2 className={styles.h2}>
      Od prvog poziva do <span className={styles.gradText}>žive prodaje</span> u tri koraka
    </h2>
    <p className={styles.lead}>
      Ti se baviš svojim područjem. Tehniku, postavljanje i strukturu preuzimamo mi.
    </p>

    <div className={styles.steps}>
      {STEPS.map((s) => (
        <article className={styles.step} key={s.n}>
          <span className={styles.stepN}>KORAK {s.n}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </article>
      ))}
    </div>

    <div className={styles.proof}>
      {PROOF.map((p) => (
        <div className={styles.proofItem} key={p.label}>
          <strong>{p.value}</strong>
          <span>{p.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Steps;
