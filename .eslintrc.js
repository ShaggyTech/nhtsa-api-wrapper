module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
    "jest/globals": true
  },
  ignorePatterns: [
    '.vscode',
    'coverage/',
    'dist/',
    'dev/',
    'docs/',
    'node_modules/',
    'bin/',
    'tests/',
    'e2e'
  ],
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:node/recommended',
    'plugin:jest/all',
    'plugin:jest/style'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier', 'jsdoc', 'jest'],
  /* 0('off'), 1('warn'), 2('error) */
  rules: {
    /*****************
     * ESLint Rules
     ****************/
    'dot-notation': 0,
    'no-console': 0,
    'no-debugger': 0,
    'no-unused-vars': 0,

    /*****************
     * Prettier Rules
     ****************/
    'prettier/prettier': 1,

    /********************
     * Typescript Rules
     ********************/
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,

    /*****************
     * Node Rules
     ****************/
    'node/no-unsupported-features/es-syntax': 0,
    'node/no-missing-import': 0,

    /*****************
     * JSDOC Rules
     ****************/
    // "jsdoc/check-alignment": 1, // Recommended
    // "jsdoc/check-examples": 1,
    // "jsdoc/check-indentation": 1,
    "jsdoc/check-param-names": 1, // Recommended
    "jsdoc/check-syntax": 1,
    // "jsdoc/check-tag-names": 1, // Recommended
    "jsdoc/check-types": 1, // Recommended
    "jsdoc/implements-on-classes": 1, // Recommended
    "jsdoc/match-description": 1,
    "jsdoc/newline-after-description": 1, // Recommended
    // "jsdoc/no-types": 1,
    // "jsdoc/no-undefined-types": 1, // Recommended
    "jsdoc/require-description": 1,
    // "jsdoc/require-description-complete-sentence": 1,
    // "jsdoc/require-example": 1,
    "jsdoc/require-hyphen-before-param-description": 1,
    "jsdoc/require-jsdoc": 1, // Recommended
    "jsdoc/require-param": 1, // Recommended
    "jsdoc/require-param-description": 1, // Recommended
    "jsdoc/require-param-name": 1, // Recommended
    "jsdoc/require-param-type": 1, // Recommended
    "jsdoc/require-returns": 1, // Recommended
    "jsdoc/require-returns-check": 1, // Recommended
    "jsdoc/require-returns-description": 1, // Recommended
    "jsdoc/require-returns-type": 1, // Recommended
    "jsdoc/valid-types": 1, // Recommended

    /*****************
     * Jest Rules
     ****************/
    "jest/no-disabled-tests": 0,
    // "jest/no-focused-tests": 1,
    // "jest/no-identical-title": 1,
    // "jest/prefer-to-have-length": 1,
    // "jest/valid-expect": 1,
    "jest/prefer-expect-assertions": 0,
    "jest/consistent-test-it": 0,
    "jest/no-hooks": 0,
    "jest/lowercase-name": 0,
    "jest/no-mocks-import": 0
  }
}
