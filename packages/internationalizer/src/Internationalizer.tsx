import React, { FC, useEffect } from 'react';
import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useTranslation as useTranslationHook, initReactI18next } from 'react-i18next';

import * as Types from './types';

export const useTranslation = useTranslationHook;

const initialize = (config: object) =>
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(config);

const Internationalizer: FC<Types.Props> = ({
  config = {
    fallbackLng: 'en',
    debug: false,
    lowerCaseLng: true,
    interpolation: {
      escapeValue: false,
    },
    nonExplicitWhitelist: true,
  },
  children,
}) => {
  useEffect(() => {
    initialize(config);
  }, []);
  return <>{children}</>;
};

export default Internationalizer;
