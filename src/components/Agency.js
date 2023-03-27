
import Image from 'next/image';
import Oagenciji from '../assets/img/o-agenciji.png';
import styles from '@/styles/Main.module.scss'
import { Link } from 'react-scroll';


const oagenciji = () => {
    return(
        <section id='agency' className={`${styles.oagenciji} ${styles.agencySection} ${styles.container}`}>
            <div className={styles.contentBlock}>
                <div className={styles.content}>
                    <h2 className={styles.leftTitle}>Who we are?</h2>
                    <p className={styles.paragraph}>
                    AltroMeda is team of software engineers and marketers focused on 
                    SEO and improvment of digitial presence. 
                    We aim to direct your digitial future with strategic apporach, 
                    and provide the key to unlock your maximum potential.
                    </p>
                    <Link to={'contact'} smooth={true} duration={400} className={`${styles.btn} ${styles.navBtn} ${styles.ContactBtn}`}>
                        Book a meeting
                    </Link>
                </div>
                <Image className={styles.agencyImage} src={Oagenciji} alt="A responsive image" />
            </div>
        </section>
    )
}

export default oagenciji;