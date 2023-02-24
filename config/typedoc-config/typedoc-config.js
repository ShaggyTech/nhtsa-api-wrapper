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
  gitRevision: "main",
  hideGenerator: true,
  includeVersion: true,
  navigationLinks,
  plugin: ["typedoc-plugin-markdown"],
  searchInComments: true,
  sort: "alphabetical",
};
