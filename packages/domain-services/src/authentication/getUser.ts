import store from 'store2';

import { getOption } from '../options';

export default () => {
  const localStorageKey = getOption('localStorageKey', '');
  const user = store.get(localStorageKey + '/USER');
  return user;
};
