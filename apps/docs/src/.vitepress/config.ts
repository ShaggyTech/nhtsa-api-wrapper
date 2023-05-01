import { defineConfig, type HeadConfig } from 'vitepress'
import { nav, sidebar } from './menu'

/* Base URL for production deployment on Github Pages = shaggytech.com/nhtsa-api-wrapper */
/* Set env variable VITEPRESS_BASE to '/' for Vercel deployment previews */
const { VITEPRESS_BASE = '/nhtsa-api-wrapper/' } = process.env

export default defineConfig({
  base: VITEPRESS_BASE,
  lang: 'en-US',
  title: '@shaggytools/nhtsa-api-wrapper',
  description:
    'A thin Javascript wrapper for the NHTSA VPIC API. Decode a VIN and more with ease.',
  head: getHeadTags(),

  appearance: 'dark',
  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    theme: 'one-dark-pro',
  },

  themeConfig: {
    outline: 'deep',
    nav: nav(),
    sidebar: sidebar(),

    editLink: {
      pattern:
        'https://github.com/shaggytech/nhtsa-api-wrapper/edit/main/apps/docs/src/:path',
      text: 'Suggest changes to this page',
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

function getHeadTags(): HeadConfig[] {
  const tags: HeadConfig[] = [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Brandon Eichler' }],
    [
      'meta',
      { property: 'og:title', content: '@shaggytools/nhtsa-api-wrapper' },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://vpic.shaggytech.com/og-image.png',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'A thin Javascript wrapper for the NHTSA VPIC API. Decode a VIN and more with ease.',
      },
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    [
      'meta',
      { name: 'twitter:creator', content: '@shaggytools/nhtsa-api-wrapper' },
    ],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://vpic.shaggytech.com/og-image.png',
      },
    ],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    [
      'link',
      {
        rel: 'preconnect',
        crossorigin: 'anonymous',
        href: 'https://fonts.gstatic.com',
      },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600',
        rel: 'stylesheet',
      },
    ],
  ]

  return tags
}
