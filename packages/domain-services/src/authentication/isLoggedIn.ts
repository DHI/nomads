import store from 'store2';
import isNil from 'lodash/isNil';
import get from 'lodash/get';

import { getOption } from '../options';

export default async () => {
  try {
    const localStorageKey = await getOption('localStorageKey', '');
    const user = store.get(localStorageKey + '/USER');
    const token = get(user, 'accessToken.token', undefined);
    const isTokenValid = !isNil(token);
    return Promise.resolve(isTokenValid);
  } catch (error) {
    return Promise.resolve(error);
  }
};
