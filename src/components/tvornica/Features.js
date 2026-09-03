import styles from '@/styles/tvornica.module.scss';
import { FEATURES } from '@/data/tvornica';
import { Icon } from './icons';

const Features = () => (
  <section className={styles.section} id="mogucnosti">
    <span className={styles.eyebrow}>Mogućnosti</span>
    <h2 className={styles.h2}>
      Sve što treba da od znanja napraviš <span className={styles.gradText}>proizvod koji se prodaje</span>
    </h2>
    <p className={styles.lead}>
      Ne dobivaš prazan alat koji moraš sam posložiti. Dobivaš platformu s gotovim predlošcima,
      automatizacijama i checkoutom prilagođenim edukatorima.
    </p>

    <div className={styles.grid3}>
      {FEATURES.map((f) => (
        <article className={styles.feature} key={f.title}>
          <div className={styles.icon}>
            <Icon name={f.icon} />
          </div>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Features;
