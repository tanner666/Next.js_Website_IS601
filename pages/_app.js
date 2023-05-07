//this makes the styles and privacy policy global
import '../styles/global.css'
import PrivacyPolicyPopup from '../components/privacy-pop-up';
import '../i18n';
import {useTranslation} from 'react-i18next'


export default function App({ Component, pageProps }) {
  const {t} = useTranslation();
  
  return (
    <>
      <h1>{t('welcome')}</h1>
      <Component {...pageProps} />
      <PrivacyPolicyPopup />
    </>
  );
}
