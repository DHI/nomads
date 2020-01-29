import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useTranslation as useTranslationHook, initReactI18next } from 'react-i18next';

export const useTranslation = useTranslationHook;

export const initialize = (
  config: object = {
    fallbackLng: 'en',
    debug: false,
    lowerCaseLng: true,
    interpolation: {
      escapeValue: false,
    },
    nonExplicitWhitelist: true,
  },
) => {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(config);
  return i18n;
};

export default initialize;
