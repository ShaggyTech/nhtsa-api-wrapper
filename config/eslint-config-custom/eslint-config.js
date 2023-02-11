module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:markdown/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "markdown"],
  overrides: [
    {
      // 2. Enable the Markdown processor for all .md files.
      files: ["**/*.md"],
      processor: "markdown/markdown",
    },
    {
      // 3. Optionally, customize the configuration ESLint uses for ```js
      // fenced code blocks inside .md files.
      files: ["**/*.md/*.js", "**/*.md/*.ts"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
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
