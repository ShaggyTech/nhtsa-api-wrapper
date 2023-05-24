import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import dotenv from 'dotenv'
import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

import { getHeadTags } from './head'
import { nav, sidebar } from './menu'
import { ICON_NPM2 } from './icons'

dotenv.config()

const { VITEPRESS_BASE = '/' } = process.env

interface SiteMapLink {
  url: string
  lastmod?: number
}
const sitemapLinks: SiteMapLink[] = []

export default withPwa(
  defineConfig({
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

      // search: {
      //   provider: 'local',
      // },
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
        copyright: 'Copyright © 2017-PRESENT Brandon Eichler',
      },
    },

    pwa: {
      // mode: 'development',
      outDir: '../.vitepress/dist/',
      base: '/',
      scope: '/',
      registerType: 'autoUpdate',
      // injectRegister: 'inline',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: '@shaggytools/nhtsa-api-wrapper',
        short_name: 'VPIC API',
        theme_color: '#000453ff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: true,
        navigateFallback: '/',
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
)

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
