import store from 'store2';
import isNil from 'lodash/isNil';

import { getOption } from '../options';

export default () => {
  const localStorageKey = getOption('localStorageKey');
  const user = store.get(localStorageKey + '/USER');
  const { accessToken: token } = user;
  const isTokenValid = !isNil(token);
  return isTokenValid;
};
