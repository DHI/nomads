import store from 'store2';

import setToken from './lib/setToken';

import { options } from '../index';

const { localStorageUserKey } = options;

export default async () => {
  try {
    await setToken(undefined);

    store.remove(localStorageUserKey);

    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error.response);
  }
};
