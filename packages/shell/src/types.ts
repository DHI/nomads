import { ReactNode } from 'react';

export interface Props {
  states?: object;
  actions?: object;
  refs?: object;
  children: ReactNode;
  fallback?: ReactNode;
  overrides?: {
    theme?: object;
    intl?: object;
  };
  withIntl?: boolean;
}
