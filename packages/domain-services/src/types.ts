import { AxiosRequestConfig } from 'axios';

export interface IInitialize {
  config?: AxiosRequestConfig;
  localStorageKey: string;
}
