/* eslint-disable @typescript-eslint/no-var-requires */
require('typedoc-config')
const path = require('path')

const cwd = process.cwd()
const outDir = '../../apps/docs/src/typedoc'

const out = path.join(cwd, outDir)

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  extends: 'typedoc-config',
  out,
  // typedoc-plugin-markdown options
  entryDocument: './index.md',
  readme: './README.md',
}
