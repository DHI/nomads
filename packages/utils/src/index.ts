import set from 'lodash/set';

export const setOverrides = (config: object, overrides: object) => {
  // Get every override as key and value
  const entries = Object.entries(overrides);
  // Set config as default and set overrides
  const withOverrides = entries.reduce((config, entry) => {
    const [key, value] = entry;
    return set(config, key, value);
  }, config);
  return withOverrides;
};
