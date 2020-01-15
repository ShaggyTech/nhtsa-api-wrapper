module.exports = {
  collectCoverage: true,
  coverageDirectory: './dev/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,ts,jsx}',
    // ignore
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/__*__/**'
  ],
  // setupFiles: ['./test/config/jest.setup.js'],
  testMatch: ['src/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/dev/',
    '<rootDir>/docs/',
    '<rootDir>/bin/'
  ],
  testEnvironment: 'node',
  preset: 'ts-jest',
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  watchPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/dev/',
    '<rootDir>/docs/',
    '<rootDir>/bin/'
  ],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.dev.json'
    }
  }
}
