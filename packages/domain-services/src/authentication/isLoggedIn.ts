import store from 'store2';
import isNil from 'lodash/isNil';

import options from '../options';

const { localStorageUserKey } = options;

export default () => {
  const user = store.get(localStorageUserKey);
  const { accessToken: token } = user;
  const isTokenValid = !isNil(token);
  return isTokenValid;
};
