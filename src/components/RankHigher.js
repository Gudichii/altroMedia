import Image from 'next/image';
import rankHigher from '../assets/img/rankHigher.png';
import styles from '@/styles/Main.module.scss'

const oagenciji = () => {
    return(
        <section id='agency' className={`${styles.oagenciji} ${styles.agencySection} ${styles.container}`}>
            <div className={`${styles.contentBlock} ${styles.RankContentBlock}`}>
                <Image className={styles.agencyImage} src={rankHigher} alt="Rank Higher" />
                <div className={styles.content}>
                    <span className={styles.span}>RANK HIGHER</span>
                    <h2 className={styles.title}>Tell your story visually</h2>
                    <p className={styles.paragraph}>
                        Detailed design with a well-defined sequence of sections so 
                        that your users easily find and convert what they're looking for. 
                        The removal of 
                        all elements on your page that may distract customers and the rapid loading 
                        of basic animation and images.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default oagenciji;