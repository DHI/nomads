import store from 'store2';
import isNil from 'lodash/isNil';

import setToken from './lib/setToken';
import localStorageUserKey from './lib/localStorageUserKey';

export default async () => {
  try {
    const userFromLocalStorage = store.get(localStorageUserKey);
    const user = JSON.parse(userFromLocalStorage);
    const { accessToken: token } = user;
    const isTokenValid = !isNil(token);

    await setToken(token);

    return Promise.resolve(isTokenValid);
  } catch (error) {
    return Promise.reject(error.response);
  }
};
