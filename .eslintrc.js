module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true
  },
  ignorePatterns: ["node_modules/", "docs/", "dist/", "coverage/"],
  plugins: ['babel', 'prettier', 'jsdoc'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:node/recommended',
    // 'plugin:jsdoc/recommended',
    'prettier/babel'
  ],
  // add your custom rules here
  rules: {
    'dot-notation': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off'
  }
}
