import Image from 'next/image';
import Img from '../assets/RoutesImg/copywriting.png';
import Wave from '../assets/img/wave.png';
import styles from '@/styles/Main.module.scss'
import Link from 'next/link';
import NavBar from '@/Navigation/nav';

const Copywriting = () => {
    return(
        <div>
        <section className={`${styles.oagenciji} ${styles.container}`}>
            {/* <NavBar/> */}
            <div className={styles.contentBlock}>
                <div className={styles.content}>
                    <h2 className={styles.leftTitle}>Copywriting</h2>
                    <p className={styles.paragraph}>
                    Professional copywriting ensures that a business's marketing materials, 
                    website content, and advertising copy effectively communicate their message 
                    and resonate with their target audience, resulting in a higher return on investment. 
                    By investing in copywriting, businesses can elevate their brand and reach their full potential.
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

export default Copywriting;