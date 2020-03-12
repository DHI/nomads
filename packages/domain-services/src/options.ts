import get from 'lodash/get';

import set from 'lodash/set';

let options = {};

export const getOption = (option: string, defaultValue: any = undefined) => {
  const requestedOption = get(options, option, defaultValue);
  return Promise.resolve(requestedOption);
};

export const setOption = async (option: string, value: any = undefined) => {
  const requestedOption = set(options, option, value);
  return Promise.resolve(requestedOption);
};
