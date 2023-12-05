const path = require("path");

const cwd = process.cwd();
const entryPoint = path.join(cwd, "src");

const navigationLinks = {
  Source: "https://github.com/shaggytech/nhtsa-api-wrapper",
  "VPIC API": "https://vpic.nhtsa.dot.gov/api/",
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints: [entryPoint],
  entryPointStrategy: "expand",
  exclude: [
    "**/*+(.spec|.e2e|.test|.test-d|vite-env|global).ts",
    "**/vite-env.d.ts",
    "**/global.d.ts"
  ],
  gitRevision: "main",
  hideGenerator: true,
  includeVersion: true,
  navigationLinks,
  plugin: ["typedoc-plugin-markdown"],
  searchInComments: true,
  sort: "alphabetical",
};
