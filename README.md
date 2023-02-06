# @shaggytools/nhtsa-api-wrapper

[![npm](https://img.shields.io/npm/v/@shaggytools/nhtsa-api-wrapper)](https://www.npmjs.com/package/@shaggytools/nhtsa-api-wrapper)
[![Travis (.com)](https://travis-ci.com/ShaggyTech/nhtsa-api-wrapper.svg?branch=master)](https://travis-ci.com/ShaggyTech/nhtsa-api-wrapper?branch=master)
[![codecov](https://codecov.io/gh/ShaggyTech/nhtsa-api-wrapper/branch/master/graph/badge.svg)](https://codecov.io/gh/ShaggyTech/nhtsa-api-wrapper)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/60e45bcb1cf54285a67f423c3f6f32a1)](https://www.codacy.com/manual/ShaggyTech/nhtsa-api-wrapper?utm_source=github.com&utm_medium=referral&utm_content=ShaggyTech/nhtsa-api-wrapper&utm_campaign=Badge_Grade)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@shaggytools/nhtsa-api-wrapper)](https://bundlephobia.com/result?p=@shaggytools/nhtsa-api-wrapper)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@shaggytools/nhtsa-api-wrapper)](https://bundlephobia.com/result?p=@shaggytools/nhtsa-api-wrapper)
[![](https://data.jsdelivr.com/v1/package/npm/@shaggytools/nhtsa-api-wrapper/badge)](https://www.jsdelivr.com/package/npm/@shaggytools/nhtsa-api-wrapper)

---

## Javascript helper functions for the [NHTSA VPIC API](https://vpic.nhtsa.dot.gov/api/Home)

---

This package is a universal (browser/server) javascript wrapper for the National Highway Traffic
Safety Administration (NHTSA) Vehicle Information API (VPIC). It provides a set of helper functions
to retrieve data from each of the API endpoints. It also provides a helper function that takes input
parameters and returns the full API endpoint URL for you to use how you want.

The VPIC API is primarily used for decoding useful information from a Vehicle Identification Number
(VIN) in the United States and Canada. It can also be used to get all models of a make, to decode
WMIs, get all makes for a certain year, and more.

I use it to build things for my vehicle related apps. Creating a contact form for example, you can
have the user first select a year and then have the make and model dropdowns populated with the
available options for that year. For a real world example of this, check out one of my projects that
uses this API:
**[https://dubsquared.com/contact#contact-form](https://dubsquared.com/contact#contact-form)**

The best part about the VPIC API is that it's free and doesn't require an API key 👍🏽. The
wonderful people at the National Highway Traffic Safety Administration (NHTSA) have made it
available to the public free of charge. I've used it in many of my projects and have never had an
issue with it. Sometimes I wonder if they noticed me purposely trying to break the API during
development 😬.

A list of all 24 VPIC endpoints can be found in the [NHTSA API Endpoints](#nhtsa-api-endpoints)
section.

---

### This package provides two ways to interact with the API:

- The first is a set of 24 functions to retrieve data from each of the API endpoints.
- The second is a function that takes input parameters and returns the full API endpoint URL
  for you to use with your own fetch implementation.

#### Endpoint Helper Functions (`DecodeVin`, `GetAllMakes`, etc.):

The helper functions make it easy to retrieve data from the API with only a few input parameters.
They will handle the API URL building, query parameters, request, and response format/parsing for
you.

Example:

```javascript
import { DecodeVin } from "@shaggytools/nhtsa-api-wrapper";

const results = await DecodeVin("WA1A4AFY2J2008189", { modelYear: 2018 });
/* 
results = {
  Count: 136, - number of Results objects returned
  Message: 'Results returned successfully ...',
  SearchCriteria: 'VIN:WA1A4AFY2J2008189',
  Results: [ {...}, {...} ] - an array of DecodeVinResults objects
}
*/
```

#### Endpoint URL Builder (`useNHTSA`):

Using it as a URL builder is useful if you want to use your own fetch implementation or your project
runtime doesn't support native fetch and you don't want to use a polyfill.

This package exports `useNHTSA` which is a composable function that returns an object of helper
functions to interact with the API. The `createUrl` function is the only one you need to use to
build the API endpoint URL. If you're making a POST request, you can use the `createBody` function
to build the request body properly formatted for the API. There are other helper functions exported
by `useNHTSA` that are used internally but you don't need to use them in this case.

See:

- [Alternate Use Without Polyfills](#alternate-use-without-polyfills)
- [This Package Uses Native Fetch](#this-package-uses-native-fetch)

Example (using axios as the fetch implementation)):

```javascript
import { useNHTSA } from "@shaggytools/nhtsa-api-wrapper";
import axios from "axios"; // or any other fetch implementation

// composable destructuring
const { createUrl } = useNHTSA();

// alternatively: useNHTSA().createUrl({ ... })
const url = createUrl({
  endpointName: "DecodeVin",
  path: "WA1A4AFY2J2008189",
  params: { modelYear: 2018 },
});
// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/WA1A4AFY2J2008189?modelYear=2018&format=json'

const results = await axios.get(url);
```

---

**Offline VIN Validation (`isValidVin`):**

There is also an offline VIN validation function called `isValidVin`, that can be used to validate a
VIN without making a request to the API. Useful if you want to validate a VIN before making an
unecessary request to the API with an invalid VIN.
See [Offline VIN Validation](#offline-vin-validation) for more information.

Example:

```javascript
import { isValidVin } from "@shaggytools/nhtsa-api-wrapper";

const isValid = isValidVin("WA1A4AFY2J2008189");
// isValid = true
```

---

> ⚠️ **Important**:
>
> This package uses native
> [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with no polyfill for older
> browsers or Node.js < v18.0.0, see
> [This Package Uses Native Fetch](#this-package-uses-native-fetch).

---

> ⚠️ **Note**:
>
> API response format is hardcoded to `json`, other response formats (xml, csv) are not
> supported by this package.

---

> Last developed and tested on `node v18.13.0`, `npm v8.19.3`, and `pnpm v7.26.0`

---

## Table of Contents

- [Install](#install)
- [Documentation](#documentation)
- [Why do you need this package?](#why-do-you-need-this-package)
- [Where can you use this package?](#where-can-you-use-this-package)
  - [Node](#node)
  - [Browser](#browser)
  - [Typescript](#typescript)
- [This Package Uses Native Fetch](#this-package-uses-native-fetch)
  - [Why this package does NOT provide internal polyfill solution](#why-this-package-does-not-provide-internal-polyfill-solution)
- [Dependencies](#dependencies)
- [NHTSA API Responses](#nhtsa-api-responses)
- [NHTSA API Endpoints](#nhtsa-api-endpoints)
  - [List of Endpoints](#list-of-endpoints)
  - <details>
    <summary>Expand to see all available API endpoints</summary>
    - [DecodeVin](#decodevin)
    - [DecodeVinExtended](#decodevinextended)
    - [DecodeVinValues](#decodevinvalues)
    - [DecodeVINValuesBatch](#decodevinvaluesbatch)
    - [DecodeVinValuesExtended](#decodevinvaluesextended)
    - [DecodeWMI](#decodewmi)
    - [GetAllMakes](#getallmakes)
    - [GetAllManufacturers](#getallmanufacturers)
    - [GetCanadianVehicleSpecifications](#getcanadianvehiclespecifications)
    - [GetEquipmentPlantCodes](#getequipmentplantcodes)
    - [GetMakeForManufacturer](#getmakeformanufacturer)
    - [GetMakesForManufacturerAndYear](#getmakesformanufacturerandyear)
    - [GetMakesForVehicleType](#getmakesforvehicletype)
    - [GetManufacturerDetails](#getmanufacturerdetails)
    - [GetModelsForMake](#getmodelsformake)
    - [GetModelsForMakeId](#getmodelsformakeid)
    - [GetModelsForMakeIdYear](#getmodelsformakeidyear)
    - [GetModelsForMakeYear](#getmodelsformakeyear)
    - [GetParts](#getparts)
    - [GetVehicleTypesForMake](#getvehicletypesformake)
    - [GetVehicleTypesForMakeId](#getvehicletypesformakeid)
    - [GetVehicleVariableList](#getvehiclevariablelist)
    - [GetVehicleVariableValuesList](#getvehiclevariablevalueslist)
    - [GetWMIsForManufacturer](#getwmisformanufacturer)
- [Offline VIN Validation](#offline-vin-validation)
- [Do I need a polyfill?](#do-i-need-a-polyfill)
  - [Polyfills](#polyfills)
  - [Adding Polyfills](#adding-polyfills)
  - [Alternate Use Without Polyfills](#alternate-use-without-polyfills)

---

## Install

See also:

- [How to Install and Use This Package](#how-to-install-and-use-this-package)

---

npm

```bash
$ npm install @shaggytools/nhtsa-api-wrapper
```

yarn

```bash
yarn add @shaggytools/nhtsa-api-wrapper
```

pnpm

```bash
pnpm add @shaggytools/nhtsa-api-wrapper
```

CDN

- [https://www.jsdelivr.com/package/npm/@shaggytools/nhtsa-api-wrapper](https://www.jsdelivr.com/package/npm/@shaggytools/nhtsa-api-wrapper)

The browser global is `window.NHTSA` or just `NHTSA` if you are using a script tag.

Simple example:

```html
<script src="https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.iife.js"></script>

<script>
  const results = await NHTSA.DecodeVin("1G1YY22G865113424")
  console.log('Results: ', results.Results)
</script>
```

---

All Exported Functions:

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
  isValidVin,
} from "@shaggytools/nhtsa-api-wrapper";
```

---

## Documentation

- **[https://www.shaggytech.com/nhtsa-api-wrapper/](https://www.shaggytech.com/nhtsa-api-wrapper/)**

---

## Why do you need this package?

Put simply, all this package really does is make it easier to use the API endpoints.

All of the VPIC endpoints require close attention when using them directly. Each endpoint requires a
different url structure and query parameters, some will return a 404 if some parameters are
missing or not included as empty strings, a mix of 'POST' and 'GET' methods, plus other quirks that
make it take longer and cause frustration to use.

Features:

- Handles the API response format, as well as url endpoint, path, and query search parameters.
- Builds the url strings and then fetches the data for you using native fetch in both browser and
  node, see [#This Package Uses Native Fetch](#this-package-uses-native-fetch).
- Typed responses so you can easily see what keys a particular response will contain in your IDE.
- Built-in typechecking at runtime that will cause the endpoint functions to reject with an
  error if required args are not provided or they are not of the correct type for that endpoint.
- If the fetch response does not return `response.ok`, then the endpoint functions reject with
  an error. If the API responds you should still check the `Count` and `Message` fields of the
  returned response to see if anything was returned. This package considers a 200 repsonse to be
  'ok'.

---

## Where can you use this package?

This package can be used in any environment that can use the native fetch API, see
[#This Package Uses Native Fetch](#this-package-uses-native-fetch). It could also be used in any
environment to simply build the url strings for the endpoints and do the fetching yourself.

### Node:

- Works server side with Express, Nitro, Nuxt, Next, etc. Really any node environment > v18 should
  work out of the box with no need to transpile.
- Node version < 18 will require a polyfill for node native fetch, see also:
  - [This Package Uses Native Fetch](#this-package-uses-native-fetch)
  - [Node.js Docs](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#fetch)
- Provides `es/mjs`, `umd`, and `cjs` formats built with Vite library mode

  - es/mjs: `dist/nhtsa-api-wrapper.mjs` _import syntax_, _tree-shakeable bundle_
  - umd: `dist/nhtsa-api-wrapper.umd.js` _works with node require_
  - cjs: `dist/nhtsa-api-wrapper.js` _works with node require_

### Browser:

- Works in Vue, React, Web Apps, Vanilla Browser JS, etc.
- Works on all modern browsers that can use the browser Fetch API. see also:
  - [This Package Uses Native Fetch](#this-package-uses-native-fetch)
  - [https://caniuse.com/mdn-api_fetch](https://caniuse.com/mdn-api_fetch).
- Provides `es/mjs`, `umd`, and `iffe` formats built with Vite library mode

  - es/mjs: `dist/nhtsa-api-wrapper.mjs` _import syntax_, _tree-shakeable bundle_
  - umd: `dist/nhtsa-api-wrapper.umd.js` _works with browser script tag_
  - iife: `dist/nhtsa-api-wrapper.iife.js` _'window.NHTSA' global_, _works with browser script tag_

- [jsdelivr.net CDN](https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/) -
  `https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper`

- [bundle.run](https://bundle.run/@shaggytools/nhtsa-api-wrapper) -
  `https://bundle.run/@shaggytools/nhtsa-api-wrapper`

- [unpkg.com](https://unpkg.com/@shaggytools/nhtsa-api-wrapper/) -
  `https://unpkg.com/@shaggytools/nhtsa-api-wrapper`

### Typescript:

This package is designed for full typescript support and bundles it's own types. All types are
exported to `dist/types` if you need to import them directly. You shouldn't need to in most cases.

This means most modern code editors should let you know if you're missing any required args or
parameters for each endpoint function. The responses will also be typed to match actual response
JSON structure from the VPIC Vehicles API to help with editor code completion and error reporting.

We've tried to be as accurate as possible typing the API responses based on testing real responses
from the NHTSA API. Please report any discrepencies you may find and they will be fixed.

---

This is what the package.json exports look like:

```json
{
  "main": "./dist/nhtsa-api-wrapper.umd.js",
  "module": "./dist/nhtsa-api-wrapper.mjs",
  "unpkg": "./dist/nhtsa-api-wrapper.iife.js",
  "jsdelivr": "./dist/nhtsa-api-wrapper.iife.js",
  "types": "./dist/types/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/nhsta-api-wrapper.mjs",
      "require": "./dist/nhsta-api-wrapper.umd.js",
      "types": "./dist/types/index.d.ts"
    }
  },
  "files": ["dist"]
}
```

---

## This Package Uses Native Fetch

⚠️ Please Read ⚠️

This package uses the native [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
method internally for both node and browser, meaning it does not provide a polyfill for fetch().
It's possible you may need to provide your own polyfill for fetch.

See:

- [Do I need a polyfill?](#do-i-need-a-polyfill?)
- [Alternate Use Without Polyfills](#alternate-use-without-polyfills)

### Why this package does NOT provide internal polyfill solution

Because we are not providing an internal polyfill, there are no external dependencies that this
package relies on and therefore the package size can stay small.

For more information please read
[Stop polyfilling fetch in your npm package](https://www.builder.io/blog/stop-polyfilling-fetch-in-your-npm-package).

_Credit:_ [github.com/BuilderIO](https://github.com/BuilderIO/this-package-uses-fetch).

---

## Dependencies

No bundled dependecies

---

## NHTSA API Responses

Each endpoint returns a response in the form of an
[NhtsaApiResponse](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_Fetch.html#ApiResponse)
object.

You'll likely only be interested in the `Reponse.Results` portion of the response. `Results` is an
array that will hold one or more objects, with the number of objects depending on the specific
endpoint that was used.

As an example, the `DecodeVin` endpoint would respond with type `NhtsaApiResponse<T>` with `T` being
type `DecodeVinResults`. In this case `Response.Results` would be of array of objects of type
`DecodeVinResults`.

If there are no `Results` then `Response.Count` will be equal to `0` and you can check
`Response.Message` for a possible reason why.

---

## NHTSA API Endpoints

There are a total of 24 different endpoints available for the NHTSA Vehicles API.

### List of Endpoints

#### [DecodeVin](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_DecodeVin.DecodeVin.html#DecodeVin)

#### [DecodeVinExtended](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_DecodeVinExtended.DecodeVinExtended.html)

#### [DecodeVinValues](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_DecodeVinValues.DecodeVinValues.html#DecodeVinValues)

#### [DecodeVINValuesBatch](https://www.shaggytech.com/nhtsa-api-wrapper/module-DecodeVINValuesBatch.DecodeVINValuesBatch.html#DecodeVINValuesBatch)

#### [DecodeVinValuesExtended](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_DecodeVinValuesExtended.DecodeVinValuesExtended.html#DecodeVinValuesExtended)

#### [DecodeWMI](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_DecodeWMI.DecodeWMI.html#DecodeWMI)

#### [GetAllMakes](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetAllMakes.GetAllMakes.html#GetAllMakes)

#### [GetAllManufacturers](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetAllManufacturers.GetAllManufacturers.html#GetAllManufacturers)

#### [GetCanadianVehicleSpecifications](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetCanadianVehicleSpecifications.GetCanadianVehicleSpecifications.html#GetCanadianVehicleSpecifications)

#### [GetEquipmentPlantCodes](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetEquipmentPlantCodes.GetEquipmentPlantCodes.html#GetEquipmentPlantCodes)

#### [GetMakeForManufacturer](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetMakeForManufacturer.GetMakeForManufacturer.html#GetMakeForManufacturer)

#### [GetMakesForManufacturerAndYear](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetMakesForManufacturerAndYear.GetMakesForManufacturerAndYear.html#GetMakesForManufacturerAndYear)

#### [GetMakesForVehicleType](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetMakesForVehicleType.GetMakesForVehicleType.html#GetMakesForVehicleType)

#### [GetManufacturerDetails](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetManufacturerDetails.GetManufacturerDetails.html#GetManufacturerDetails)

#### [GetModelsForMake](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetModelsForMake.GetModelsForMake.html#GetModelsForMake)

#### [GetModelsForMakeId](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetModelsForMakeId.GetModelsForMakeId.html#GetModelsForMakeId)

#### [GetModelsForMakeIdYear](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetModelsForMakeIdYear.GetModelsForMakeIdYear.html#GetModelsForMakeIdYear)

#### [GetModelsForMakeYear](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetModelsForMakeYear.GetModelsForMakeYear.html#GetModelsForMakeYear)

#### [GetParts](module-api_actions_GetParts.GetParts.html#GetParts)

#### [GetVehicleTypesForMake](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetVehicleTypesForMake.GetVehicleTypesForMake.html#GetVehicleTypesForMake)

#### [GetVehicleTypesForMakeId](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetVehicleTypesForMakeId.GetVehicleTypesForMakeId.html#GetVehicleTypesForMakeId)

#### [GetVehicleVariableList](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetVehicleVariableList.GetVehicleVariableList.html#GetVehicleVariableList)

#### [GetVehicleVariableValuesList](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetVehicleVariableValuesList.GetVehicleVariableValuesList.html#GetVehicleVariableValuesList)

#### [GetWMIsForManufacturer](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetWMIsForManufacturer.GetWMIsForManufacturer.html#GetWMIsForManufacturer)

---

## Offline VIN Validation

`isValidVin` is a method exported by this package that takes a single string argument, a Vehicle
Identification Number, and performs an **offline** VIN validation. It will return true if the VIN
passes the algorithm, otherwise false.

This method is a javascript implemenation of the
[VIN Check Digit Algorithm](<https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Check_digit>).

This can be useful if you want to ensure a valid VIN is entered by the user before fetching, which
will prevent unnecessary HTTP/API requests.

---

## Do I need a polyfill?

Here's a brief definition of a
[polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill):

> A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality
> on older environments that do not natively support it.

In the case of `fetch`, this will primarily be:

- Browsers: Opera Mini & IE
- Server: Node v17 or lower

Therefore, if you fit one of the following scenarios:

- plan on using the package in a webapp, and you have data that indicates that your users might be
  on these older browsers (e.g. by importing your analytics into https://caniuse.com/ciu/import)
- plan on using the package in a Node.js server that's on v17 or below

then you might want to keep reading. Otherwise, you don't need to do anything!

### Polyfills

There are many polyfills out there, but here are the ones we'll recommend:

- node implementation: [node-fetch](https://github.com/bitinn/node-fetch)
- browser polyfill: [whatwg-fetch](https://github.com/github/fetch)

### Adding polyfills

To polyfill fetch in the global scope, you'll have to do the following in your application's entry
point (or at least, before the package that needs fetch is imported):

- server:

```ts
import fetch from "node-fetch";
global.fetch = fetch;

// only import the package _after_
import packageThatUsesFetch from "package-that-uses-fetch";
```

- browser:

```ts
// browser
import "whatwg-fetch";

// only import the package _after_
import packageThatUsesFetch from "package-that-uses-fetch";
```

From then on, you're free to use the package as you see fit.

### Alternate Use Without Polyfills

If you don't want to polyfill native fetch for unsupported runtimes, you can still use this package
as a URL builder to easily create URLs compatible with the NHTSA API.

You can use the `cacheUrl` or `createUrl` methods from the `useNHTSA` composable that this package
exports. Use either one of them to get the URL string based on the endpoint name, path, and params.
Then use your own fetch implementation to make the request. You would essentially be using this
package as a utility to build the URL string for the NHTSA API.

- `cacheUrl` creates the URL string and saves it to the `useNHTSA` instance cache.
- `createUrl` is just a wrapper around `cacheurl` that doesn't save the url to the the `useNHTSA`
  instance cache.

If you use it in this way because your app doesn't support native fetch and you don't want to
polyfill:

- Always use `cacheUrl()` or `createUrl()` to get the URL string and then use your own fetch
  implementation to make the request.
- Never use the endpoint methods from this package directly, such as `DecodeVin()`.
- Never use the `get()` or `post()` methods from the `useNHTSA` composable.
- If you try to use any of the above without native fetch support, you will get an error.

Using it this way won't make the request for you, nor will it handle the path and params in a smart
way such as when using one of the endpoint methods directly (DecodeVin, etc.). It simply makes
fetching data from the NHTSA API easier by handling the URL and query string building, the rest is
up to you to implement.

You will need to have some knowledge of the NHTSA API url structure because each endpoint has a
different `path` and required/optional `params`. You can see url examples for each endpoint in the
[NHTSA API docs](https://vpic.nhtsa.dot.gov/api/). Also, in the source code of this package, each
endpoint function is documented and typed if you need help with the path and params structure for
each.

Here are the CreateUrlOptions for `cacheUrl` and `createUrl`:

- `endpointName` - The name of the endpoint to use, see [NHTSA API Endpoints](#nhtsa-api-endpoints)
  (required)
- `path` - The final path to use in the full url path (default: '')
- `params` - An object of query string params to include in the url (default: {})
- `allowEmptyParams` - If true, empty params will be included in the query string (default: false)
- `includeQueryString` - If true, the query string will be included in the url (default: true)
- `saveUrl` - If true, the url will be cached in the composable instance (default: true)

#### Using GET

Here's a simplified example of retrieving data from the NHTSA API using this package as a URL
builder ONLY. This example uses axios as the fetch implementation, but you can use any fetch
implementation you want. The purpose of this example is to show how to use createUrl() to get
the URL string from this package and then use your own fetch implementation to make the request.

```javascript
import { useNHTSA } from "@shaggytools/nhtsa-api-wrapper";
import axios from "axios";

const { createUrl } = useNHTSA();
const url = createUrl({
  endpointName: "DecodeVin",
  path: "SOME_VIN",
  params: {
    modelyear: 2011,
  },
});
// url = "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/SOME_VIN?modelYear=2011&format=json"

// use your own fetch implementation to make the GET request, axios in this example
const response = await axios.get(url);
```

`endpointName` is the NHTSA API endpoint you're trying to use. `DecodeVin` in the example below.
It's not required for it to have uppercase letters, all lowercase is fine.

The `path` for `DecodeVin` endpoint is the VIN you are searching, `params` are the query string
params to use for the endpoint, in this case modelYear=2011. `format=json` will always be appended
to the final query string that is built for you. Keep in mind, `path` and `params` will be unique to
each endpoint. If the endpoint doesn't require a path or params you can omit those keys from the
createUrl object and just provide `endpointName`.

#### Using POST

Note that POST requests to the NHTSA API requires body to be a string and certain headers set.
The post() method of this composable will handle this for you, but if you use createUrl() to get
the URL string and then use your own fetch implementation, you will need to handle this yourself.

FYI `DecodeVinValuesBatch` is the only endpoint that uses a POST request.

Here is a simplified example of how to make a POST request with your own fetch implementation:

```javascript
import { useNHTSA } from "@shaggytools/nhtsa-api-wrapper";
import axios from "axios";

const { createUrl, createPostBody } = useNHTSA();
const url = createUrl({
  endpointName: "DecodeVinValuesBatch",
  includeQueryString: false,
});
const body = createPostBody("5UXWX7C5*BA; 5UXWX7C5*BB");
// body = "DATA=5UXWX7C5*BA;%205UXWX7C5*BB&format=json "
const headers = {
  "Content-Type": "application/x-www-form-urlencoded",
};
// use your own fetch implementation to make the POST request, axios in this example
const response = await axios.post(url, body, { headers });
```

It requires a few things:

- Create the URL string with `createUrl()` and set `includeQueryString: false`
- Create the POST body with `createPostBody()`, you should give it a string as described in the
  `DecodeVinValuesBatch` documentation of this package.
- Set the Content-Type header to `application/x-www-form-urlencoded`
- Use your own fetch implementation to make the request, axios in this example

Using `createPostBody` to create the body string will append `'&format=json'`, which is required for
POST requests to respond in JSON format. It will also perform `encodeURI()` on the body string to
ensure it is encoded properly for the request. This is performed for you automatically when using
the endpoint helper functions.

Special note that when using `createUrl` in this way for a POST request, you should set
`includeQueryString: false` so that `'&format=json'` will _not_ be included in the params,
and subsequently in a query string, which would cause the POST request to fail. This is also
performed automatically when using the endpoint helper functions.

---

---

---
