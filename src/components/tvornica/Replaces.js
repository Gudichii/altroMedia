import styles from '@/styles/tvornica.module.scss';
import { REPLACES } from '@/data/tvornica';

const Replaces = () => {
  const total = REPLACES.reduce((sum, tool) => sum + tool.price, 0);

  return (
    <section className={styles.section}>
      <div className={styles.replaces}>
        <div className={styles.replacesTop}>
          <div>
            <span className={styles.eyebrow}>Jedan račun umjesto osam</span>
            <h2 className={styles.h2} style={{ fontSize: 34 }}>
              Zamjenjuje alate koje već plaćaš
            </h2>
          </div>
          <div className={styles.replacesTotal}>
            <small>Prosječan trošak alata</small>
            <strong>
              <span className={styles.through}>{total} EUR</span>{' '}
              <span className={styles.gradText}>97 EUR/mj</span>
            </strong>
          </div>
        </div>

        <div className={styles.toolList}>
          {REPLACES.map((tool) => (
            <span className={styles.tool} key={tool.name}>
              {tool.name} <b>{tool.price} EUR/mj</b>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Replaces;
