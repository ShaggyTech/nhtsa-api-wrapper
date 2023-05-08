# Installation

::: warning 🔞 WARNING

This package uses the
[built-in Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with no bundled
polyfill for very old Browsers or Node.js versions < 18.

Related:

- [This Package Uses Native Fetch](../guide/native-fetch.md#this-package-uses-native-fetch)
- [Alternate Use Without Polyfills](../guide/bring-your-own-fetch.md)

:::

You can use this package in any environment that supports the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). It works in
modern browsers and Node.js versions > 18 out of the box.

## Package Managers

::: code-group

```sh [npm]
$ npm install @shaggytools/nhtsa-api-wrapper
```

```sh [yarn]
$ yarn add @shaggytools/nhtsa-api-wrapper
```

```sh [pnpm]
$ pnpm add @shaggytools/nhtsa-api-wrapper
```

:::

## CDN

::: code-group

```html [jsDelivr]
<script src="https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper"></script>
```

```html [UNPKG]
<script src="https://unpkg.com/@shaggytools/nhtsa-api-wrapper"></script>
```

:::

---

## Install in Node

Be sure to [Install](#package-managers) using your preferred package manager first.

If you are using this package with a Node.js version < 18, please see the
[Support for Node Versions < 18](../guide/native-fetch.md) section of the guide.

### Using ES Modules

This is the recommended method for using this package in Node.

::: code-group

```js [Individual Methods]
import { DecodeVin, isValidVin } from '@shaggytools/nhtsa-api-wrapper'
```

```js [Entire Package]
import NHTSA from '@shaggytools/nhtsa-api-wrapper'
```

:::

### Node Versions < 14

Unless your node version is < 14, you should use the ES Module bundle instead. It is the only
bundle that is tree-shakeable.

If you still need to support older versions of Node, there are also other builds you can use
(UMD and CommonJS builds) but you will likely need to use a polyfill for the Fetch API and/or
Promises.

Note that if you're using a bundler like Webpack or Rollup, you can use the ES Module bundle
instead and it will automatically use the correct build for your target environment.

#### UMD Module

`/dist/nhtsa-api-wrapper.umd.js` is a Universal Module Definition file.

```js
require('@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.umd.js')
```

#### CommonJS

`/dist/nhtsa-api-wrapper.js` is a CommonJS file.

```js [CommonJS]
require('@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.js')
```

---

## Install in Browser

There are multiple ways to install and use this package in the browser.

These examples use the available CDN links, but you can also download the files and host them
yourself. Also note, if you're going to use this package in an app or bundled script, you'll likely
want to use the Node.js method instead and install from a package manager.

### Using ES Modules

Recommended for modern browsers that support ES Modules (most modern browsers).

```html
// Simple example using lazy loading

<script type="text/javascript">
  const decodeVIN = async function () {
    // lazy load the package
    const { DecodeVin } = await import(
      'https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.mjs'
    )

    // Decode a VIN and log the results
    const { Results } = await DecodeVin('3VWD07AJ5EM388202')

    console.log(Results)
  }

  decodeVIN() // use decodeVIN() in a click handler, etc.
</script>
```

### Browser Versions < ES Modules

On older browsers that don't support ES Modules (Edge, Opera, etc.), you can use the UMD or IIFE
bundles.

Unless you're on a really old browser, you should be able to use the ES Module bundle instead.

#### UMD Module

Alternate use for older browsers that don't support ES Modules. May require polyfills for `fetch`
and `Promise`.

CDN: [UMD Build](https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.umd.js)

```html
// load the UMD build
<head>
  <script src="https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.umd.js"></script>
</head>

// Simple example using the global window.NHTSA object
<script type="text/javascript">
  const decodeVIN = async function () {
    const { Results } = await NHTSA.DecodeVin('3VWD07AJ5EM388202')
    console.log(Results)
  }

  decodeVIN() // use decodeVIN() in a click handler, etc.
</script>
```

#### IIFE Function

Alternate use for older browsers that don't support ES Modules. May require polyfills for `fetch`
and `Promise`.

The browser global is `window.NHTSA` or just `NHTSA` on client side scripts.

CDN: [IIFE Build](https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.mjs)

```html
// Load the IIFE build
<head>
  <script src="https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.iife.js"></script>
</head>

// Simple example using the global window.NHTSA object
<script type="text/javascript">
  const decodeVIN = async function () {
    const { Results } = await NHTSA.DecodeVin('3VWD07AJ5EM388202').catch(
      (err) => err
    )

    console.log(Results)
  }

  decodeVIN() // use decodeVIN() in a click handler, etc.
</script>
```
