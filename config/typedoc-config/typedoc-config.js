/**
 * @type {import('typedoc').TypeDocOptions}
 */

const path = require("path");

const cwd = process.cwd();
const entryPoint = path.join(cwd, "src");
const out = path.join(cwd, "typedoc/");
const json = path.join(out, "typedoc-output.json");
const readme = path.join(cwd, "../../README.md");

const navigationLinks = {
  Source: "https://github.com/shaggytech/nhtsa-api-wrapper",
  "VPIC API": "https://vpic.nhtsa.dot.gov/api/",
};

module.exports = {
  plugin: "typedoc-plugin-markdown",
  entryPoints: [entryPoint],
  entryPointStrategy: "expand",
  out,
  json,
  // readme,
  hideGenerator: true,
  searchInComments: true,
  navigationLinks,
};
