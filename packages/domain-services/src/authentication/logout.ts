import store from 'store2';

import setToken from './lib/setToken';

import { getOption } from '../options';

export default async () => {
  try {
    await setToken(undefined);

    const localStorageKey = await getOption('localStorageKey', '');

    store.remove(localStorageKey + '/USER');

    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
};
