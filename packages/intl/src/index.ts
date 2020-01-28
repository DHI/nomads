import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useTranslation, initReactI18next } from 'react-i18next';

const initializeTranslation = (
  config = {
    fallbackLng: 'en',
    debug: false,
    lowerCaseLng: true,
    interpolation: {
      escapeValue: false,
    },
    nonExplicitWhitelist: true,
  },
) =>
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(config);

export default {
  initializeTranslation,
  useTranslation,
};
