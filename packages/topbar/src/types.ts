import { ReactNode, ElementType } from 'react';

export interface Props {
  children?: ReactNode;
  left?: ElementType;
  center?: ElementType;
  right?: ElementType;
}
