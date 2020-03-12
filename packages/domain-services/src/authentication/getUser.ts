import store from 'store2';

import { getOption } from '../options';

export default async () => {
  try {
    const localStorageKey = await getOption('localStorageKey', '');
    const user = store.get(localStorageKey + '/USER');
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};
