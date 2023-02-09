---
layout: home

title: '@shaggytools/nhtsa-api-wrapper'
titleTemplate: Javascript Wrapper for the NHTSA VPIC Vehicle Decoding API

hero:
  name: '@shaggytools/nhtsa-api-wrapper'
  text: Helper Functions for the NHTSA VPIC Vehicle Decoding API
  tagline: Decode a VIN, Get Vehicle Models by Make, and many more.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/shaggytech/nhtsa-api-wrapper

features:
  - title: Simplify the VPIC API
    details: Does all the heavy lifting for you. Just pass in a VIN and get back a decoded vehicle in JSON format. No query strings, path parameters, or headers to worry about.
  - title: Universal Support
    details: Use it client or server side. Works in Node.js versions > 18 and modern browsers out of the box.
  - title: BYOF - Bring Your Own Fetch
    details: Don't want to polyfill fetch in Node versions < 18? Includes an option to bypass fetching and get back a fully built VPIC URL ready to use how you want.
  - title: Tree Shaking
    details: Bundled with Vite library mode. Only import what you need, and keep your bundle size small. Plays nice with bundlers like Webpack and Rollup.
  - title: Lightweight
    details: Small package size with no polyfills or dependencies in the final package bundle. Under 4kb minified and gzipped.
  - title: Fully documented
    details: Get started quickly with the included examples. Includes full documentation for all methods and properties.
  - title: Error Handling
    details: Includes error handling for all API calls with built in run-time type checking for all methods. Get back a detailed error message if something goes wrong.
  - title: TypeScript Support
    details: Get easy type hints and code completion in your IDE. Written with Typescript support top of mind. Includes type definitions for all methods and VPIC responses.
---
