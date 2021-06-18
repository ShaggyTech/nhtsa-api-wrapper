module.exports = {
  automock: false,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,ts,jsx}',
    // ignore
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/__*__/**'
  ],
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/index.ts'],
  setupFiles: ['<rootDir>/test/config/jest.setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.dev.json'
    }
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  preset: 'ts-jest',
  rootDir: '../../',
  testEnvironment: 'node',
  testMatch: ['src/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/dev/',
    '<rootDir>/docs/',
    '<rootDir>/bin/'
  ],
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  watchPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/dev/',
    '<rootDir>/docs/',
    '<rootDir>/bin/'
  ],
};
