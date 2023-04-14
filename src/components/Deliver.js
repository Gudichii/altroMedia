import Image from 'next/image';
import deliver from '../assets/img/deliver.png';
import styles from '@/styles/Main.module.scss'

const oagenciji = () => {
    return(
        <section id='agency' className={`${styles.oagenciji} ${styles.agencySection} ${styles.container}`}>
            <div className={styles.contentBlock}>
                <div className={styles.content}>
                    <span className={styles.span}>DELIVER</span>
                    <h2 className={styles.title}>Tell your story visually</h2>
                    <p className={styles.paragraph}>
                        Detailed design with a well-defined sequence of sections so 
                        that your users easily find and convert what they're looking for. 
                        The removal of 
                        all elements on your page that may distract customers and the rapid loading 
                        of basic animation and images.
                    </p>
                </div>
            <Image className={styles.agencyImage} src={deliver} alt="Deliver" />
            </div>
        </section>
    )
}

export default oagenciji;