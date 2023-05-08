import en from "./locales/en.json";
import de from "./locales/de.json";
import fr from "./locales/fr.json";

export function getTranslationData(locale) {
  switch (locale) {
    case 'en':
      return en;
    case 'de':
      return de;
    case 'fr':
      return fr;
    default:
      return en;
  }
}