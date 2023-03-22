
import Image from 'next/image';
import Oagenciji from '../assets/img/o-agenciji.png';
import WaveReverse from '../assets/img/wave-reverse.png';
import styles from '@/styles/Main.module.scss'
import { Link } from 'react-scroll';

const oagenciji = () => {
    return(
        <>
        <Image className={styles.WaveReverse} src={WaveReverse}  alt='Prijelaz na drugu pozadinu'/>
        <section id='agency' className={`${styles.oagenciji} ${styles.container}`}>
            <div className={styles.contentBlock}>
                <div className={styles.content}>
                    <h2 className={styles.leftTitle}>O Agenciji</h2>
                    <p className={styles.paragraph}>
                    AltroMedia is a talented team of software engineers and marketers 
                    in the field of SEO with a passion for creating digital products. 
                    We are Croatian, but we work with clients worldwide. 
                    Our aim is to direct your digital future in the right way, 
                    and provide the key to unlock the door to your maximum business potential.
                    </p>
                    <Link to={'contact'} smooth={true} duration={400} className={`${styles.btn} ${styles.navBtn} ${styles.ContactBtn}`}>
                       Get in touch
                    </Link>
                </div>
                <Image className={styles.agencyImage} src={Oagenciji} alt="A responsive image" />
            </div>
        </section>
        </>
    )
}

export default oagenciji;