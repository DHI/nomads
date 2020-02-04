import React, { FC, useState, createContext } from 'react';
import { useTranslation } from 'react-i18next';

import { IContext } from './types';

export const ShellContext = createContext<IContext>({
  states: {},
  refs: {},
});

import * as Types from './types';

const useTranslationMocker = () => ({
  t: (id: string) => id,
  i18n: {},
});

const ShellContextProvider = ShellContext.Provider;

const GlobalStateProvider: FC<Types.Props> = ({
  children,
  refs,
  states,
  withIntl,
  withMapbox,
}) => {
  const useIntl = withIntl ? useTranslation : useTranslationMocker;
  const { t: translate, i18n: instance } = useIntl();
  const [mapInteractions, setMapInteractions] = useState({});
  const [mapPosition, setMapPosition] = useState({});
  const [mapSource, setMapSource] = useState({});

  const intl = withIntl ? { instance, translate } : {};

  const mapbox = withMapbox
    ? {
        mapInteractions,
        setMapInteractions,
        mapPosition,
        setMapPosition,
        mapSource,
        setMapSource,
      }
    : {};

  return (
    <ShellContextProvider
      value={{
        states: {
          ...states,
          intl,
          mapbox,
        },
        refs,
      }}
    >
      {children}
    </ShellContextProvider>
  );
};

export default GlobalStateProvider;
