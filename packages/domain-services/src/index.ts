import axios from 'axios';
import isArray from 'lodash/isArray';
import set from 'lodash/set';

import authentication from './authentication';

export { authentication };

export const API = axios.create({
  responseType: 'json',
});

interface IOptions {
  baseURL: string;
  localStorageUserKey: string;
}

export const options: IOptions = {
  baseURL: API.defaults.baseURL,
  localStorageUserKey: 'DHI_USER_DATA',
};

export const initialize = ({
  baseURL,
  localStorageUserKey,
}: IOptions = options) => {
  set(API, 'defaults.baseURL', baseURL);
  set(options, 'localStorageUserKey', localStorageUserKey);
};

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

export default API;
