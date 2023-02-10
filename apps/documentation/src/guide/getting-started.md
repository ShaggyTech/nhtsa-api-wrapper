# Getting Started

## Installation Overview

### Via Package Managers:

::: code-group

```bash [npm]
$ npm install @shaggytools/nhtsa-api-wrapper
```

```bash [yarn]
$ yarn add @shaggytools/nhtsa-api-wrapper
```

```bash [pnpm]
$ pnpm add @shaggytools/nhtsa-api-wrapper
```

:::

### Via CDN:

- [https://www.jsdelivr.com/package/npm/@shaggytools/nhtsa-api-wrapper](https://www.jsdelivr.com/package/npm/@shaggytools/nhtsa-api-wrapper)

## Node / Server Install

Be sure to first install using your favorite package manager as shown above.

### ES Module - `.mjs`

This is the most common and recommended way to use this package in Node versions > 14.

if you still need to support older versions of Node, there are also other builds you can use
(`cjs` and `umd` builds).

This is the default package export, so you can import it directly.

::: code-group

```js [ES Module]
import { DecodeVin } from '@shaggytools/nhtsa-api-wrapper'

const { Results } = await DecodeVin('3VWD07AJ5EM388202')
console.log(Results)
```

:::

### UMD Module - `.umd.js`

Not recommended, but if you need to use this package in Node versions < 14, you can use the UMD
build.

```js
require('@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.umd.js')
```

### CommonJS - `.js`

Not recommended, but if you need to use this package in Node versions < 14, you can use the CommonJS
build.

```js
require('@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.js')
```

## Browser Install

There are multiple ways to install and use this package in the browser.

### ES Module - `.mjs`

Recommended for modern browsers that support ES Modules.

CDN: [MJS Build](https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.mjs)

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

### UMD Module - `.umd.js`

Alternate use for older browsers that don't support ES Modules. May require polyfills for `fetch` and
`Promise`.

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

### IIFE Module - `.iife.js`

Alternate use for older browsers that don't support ES Modules. May require polyfills for `fetch` and
`Promise`.

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

## How to Use This Package

::: tip Note:
VPIC "endpoints" as referenced here are referring to the 24 `Actions` listed in the
[VPIC API Documentation](https://vpic.nhtsa.dot.gov/api/).
:::

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

See Also:

- [TODO - NHTSA API Endpoints](#nhtsa-api-endpoints)

### 2. Endpoint URL Builder (`doFetch = false` -or- `useNHTSA`)

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

See Also:

- [TODO - Alternate Use Without Polyfills](#alternate-use-without-polyfills)

---

### Extra: **Offline VIN Validation (`isValidVin`):**

There is also an offline VIN validation function called `isValidVin`, that can be used to validate a
VIN without making a request to the API. Useful if you want to validate a VIN before making an
unecessary request to the API with an invalid VIN.

Example:

```javascript
import { isValidVin } from '@shaggytools/nhtsa-api-wrapper'

const isValid = isValidVin('WA1A4AFY2J2008189')
// isValid = true
```

See Also:

- [TODO - Offline VIN Validation](#offline-vin-validation)

## Available Bundles

This package is bundled in the following formats:

ES Module (mjs):

- `dist/nhtsa-api-wrapper.mjs`
- import: `import NHTSA from '@shaggytools/nhtsa-api-wrapper'`

CommonJS (cjs):

- `dist/nhtsa-api-wrapper.js`
- require: `const NHTSA = require('@shaggytools/nhtsa-api-wrapper')`

Universal Module Definition (UMD)

- `dist/nhtsa-api-wrapper.umd.js`
- global (browser): `window.NHTSA`
- require (node): `const NHTSA = require('@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.umd.js')`

IIFE Bundle (iife):

- `dist/nhtsa-api-wrapper.iife.js`
- global (browser): `window.NHTSA`

## All Exported Functions

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
