import set from 'lodash/set';

import API from '../../index';

import authorizationHeader from './authorizationHeader';

import getToken from './getToken';

export default async (value: string | undefined) => {
  try {
    const token = value && `Bearer ${value}`;
    set(API, authorizationHeader, token);
    const newValue = await getToken();
    if (value === newValue) {
      return Promise.resolve();
    } else {
      throw Error('Token is still the same');
    }
  } catch (error) {
    Promise.reject('Did not update the header');
  }
};
