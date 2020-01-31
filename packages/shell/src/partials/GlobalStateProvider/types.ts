import { ReactNode } from 'react';

export interface Props {
  actions: object;
  refs: object;
  states: object;
  children: ReactNode;
  withIntl: boolean;
}

interface IProperties {
  [property: string]: any;
}

export interface IContext {
  actions: IProperties | object | any;
  states: IProperties | object | any;
  refs: IProperties | object | any;
  intl: IProperties | object | any;
}
