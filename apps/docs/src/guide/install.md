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

The package is available on several CDNs for use in the browser via HTML `<script>` tags. You can also
install it via your favorite package manager for use in Node.js bundlers, frameworks, etc.

The package is fully tree-shakeable and side-effect free.

---

## Node Install

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

If you are using this package with a Node.js version < 18, please see the
[Support for Node Versions < 18](../guide/native-fetch.md) section of the guide.

Unless your node version is < 14, you should use the ES Module bundle as it is the only
bundle that is tree-shakeable.

If you still need to support older versions of Node, there are other builds you can use
(UMD and CommonJS) but you will likely need to use a polyfill for the Fetch API and/or
Promises.

Note that if using a bundler like Webpack or Rollup, or a framework like Next or Nuxt, you
can use the ESM (.mjs) bundle instead and it will automatically use the correct build for your target
environment.

Relevant Links:

- [NPM Homepage](https://www.npmjs.com/package/@shaggytools/nhtsa-api-wrapper)
- [Yarn Homepage](https://yarnpkg.com/package/@shaggytools/nhtsa-api-wrapper)

### ESM Module

`/dist/nhtsa-api-wrapper.mjs` is a modern ES Module (ESM) module.

```js
import NHTSA from '@shaggytools/nhtsa-api-wrapper'
```

### UMD Module

`/dist/nhtsa-api-wrapper.umd.js` is a Universal Module Definition (UMD) module.

```js
const NHTSA = require('@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.umd.cjs')
```

#### CommonJS

`/dist/nhtsa-api-wrapper.js` is a CommonJS (.cjs) file.

```js [CommonJS]
const NHTSA = require('@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.cjs')
```

---

## Node Quick Start

The following demonstrates how to import the package in Node.js.

::: code-group

```js [Individual Methods]
import { DecodeVinValues } from '@shaggytools/nhtsa-api-wrapper'
```

```js [Entire Package]
import NHTSA from '@shaggytools/nhtsa-api-wrapper'
```

:::

For a more complete example we'll show you how to use this package to decode a VIN.

Decoding a VIN is as easy as importing the `DecodeVinValues` function and calling it
with the VIN you want to decode. The following stores the complete API response in a
variable called `response`.

```typescript
import { DecodeVinValues } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVinValues('WA1A4AFY2J2008189')

/*
response = {
  Count: 136, - number of Results objects returned
  Message: 'Results returned successfully ...',
  SearchCriteria: 'VIN:WA1A4AFY2J2008189',
  Results: [ {...} ] - an array with single object of type DecodeVinValuesResults
}
*/
```

You could also use destructuring to get the `Results` object directly and log the decoded vehicle
info.

```typescript
const { Results } = await DecodeVinValues('WA1A4AFY2J2008189')

/* This endpoint only returns a single object in the Results array
   The first object in the array is the decoded VIN data */
const decodedVehicle = Results[0] // equals an object of type DecodeVinValuesResults

console.log('Vehicle Info: ', decodedVehicle)
```

A more in depth explanation of how to decode a VIN can be found on the
[VIN Decoding](../guide/vin-decoding) page.

For a full example response see the
[DecodeVinValues](../api/endpoints/decode-vin-values#returns) page.

The structure of `Results[0]` in the above example is of type
[DecodeVinValuesResults](../typedoc/modules/api_endpoints_DecodeVinValues#decodevinvaluesresults).

---

## Browser Install

You can use the package directly in html script tags using a CDN.

These examples use the available CDN links, but you can also download the files and host them
yourself. Also note, if you're going to use this package in an app or bundled script, you'll likely
want to use the Node.js method instead and install from a package manager.

::: code-group

```html [jsDelivr (ESM)]
<!DOCTYPE html>
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
<!DOCTYPE html>
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
<!DOCTYPE html>
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

For targeting modern browsers, you can use the ESM versions with `<script type="module">` and
import statements. You would then use normal ES6 import statements to import the package inside the
module script much like you would in Node.js.

For older browsers, you can use the IIFE versions with `<script src="https://...">` to import the
package. Then use the package in a separate html script via the browser global `NHTSA`. This global
variable is only available when using the IIFE or UMD versions.

CDN Homepage Links:

- [jsDelivr](https://www.jsdelivr.com/package/npm/@shaggytools/nhtsa-api-wrapper)
- [UNPKG](https://unpkg.com/@shaggytools/nhtsa-api-wrapper/) - directory of all dist files (bundles and types)

Direct links to the latest bundles of the package on the above CDNs:

[jsDelivr (ESM)](https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/+esm)

```
https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/+esm
```

[jsDelivr (IIFE)](https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper)

```
https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper`
```

[UNPKG (IIFE)](https://unpkg.com/@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.iife.js)

```
https://unpkg.com/@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.iife.js
```

---

## Browser Quick Start

The following are simple examples that use the jsDelivr CDN:

### ESM

_~ 4kB (auto minified)_

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body>
    <h1>ESM Example</h1>
  </body>

  <script type="module">
    // import the entire package as a single object called NHTSA
    import NHTSA from 'https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/+esm'
    // log to see all exported functions
    console.log(NHTSA)

    // OR import individual functions as needed
    import { DecodeVinValues } from 'https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/+esm'
    // Decode a VIN and log the results
    const { Results } = await DecodeVinValues('11111111111111111')
    console.log('Results', Results[0])
  </script>
</html>
```

### IIFE

_~ 4kB (auto minified)_

IIFE browser global variable: `NHTSA`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Import via jsDelivr CDN -->
    <script
      src="https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper"
    ></script>
  </head>

  <body>
    <btn id="DecodeVinValues"
      >Click to use DecodeVinValues()</btn
    >
    </br>
    Results:
    <div id="DecodeVinValuesResults"></div>
  </body>

  <!-- Use the package in a separate script -->
  <script>
    // log the browser global NHTSA to see all exported functions
    console.log(NHTSA)

    // add click handler to a button that uses the DecodeVinValues() function
    document
      .getElementById("DecodeVinValues")
      .addEventListener("click", async function () {
        const response = await NHTSA.DecodeVinValues("3VWD07AJ5EM388202").catch(
          (err) => err
        );

        // log the VPIC response
        console.log('VPIC Response: ', response);

        // add the decoded VIN results to the DOM
        document.getElementById("DecodeVinValuesResults").innerText =
          JSON.stringify(response.Results[0]);
      });
  </script>
</html>
```
