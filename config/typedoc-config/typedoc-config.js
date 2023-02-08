/**
 * @type {import('typedoc').TypeDocOptions}
 */

const path = require("path");

const cwd = process.cwd();
const entryPoint = path.join(cwd, "src/index.ts");
const out = path.join(cwd, "docs/");
const json = path.join(out, "typedoc-output.json");
const readme = path.join(cwd, "../../README.md");

const navigationLinks = {
  "Source Code": "https://github.com/shaggytech/nhtsa-api-wrapper",
  "VPIC API Homepage": "https://vpic.nhtsa.dot.gov/api/",
};

module.exports = {
  entryPoints: [entryPoint],
  out,
  json,
  readme,
  hideGenerator: true,
  searchInComments: true,
  navigationLinks,
};
