// eslint-disable-next-line @typescript-eslint/no-var-requires
const mainConfig = require('./jest.config.js');

module.exports = {
  ...mainConfig,
  collectCoverage: false
};
