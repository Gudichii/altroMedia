import Image from 'next/image';
import Img from '../assets/RoutesImg/branding.png';
import Wave from '../assets/img/wave.png';
import styles from '@/styles/Main.module.scss'
import Link from 'next/link';
import NavBar from '@/Navigation/nav';

const Branding = () => {
    return(
        <>
        <section className={`${styles.oagenciji} ${styles.container}`}>
            <NavBar/>
            <div className={styles.contentBlock}>
                <div className={styles.content}>
                    <h2 className={styles.leftTitle}>Branding</h2>
                    <p className={styles.paragraph}>
                    A strong brand identity is crucial for businesses to differentiate themselves from competitors 
                    and stand out in a crowded market. Building trust and credibility with potential customers 
                    leads to increased sales and customer loyalty. By investing in branding, 
                    businesses can establish a unique identity and attract and retain customers more easily.
                    </p>
                    <div className={`${styles.link} ${styles.email}`}><span className={styles.span}>Email:</span><a>seoagncy@gmail.com</a></div>
                    <Link className={`${styles.btn} ${styles.navBtn} ${styles.ContactBtn}`} href={`/#${'contact'}`}>
                       Get in touch
                    </Link>
                </div>
                <Image className={styles.agencyImage} src={Img} alt="A responsive image" />
            </div>
        </section>
        </>
    )                                  
}

export default Branding;