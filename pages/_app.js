//this makes the styles and privacy policy global
import '../styles/global.css'
import PrivacyPolicyPopup from '../components/privacy-pop-up';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <PrivacyPolicyPopup />
    </>
  );
}
