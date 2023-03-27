import Image from 'next/image';
import Img from '../assets/RoutesImg/optimized.png';
import styles from '@/styles/Main.module.scss'
import Link from 'next/link';
import NavBar from '@/Navigation/nav';

const Position = () => {
    return(
        <div>
        <section className={`${styles.oagenciji} ${styles.container}`}>
            {/* <NavBar/> */}
            <div className={styles.contentBlock}>
                <div className={styles.content}>
                    <h2 className={styles.leftTitle}>Position on google</h2>
                    <p className={styles.paragraph}>
                        AHaving the best possible position on Google is essential for any business that wants to succeed in 
                        today's digital age. When potential customers search for products or services 
                        related to your business on Google, they are more likely to click on the websites 
                        that appear at the top of the search results. Additionally, appearing at the top of 
                        the search results can help to build trust and credibility with potential customers, 
                        as it is seen as an indication of your business's authority in your industry.
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

export default Position;