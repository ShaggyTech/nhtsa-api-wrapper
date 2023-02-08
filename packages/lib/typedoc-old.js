/**
 * @type {import('typedoc').TypeDocOptions}
 */

const outDir = 'docs/'

module.exports = {
  entryPoints: ['./src/index.ts'],
  out: outDir,
  json: `${outDir}typedoc-output.json`,
  readme: '../../README.md',
  hideGenerator: true,
  searchInComments: true,
  navigationLinks: {
    'Source Code': 'https://github.com/shaggytech/nhtsa-api-wrapper',
    'VPIC API Homepage': 'https://vpic.nhtsa.dot.gov/api/',
  },
}
