import { createRequire } from 'module'
import { packageReferenceLinks, vpicEndpointLinks } from './menu-links'

const require = createRequire(import.meta.url)
const pkg = require('@shaggytools/nhtsa-api-wrapper/package.json')

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    { text: 'Docs', link: '/api/', activeMatch: '/api/' },
    { text: 'Pkg Reference', link: '/typedoc/', activeMatch: '/typedoc/' },
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
  return [
    {
      text: 'Guide',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/guide/' },
        { text: 'Installation', link: '/guide/install' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'VIN Decoding', link: '/guide/vin-decoding' },
        {
          text: 'Offline VIN Validation',
          link: '/guide/offline-vin-validation',
        },
        {
          text: 'Bring Your Own Fetch (BYOF)',
          link: '/guide/bring-your-own-fetch',
        },
        {
          text: 'Support for Node Versions < 18',
          link: '/guide/native-fetch',
        },
        { text: 'Typescript Support', link: '/guide/typescript' },
      ],
    },
    {
      text: 'Documentation',
      collapsed: true,
      items: [
        {
          text: 'VPIC API',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/api/' },
            {
              text: 'API Response',
              link: '/api/vpic-api-response',
            },
            {
              text: 'API Functions',
              link: '/api/endpoints/',
              collapsed: true,
              items: vpicEndpointLinks,
            },
          ],
        },
        {
          text: 'Utility Functions',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/utils/' },
            { text: 'isValidVin', link: '/utils/is-valid-vin' },
            { text: 'useNHTSA', link: '/utils/use-nhtsa-composable' },
          ],
        },
      ],
    },
    {
      text: 'Package Reference',
      collapsed: true,
      items: [{ text: 'Index', link: '/typedoc/' }, ...packageReferenceLinks],
    },
  ]
}

export { nav, sidebar }
