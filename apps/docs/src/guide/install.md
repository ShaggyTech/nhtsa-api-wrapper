# Install

::: warning 🔞 IMPORTANT

This package uses the
[built-in Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with no bundled
polyfill for Node.js versions < 18 or very old Browsers.

- [Alternate Use Without Polyfills](../guide/bring-your-own-fetch.md)

- [Support for Node Versions < 18](../guide/native-fetch.md#this-package-uses-native-fetch)

:::

There are several options for installing this package for use in Javascript projects.

- Node: install this package via your favorite package manager

- Browser: available on several CDNs for use in the browser via HTML `<script>` tags.

The package is fully tree-shakeable and side-effect free when using the ES Module bundle (.mjs) or
**ESM** CDN link. Tree-shaking is a process that removes unused code from the final bundle. This can
significantly reduce the size of the final bundle by only importing the code you are actually using.

::: tip 📦 Package Contents

A full directory listing of the package contents is available at
[https://unpkg.com/@shaggytools/nhtsa-api-wrapper/](https://unpkg.com/@shaggytools/nhtsa-api-wrapper/).

All package bundles are located in the `/dist` directory.
:::

---

## Node

Package Managers:

::: code-group

```sh [NPM]
$ npm install @shaggytools/nhtsa-api-wrapper
```

```sh [Yarn]
$ yarn add @shaggytools/nhtsa-api-wrapper
```

```sh [PNPm]
$ pnpm add @shaggytools/nhtsa-api-wrapper
```

:::

In modern Node environments that support ES Modules, you simply import the package
and use it via `@shaggytools/nhtsa-api-wrapper`. This will use the `.mjs` bundle of the package by
default. See the [ES Module](#es-module) section for more details.

In older node environments, you can use the CommonJS (.cjs) or UMD (umd.cjs) bundles. In this case
you will likely need to use a polyfill for the Fetch API and/or Promises. See the
[UMD Module](#umd-module) and [CommonJS](#commonjs) sections for more details.

If you are using this package with a Node.js version < 18, please read the
[Support for Node Versions < 18](../guide/native-fetch.md) section of the guide. This package
doesn't include a polyfill for the Fetch API, so you'll need to provide your own polyfill or fetch
implentation in this case.

Unless your node version is < 14, you should use the ES Module bundle (default) as it is the only
bundle that is tree-shakeable. The CommonJS and UMD bundles are not tree-shakeable.

Relevant Links:

- [NPM Homepage](https://www.npmjs.com/package/@shaggytools/nhtsa-api-wrapper)
- [Yarn Homepage](https://yarnpkg.com/package/@shaggytools/nhtsa-api-wrapper)

After installing the package, you can import it into your project several ways:

### ES Module

`/dist/nhtsa-api-wrapper.mjs` is a modern ES Module (ESM) module.

```js
import NHTSA from '@shaggytools/nhtsa-api-wrapper'
```

### UMD Module

`/dist/nhtsa-api-wrapper.umd.cjs` is a Universal Module Definition (UMD) module.

```js
const NHTSA = require('@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.umd.cjs')
```

### CommonJS

`/dist/nhtsa-api-wrapper.cjs` is a CommonJS (.cjs) file.

```js [CommonJS]
const NHTSA = require('@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.cjs')
```

---

## Browser

For use in browsers, you can install the package via CDN and HTML `<script>` tags.

For targeting modern browsers, use the ESM versions with `<script type="module">` and
import statements. You would then use normal ES6 import statements to import the package inside the
module script much like you would in Node.js.

For older browsers, you can use the IIFE versions with `<script src="https://...">` to import the
package. Then use the package in a separate html script via the browser global `NHTSA`. This global
variable is only available when using the IIFE or UMD versions.

These examples use the available CDN links, but you can also download the files and host them
yourself. Also note, if you're going to use this package in an app or bundled script, you'll likely
want to use the Node.js method instead and install from a package manager.

::: code-group

```html [jsDelivr (ESM)]
<!doctype html>
<html>
  <head></head>
  <body>
    <h1>Testing the NHTSA API Wrapper</h1>
  </body>
  <!-- Import and use the package in a module script -->
  <script type="module">
    // Import the entire package as a single object called NHTSA
    import NHTSA from 'https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/+esm'

    // You can also use named imports to import individual functions
    import { DecodeVinValues } from 'https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/+esm'
  </script>
</html>
```

```html [jsDelivr (IIFE)]
<!doctype html>
<html>
  <head>
    <!-- Import the package in the head tag -->
    <script src="https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper"></script>
  </head>
  <body>
    <h1>Testing the NHTSA API Wrapper</h1>
  </body>
  <script>
    // use the package here, NHTSA is available as a global variable
    console.log(NHTSA)
  </script>
</html>
```

```html [UNPKG  (IIFE)]
<!doctype html>
<html>
  <head>
    <!-- Import the package in the head tag -->
    <script src="https://unpkg.com/@shaggytools/nhtsa-api-wrapper"></script>
  </head>
  <body>
    <h1>Testing the NHTSA API Wrapper</h1>
  </body>
  <script>
    // use the package here, NHTSA is available as a global variable
    console.log(NHTSA)
  </script>
</html>
```

:::

**CDN Homepage Links:**

- [jsDelivr](https://www.jsdelivr.com/package/npm/@shaggytools/nhtsa-api-wrapper) - hosts all dist files (bundles and types)

- [UNPKG](https://unpkg.com/@shaggytools/nhtsa-api-wrapper/) - directory of all dist files (bundles and types)

**Direct links to the latest version CDN bundles:**

### [jsDelivr (ESM)](https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/+esm)

```
https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/+esm
```

### [jsDelivr (IIFE)](https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper)

```
https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper`
```

### [UNPKG (IIFE)](https://unpkg.com/@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.iife.js)

Note that all dist bundles are available in the
[UNPKG directory](https://unpkg.com/@shaggytools/nhtsa-api-wrapper/), but this example uses the
IIFE version.

```
https://unpkg.com/@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.iife.js
```

If you need to import a specific version, you can use the following url format. These
examples will use version 3.0.3, but you can replace the `@3.0.3` part with any version you need.

[jsDelivr (ESM)](https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper@3.0.3/+esm)

```
https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper@3.0.3/+esm
```

[jsDelivr (IIFE)](https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper@3.0.3/dist/nhtsa-api-wrapper.iife.min.js)

```
https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper@3.0.3/dist/nhtsa-api-wrapper.iife.min.js
```

[UNPKG (IIFE)](https://unpkg.com/@shaggytools/nhtsa-api-wrapper@3.0.3/dist/nhtsa-api-wrapper.iife.js)

```
https://unpkg.com/@shaggytools/nhtsa-api-wrapper@3.0.3/dist/nhtsa-api-wrapper.iife.js
```

## Next Steps

- [Node - Getting Started](../guide/getting-started#node-getting-started)
- [Browser - Getting Started](../guide/getting-started#browser-getting-started)
