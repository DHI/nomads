import set from 'lodash/set';

import API from '../../index';

import authorizationHeader from './authorizationHeader';

export default async (value: string | undefined) => {
  try {
    const token = value && `Bearer ${value}`;
    return Promise.resolve(set(API, authorizationHeader, token));
  } catch (error) {
    return Promise.reject(error);
  }
};
