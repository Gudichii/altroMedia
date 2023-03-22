import Image from 'next/image';
import corect from '../assets/img/corect.png';
import incorect from '../assets/img/incorect.png';
import styles from '@/styles/Main.module.scss'

const AboutSEO = () =>{
    return(
        <div className={styles.background}>
        <section id='aboutSEO' className={styles.AboutSEO}>
            <h2 className={styles.subtitle2}>You need SEO  optimized and fast website if:</h2>
            <div className={styles.contentBlock2}>
                <div className={`${styles.box} ${styles.corect}`}>
                    <ul className={styles.list}>
                        <li className={styles.listElement}>
                            <Image className={styles.img2} src={corect} alt='Trebate SEO ako vam ovo predtsvalja problem'/>
                            <p className={styles.paragraph}>You are running an online bussines.</p>
                        </li>
                        <li className={styles.listElement}>
                            <Image className={styles.img2} src={corect} alt='Trebate SEO ako vam ovo predtsvalja problem'/>
                            <p className={styles.paragraph}>You want to improve your online income.</p>
                        </li>
                        <li className={styles.listElement}>
                            <Image className={styles.img2} src={corect} alt='Trebate SEO ako vam ovo predtsvalja problem'/>
                            <p className={styles.paragraph}>You want your target group to find you more easily.</p>
                        </li>
                        <li className={styles.listElement}>
                            <Image className={styles.img2} src={corect} alt='Trebate SEO ako vam ovo predtsvalja problem'/>
                            <p className={styles.paragraph}>You're tired of spending for pointless advertisements on Google and social media.</p>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.incorect} ${styles.box}`}>
                <ul className={styles.list}>
                        <li className={styles.listElement}>
                            <Image className={styles.img2} src={incorect} alt='Trebate SEO ako vam ovo predtsvalja problem'/>
                            <p className={styles.paragraph}>Do not run online bussines.</p>
                        </li>
                        <li className={styles.listElement}>
                            <Image className={styles.img2} src={incorect} alt='Trebate SEO ako vam ovo predtsvalja problem'/>
                            <p className={styles.paragraph}>You don't want to conduct commerce or earn money online.</p>
                        </li>
                        <li className={styles.listElement}>
                            <Image className={styles.img2} src={incorect} alt='Trebate SEO ako vam ovo predtsvalja problem'/>
                            <p className={styles.paragraph}>Your customers find you easily on google.</p>
                        </li>
                        <li className={styles.listElement}>
                            <Image className={styles.img2} src={incorect} alt='Trebate SEO ako vam ovo predtsvalja problem'/>
                            <p className={styles.paragraph}>You believe that your income cannot be higher.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
        
    )
}

export default AboutSEO;