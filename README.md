# @shaggytools/template-typescript-npm

> An async [NHSTA.dot.gov Vehicles API](https://vpic.nhtsa.dot.gov/api/Home) wrapper written in Typescript and bundled with Rollup. It can be used universally in most environments (Node, browsers, scripts, modules, Webpack, Rollup, etc.).

The API this wrapper was written for is primarily used for decoding useful information from Vehicle Identification Numbers (VINs) in the United States and Canada. However, the NHTSA Vehicles API contains a total of 24 different endpoints, or "Actions" as the developers of the API choose to call them. Throughout this documentation you'll see references to these "Actions" and each one will return different information based on a variety of parameters, some required and some optional. This includes decoding WMIs, Canadian VINs, models per make and year, etc.

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

I hope you find this package useful.

-- [@ShaggyTech](https://www.github.com/ShaggyTech)

---
---

## NHTSA API Actions

There are a total of 24 different endpoints, or `Actions`, available for the NHTSA Vehicles API.

**To see how this package implements them, visit the documentation for the [NHTSA class](module-api_NHTSA-NHTSA.html)**

See also: [https://vpic.nhtsa.dot.gov/api/Home](https://vpic.nhtsa.dot.gov/api/Home) for the original API documentation.

**Available API Actions**

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

---
---

## Dependencies

[cross-fetch](https://www.npmjs.com/package/cross-fetch)

- Universal WHATWG Fetch API for Node, Browsers and React
Native.
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

#### Basic Usage in Node

```node
const { Client } = require('@shaggytools/nhtsa-api-wrapper');

const response = Client.DecodeVin('WVWHV71K69W144983')
  .then(response => {
    console.log(response);
    return response;
  })
  .catch(err => console.log(err))

  // Do something with the response
```

#### Instantiated as a Class

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
