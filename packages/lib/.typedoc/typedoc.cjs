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
  entryFileName: 'index.md',
  readme: './README.md',
  outputFileStrategy: 'modules',
  parametersFormat: 'table',
  propertiesFormat: 'table',
  enumMembersFormat: 'table',
  typeDeclarationFormat: 'table',
  indexFormat: 'table',
}
