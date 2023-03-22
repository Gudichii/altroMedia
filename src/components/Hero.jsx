import Image from 'next/image';
import wave from '../assets/img/wave.png'
import seorocket from '../assets/img/seorocket.png';
import styles from '@/styles/Main.module.scss';
import NavBar from '../Navigation/nav';

import { Link } from 'react-scroll';

const Hero = () =>{

  return(
    <section className={`${styles.heroSection} ${styles.container}`}>
        < NavBar />
        <div className={styles.main}>
          <div className={styles.contentBlock}>
            <h1 className={`${styles.title} ${styles.h1}`}>We bellieve in your <span className={styles.span}>digital future.</span></h1>
            <p className={styles.paragraph}>
            Make sure that your website exposes you to customers so that they see you as their first and only option.
            </p>
            <div className={styles.buttons}>
              <Link className={styles.btn} to="aboutSEO" smooth={true} duration={400}>You need SEO?</Link>
              <Link className={styles.btn} to="services" smooth={true} duration={600}>Services</Link>
              <Link className={styles.btn} to="agency" smooth={true} duration={800}>About us</Link>
              <Link className={styles.btn} to="contact" smooth={true} duration={1000}>Contact</Link>
            </div>
          </div>
          <div>
            <Image className={styles.seorocket} src={seorocket} alt="A responsive image" />
          </div>
        </div>
        <Image  className={styles.wave} src={wave} alt='promjena pozadinske boje u sivu boju.' />
     </section>
    )
}

export default Hero;










