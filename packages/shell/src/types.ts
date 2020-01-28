import { ReactNode } from 'react';
import { Theme } from '@material-ui/core/styles';

export interface Props {
  states?: object;
  actions?: object;
  refs?: object;
  children: ReactNode;
  fallback?: ReactNode;
  theme?: Theme;
}
