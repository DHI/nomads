import store from 'store2';

import API from '../index';
import options from '../options';

import * as Types from './types';

import mapUser from './lib/mapUser';
import setToken from './lib/setToken';

const { localStorageUserKey } = options;

export default async ({ id, password, config = {} }: Types.ILogin) => {
  try {
    const endpoint = '/api';
    const validationEndpoint = endpoint + '/accounts/validation';
    const tokenEndpoint = endpoint + '/tokens';

    const body = {
      id,
      password,
    };

    const validationResponse = await API.post(validationEndpoint, body, config);

    if (!validationResponse) throw Error(`Request rejected`);

    const { data: userData } = validationResponse;

    const tokenResponse = await API.post(tokenEndpoint, body, config);

    if (!tokenResponse) throw Error(`Request rejected`);

    const { data: tokenData } = tokenResponse;
    const { accessToken } = tokenData;
    const { token } = accessToken;

    await setToken(token);

    const mappedUser = mapUser(userData);

    const user = { ...mappedUser, ...tokenData };

    store.set(localStorageUserKey, user);

    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error.response);
  }
};
