import { createRequire } from 'module'
import { sidebarLinks } from './menu-links'

const require = createRequire(import.meta.url)
const pkg = require('@shaggytools/nhtsa-api-wrapper/package.json')

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide|utils/' },
    { text: 'API', link: '/api/', activeMatch: '/api/' },
    { text: 'Typedocs', link: '/typedoc/', activeMatch: '/typedoc/' },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/shaggytech/nhtsa-api-wrapper/blob/main/CHANGELOG.md',
        },
      ],
    },
  ]
}

function sidebar() {
  return {
    '/guide/': sidebarLinks(['guide']),
    '/utils/': sidebarLinks(['guide']),
    '/api/': sidebarLinks(['api']),
    '/typedoc/': sidebarLinks(['typedocs']),
  }
}

export { nav, sidebar }
