import Image from 'next/image';
// import Img from '../assets/RoutesImg/consulting.png';
import Img from '../assets/RoutesImg/consulting.png';
import styles from '@/styles/Main.module.scss'
import Link from 'next/link';
import NavBar from '@/Navigation/nav';

const Consulting = () => {
    return(
        <div>
        <section className={`${styles.oagenciji} ${styles.container}`}>
            {/* <NavBar/> */}
            <div className={styles.contentBlock}>
                <div className={styles.content}>
                    <h2 className={styles.leftTitle}>Consulting</h2>
                    <p className={styles.paragraph}>
                    You're confused in the modern world. To avoid wasting 
                    time wandering and to ensure a future in the digital age, 
                    let us drive you, identify your issue, 
                    and point your company in the right path.
                    </p>
                    {/* <div className={`${styles.link} ${styles.email}`}><span className={styles.span}>Email:</span><a>seoagncy@gmail.com</a></div> */}
                    <Link className={`${styles.btn} ${styles.navBtn} ${styles.ContactBtn}`} href={`/#${'contact'}`}>
                       Get in touch
                    </Link>
                </div>
                <Image className={styles.agencyImage} src={Img} alt="A responsive image" />
            </div>
        </section>
        </div>
    )                                  
}

export default Consulting;