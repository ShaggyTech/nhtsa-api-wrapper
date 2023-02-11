---
outline: deep
---

# Getting Started

---

::: warning 🔞 WARNING
This package uses the [built-in Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
with no bundled polyfill for very old Browsers or Node.js versions `< 18`.

- [TODO - This Package Uses Native Fetch](#this-package-uses-native-fetch)
- [TODO - Alternate Use Without Polyfills](#alternate-use-without-polyfills)

:::

## Install

### Package Managers

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

### CDN

::: code-group

```html [jsDelivr]
<script src="https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper"></script>
```

```html [UNPKG]
<script src="https://unpkg.com/@shaggytools/nhtsa-api-wrapper"></script>
```

:::

## Quick Start

There are two ways to use this package as designed:

- The first is a set of 24 functions to retrieve data from each of the API endpoints. You can also
  use them to build the VPIC URLs and query parameters, to use with your own fetch implementation.
- The second is a composable function that returns a set of helper functions to interact with the
  VPIC API in a more flexible way.

### 1. Endpoint Helper Functions

This is the recommended way to use the package. The helper functions make it easy to retrieve data
from the API with only a few input parameters. They will handle the API URL building, query
parameters, request, and response format/parsing for you.

Example:

```javascript
import { DecodeVin } from '@shaggytools/nhtsa-api-wrapper'

const results = await DecodeVin('WA1A4AFY2J2008189', { modelYear: 2018 })
/* 
results = {
  Count: 136, - number of Results objects returned
  Message: 'Results returned successfully ...',
  SearchCriteria: 'VIN:WA1A4AFY2J2008189',
  Results: [ {...}, {...} ] - an array of DecodeVinResults objects
}
*/
```

More Info:

- [TODO - NHTSA API Endpoints](#nhtsa-api-endpoints)

### 2. Endpoint URL Builder (no fetching)

Using it as a URL builder is useful if you want to use your own fetch implementation or your project
runtime doesn't support native fetch and you don't want to use a polyfill.

- [TODO - Option 1](#option-1-setting-dofetch-boolean-to-false):
  Pass `false` as the last argument of the endpoint helper function (DecodeVin, etc).
  This sets the `doFetch` boolean to `false` and returns the full VPIC URL ready to use with
  your own fetch implementation (axios, nitro, etc.). The endpoint functions will build the URL,
  return it as a string, and then terminate; skipping the fetch request.
- [TODO - Option 2](#option-2-using-the-usenhtsa-composable-and-createurl-function):
  Use the `useNHTSA` composable to get the `createUrl` function. This is used under the hood by the
  endpoint functions to build the VPIC endpoint URL. You can use it to build the URL for any of the
  24 endpoints and use it with your own fetch implementation. Function `createPostBody` is also
  available for formatting and returning the body of a VPIC POST request.

More Info:

- [TODO - Alternate Use Without Polyfills](#alternate-use-without-polyfills)

---

### Extra: Offline VIN Validation

There is also an offline VIN validation function called `isValidVin`, that can be used to validate a
VIN without making a request to the API. Useful if you want to validate a VIN before making an
unnecessary request to the API with an invalid VIN.

Example:

```javascript
import { isValidVin } from '@shaggytools/nhtsa-api-wrapper'

const isValid = isValidVin('WA1A4AFY2J2008189')
// isValid = true
```

More Info:

- [TODO - Offline VIN Validation](#offline-vin-validation)

## List of Exported Functions

```javascript
import {
  // NHTSA API Endpoints
  DecodeVin,
  DecodeVinExtended,
  DecodeVinValues,
  DecodeVinValuesBatch,
  DecodeVinValuesExtended,
  DecodeWMI,
  GetAllMakes,
  GetAllManufacturers,
  GetCanadianVehicleSpecifications,
  GetEquipmentPlantCodes,
  GetMakeForManufacturer,
  GetMakesForManufacturerAndYear,
  GetMakesForVehicleType,
  GetManufacturerDetails,
  GetModelsForMake,
  GetModelsForMakeId,
  GetModelsForMakeIdYear,
  GetModelsForMakeYear,
  GetParts,
  GetVehicleTypesForMake,
  GetVehicleTypesForMakeId,
  GetVehicleVariableList,
  GetVehicleVariableValuesList,
  GetWMIsForManufacturer,
  // composable function returning helper functions for NHTSA API
  useNHTSA,
  // function for offline VIN validation
  isValidVin
} from '@shaggytools/nhtsa-api-wrapper'
```

## Use It In

Use it in any environment that supports the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). It works in
modern browsers and Node.js versions > 18 out of the box.

::: info ℹ️ Important Notes About Fetch
:::

Native, or built-in, `fetch()` was introduced in Node version 18, which is the current LTS version.
It has been built into modern browsers for a long time.

`native` or `built-in` means you don't have to import it, it's included and available globally in
the browser and in Node versions > 17.

When you use one of the endpoint methods, they will build the full url string and then call
`fetch(url, options)` internally to make the request to the NHTSA API and return the response.

A polyfill for `fetch` is not included in the bundles of this package. If you need to support
older browsers or node versions, you will need to provide your own `fetch` polyfill. See
[TODO - This Package Uses Native Fetch](#this-package-uses-native-fetch).

We realize that not everyone is using the latest LTS version of Node, so we have provided a way to
use this package without a `fetch` polyfill.

You can get back a fully built VPIC url string _without_ fetching. Use the url to retrieve the data
however you want, Express or Axios for example. This way `fetch` is never called and you won't need
a polyfill, at least not specifically for this package. See the
[TODO - Alternate Use Without Polyfills](#alternate-use-without-polyfills).

## Node

::: tip 📦 TIP
Be sure to [Install](#package-managers) using your preferred package manager first.
:::

**Using ES Modules:**

This is the recommended method for using this package in Node.

::: code-group

```js [Entire Package]
import NHTSA from '@shaggytools/nhtsa-api-wrapper'
```

```js [Individual Methods]
import { DecodeVin, isValidVin } from '@shaggytools/nhtsa-api-wrapper'
```

:::

### Node Versions < 14

Unless your node version is < 14, you should use the ES Module bundle instead. It is the only
bundle that is tree-shakeable.

If you still need to support older versions of Node, there are also other builds you can use
(UMD and CommonJS builds) but you will likely need to use a polyfill for the Fetch API and/or
Promises.

#### UMD Module

`/dist/nhtsa-api-wrapper.umd.js` bundle is a Universal Module Definition file.

#### CommonJS

`/dist/nhtsa-api-wrapper.js` bundle is a CommonJS file.

::: code-group

```js [UMD]
require('@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.umd.js')
```

```js [CommonJS]
require('@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.js')
```

:::

---

## Browser

There are multiple ways to install and use this package in the browser.

**Using ES Modules:**

Recommended for modern browsers that support ES Modules (most modern browsers).

```html
// Simple example using lazy loading
<script type="text/javascript">
  const decodeVIN = async function () {
    const { DecodeVin } = await import(
      'https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.mjs'
    )
    const { Results } = await DecodeVin('3VWD07AJ5EM388202').catch((err) => err)
    console.log(Results)
  }

  decodeVIN() // use it in a click handler, etc.
</script>
```

### Older Browsers

On older browsers that don't support ES Modules (Edge, Opera, etc.), you can use the UMD or IIFE
bundles.

Unless you're on a really old browser, you should be able to use the ES Module bundle instead. It
is the only bundle that is tree-shakeable.

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
    const { Results } = await NHTSA.DecodeVin('3VWD07AJ5EM388202').catch(
      (err) => err
    )
    console.log(Results)
  }
  decodeVIN() // use it in a click handler, etc.
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
  decodeVIN() // use it in a click handler, etc.
</script>
```

## Included Package Bundles

::: code-group

```sh [ES Module]
@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.mjs
```

```sh [UMD]
@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.umd.js
```

```sh [CommonJS]
@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.js
```

```sh [IIFE]
@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.iife.js
```

:::

This package is bundled in the following formats:

### **Modern Browsers and Node.js Versions > 14**

ES Module:

- `dist/nhtsa-api-wrapper.mjs`
- import: `import NHTSA from '@shaggytools/nhtsa-api-wrapper'`

### **Old Browsers and Node.js Versions < 14**

CommonJS:

- `dist/nhtsa-api-wrapper.js`
- require (node): `const NHTSA = require('@shaggytools/nhtsa-api-wrapper')`

Universal Module Definition:

- `dist/nhtsa-api-wrapper.umd.js`
- global (browser): `window.NHTSA`
- require (node):
  `const NHTSA = require('@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.umd.js')`

IIFE Bundle:

- `dist/nhtsa-api-wrapper.iife.js`
- global (browser): `window.NHTSA`
