import Image from 'next/image';
import corect from '../assets/img/corect.png';
import incorect from '../assets/img/incorect.png';
import styles from '@/styles/Main.module.scss'

const AboutSEO = () =>{
    return(
        <div className={styles.background}>
        <section id='aboutSEO' className={styles.AboutSEO}>
            <h2 className={styles.subtitle2}>Is SEO optimisation for you?</h2>
            <div className={styles.contentBlock2}>
                <div className={`${styles.box} ${styles.corect}`}>
                    <ul className={styles.list}>
                        <li className={styles.listElement}>
                            <Image className={styles.img2} src={corect} alt='Trebate SEO ako vam ovo predtsvalja problem'/>
                            <p className={styles.paragraph}>Your website is important to you</p>
                        </li>
                        <li className={styles.listElement}>
                            <Image className={styles.img2} src={corect} alt='Trebate SEO ako vam ovo predtsvalja problem'/>
                            <p className={styles.paragraph}>You want to reach your full digital potential</p>
                        </li>
                        <li className={styles.listElement}>
                            <Image className={styles.img2} src={corect} alt='Trebate SEO ako vam ovo predtsvalja problem'/>
                            <p className={styles.paragraph}>You want your clients to find you effortlessly</p>
                        </li>
                        <li className={styles.listElement}>
                            <Image className={styles.img2} src={corect} alt='Trebate SEO ako vam ovo predtsvalja problem'/>
                            <p className={styles.paragraph}>You are spending money on ads and don't see clear benefits</p>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.incorect} ${styles.box}`}>
                <ul className={styles.list}>
                        <li className={styles.listElement}>
                            <Image className={styles.img2} src={incorect} alt='Trebate SEO ako vam ovo predtsvalja problem'/>
                            <p className={styles.paragraph}>If your website is not generating the desired amount of revenue</p>
                        </li>
                        <li className={styles.listElement}>
                            <Image className={styles.img2} src={incorect} alt='Trebate SEO ako vam ovo predtsvalja problem'/>
                            <p className={styles.paragraph}>You don't want any improvements</p>
                        </li>
                        <li className={styles.listElement}>
                            <Image className={styles.img2} src={incorect} alt='Trebate SEO ako vam ovo predtsvalja problem'/>
                            <p className={styles.paragraph}>You are satisfied with where you come up in searches</p>
                        </li>
                        <li className={styles.listElement}>
                            <Image className={styles.img2} src={incorect} alt='Trebate SEO ako vam ovo predtsvalja problem'/>
                            <p className={styles.paragraph}>You don't want to scale your business</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
        
    )
}

export default AboutSEO;