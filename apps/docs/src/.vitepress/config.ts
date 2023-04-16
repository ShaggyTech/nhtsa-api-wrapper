import { createRequire } from 'module'
import { defineConfig } from 'vitepress'
import { packageReferenceLinks, vpicEndpointLinks } from './menu'

/* Base URL for production deployment on Github Pages = shaggytech.com/nhtsa-api-wrapper */
/* Set env variable VITEPRESS_PAGE to '/' for Vercel deployment previews */
const { VITEPRESS_BASE = '/nhtsa-api-wrapper/' } = process.env

const require = createRequire(import.meta.url)
const pkg = require('@shaggytools/nhtsa-api-wrapper/package.json')

export default defineConfig({
  lang: 'en-US',
  title: '@shaggytools/nhtsa-api-wrapper',
  description: 'Documentation website for @shaggytools/nhtsa-api-wrapper',

  appearance: 'dark',
  lastUpdated: true,
  cleanUrls: true,

  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  base: VITEPRESS_BASE,

  markdown: {
    theme: 'one-dark-pro',
  },

  themeConfig: {
    outline: 'deep',
    nav: nav(),

    sidebar: {
      '/guide/': sidebar(),
      '/api/': sidebar(),
      '/typedoc/': sidebar(),
    },

    editLink: {
      pattern:
        'https://github.com/shaggytech/nhtsa-api-wrapper/edit/main/apps/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/shaggytech/nhtsa-api-wrapper',
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2017-present Brandon Eichler',
    },
  },
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    { text: 'API Reference', link: '/api/', activeMatch: '/api/' },
    { text: 'Typedocs', link: '/typedoc/', activeMatch: '/typedoc/' },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/shaggytech/nhtsa-api-wrapper/blob/main/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/shaggytech/nhtsa-api-wrapper/blob/main/.github/contributing.md',
        },
      ],
    },
  ]
}

function sidebar() {
  return [
    {
      text: 'Guide',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/guide/' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        {
          text: 'BYOF - Bring Your Own Fetch',
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
      text: 'API Reference',
      collapsed: false,
      items: [
        {
          text: 'Introduction',
          link: '/api/',
        },
        {
          text: 'VPIC API Response',
          link: '/api/vpic-api-response',
        },
        {
          text: 'VPIC API Endpoints',
          collapsed: false,
          items: vpicEndpointLinks,
        },
      ],
    },
    {
      text: 'Package Reference',
      collapsed: false,
      items: [
        {
          text: 'Introduction',
          link: '/typedoc/',
        },
        {
          text: 'Typedocs',
          collapsed: true,
          items: packageReferenceLinks,
        },
      ],
    },
  ]
}
