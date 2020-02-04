import { ReactNode } from 'react';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export interface Props {
  states?: object;
  refs?: object;
  children: ReactNode;
  fallback?: ReactNode;
  overrides?: {
    theme?: ThemeOptions;
    intl?: object;
  };
  withIntl?: boolean;
  withMapbox?: boolean;
}
