module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/__*__/**'
  ],
  setupFiles: ['./test/config/jest.setup.js'],
  testPathIgnorePatterns: ['/__*__/']
}
