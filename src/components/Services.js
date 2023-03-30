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
        <section id='services' className={`${styles.services} ${styles.container}`}>
            <div className={styles.serviceTitles}> 
                <h2 className={styles.subtitle1}>Our solutions</h2>
            </div>
            <div className={styles.contentBlock3}>
                <Link className={styles.service} href={'WebsiteBuilding'}>
                    <Image className={styles.img} src={OptimizacijaWebStranice } alt='' />
                    <h3 className={styles.middleTitle}>Website building</h3>
                </Link>
                <Link className={styles.service} href={'WebsiteOptimization'}>
                    <Image className={styles.img} src={PregledWebStranice} alt='' />
                    <h3 className={styles.middleTitle}>Website optimization</h3>
                </Link>
                <Link className={styles.service} href={'WebsiteVisibility'}>
                    <Image className={styles.img} src={PoozicijaNaGoogleu} alt='' />
                    <h3 className={styles.middleTitle}>Website visibility</h3>
                </Link>
                <Link className={styles.service} href={'eCommerce'}>
                    <Image className={styles.img} src={Branding} alt='' />
                    <h3 className={styles.middleTitle}>eCommerce SEO</h3>
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
    )
}

export default Services;