---
outline: deep
---

# Getting Started

[[toc]]

---

::: warning 🔞 WARNING
This package uses the
[built-in Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with no bundled
polyfill for very old Browsers or Node.js versions `< 18`.

Related:

- [This Package Uses Native Fetch](../introduction/native-fetch.md#this-package-uses-native-fetch)
- [Alternate Use Without Polyfills](../introduction/url-builder-mode.md#alternate-use-of-this-package)

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

## Quick Start

There are two ways to use this package as designed:

- The first is a set of 24 functions to retrieve data from each of the API endpoints. You can also
  use them to build the VPIC URLs and query parameters, to use with your own fetch implementation.
- The second is a composable function that returns a set of helper functions to interact with the
  VPIC API in a more flexible way.

---

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

---

### 2. Endpoint URL Builder (no fetching)

Using it as a URL builder is useful if you want to use your own fetch implementation or your project
runtime doesn't support native fetch and you don't want to use a polyfill.

- [Option 1](#option-1-set-dofetch-to-false) (recommended):
  Use the endpoint helper functions (DecodeVin, etc.), but pass `false` as the last
  argument of the function to skip internal use of `fetch` and instead return the full VPIC url
  string to use how you want.

- [Option 2](#option-2-using-createurl):
  Use the `createUrl` function. You can use it to build a custom VPIC url with any endpoint name,
  path, or query params.

More Info:

- [BYOF - Bring Your Own Fetch](../introduction/bring-your-own-fetch.md)

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

## Use It In

Use it in any environment that supports the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). It works in
modern browsers and Node.js versions > 18 out of the box.

::: warning 🔞 WARNING
If you are using this package with a Node.js version < 18, please see the
[Support for Node Versions < 18](../introduction/native-fetch.md) section of the guide.
:::

---

### Node

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

### Browser

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

This package is bundled in the following formats:

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

---

### Modern Browsers and Node.js Versions > 14

ES Module:

- `dist/nhtsa-api-wrapper.mjs`
- import: `import NHTSA from '@shaggytools/nhtsa-api-wrapper'`

---

### Old Browsers and Node.js Versions < 14

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
