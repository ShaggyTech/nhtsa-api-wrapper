import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import dotenv from 'dotenv'
import { defineConfig, type HeadConfig } from 'vitepress'
import { nav, sidebar } from './menu'
import { ICON_NPM2 } from './icons'

dotenv.config()

const { VITEPRESS_BASE = '/' } = process.env

interface SiteMapLink {
  url: string
  lastmod?: number
}
const sitemapLinks: SiteMapLink[] = []

export default defineConfig({
  srcDir: 'src',
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
    theme: {
      light: 'github-light',
      dark: 'one-dark-pro',
    },
  },

  themeConfig: {
    siteTitle: '@shaggytools/nhtsa-api-wrapper',
    outline: 'deep',
    nav: nav(),
    sidebar: sidebar(),

    algolia: getAlgoliaConfig(process.env),

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
      {
        icon: {
          svg: ICON_NPM2,
        },
        link: 'https://www.npmjs.com/package/@shaggytools/nhtsa-api-wrapper',
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2017-present Brandon Eichler',
    },
  },

  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      sitemapLinks.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated,
      })
  },

  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: 'https://vpic.shaggytech.com/',
    })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    sitemapLinks.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
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

function getAlgoliaConfig(env: NodeJS.ProcessEnv) {
  if (
    env.VITEPRESS_ALGOLIA_INDEX_NAME &&
    env.VITEPRESS_ALGOLIA_APP_ID &&
    env.VITEPRESS_ALGOLIA_API_KEY
  ) {
    return {
      indexName: env.VITEPRESS_ALGOLIA_INDEX_NAME,
      appId: env.VITEPRESS_ALGOLIA_APP_ID,
      apiKey: env.VITEPRESS_ALGOLIA_API_KEY,
    }
  }

  return undefined
}
