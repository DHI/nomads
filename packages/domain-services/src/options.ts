import get from 'lodash/get';

import set from 'lodash/set';

let options = {};

export const getOption = (option: string, defaultValue: any = undefined) => {
  return get(options, option, defaultValue);
};

export const setOption = (option: string, value: any = undefined) => {
  return set(options, option, value);
};
