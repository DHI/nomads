import React, { useMemo, createContext, FC, Suspense, useState } from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

import * as Types from './types';

export const Context = createContext({});

const AppShellContextProvider = Context.Provider;

const Shell: FC<Types.Props> = ({ states = {}, actions = {}, refs = {}, children, fallback, theme = {} }) => {
  const [mapInteractions, setMapInteractions] = useState({});
  const [mapPosition, setMapPosition] = useState({});
  const [mapSource, setMapSource] = useState({});

  const shared = useMemo(
    () => ({
      states: {
        mapInteractions,
        mapPosition,
        mapSource,
        ...states,
      },
      actions: {
        setMapInteractions,
        setMapPosition,
        setMapSource,
        ...actions,
      },
      refs,
    }),
    [states, actions, refs],
  );

  return (
    <Suspense fallback={fallback || <div>Loading</div>}>
      <AppShellContextProvider value={shared}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppShellContextProvider>
      ;
    </Suspense>
  );
};

export default Shell;
