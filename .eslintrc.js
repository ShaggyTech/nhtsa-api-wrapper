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
    'tests/'
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
    ecmaVersion: 2016,
    sourceType: 'module'
    // "project": "./tsconfig.json"
  },
  plugins: ['@typescript-eslint', 'prettier', 'jsdoc', 'jest'],
  /* 0('off'), 1('warn'), 2('error) */
  rules: {
    'dot-notation': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',

    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off',

    /*****************
     * JSDOC Rules
     ****************/
    "jsdoc/check-alignment": 1, // Recommended
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
    "jsdoc/no-undefined-types": 1, // Recommended
    "jsdoc/require-description": 1,
    "jsdoc/require-description-complete-sentence": 1,
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
     * JEST Rules
     ****************/
    // "jest/no-disabled-tests": 1,
    // "jest/no-focused-tests": 1,
    // "jest/no-identical-title": 1,
    // "jest/prefer-to-have-length": 1,
    // "jest/valid-expect": 1
    "jest/prefer-expect-assertions": 0,
    "jest/consistent-test-it": 0
  }
}
