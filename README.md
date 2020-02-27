# @shaggytools / nhtsa-api-wrapper

> An async [NHSTA.dot.gov Vehicles API](https://vpic.nhtsa.dot.gov/api/Home) wrapper written in Typescript and bundled with Rollup. It can be used universally in most environments (Node, browsers, scripts, modules, Webpack, Rollup, etc.).

The API that this wrapper was written for is primarily used for decoding useful information from Vehicle Identification Numbers (VINs) in the United States and Canada. However, the NHTSA Vehicles API contains a total of 24 different endpoints, or "Actions" as the developers of the API chose to call them. Within the [documentation you'll see references to these "Actions" and each one will return different information based on a variety of parameters, some required and some optional. This includes decoding WMIs, Canadian VINs, models per make and year, etc.

If you find an issue or would like to make or suggest improvements, I would gladly welcome the feedback.

> This package was developed and tested on `Node v12.14.0`, `NPM v6.11.3`, and `Yarn v1.21.1`

---

## Table of Contents

- [Purpose](#purpose)
- [NHTSA API Actions](#nhtsa-api-actions)

  <details>
    <summary>Expand to see all available API Actions</summary>

  - [DecodeVin](module-api_actions_DecodeVin.DecodeVin.html#DecodeVin)
  - [DecodeVinExtended](module-api_actions_DecodeVinExtended.DecodeVinExtended.html)
  - [DecodeVinValues](module-api_actions_DecodeVinValues.DecodeVinValues.html#DecodeVinValues)
  - [DecodeVinValuesExtended](module-api_actions_DecodeVinValuesExtended.DecodeVinValuesExtended.html#DecodeVinValuesExtended)
  - [DecodeWMI](module-api_actions_DecodeWMI.DecodeWMI.html#DecodeWMI)
  - [GetAllMakes](module-api_actions_GetAllMakes.GetAllMakes.html#GetAllMakes)
  - [GetAllManufacturers](module-api_actions_GetAllManufacturers.GetAllManufacturers.html#GetAllManufacturers)
  - [GetCanadianVehicleSpecifications](module-api_actions_GetCanadianVehicleSpecifications.GetCanadianVehicleSpecifications.html#GetCanadianVehicleSpecifications)
  - [GetEquipmentPlantCodes](module-api_actions_GetEquipmentPlantCodes.GetEquipmentPlantCodes.html#GetEquipmentPlantCodes)
  - [GetMakeForManufacturer](module-api_actions_GetMakeForManufacturer.GetMakeForManufacturer.html#GetMakeForManufacturer)
  - [GetMakesForManufacturerAndYear](module-api_actions_GetMakesForManufacturerAndYear.GetMakesForManufacturerAndYear.html#GetMakesForManufacturerAndYear)
  - [GetMakesForVehicleType](module-api_actions_GetMakesForVehicleType.GetMakesForVehicleType.html#GetMakesForVehicleType)
  - [GetManufacturerDetails](module-api_actions_GetManufacturerDetails.GetManufacturerDetails.html#GetManufacturerDetails)
  - [GetModelsForMake](module-api_actions_GetModelsForMake.GetModelsForMake.html#GetModelsForMake)
  - [GetModelsForMakeId](module-api_actions_GetModelsForMakeId.GetModelsForMakeId.html#GetModelsForMakeId)
  - [GetModelsForMakeIdYear](module-api_actions_GetModelsForMakeIdYear.GetModelsForMakeIdYear.html#GetModelsForMakeIdYear)
  - [GetModelsForMakeYear](module-api_actions_GetModelsForMakeYear.GetModelsForMakeYear.html#GetModelsForMakeYear)
  - [GetParts](module-api_actions_GetParts.GetParts.html#GetParts)
  - [GetVehicleTypesForMake](module-api_actions_GetVehicleTypesForMake.GetVehicleTypesForMake.html#GetVehicleTypesForMake)
  - [GetVehicleTypesForMakeId](module-api_actions_GetVehicleTypesForMakeId.GetVehicleTypesForMakeId.html#GetVehicleTypesForMakeId)
  - [GetVehicleVariableList](module-api_actions_GetVehicleVariableList.GetVehicleVariableList.html#GetVehicleVariableList)
  - [GetVehicleVariableValuesList](module-api_actions_GetVehicleVariableValuesList.GetVehicleVariableValuesList.html#GetVehicleVariableValuesList)
  - [GetWMIsForManufacturer](module-api_actions_GetWMIsForManufacturer.GetWMIsForManufacturer.html#GetWMIsForManufacturer)
- [Dependencies](#dependencies)
- [Installation and Usage](#installation-and-usage)
  - [Node Environments](#node-environments)
    - [Install](#install)
    - [Basic Usage in Node](#basic-usage-in-node)
    - [Instantiated as a Class](#instantiated-as-a-class-with-options)
  - [Browser Environments](#browser-environments)
    - [Basic Usage in Browser](#basic-usage-in-browser)
    - [Lazy Loaded ESModule in Browser Environments](#lazy-loaded-esmodule-in-browser-environments)

</details>

---
---

## Purpose

I wanted an easy way to consume the [NHSTA.dot.gov Vehicles API](https://vpic.nhtsa.dot.gov/api/Home) in JavaScript, which is primarily used for decoding Vehicle Identification Numbers (VINs). The API contains a total of 24 different endpoints, or "Actions" as the developers of the API choose to call them.

I also wanted to further my knowledge by learning TypeScript, JSDoc, Jest, and Rollup. Thus was born this package.

I hope you find this package useful and mostly free of bugs 🐛.

-- [@ShaggyTech](https://www.github.com/ShaggyTech)

---
---

## NHTSA API Actions

There are a total of 24 different endpoints, or `Actions`, available for the NHTSA Vehicles API.

To see how these Actions are implemented you can visit the documentation for the [NHTSA class](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_NHTSA-NHTSA.html), which is a class exported by this package that implements all of individual endpoint wrappers.

Each action

### Available API Actions

- [DecodeVin](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_DecodeVin.DecodeVin.html#DecodeVin)
- [DecodeVinExtended](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_DecodeVinExtended.DecodeVinExtended.html)
- [DecodeVinValues](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_DecodeVinValues.DecodeVinValues.html#DecodeVinValues)
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
- [GetParts](module-api_actions_GetParts.GetParts.html#GetParts)
- [GetVehicleTypesForMake](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetVehicleTypesForMake.GetVehicleTypesForMake.html#GetVehicleTypesForMake)
- [GetVehicleTypesForMakeId](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetVehicleTypesForMakeId.GetVehicleTypesForMakeId.html#GetVehicleTypesForMakeId)
- [GetVehicleVariableList](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetVehicleVariableList.GetVehicleVariableList.html#GetVehicleVariableList)
- [GetVehicleVariableValuesList](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetVehicleVariableValuesList.GetVehicleVariableValuesList.html#GetVehicleVariableValuesList)
- [GetWMIsForManufacturer](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_actions_GetWMIsForManufacturer.GetWMIsForManufacturer.html#GetWMIsForManufacturer)

---
---

## Dependencies

**[cross-fetch](https://www.npmjs.com/package/cross-fetch)** NPM Package

- Universal WHATWG Fetch API for Node, Browsers and React Native.
- Uses [whatwg-fetch](https://github.com/github/fetch/) in the browser and [node-fetch](https://github.com/bitinn/node-fetch/) in node environments.

---
---

## Installation and Usage

- [Node Environments](#node-environments)
- [Browser Environments](#browser-environments)

---

### Node Environments

#### Install

```node
npm install @shaggytools/nhtsa-api-wrapper
// or
yarn @shaggytools/nhtsa-api-wrapper
```

#### Usage in Node

TODO: What does it return???????????????

There are several ways to use this package within a Node environment listed below.

- The first two will give you access to all 24 NHTSA endpoints.
- The last one allows you to import the individual actions if you are only interested in using one of them.

##### Via Client

If you prefer _not_ to use the `new` keyword, as with the NHTSA class, you can use the [Client](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_Client.html) export, which returns a new instance of the `NHTSA` class:

Example code:

```javascript
const { Client } = require('@shaggytools/nhtsa-api-wrapper');

// Decode a VIN and return the complete response
const response = await Client.DecodeVin('3VWD07AJ5EM388202').catch(err => err)
console.log(response);

// or Decode a VIN and return only the Results array
const { Results } = await Client.DecodeVin('3VWD07AJ5EM388202').catch(err => err)
console.log(Results);
```

##### Via NHTSA class

You can import the [NHTSA class](https://www.shaggytech.com/nhtsa-api-wrapper/module-api_NHTSA-NHTSA.html), which is a class exported by this package that implements all of the API `Actions`. You will need to instantiate the class with `new NHTSA()`.

```javascript
const { NHTSA } = require('@shaggytools/nhtsa-api-wrapper');

const apiClient = new NHTSA();

// Decode a VIN and return the complete response
const response = await apiClient.DecodeVin('3VWD07AJ5EM388202').catch(err => err)
console.log(response);

// Decode a VIN and return only the Results array
const { Results } = await Client.DecodeVin('3VWD07AJ5EM388202').catch(err => err)
console.log(Results);
```

##### Via individual API Actions

You can import individual API `Actions` if you only need to use one of them at a time.  This will
slightly reduce the imported size. It's helpful to know that the [cross-fetch](https://www.npmjs.com/package/cross-fetch) dependency is required in all Acions and weighs in at 

```javascript
```

##### Instantiated as a Class

See the [FetchConfig](module-api_Fetch.html#FetchConfig) type for more information on how the Class can be configured.

Changing the `baseUrl` could be useful if you want to proxy/mirror the API endpoints through your own
server, or if the NHTSA API URL were to change in the future and you needed an immediate way to correct
it.  

Adding `options` is useful to pass in your own Headers, add credentials to the request, and more, if
needed.

With or without config options passed to the class constructor:

```node
const { NHTSA } = require('@shaggytools/nhtsa-api-wrapper')

const Client = new NHSTA();

// --OR--

const Client = new NHTSA({
  baseUrl: 'http://myproxyserver.com/api/vehicles'
  options: {
    method: 'GET',
    credentials: 'same-origin'
  }
});

const response = Client.DecodeVin('WVWHV71K69W144983')
  .then(res => {
    console.log(res)
    return response
  })
  .catch(err => console.log(err))

  // Do something with the response

```

---

### Browser Environments

- This package exports a global browser window object accessed with `NHTSA.Client`, which is a class instance implementing all of the wrappers for the API Actions.

In all of the following URLs:

> - remove `<version>` for the latest build.
> -or-
> - change `<version>` to specific version number "x.x.xx"

Via [jsdelivr.net CDN](https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/)
`https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper@<version>/`

Via [bundle.run](https://bundle.run/@shaggytools/nhtsa-api-wrapper)
`https://bundle.run/@shaggytools/nhtsa-api-wrapper@<version>`

Via [unpkg.com](https://unpkg.com/@shaggytools/nhtsa-api-wrapper/)
`https://unpkg.com/@shaggytools/nhtsa-api-wrapper@<version>`

#### Basic Usage in Browser

**Via UMD universal bundle and [cdn.jsdelivr.net](https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper)**:

Example Snippet:

```html
<!-- Change <version> to specific version number "x.x.xx",
or remove <version> for the most recent published version -->
<head>
  <script
    type="text/javascript"
    src="https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/<version>/dev/dist/bundle.min.js"
  ></script>
</head>
<body>
...
</body>
<script type="text/javascript">
  // NHSTA is the global browser window object
  const ApiClient = NHTSA.Client;

  const result = await ApiClient.DecodeVin('3VWD07AJ5EM388202')
      .catch(err => err);

  console.log(result);

</script>

```

Full HTML example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Testing UMD bundle imports</title>


    <!-- Change <version> to specific version number "x.x.xx",
    or remove <version> for the most recent published version -->
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/<version>/dev/dist/bundle.min.js"
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

    document.getElementById('client').addEventListener('click', async function() {
      const result = await Client.DecodeVin('3VWD07AJ5EM388202')
        .catch(err => err);

      console.log(result);

      document.querySelector('#DecodeVinResults').innerHTML = `${JSON.stringify(result)}`
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
  )
  .catch(err => err);

const result = await Client.DecodeVin('3VWD07AJ5EM388202')
  .catch(err => err)
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
      document.getElementById('DecodeVin').addEventListener('click', async function() {
        // Change <version> to specific version number "x.x.xx" or remove <version> for the latest build
        const { Client } = await import(
            'https://unpkg.com/browse/@shaggytools/nhtsa-api-wrapper@<version>/module/index.js'
          )
          .then(module => module)
          .catch(err => err);

        const result = await Client.DecodeVin('3VWD07AJ5EM388202')
          .catch(err => err)

        document.querySelector('#DecodeVinResults').innerHTML = `${JSON.stringify(result)}`
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
