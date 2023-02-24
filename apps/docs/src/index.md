---
layout: home

title: '@shaggytools/nhtsa-api-wrapper'
titleTemplate: Javascript Wrapper for the NHTSA VPIC Vehicle Decoding API
description: A thin javascript wrapper around the NHTSA Vehicle Information API (VPIC) to make it easier to use.
lang: en-US
meta:
  - name: keywords
    content: nhtsa, vpic, api, wrapper, javascript, typescript, types, type hints, code completion, fetch

hero:
  name: '@shaggytools/nhtsa-api-wrapper'
  text: Helper Functions for the NHTSA VPIC Vehicle Decoding API
  tagline: Easily Decode a VIN, Get Vehicle Models by Make, and many more.
  actions:
    - theme: brand
      text: Learn More
      link: /guide/
    - theme: brand
      text: Getting Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/shaggytech/nhtsa-api-wrapper

features:
  - title: Simplify the VPIC API
    details: Does all the heavy lifting for you. Just pass in a VIN and get back a decoded vehicle in JSON format. No query strings, path parameters, or parsing to worry about.
  - title: Universal Support
    details: Use it client or server side. Works in Node.js versions > 18 and modern browsers out of the box.
  - title: BYOF - Bring Your Own Fetch
    details: Don't want to polyfill fetch in Node versions < 18? Includes an option to bypass fetching and get back a fully built VPIC URL ready to use how you want.
  - title: Tree Shaking
    details: Bundled with Vite library mode. Only import what you need, and keep your app size small. Plays nice with bundlers like Webpack and Rollup.
  - title: Lightweight
    details: Small package size with no polyfills or dependencies in the final bundle. Only 3 kB minified and gzipped.
  - title: TypeScript Support
    details: Get easy type hints and code completion in your IDE. Written with Typescript support top of mind. Includes type definitions for all methods and VPIC responses.
---
