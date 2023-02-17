/* eslint-disable @typescript-eslint/no-var-requires */
require('typedoc-config')
const path = require('path')

const cwd = process.cwd()
const outDir = '../../apps/documentation/src/typedoc'

const out = path.join(cwd, outDir)
const json = path.join(out, 'typedoc-output.json')

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  extends: 'typedoc-config',
  json,
  out,
  // typedoc-plugin-markdown options
  entryDocument: './index.md',
  readme: './README.md',
}
