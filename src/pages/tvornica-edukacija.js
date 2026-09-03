import { useEffect } from 'react';
import Head from 'next/head';
import styles from '@/styles/tvornica.module.scss';
import { BRAND } from '@/data/tvornica';
import Nav from '@/components/tvornica/Nav';
import Hero from '@/components/tvornica/Hero';
import Replaces from '@/components/tvornica/Replaces';
import Features from '@/components/tvornica/Features';
import Spotlight from '@/components/tvornica/Spotlight';
import Steps from '@/components/tvornica/Steps';
import Pricing from '@/components/tvornica/Pricing';
import Testimonials from '@/components/tvornica/Testimonials';
import Faq from '@/components/tvornica/Faq';
import FinalCta from '@/components/tvornica/FinalCta';
import Footer from '@/components/tvornica/Footer';

const DESCRIPTION =
  'Funnels, CRM, email, SMS, kalendar, tečajevi i naplata na jednoj platformi pod tvojim brendom. Postavljamo ti sve u 48 sati.';

export default function TvornicaEdukacija() {
  // Smooth scroll za anchor linkove — samo dok je ova stranica montirana,
  // da ne dira react-scroll animacije na ostatku sitea.
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = 'smooth';
    return () => {
      root.style.scrollBehavior = previous;
    };
  }, []);

  return (
    <div className={styles.page}>
      <Head>
        <title>{`${BRAND.name} | Platforma za edukatore, trenere i coacheve`}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta name="theme-color" content="#05070f" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://${BRAND.domain}/`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${BRAND.name} | Platforma za edukatore`} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`https://${BRAND.domain}/`} />
        <meta property="og:locale" content="hr_HR" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Nav />
      <main>
        <Hero />
        <Replaces />
        <Features />
        <Spotlight />
        <Steps />
        <Pricing />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
