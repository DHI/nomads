import React, { Suspense, FC, useEffect, useState } from 'react';
import i18n from 'i18next';

import setIntl from './lib/setIntl';

import * as Types from './types';

import GlobalStateProvider from './partials/GlobalStateProvider';
import ThemeProvider from './partials/ThemeProvider';

const Shell: FC<Types.Props> = ({
  children,
  fallback,
  overrides = {},
  refs = {},
  states = {},
  withIntl = false,
  withMapbox = false,
}) => {
  const [isInitialized, setIsInitialized] = useState(false);

  const { theme = {}, intl = {} } = overrides;

  useEffect(() => {
    if (withIntl && !isInitialized) {
      const instance = setIntl(i18n, intl);
      if (instance) setIsInitialized(true);
    } else {
      setIsInitialized(true);
    }
    return () => setIsInitialized(false);
  }, []);

  if (isInitialized) {
    return (
      <Suspense fallback={fallback || <p>Loading...</p>}>
        <GlobalStateProvider
          states={states}
          refs={refs}
          withIntl={withIntl}
          withMapbox={withMapbox}
        >
          <ThemeProvider overrides={theme}>{children}</ThemeProvider>
        </GlobalStateProvider>
      </Suspense>
    );
  }
  return null;
};

export default Shell;
