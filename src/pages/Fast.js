import Image from 'next/image';
import fastImg from '../assets/RoutesImg/position.png';
import Wave from '../assets/img/wave.png';
import styles from '@/styles/Main.module.scss'

import NavBar from '@/Navigation/nav';
import Link from 'next/link';

const fast = () => {
    return(
        <div>
            <section className={`${styles.oagenciji} ${styles.container}`}>
                <NavBar/>
                <div className={styles.contentBlock}>
                    <div className={styles.content}>
                        <h2 className={styles.leftTitle}>Website creation</h2>
                        <p className={styles.paragraph}>
                        A good and fast website is essential for any business in today's digital age. 
                        A website that loads quickly, is easy to navigate, and provides the necessary 
                        information is crucial for providing a positive user experience. It helps to build trust and credibility 
                        with potential customers, leading to increased conversions and sales. Additionally, 
                        website speed and design are important ranking factors for search engines,
                         making it more likely for your business to be seen by potential customers.
                        </p>
                        <div className={`${styles.link} ${styles.email}`}><span className={styles.span}>Email:</span><a>seoagncy@gmail.com</a></div>
                        <Link className={`${styles.btn} ${styles.navBtn} ${styles.ContactBtn}`} href={`/#${'contact'}`}>
                        Get in touch
                        </Link>
                    </div>
                    <Image className={styles.agencyImage} src={fastImg} alt="A responsive image" />
                </div>
            </section>
        </div>
    )                                  
}

export default fast;