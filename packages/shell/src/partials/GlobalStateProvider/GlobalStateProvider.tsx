import React, { FC, useState, createContext } from 'react';
import { useTranslation } from 'react-i18next';

import { IContext } from './types';

export const ShellContext = createContext<IContext>({
  actions: {},
  states: {},
  refs: {},
  intl: {},
});

import * as Types from './types';

const useTranslationMocker = () => ({
  t: (id: string) => id,
  i18n: {},
});

const ShellContextProvider = ShellContext.Provider;

const GlobalStateProvider: FC<Types.Props> = ({ actions, children, refs, states, withIntl }) => {
  const useIntl = withIntl ? useTranslation : useTranslationMocker;
  const { t: translate, i18n: instance } = useIntl();
  const [mapInteractions, setMapInteractions] = useState({});
  const [mapPosition, setMapPosition] = useState({});
  const [mapSource, setMapSource] = useState({});

  return (
    <ShellContextProvider
      value={{
        actions: {
          ...actions,
          setMapInteractions,
          setMapPosition,
          setMapSource,
        },
        states: {
          ...states,
          mapInteractions,
          mapPosition,
          mapSource,
        },
        intl: {
          instance,
          translate,
        },
        refs,
      }}
    >
      {children}
    </ShellContextProvider>
  );
};

export default GlobalStateProvider;
