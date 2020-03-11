import isLoggedIn from './isLoggedIn';
import getUser from './getUser';
import setToken from './lib/setToken';

export default async () => {
  try {
    const user = await getUser();
    const { accessToken } = user;
    const { token } = accessToken;
    await setToken(token);
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error.response);
  }
};
