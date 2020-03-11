import get from 'lodash/get';

import API from '../../index';

import authorizationHeader from './authorizationHeader';

export default () => get(API, authorizationHeader, undefined);
