import { ReactNode, ChangeEvent } from 'react';

export interface Props {
  headline: string;
  subline?: string;
  expanded?: boolean;
  onChange?: (event: ChangeEvent) => void;
  children: ReactNode | null;
}
