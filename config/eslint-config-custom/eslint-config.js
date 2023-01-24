export default {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: [
    '.vscode',
    'coverage/',
    'dist/',
    'dev/',
    'docs/',
    'node_modules/',
    'bin/',
    'tests/',
    'e2e',
    // '.eslintrc.js',
  ],
  rules: {
    'no-console': 1, // Means warning
    'prettier/prettier': 2, // Means error
  },
}
