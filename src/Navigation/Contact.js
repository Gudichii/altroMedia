import Image from 'next/image';
import Wave from '../assets/img/wave.png';
import styles from '@/styles/Main.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () =>{

    const form = useRef();

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    };

  const sendEmail = (e) => {
    e.preventDefault();

     validateEmail(email);
     if (!emailError) {
    
        emailjs.sendForm('service_fc4rc4e', 'template_pw3g4hr', form.current, '6WDCNgjCa_PhFJtB')
        .then((result) => {
            console.log(result.text);
            console.log('email sent')
        }, (error) => {
            console.log(error.text);
        });
    }
  };

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [emailError, setEmailError] = useState('');



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     validateEmail(email);
//     if (!emailError) {
//       // Submit the form data
//     }
//   };

    return(
        <div>
        <section id='contact' className={`${styles.orderSection} ${styles.container}`}>
            <div className={styles.content}>
                <h2 className={styles.subtitle1}>If you believe that your website could be improved,
                    <span className={styles.span}> you are correct.</span>
                </h2>
                <p>
                    If you have any questions or concerns, or simply need some advice, 
                    don't hesitate to get in touch with us.
                    We are aware that time is of the importance, 
                    so please anticipate a quick response.
                </p>
                {/* <div className={`${styles.link} ${styles.email}`}><span className={styles.span}>Email:</span><a>seoagncy@gmail.com</a></div> */}
            </div>
            <div className={styles.formContent}>
                <form className={styles.form} onSubmit={sendEmail}>
                    <div className={styles.formBlock}>
                        <p className={styles.paragraph}>Your name:</p>
                        <input name="user_name" type="text" required />
                    </div>
                    <div className={styles.formBlock}>
                        <p className={styles.paragraph}>E-mail address:</p>
                        <input type="email"  name="user_text" required onChange={(e) => setEmail(e.target.value)}/>
                        {emailError && <p className={styles.paragraph}>{emailError}</p>}
                    </div>
                    <div className={styles.formBlock}>
                        <p className={styles.paragraph} >What I can do to assist you?</p>
                        <input name='user_goal' type="text" />
                    </div>
                    <div className={styles.formBlock}>
                        <p className={styles.paragraph}>Additional message</p>
                        <input name='user_massage' type="text" />
                    </div>
                    <button type="submit" value="Send" className={`${styles.btn} ${styles.navBtn}`}><a>Pošalji!</a></button>
                </form>
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