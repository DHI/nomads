import store from 'store2';
import isNil from 'lodash/isNil';
import get from 'lodash/get';

import { getOption } from '../options';

export default () => {
  const localStorageKey = getOption('localStorageKey', '');
  const user = store.get(localStorageKey + '/USER');
  const token = get(user, 'accessToken.token', undefined);
  const isTokenValid = !isNil(token);
  return isTokenValid;
};
