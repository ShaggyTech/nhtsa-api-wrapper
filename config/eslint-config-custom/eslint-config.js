// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:markdown/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  ignorePatterns: [
    ".github",
    ".vscode",
    "coverage/",
    "dist/",
    "dev/",
    "docs/",
    "node_modules/",
    "bin/",
    "tests/",
    "e2e",
    ".eslintrc.js",
    "pretter.config.js",
  ],
  // 0 = off, 1 = warn, 2 = error
  rules: {
    "no-console": 1,
    "prettier/prettier": 2,
  },
};
