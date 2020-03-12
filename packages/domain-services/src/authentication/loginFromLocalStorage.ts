import getUser from './getUser';
import setToken from './lib/setToken';
import get from 'lodash/get';

export default async () => {
  try {
    const user = await getUser();
    const token = get(user, 'accessToken.token', undefined);
    await setToken(token);
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};
