import { ReactNode, ChangeEvent } from 'react';

export interface Props {
  headline: string;
  subline?: string;
  children: ReactNode;
  expanded?: boolean;
  onChange?: (event: ChangeEvent) => void;
}
