import store from 'store2';
import isNil from 'lodash/isNil';

import localStorageUserKey from './lib/localStorageUserKey';

export default async () => {
  try {
    const userFromLocalStorage = store.get(localStorageUserKey);
    const user = JSON.parse(userFromLocalStorage);
    const { accessToken: token } = user;
    const isTokenValid = !isNil(token);
    if (isTokenValid) {
      return Promise.resolve(user);
    } else {
      throw Error(`Token is not valid`);
    }
  } catch (error) {
    return Promise.reject(error.response);
  }
};
