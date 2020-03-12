import set from 'lodash/set';

import API from '../../index';

import authorizationHeader from './authorizationHeader';

import getToken from './getToken';

export default async (value: string | undefined) => {
  try {
    const token = value && `Bearer ${value}`;
    set(API, authorizationHeader, token);
    const newValue = getToken();
    if (value === newValue) {
      return Promise.resolve(newValue);
    } else {
      throw new Error('Token is still the same');
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
