import Image from 'next/image';
import Img from '../assets/RoutesImg/fast.png';
import styles from '@/styles/Main.module.scss'
import Link from 'next/link';
import NavBar from '@/Navigation/nav';

const optimized = () => {
    return(
        <>
        <section className={`${styles.oagenciji} ${styles.container}`}>
            <NavBar/>
            <div className={styles.contentBlock}>
                <div className={styles.content}>
                    <h2 className={styles.leftTitle}>Optimized website</h2>
                    <p className={styles.paragraph}>
                    A well-optimized website helps to attract and retain potential customers, 
                    leading to increased traffic and sales. By optimizing your website, you can 
                    improve its speed, user experience, and position on google. A fast and 
                    well-designed website is important for providing a positive user experience, 
                    which can lead to increased trust and credibility with potential customers.
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

export default optimized;