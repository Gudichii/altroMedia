import styles from '@/styles/tvornica.module.scss';
import { CONTACT } from '@/data/tvornica';
import { Arrow } from './icons';

const FinalCta = () => (
  <section className={styles.section} id="kontakt">
    <div className={styles.finalCta}>
      <h2>
        Tvoje znanje je već gotov proizvod.<br />Fali mu samo platforma.
      </h2>
      <p>
        Javi se, u 15 minuta prolazimo tvoju situaciju i kažem ti točno što bih postavio i koliko
        traje. Bez obveze i bez prezentacije od sat vremena.
      </p>
      <div className={styles.heroBtns}>
        <a className={`${styles.btn} ${styles.btnPrimary}`} href="#cijene">
          Odaberi paket <Arrow />
        </a>
        <a
          className={`${styles.btn} ${styles.btnGhost}`}
          href={CONTACT.calendar || `mailto:${CONTACT.email}`}
        >
          {CONTACT.calendar ? 'Rezerviraj poziv' : 'Pošalji poruku'}
        </a>
      </div>
    </div>
  </section>
);

export default FinalCta;
