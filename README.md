# @shaggytools / nhtsa-api-wrapper

[![npm](https://img.shields.io/npm/v/@shaggytools/nhtsa-api-wrapper)](https://www.npmjs.com/package/@shaggytools/nhtsa-api-wrapper)
[![Travis (.com)](https://travis-ci.com/ShaggyTech/nhtsa-api-wrapper.svg?branch=master)](https://travis-ci.com/ShaggyTech/nhtsa-api-wrapper?branch=master)
[![codecov](https://codecov.io/gh/ShaggyTech/nhtsa-api-wrapper/branch/master/graph/badge.svg)](https://codecov.io/gh/ShaggyTech/nhtsa-api-wrapper)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/60e45bcb1cf54285a67f423c3f6f32a1)](https://www.codacy.com/manual/ShaggyTech/nhtsa-api-wrapper?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ShaggyTech/nhtsa-api-wrapper&amp;utm_campaign=Badge_Grade)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@shaggytools/nhtsa-api-wrapper)](https://bundlephobia.com/result?p=@shaggytools/nhtsa-api-wrapper)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@shaggytools/nhtsa-api-wrapper)](https://bundlephobia.com/result?p=@shaggytools/nhtsa-api-wrapper)
[![](https://data.jsdelivr.com/v1/package/npm/@shaggytools/nhtsa-api-wrapper/badge)](https://www.jsdelivr.com/package/npm/@shaggytools/nhtsa-api-wrapper)

> An async [NHSTA.dot.gov Vehicles API](https://vpic.nhtsa.dot.gov/api/Home) client wrapper, written in Typescript and bundled with Rollup. It can be used universally in most environments (Node, browsers, scripts, modules, Webpack, Rollup, etc.).  Often used as a VIN Decoder among other things.

---

NPM - [https://www.npmjs.com/package/@shaggytools/nhtsa-api-wrapper](https://www.npmjs.com/package/@shaggytools/nhtsa-api-wrapper)

```bash
$ npm install @shaggytools/nhtsa-api-wrapper
```

Yarn - [https://yarnpkg.com/package/@shaggytools/nhtsa-api-wrapper](https://yarnpkg.com/package/@shaggytools/nhtsa-api-wrapper)

```bash
yarn add @shaggytools/nhtsa-api-wrapper
```

CDN - [https://www.jsdelivr.com/package/npm/@shaggytools/nhtsa-api-wrapper](https://www.jsdelivr.com/package/npm/@shaggytools/nhtsa-api-wrapper)


---

Primarily used for decoding useful information from a Vehicle Identification Number (VIN), aka a VIN Decoder, in the United States and Canada. 

The NHTSA Vehicles API actually contains a total of 24 different endpoints, or "Actions" as the developers of the API chose to call them.  The API homepage can be found at [https://vpic.nhtsa.dot.gov/api/](https://vpic.nhtsa.dot.gov/api/) for further reading.

> Package Docs: 
> [https://www.shaggytech.com/nhtsa-api-wrapper/](https://www.shaggytech.com/nhtsa-api-wrapper/)

> Module Size Visualization:
> [https://www.shaggytech.com/nhtsa-api-wrapper/package-size-stats.html](https://www.shaggytech.com/nhtsa-api-wrapper/package-size-stats.html)

If you find an issue or would like to make or suggest improvements, I would gladly welcome the feedback.

> This package was developed and tested on `Node v14.17.0`, `NPM v6.14.13`, and `Yarn v1.22.10`

---

## Table of Contents

- [Purpose](#purpose)
- [Dependencies](#dependencies)
- [How to Install and Use This Package](#how-to-install-and-use-this-package)
  - [In Node Environments](#in-node-environments)
    - [Install](#install)
    - [Using in Node](#using-in-node)
      - [Via Client](#via-client)
      - [Via NHTSA Class](#via-nhtsa-class)
      - [Via NHTSA class with configuration options](#via-nhtsa-class-with-configuration-options)
      - [Via Individual API Actions](#via-individual-api-actions)
  - [In Browser Environments](#in-browser-environments)
    - [Basic Usage in Browser](#basic-usage-in-browser)
    - [Lazy Loaded ESModule in Browser Environments](#lazy-loaded-esmodule-in-browser-environments)
- [NHTSA API Responses](#nhtsa-api-responses)
- [NHTSA API Actions](#nhtsa-api-actions)
- [Offline VIN Validation](#offline-vin-validation)

  <details>
    <summary>Expand to see all available API Actions</summary>

  - [DecodeVin](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_DecodeVin.DecodeVin.html#DecodeVin)
  - [DecodeVinExtended](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_DecodeVinExtended.DecodeVinExtended.html)
  - [DecodeVinValues](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_DecodeVinValues.DecodeVinValues.html#DecodeVinValues)
  - [DecodeVINValuesBatch](https://www.shaggytech.com/nhtsa-api-wrapper/module-DecodeVINValuesBatch.DecodeVINValuesBatch.html#DecodeVINValuesBatch)
  - [DecodeVinValuesExtended](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_DecodeVinValuesExtended.DecodeVinValuesExtended.html#DecodeVinValuesExtended)
  - [DecodeWMI](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_DecodeWMI.DecodeWMI.html#DecodeWMI)
  - [GetAllMakes](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetAllMakes.GetAllMakes.html#GetAllMakes)
  - [GetAllManufacturers](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetAllManufacturers.GetAllManufacturers.html#GetAllManufacturers)
  - [GetCanadianVehicleSpecifications](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetCanadianVehicleSpecifications.GetCanadianVehicleSpecifications.html#GetCanadianVehicleSpecifications)
  - [GetEquipmentPlantCodes](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetEquipmentPlantCodes.GetEquipmentPlantCodes.html#GetEquipmentPlantCodes)
  - [GetMakeForManufacturer](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetMakeForManufacturer.GetMakeForManufacturer.html#GetMakeForManufacturer)
  - [GetMakesForManufacturerAndYear](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetMakesForManufacturerAndYear.GetMakesForManufacturerAndYear.html#GetMakesForManufacturerAndYear)
  - [GetMakesForVehicleType](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetMakesForVehicleType.GetMakesForVehicleType.html#GetMakesForVehicleType)
  - [GetManufacturerDetails](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetManufacturerDetails.GetManufacturerDetails.html#GetManufacturerDetails)
  - [GetModelsForMake](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetModelsForMake.GetModelsForMake.html#GetModelsForMake)
  - [GetModelsForMakeId](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetModelsForMakeId.GetModelsForMakeId.html#GetModelsForMakeId)
  - [GetModelsForMakeIdYear](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetModelsForMakeIdYear.GetModelsForMakeIdYear.html#GetModelsForMakeIdYear)
  - [GetModelsForMakeYear](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetModelsForMakeYear.GetModelsForMakeYear.html#GetModelsForMakeYear)
  - [GetParts](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetParts.GetParts.html#GetParts)
  - [GetVehicleTypesForMake](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetVehicleTypesForMake.GetVehicleTypesForMake.html#GetVehicleTypesForMake)
  - [GetVehicleTypesForMakeId](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetVehicleTypesForMakeId.GetVehicleTypesForMakeId.html#GetVehicleTypesForMakeId)
  - [GetVehicleVariableList](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetVehicleVariableList.GetVehicleVariableList.html#GetVehicleVariableList)
  - [GetVehicleVariableValuesList](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetVehicleVariableValuesList.GetVehicleVariableValuesList.html#GetVehicleVariableValuesList)
  - [GetWMIsForManufacturer](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetWMIsForManufacturer.GetWMIsForManufacturer.html#GetWMIsForManufacturer)

---

---

## Purpose

I wanted an easy way to consume the [NHSTA.dot.gov Vehicles API](https://vpic.nhtsa.dot.gov/api/Home) in JavaScript. This API is primarily used for decoding Vehicle Identification Numbers (VINs). The API contains a total of 24 different endpoints, or "Actions" as the developers of the API choose to call them, all of which return different vehicle information based on the request.

I also wanted to further my knowledge by learning TypeScript, JSDoc, Jest, and Rollup. Thus was born this package.

I hope you find this package useful and mostly free of bugs 🐛.

-- [@ShaggyTech](https://www.github.com/ShaggyTech)

---

---

## Dependencies

**[isomorphic-unfetch](https://www.npmjs.com/package/isomorphic-unfetch)**

- Switches between [unfetch](https://github.com/developit/unfetch) & [node-fetch](https://github.com/bitinn/node-fetch) for client & server.
- 2.5 kB unpacked size

---

---

## How to Install and Use This Package

- [In Node Environments](#in-node-environments)
- [In Browser Environments](#in-browser-environments)

---

### In Node Environments

#### Install

```bash
# NPM
npm install @shaggytools/nhtsa-api-wrapper

# Yarn
yarn add @shaggytools/nhtsa-api-wrapper
```

#### Using in Node

Listed below, there are several ways to use this package within a Node environment.

- The first two will give you access to all 24 NHTSA endpoints within the same import.
- The last one allows you to import the individual actions if you are only interested in using one or some of them.

##### Via Client

You can use the [Client](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_Client.html) export, which returns a new instance of the `NHTSA` class:

Example code:

```javascript
const { Client } = require('@shaggytools/nhtsa-api-wrapper');

// Decode a VIN and get the complete response
const response = await Client.DecodeVin('3VWD07AJ5EM388202').catch(err => err);
console.log(response);

// Get all available Makes and get only the Results array
const { Results } = await Client.GetAllMakes().catch(err => err);
console.log(Results);
```

##### Via NHTSA class

You can import the [NHTSA class](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_NHTSA-NHTSA.html), which is a class exported by this package that implements all of the API `Actions`. You will need to instantiate the class with `new NHTSA()`.  You can also pass constructor options when instantiating, see [here](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_Fetch.html#FetchConfig) for available config options.

```javascript
const { NHTSA } = require('@shaggytools/nhtsa-api-wrapper');

const ApiClient = new NHTSA();

// Get models for a specified Make + Year and get the complete response
const response = await ApiClient.GetModelsForMakeYear({
  make: 'Audi',
  modelYear: 2015
}).catch(err => err);

console.log(response);

// Decode a VIN and get only the Results array
const { Results } = await ApiClient.DecodeVin('3VWD07AJ5EM388202').catch(
  err => err
);
console.log(Results);
```

##### Via NHTSA class with configuration options

See the [FetchConfig](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_Fetch.html#FetchConfig) type for more information on what can be passed to the [NHTSA class](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_NHTSA-NHTSA.html). This includes configuration `options` for the Fetch API, such as Headers and credentials, which allow you fine control over the http request sent to the NHTSA API.

Changing the `baseUrl` could be useful if you want to proxy/mirror the NHTSA endpoints through your own server, or if the NHTSA URL were to change in the future and you needed an immediate way to correct it.

Adding `options` is useful to pass in your own Headers, add credentials to the request, and more, if needed.

Sample code, with config options passed to the class constructor:

```javascript
const { NHTSA } = require('@shaggytools/nhtsa-api-wrapper')

const ApiClient = new NHTSA({
  baseUrl: 'http://myproxyserver.com/api/vehicles'
  options: {
    method: 'GET',
    credentials: 'same-origin'
  }
});

const response = ApiClient.DecodeVin('WVWHV71K69W144983')
  .then(res => {
    console.log(res)
    // do something here with the response
    return response
  })
  .catch(err => console.log(err))

  // or do something with the response here as well

```

##### Via individual API Actions

You can import individual NHTSA `Action` classes if you only need to use one of them at a time, or even just a few of them. Each class has a single member method with the same name as the class. For example, the DecodeVin class has a method named `DecodeVin` and is used like `DecodeVin.DecodeVin(<vin>)`, which is after instantiating the class with `new DecodeVin()`.

Sample code; change `DecodeWMI` to any desired NHTSA Action, or import multiples.

```javascript
const {
  DecodeWMI,
  GetModelsForMake
} = require('@shaggytools/nhtsa-api-wrapper');

const Decoder = new DecodeWMI();
const GetModels = new GetModelsForMake();

// Decode a VIN and return only the Results array
const { Results } = await Decoder.DecodeWMI('3VW').catch(err => err);
console.log(Results);

// Decode a VIN and return the complete response
const response = await Decoder.DecodeWMI('3VW').catch(err => err);
console.log(response);

// Get models per make and return only the Results array
const { Results } = await GetModels.GetModelsForMake('Toyota').catch(
  err => err
);
console.log(Results);
```

---

### In Browser Environments

This package exports a global browser window object named `NHTSA`.

Further below, there will be full examples for how to use the `NHTSA` global in different scenarios.

#### `NHTSA.Client`

`NHTSA.Client` is an instance of the NHTSA class which implements all of the wrappers for the NHTSA Actions. You can avoid using the `new` keyword in your code if you use it this way. See the [Client](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_Client.html) class for more information.

#### `NHTSA.NHTSA`

`NHTSA.NHTSA` is the main class which implements all of the Action class methods. You will need to use the `new` keyword within your code <`new NHTSA()`>. See the [NHTSA](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_NHTSA-NHTSA.html) class for more information.

#### `NHTSA.isValidVin`

`NHTSA.isValidVin` is a method that takes a single string argument, a Vehicle Identification Number, and performs an **offline** VIN validation. It will return true if the VIN passes the algorithm, otherwise false. This can be useful if you want to ensure a valid VIN is entered by the user, which will prevent unnecessary HTTP/API requests. See the [isValidVin](https://www.shaggytech.com/nhtsa-api-wrapper/module-utils_isValidVin.html#.isValidVin) module for more information.

> In all of the following URLs either:
>
> - remove `<version>` for the most recent release
>
> or...
>
> - change `<version>` to specific version number "x.x.xx"

**Via [jsdelivr.net CDN](https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/)**

- `https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper@<version>/`

**Via [bundle.run](https://bundle.run/@shaggytools/nhtsa-api-wrapper)**

- `https://bundle.run/@shaggytools/nhtsa-api-wrapper@<version>`

**Via [unpkg.com](https://unpkg.com/@shaggytools/nhtsa-api-wrapper/)**

- `https://unpkg.com/@shaggytools/nhtsa-api-wrapper@<version>`

#### Basic Usage in Browser

**Via UMD universal bundle and [cdn.jsdelivr.net](https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper)**:

Example Snippet:

```html
<!-- Change <version> to specific version number "x.x.xx",
or remove <version> for the most recent published version -->
<head>
  <script
    type="text/javascript"
    src="https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/<version>/dist/bundle.min.js"
  ></script>
</head>
<body>
  ...
</body>
<script type="text/javascript">
  // NHSTA is the global browser window object
  const ApiClient = NHTSA.Client;

  const result = await ApiClient.DecodeVin('3VWD07AJ5EM388202').catch(
    err => err
  );

  console.log(result);
</script>
```

Full HTML example; copy and paste to try it out:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Testing UMD bundle imports</title>

    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/dist/bundle.min.js"
    ></script>
  </head>

  <body>
    <div>
      <btn id="DecodeVin">Click to console.log NHTSA.DecodeVin() results</btn>
      <div id="DecodeVinResults"></div>
    </div>
  </body>

  <script type="text/javascript">
    // NHSTA is the global browser window object
    const Client = NHTSA.Client;

    document
      .getElementById('client')
      .addEventListener('click', async function() {
        const result = await Client.DecodeVin('3VWD07AJ5EM388202').catch(
          err => err
        );

        console.log(result);

        document.querySelector(
          '#DecodeVinResults'
        ).innerHTML = `${JSON.stringify(result)}`;
      });
  </script>
</html>
```

#### Lazy Loaded ESModule in Browser Environments

**Lazy Loading using ES Modules and [unpkg.com](https://unpkg.com/browse/@shaggytools/nhtsa-api-wrapper)**:

Script Snippet:

```html
<script type="module">
  // Change <version> to specific version number "x.x.xx" or remove <version> for the latest build
  const { Client } = await import(
    'https://unpkg.com/browse/@shaggytools/nhtsa-api-wrapper@<version>/module/index.js'
  ).catch(err => err);

  const result = await Client.DecodeVin('3VWD07AJ5EM388202').catch(err => err);
</script>
```

Full HTML Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Testing lazy loaded module imports</title>

    <script type="module">
      document
        .getElementById('DecodeVin')
        .addEventListener('click', async function() {
          const { Client } = await import(
            'https://unpkg.com/browse/@shaggytools/nhtsa-api-wrapper/module/index.js'
          )
            .then(module => module)
            .catch(err => err);

          const result = await Client.DecodeVin('3VWD07AJ5EM388202').catch(
            err => err
          );

          document.querySelector(
            '#DecodeVinResults'
          ).innerHTML = `${JSON.stringify(result)}`;
        });
    </script>
  </head>
  <body>
    <div>
      <btn id="DecodeVin">Click to console.log DecodeVin() results</btn>
      <div id="DecodeVinResults"></div>
    </div>
  </body>
</html>
```

---

---

## NHTSA API Responses

Each action returns a response in the form of an [ApiResponse](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_Fetch.html#ApiResponse) object.

You'll likely only be interested in the `ApiResponse.Results` portion of the response. `Results` is an array that will hold one or more objects, with the number of objects depending on the specific Action that was used. There is also additional information returned about the request, response, headers etc. within the `ApiResponse` object.

As an example, you can see what the `GetEquipmentPlantCodes` response will be by going to it's response type, located on the documentation page for the same named module, with the word "Response" added to the end.

Example: [DecodeVin](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_DecodeVin.html#DecodeVinResponse).Results will contain an array of [DecodeVinResults](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_DecodeVin.html#DecodeVinResults) type objects.

---

## NHTSA API Actions

There are a total of 24 different endpoints, or `Actions`, available for the NHTSA Vehicles API.

To see how these Actions are implemented you can visit the documentation for the [NHTSA class](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_NHTSA-NHTSA.html), which is a class exported by this package that implements all of the individual Action wrapper class methods.

### List of Actions

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

#### Offline VIN Validation

`isValidVin` is a method exported by this package that takes a single string argument, a Vehicle Identification Number, and performs an **offline** VIN validation. It will return true if the VIN passes the algorithm, otherwise false.

This can be useful if you want to ensure a valid VIN is entered by the user, which will prevent unnecessary HTTP/API requests. See the [isValidVin](https://www.shaggytech.com/nhtsa-api-wrapper/module-utils_isValidVin.html#.isValidVin) module for more information.

---

---
