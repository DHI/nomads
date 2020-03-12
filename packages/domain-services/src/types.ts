import { AxiosRequestConfig } from 'axios';

export interface IInitialize {
  baseURL?: AxiosRequestConfig['baseURL'];
  localStorageKey: string;
}
