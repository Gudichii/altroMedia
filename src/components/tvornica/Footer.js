import styles from '@/styles/tvornica.module.scss';
import { BRAND, CONTACT } from '@/data/tvornica';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerInner}>
      <div className={styles.footerCol} style={{ maxWidth: 280 }}>
        <a className={styles.logo} href="#top">
          <span className={styles.logoMark}>TE</span>
          <span className={styles.logoText}>{BRAND.name}</span>
        </a>
        <p>{BRAND.tagline}</p>
      </div>

      <div className={styles.footerCol}>
        <strong>Platforma</strong>
        <a href="#mogucnosti">Mogućnosti</a>
        <a href="#kako-radi">Kako radi</a>
        <a href="#cijene">Cijene</a>
        <a href="#faq">Česta pitanja</a>
      </div>

      <div className={styles.footerCol}>
        <strong>Kontakt</strong>
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        {CONTACT.instagram && (
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        )}
        <a href="/privacyPolicy">Politika privatnosti</a>
      </div>
    </div>

    <div className={styles.footerBottom}>
      <span>&copy; {new Date().getFullYear()} {BRAND.name}. Sva prava pridržana.</span>
      <span>Izgrađeno na GoHighLevel infrastrukturi.</span>
    </div>
  </footer>
);

export default Footer;
