import React, { useMemo, createContext, FC, useState } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

import * as Types from './types';

export const Context = createContext({});

const AppShellContextProvider = Context.Provider;

const Shell: FC<Types.Props> = ({ states = {}, actions = {}, refs = {}, children, theme = {} }) => {
  const [mapInteractions, setMapInteractions] = useState({});
  const [mapPosition, setMapPosition] = useState({});
  const [mapSource, setMapSource] = useState({});

  const themeInjection = useMemo(() => createMuiTheme(theme as ThemeOptions), [theme]);

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
    <AppShellContextProvider value={shared}>
      <MuiThemeProvider theme={themeInjection}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </AppShellContextProvider>
  );
};

export default Shell;
