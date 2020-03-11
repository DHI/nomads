import set from 'lodash/set';

import API from './index';
import options from './options';

interface IInitialize {
  baseURL: string;
  localStorageUserKey: string;
}

const defaultInitializer = {
  baseURL: API.defaults.baseURL,
  localStorageUserKey: options.localStorageUserKey,
};

export default ({
  baseURL,
  localStorageUserKey,
}: IInitialize = defaultInitializer) => {
  set(API, 'defaults.baseURL', baseURL);
  set(options, 'localStorageUserKey', localStorageUserKey);
};
