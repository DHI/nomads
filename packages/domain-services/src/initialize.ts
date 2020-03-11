import set from 'lodash/set';

import API from './index';
import options from './options';

interface IInitialize {
  baseURL?: string;
  localStorageUserKey?: string;
}

export default ({ baseURL, localStorageUserKey }: IInitialize) => {
  if (baseURL) {
    set(API, 'defaults.baseURL', baseURL);
  }
  if (localStorageUserKey) {
    set(options, 'localStorageUserKey', localStorageUserKey);
  }
};
