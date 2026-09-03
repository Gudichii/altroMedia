import { useState } from 'react';
import styles from '@/styles/tvornica.module.scss';
import { FAQ } from '@/data/tvornica';
import { Plus } from './icons';

const Faq = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.section} id="faq">
      <span className={styles.eyebrow}>Česta pitanja</span>
      <h2 className={styles.h2}>Ono što pitaju prije nego krenu</h2>

      <div className={styles.faq}>
        {FAQ.map((item, i) => {
          const isOpen = open === i;
          return (
            <div className={styles.faqItem} key={item.q}>
              <button
                className={styles.faqQ}
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                {item.q}
                <Plus className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ''}`} />
              </button>
              {isOpen && <p className={styles.faqA}>{item.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
