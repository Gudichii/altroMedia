import Link from 'next/link';
import styles from '@/styles/Main.module.scss'
import Image from 'next/image';
import PregledWebStranice from '../assets/img/pregled-web-stranice.png';
import PoozicijaNaGoogleu from '../assets/img/pozicija-na-googleu.png';
import OptimizacijaWebStranice from '../assets/img/optimizacija-web-stranice.png';
import Branding from '../assets/img/branding.png';
import Consulting from '../assets/img/consulting.png';
import Copywrting from '../assets/img/copywriting.png';

const Services = () =>{
    return(
        <div className={styles.background}>
        <section id='services' className={`${styles.services} ${styles.container}`}>
            <div className={styles.serviceTitles}> 
                <h2 className={styles.subtitle1}>Solutions we provide</h2>
                <span className={`${styles.span} ${styles.paragraph}`}>“let the results to talk”</span>
            </div>
            <div className={styles.contentBlock3}>
                <Link className={styles.service} href={'Fast'}>
                    <Image className={styles.img} src={OptimizacijaWebStranice } alt='' />
                    <h3 className={styles.middleTitle}>Website creation</h3>
                </Link>
                <Link className={styles.service} href={'Optimized'}>
                    <Image className={styles.img} src={PregledWebStranice} alt='' />
                    <h3 className={styles.middleTitle}>Website optimization</h3>
                </Link>
                <Link className={styles.service} href={'Position'}>
                    <Image className={styles.img} src={PoozicijaNaGoogleu} alt='' />
                    <h3 className={styles.middleTitle}>Position on google</h3>
                </Link>
                <Link className={styles.service} href={'Branding'}>
                    <Image className={styles.img} src={Branding} alt='' />
                    <h3 className={styles.middleTitle}>Branding</h3>
                </Link>
                <Link className={styles.service} href={'Copywriting'}>
                    <Image className={styles.img} src={Copywrting} alt='' />
                    <h3 className={styles.middleTitle}>Copywrting</h3>
                </Link>
                <Link className={styles.service} href={'Consulting'}>
                    <Image className={styles.img} src={Consulting} alt='' />
                    <h3 className={styles.middleTitle}>Consulting</h3>
                </Link>
            </div>
        </section>
        </div>
    )
}

export default Services;