import { useState } from 'react';
import styles from '@/styles/tvornica.module.scss';
import { BRAND } from '@/data/tvornica';
import { Menu, Close } from './icons';

const LINKS = [
  { href: '#mogucnosti', label: 'Mogućnosti' },
  { href: '#kako-radi', label: 'Kako radi' },
  { href: '#cijene', label: 'Cijene' },
  { href: '#faq', label: 'FAQ' },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <a className={styles.logo} href="#top">
          <span className={styles.logoMark}>TE</span>
          <span className={styles.logoText}>{BRAND.name}</span>
        </a>

        <div className={styles.navLinks}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>

        <div className={styles.navActions}>
          <a className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSmall}`} href="#cijene">
            Započni odmah
          </a>
          <button
            className={styles.navToggle}
            onClick={() => setOpen(!open)}
            aria-label="Izbornik"
            aria-expanded={open}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a
          className={`${styles.btn} ${styles.btnPrimary}`}
          href="#cijene"
          onClick={() => setOpen(false)}
          style={{ marginTop: 12 }}
        >
          Započni odmah
        </a>
      </div>
    </nav>
  );
};

export default Nav;
