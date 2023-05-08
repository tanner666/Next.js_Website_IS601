//this makes the styles and privacy policy global
import '../styles/global.css'
import PrivacyPolicyPopup from '../components/privacy-pop-up';
import '../i18n';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getTranslationData } from '../i18n';
import Router from 'next/router';
import withGA from 'next-ga';
import * as gtag from "../lib/google-analytics"
import Script from 'next/script'

function App({ Component, pageProps }) {
  const [translationData, setTranslationData] = useState({});
  const router = useRouter();

  useEffect(() => {
    const locale = router.query.locale || 'en';
    const data = getTranslationData(locale);
    setTranslationData(data);
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
  }, [router.query.locale], [router.events]);
  
  return (
    <>
      <h1>{translationData.welcome}</h1>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TBPFJR2B7M"/>
      <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TBPFJR2B7M', {
                page_path: window.location.pathname,
              });
            `,
            }}
        />
      <Component {...pageProps} />
      <PrivacyPolicyPopup />
    </>
  );
}

export default withGA('G-TBPFJR2B7M', Router)(App);