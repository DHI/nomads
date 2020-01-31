import assignIn from 'lodash/assignIn';

export default (config: object, overrides: object) => assignIn({ ...config }, overrides);
