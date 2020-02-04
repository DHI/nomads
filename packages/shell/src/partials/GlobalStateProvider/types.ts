import { ReactNode } from 'react';

export interface Props {
  refs: object;
  states: object;
  children: ReactNode;
  withIntl: boolean;
  withMapbox: boolean;
}

interface IProperties {
  [property: string]: any;
}

export interface IContext {
  states: IProperties | object | any;
  refs: IProperties | object | any;
}
