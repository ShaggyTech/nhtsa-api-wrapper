import { type HeadConfig } from 'vitepress'

const getHeadTags = () => {
  const tags: HeadConfig[] = [
    // Icons
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'mask-icon', href: '/favicon.svg', color: '#000453ff' }],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/pwa-192x192.png', sizes: '192x192' },
    ],

    // Fonts
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

    // Meta
    ['meta', { name: 'author', content: 'Brandon Eichler' }],
    ['meta', { name: 'theme-color', content: '#000453ff' }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'NHTSA, VPIC, VIN, Decoder, API, Wrapper, Javascript, Typescript',
      },
    ],
  ]

  if (process.env.NODE_ENV === 'production') {
    // Vercel Analytics
    tags.push(['script', { defer: 'true', src: '/_vercel/insights/script.js' }])
  }

  return tags
}

export { getHeadTags }
