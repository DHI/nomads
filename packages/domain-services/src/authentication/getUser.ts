import store from 'store2';

import options from '../options';

const { localStorageUserKey } = options;

export default () => {
  const user = store.get(localStorageUserKey);
  return user;
};
