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
      return Promise.resolve();
    } else {
      return Promise.reject({
        error: {
          message: 'Token is still the same',
        },
      });
    }
  } catch (error) {
    return Promise.reject({
      error: {
        message: 'Did not update the header',
      },
    });
  }
};
