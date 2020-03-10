import { AxiosRequestConfig } from 'axios';

export interface ILogin {
  baseURL?: string;
  id: string;
  password: string;
  config: AxiosRequestConfig;
}
