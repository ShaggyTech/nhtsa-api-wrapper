/* eslint-disable @typescript-eslint/no-var-requires */
const PKG = require('./package.json');

const TEMPLATE = 'node_modules/better-docs';

const isDev = process.env.JSDOC_ENV === 'development';
const outDir = isDev ? 'dev/docs/' : 'docs/';

module.exports = {
  source: {
    include: ['src', 'docsSrc'],
    includePattern: '.(js|ts|doc|tsdoc|md)',
    excludePattern: '(node_modules/|docs/|dev/|dist/|coverage/)',
  },
  plugins: [
    // 'node_modules/jsdoc-babel',
    // 'node_modules/jsdoc-plugin-typescript',
    'plugins/markdown',
    'node_modules/better-docs/typescript',
    'node_modules/better-docs/category',
  ],
  tags: {
    allowUnknownTags: true,
    dictionaries: ['jsdoc'],
  },
  templates: {
    cleverLinks: true,
    monospaceLinks: false,
    default: {
      staticFiles: {
        include: ['./docsSrc/static'],
      },
      includeDate: false,
    },
    'better-docs': {
      name: `${PKG.name}`,
      logo: '',
      hideGenerator: true,
      navigation: [
        {
          label: 'Github Source Code',
          href: `${PKG.repository.homepage}`,
        },
        {
          label: '@shaggytech',
          href: 'https://www.github.com/shaggytech',
        },
      ],
    },
  },
  opts: {
    recurse: true,
    verbose: false,
    destination: outDir,
    template: TEMPLATE,
    tutorials: './docsSrc/tutorials',
    readme: './README.md',
  },
  typescript: {
    moduleRoot: 'src',
  },
  markdown: {
    idInHeadings: true,
  },
  babel: {
    extensions: ['ts', 'tsx'],
    ignore: ['**/*.(test|spec).ts'],
  },
};
