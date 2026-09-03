import styles from '@/styles/tvornica.module.scss';
import { TESTIMONIALS } from '@/data/tvornica';

// Renderira se tek kad u src/data/tvornica.js dodas prave recenzije.
const Testimonials = () => {
  if (!TESTIMONIALS.length) return null;

  return (
    <section className={styles.section}>
      <span className={styles.eyebrow}>Rezultati</span>
      <h2 className={styles.h2}>Što kažu edukatori na platformi</h2>

      <div className={styles.testimonials}>
        {TESTIMONIALS.map((t) => (
          <article className={styles.testimonial} key={t.name}>
            <p>{t.text}</p>
            <div className={styles.author}>
              <span className={styles.avatar}>{t.initials}</span>
              <span className={styles.authorMeta}>
                {t.name}
                <small>{t.role}</small>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
