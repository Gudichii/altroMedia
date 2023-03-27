import Image from 'next/image';
import seorocket from '../assets/img/seorocket.webp';
import styles from '@/styles/Main.module.scss';
import { Link } from 'react-scroll';

const Hero = () =>{

  return(
    <section className={`${styles.heroSection} ${styles.container}`}>
        <div className={styles.main}>
          <div className={styles.contentBlock}>
            <h1 className={`${styles.title} ${styles.h1}`}>Believe in your <span className={styles.span}>digital future.</span></h1>
            <p className={styles.paragraph}>
            Take care of your website. It's your most valuable digital asset.
            </p>
            <div className={styles.buttons}>
              <Link className={styles.btn} to="contact" smooth={true} duration={1000}>Contact us</Link>
              <Link className={styles.btn} to="aboutSEO" smooth={true} duration={400}>Is SEO optimisation for you?</Link>
              <Link className={styles.btn} to="services" smooth={true} duration={600}>Services</Link>
              <Link className={styles.btn} to="agency" smooth={true} duration={800}>Who we are?</Link>
            </div>
          </div>
          <div>
            <Image className={styles.seorocket} src={seorocket} alt="A responsive image" />
          </div>
        </div>
     </section>
    )
}

export default Hero;










