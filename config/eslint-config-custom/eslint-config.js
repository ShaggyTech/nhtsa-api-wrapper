module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
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
      // Enable the Markdown processor for all .md files.
      files: ["**/*.md"],
      processor: "markdown/markdown",
    },
    {
      // Customize the config for fenced code blocks inside .md files.
      files: ["**/*.md/*.js", "**/*.md/*.ts"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "no-console": "off",
      },
    },
  ],
  ignorePatterns: [
    "!.vitepress",
    "!.vitest",
    "!.typedoc",
    "cache/",
    "coverage/",
    "dist/",
    "dev/",
    "dev-dist",
    "typeDoc/",
  ],
  // 0 = off, 1 = warn, 2 = error
  rules: {
    "no-console": 1,
    "prettier/prettier": 2,
  },
};
