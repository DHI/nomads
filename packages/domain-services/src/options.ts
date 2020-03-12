import get from 'lodash/get';
import set from 'lodash/set';
import assignIn from 'lodash/assignIn';

let options = {};

export const getOptions = () => {
  return Promise.resolve(options);
};

export const getOption = (option: string, defaultValue: any = undefined) => {
  return Promise.resolve(get(options, option, defaultValue));
};

export const setOption = async (option: string, value: any = undefined) => {
  return Promise.resolve(set(options, option, value));
};

export const setOptions = (optionsToSet: { [key: string]: any }) => {
  return Promise.resolve(assignIn(options, optionsToSet));
};
