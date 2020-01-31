import React, { useMemo, FC } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

import setOverrides from '../../lib/setOverrides';

import { mikeSharedTheme } from './lib/theme';

import * as Types from './types';

const ThemeProvider: FC<Types.Props> = ({ overrides, children }) => {
  const theme = useMemo(() => {
    const themeWithOverrides = setOverrides(mikeSharedTheme, overrides);
    return createMuiTheme(themeWithOverrides as ThemeOptions);
  }, [overrides]);

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </>
  );
};

export default ThemeProvider;
