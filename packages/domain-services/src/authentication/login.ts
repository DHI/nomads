import store from 'store2';

import API from '../index';

import mapUser from './lib/mapUser';
import setToken from './lib/setToken';
import localStorageUserKey from './lib/localStorageUserKey';

import * as Types from './types';

export default async ({
  baseURL = API.defaults.baseURL,
  id,
  password,
  config = {},
}: Types.ILogin) => {
  try {
    const endpoint = baseURL + '/api';
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

    store.set(localStorageUserKey, JSON.stringify(user));

    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error.response);
  }
};
