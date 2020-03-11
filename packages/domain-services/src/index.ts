import axios, { AxiosInstance } from 'axios';
import isArray from 'lodash/isArray';

import authentication from './authentication';

import * as Types from './types';
import { setOption } from './options';

// Subpackages

export { authentication };

// Instance

export let API: AxiosInstance;

export const initialize = ({
  config = {},
  localStorageKey,
}: Types.IInitialize) => {
  setOption('localStorageKey', localStorageKey);
  API = axios.create({
    responseType: 'json',
    ...config,
  });
};

// Helpers

// Domain services sends the data property as a string
export const getDataAsJSON = async (response: any) => {
  const { data: dataAsString } = response || {};
  const isDataArray = isArray(dataAsString);

  const getParsedItem = (item: any) => {
    const data = item.data.length ? JSON.parse(item.data) : '';
    return { ...item, data };
  };

  const dataAsJSON = isDataArray
    ? dataAsString.map((itemAsString: any) => getParsedItem(itemAsString))
    : getParsedItem(dataAsString);

  return Promise.resolve(dataAsJSON);
};

// Domain services expects the data property as a string
export const setDataAsString = async (response: any) => {
  const { data: dataAsJSON } = response || {};
  const isDataArray = isArray(dataAsJSON);

  const getStringifiedItem = (item: any) => {
    const data = JSON.stringify(item.data || {});
    return { ...item, data };
  };

  const dataAsString: any = isDataArray
    ? dataAsJSON.map((itemAsString: any) => getStringifiedItem(itemAsString))
    : getStringifiedItem(dataAsJSON);

  return Promise.resolve(dataAsString);
};

// Default export

export default API;
