import Image from 'next/image';
import Wave from '../assets/img/wave.png';
import styles from '@/styles/Main.module.scss';
import Link from 'next/link';
const Contact = () =>{
    return(
        <div>
        <section id='contact' className={`${styles.orderSection} ${styles.container}`}>
            <div className={styles.content}>
                <h2 className={styles.subtitle1}>Ako mislite da bi vaša stranica mogla biti bolja,
                    <span className={styles.span}> u pravu ste.</span>
                </h2>
                <p>
                    I’a help ambitious business like your generate more profits by building awerness, 
                    driwing web trafic, connectig with customers and growing overall sales 
                    ’a help ambitious business like your generate more profits by building 
                </p>
                <div className={`${styles.link} ${styles.email}`}><span className={styles.span}>Email:</span><a>seoagncy@gmail.com</a></div>
            </div>
            <div className={styles.formContent}>
                <form className={styles.form}>
                    <div className={styles.formBlock}>
                        <p className={styles.paragraph}>Ime i Prezime</p>
                        <input type="text"  />
                    </div>
                    <div className={styles.formBlock}>
                        <p className={styles.paragraph}>Vaša e-pošta ili kontakt broj</p>
                        <input type="text" />
                    </div>
                    <div className={styles.formBlock}>
                        <p className={styles.paragraph} >S čime vam treba pomoć?</p>
                        <input type="text" />
                    </div>
                    <div className={styles.formBlock}>
                        <p className={styles.paragraph} >Dodatne informacije</p>
                        <input type="text" />
                    </div>
                </form>
                <button className={styles.btn}><a>Pošalji!</a></button>
            </div>
        </section>
        <div className={styles.footer}>
            <Image className={styles.wave2} src={Wave} alt='background switch'/>
            <div className={styles.footerContent}>
                <p className={styles.paragraph}>@ AltroMedia Inc.</p>
                <Link href={'privacyPolicy'} className={styles.paragraph}>Privacy policy</Link>
            </div>
        </div>
        </div>
    )
}

export default Contact;