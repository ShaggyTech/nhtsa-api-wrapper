module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**', '!**/vendor/**'],
  setupFiles: ['./test/config/jest.setup.js']
}
