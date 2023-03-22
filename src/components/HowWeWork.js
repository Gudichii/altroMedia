
import styles from '@/styles/Main.module.scss'

const How = () => {
    return ( 
        <section id='howwework' className={`${styles.HowContainer} ${styles.container}`}>
            <h2 className={styles.leftTitle}>How we work</h2>
            <div className={styles.contentBlock4}>
                <div className={`${styles.block} ${styles.yellowBlock}`}>
                    <div className={styles.blockTitle}>
                        <span className={styles.spanNumber}>01</span>
                        <h3 className={styles.Howtitle}>
                            Listen to your problems
                        </h3>
                    </div>
                    <p className={styles.paragraph}>
                    We believe that effective problem-solving starts with listening, 
                    so we focus our energy on learning about and identifying all of your issues.
                    </p>
                </div>
                <div className={`${styles.block} ${styles.greenBlock}`}>
                    <div className={styles.blockTitle}>
                        <span className={styles.spanNumber}>02</span>
                        <h3 className={styles.Howtitle}>
                            Open the door for you
                        </h3>
                    </div>
                    <p className={styles.paragraph}>
                    We understand that every client is unique,
                    with their set of challenges, so we take a customized approach to problem-solving
                    </p>
                </div>
            </div>
        </section>
     );
}
 
export default How;