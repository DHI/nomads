import store from 'store2';

import localStorageUserKey from './lib/localStorageUserKey';

export default () => {
  const user = store.get(localStorageUserKey);
  return user;
};
