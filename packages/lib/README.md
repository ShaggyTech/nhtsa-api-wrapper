# @shaggytools/nhtsa-api-wrapper

<p align="center">
    <a href="https://www.npmjs.com/package/@shaggytools/nhtsa-api-wrapper" target="_blank">
        <img src="https://img.shields.io/npm/v/@shaggytools/nhtsa-api-wrapper?style=for-the-badge">
    </a>
    <a href="https://github.com/ShaggyTech/nhtsa-api-wrapper/actions/workflows/ci.yml" target="_blank">
        <img src="https://img.shields.io/github/actions/workflow/status/shaggytech/nhtsa-api-wrapper/ci.yml?style=for-the-badge">
    </a>  
    <a href="https://bundlephobia.com/result?p=@shaggytools/nhtsa-api-wrapper" target="_blank">
        <img src="https://img.shields.io/bundlephobia/min/@shaggytools/nhtsa-api-wrapper?style=for-the-badge">
    </a>
    <a href="https://bundlephobia.com/result?p=@shaggytools/nhtsa-api-wrapper" target="_blank">
        <img src="https://img.shields.io/bundlephobia/minzip/@shaggytools/nhtsa-api-wrapper?style=for-the-badge">
    </a>
    <a href="https://codecov.io/gh/ShaggyTech/nhtsa-api-wrapper" target="_blank">
        <img src="https://img.shields.io/codecov/c/github/shaggytech/nhtsa-api-wrapper/main?style=for-the-badge">
    </a> 
</p>

---

## Javascript Wrapper and Helper Functions for the [NHTSA VPIC API](https://vpic.nhtsa.dot.gov/api/Home)

A universal (browser/server) javascript wrapper for the National Highway Traffic
Safety Administration (NHTSA) Vehicle Information API (VPIC).

The VPIC API is primarily used for decoding useful information from a Vehicle Identification Number
(VIN) in the United States and Canada. It can also be used to get all models of a make, to decode
WMIs, get all makes for a certain year, and more.

---

<div align="center" style="font-size: 1.5em; font-weight: bold;">Built With:</div>
<br>
<p align="center">
    <a href="https://github.com/pnpm/pnpm" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=pnpm&color=222222&logo=pnpm&logoColor=F69220&label=">
    </a>
    <a href="https://vitejs.dev" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Vite&color=646CFF&logo=Vite&logoColor=FFFFFF&label=">
    </a>
    <a href="https://vitepress.dev/" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Vitepress&color=000000&logo=Vite&logoColor=FFFFFF&label=">
    </a>   
    <a href="https://vitest.dev/" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Vitest&color=222222&logo=Vitest&logoColor=4FC08D&label=">
    </a>
    <a href="https://github.com/vercel/turborepo" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Turborepo%20by%20Vercel&color=000000&logo=Vercel&logoColor=FFFFFF&label=">
    </a>  
</p>

---

## Full Documentation

### [https://vpic.shaggytech.com/](https://vpic.shaggytech.com/)

- [Introduction](https://vpic.shaggytech.com/guide)
- [Install](https://vpic.shaggytech.com/guide/getting-started#install)
- [Quick Start](https://vpic.shaggytech.com//guide/getting-started#quick-start)
- [API Reference](https://vpic.shaggytech.com/api/)

## Install

### Node Package Managers

#### [NPM](https://www.npmjs.com/package/@shaggytools/nhtsa-api-wrapper)

```sh [npm]
$ npm install @shaggytools/nhtsa-api-wrapper
```

#### Yarn

```sh [yarn]
$ yarn add @shaggytools/nhtsa-api-wrapper
```

#### Pnpm

```sh [pnpm]
$ pnpm add @shaggytools/nhtsa-api-wrapper
```

### Browser CDNs

Browser global variable: `NHTSA`

#### [jsDelivr](https://www.jsdelivr.com/package/npm/@shaggytools/nhtsa-api-wrapper)

```html [jsDelivr]
<script src="https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.iife.min.js"></script>
```

#### UNPKG

```html [UNPKG]
<script src="https://www.unpkg.com/@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.iife.js"></script>
```

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
  isValidVin,
} from '@shaggytools/nhtsa-api-wrapper'
```

## Quick Start

Decoding a VIN is as easy as importing the `DecodeVinValues` function and calling it
with a VIN.

Make sure to first install via your favorite package manager or use a CDN.

```javascript
import { DecodeVinValues } from '@shaggytools/nhtsa-api-wrapper'

const results = await DecodeVinValues('WA1A4AFY2J2008189')

/* 
results = {
  Count: 136, - number of Results objects returned
  Message: 'Results returned successfully ...',
  SearchCriteria: 'VIN:WA1A4AFY2J2008189',
  Results: [ {...} ] - an array with single object of type DecodeVinValuesResults
}
*/

/* You can also use destructuring to get the Results object */
const { Results } = await DecodeVinValues('WA1A4AFY2J2008189')

/* This endpoint only returns a single object in the Results array
   The first object in the array is the decoded vin data */
const decodedVehicle = Results[0] // equals an object of type DecodeVinValuesResults
```

For a full example response see: [DecodeVinValues](https://vpic.shaggytech.com/api/endpoints/decode-vin-values#returns)

All available endpoints can be found here: [VPIC API Endpoints](https://vpic.shaggytech.com/api/#vpic-api-endpoints)
