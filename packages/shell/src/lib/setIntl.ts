import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import setOverrides from './setOverrides';

const config = {
  fallbackLng: 'en',
  debug: false,
  lowerCaseLng: true,
  interpolation: {
    escapeValue: false,
  },
  nonExplicitWhitelist: true,
};

export default (i18n: any, overrides: object) => {
  const withOverrides = setOverrides(config, overrides);
  const instance = i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(withOverrides);
  return instance;
};
