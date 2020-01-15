module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true
  },
  ignorePatterns: [
    '.vscode',
    'coverage/',
    'dist/',
    'dev/',
    'docs/',
    'node_modules/',
    'bin'
  ],
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:node/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module'
    // "project": "./tsconfig.json"
  },
  plugins: ['@typescript-eslint', 'prettier', 'jsdoc'],
  rules: {
    'dot-notation': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',

    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off'
  }
}
