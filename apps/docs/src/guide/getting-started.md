# Getting Started

This section will show you how to get started using this package and show some simple
examples for both Node.js and the browser.

::: tip Make sure you've installed the package before continuing.

- [Install - Node](../guide/install#node)
- [Install - Browser](../guide/install#browser)

:::

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

In this simple example we'll show you how to use this package to decode a VIN.

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

Further Reading:

- A more in depth explanation of how to decode a VIN and parse the data can be found on the
  [Decoding a VIN](../guide/vin-decoding) page.

- For a full example response see [DecodeVinValues](../api/endpoints/decode-vin-values#returns)
  documentation.

- The structure of `Results[0]` in the above example can be seen on the
  [Typedocs - DecodeVinValuesResults](../typedoc/api/endpoints/DecodeVinValues#decodevinvaluesresults)
  page.

---

## Browser Quick Start

The following are simple examples that use the jsDelivr CDN:

### ESM

_~ 4kB (auto minified)_

```html
<!doctype html>
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

---

## List of Exported Functions

The following is an example of how to import all of the helper functions from this package.
In a real project, you would only import the functions you are using.

If you are using this package in HTML scripts via CDN (IIFE), you can access the functions via the
global variable `NHTSA`. For example `NHTSA.DecodeVinValues()`, `NHTSA.isValidVin()`, etc.

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

---

## Next Steps

- [VIN Decoding](../guide/vin-decoding)
- [Offline VIN Validation](../guide/offline-vin-validation)
- [VPIC API Response](../api/vpic-api-response)
- [VPIC API Endpoints](../api/endpoints/#vpic-api-endpoints)
