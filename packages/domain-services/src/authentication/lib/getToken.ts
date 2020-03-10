import get from 'lodash/get';

import API from '../../index';

import authorizationHeader from './authorizationHeader';

export default async () => {
  const value = get(API, authorizationHeader, undefined);
  return Promise.resolve(value);
};
