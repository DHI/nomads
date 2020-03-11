import set from 'lodash/set';
import get from 'lodash/get';

import API from './index';
import options from './options';

interface IInitialize {
  baseURL: string;
  localStorageUserKey: string;
}

const defaultInitializer = {
  baseURL: get(API, 'defaults.baseURL', ''),
  localStorageUserKey: get(options, 'localStorageUserKey', ''),
};

export default ({
  baseURL,
  localStorageUserKey,
}: IInitialize = defaultInitializer) => {
  set(API, 'defaults.baseURL', baseURL);
  set(options, 'localStorageUserKey', localStorageUserKey);
};
