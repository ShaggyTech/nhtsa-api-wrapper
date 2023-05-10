# Getting Started

::: tip :mag: See Also:

- [Node Quick Start](../guide/install#node-quick-start)
- [Browser Quick Start](../guide/install#browser-quick-start)

:::

As most users will likely be using this package to decode VINs, the following example will show how
to use the `DecodeVinValues` helper function to get decoded data about a VIN. Most of the helper
functions work the same way, with the only difference being the input parameters and structure of
the returned data in the `Results` array.

```typescript
import { DecodeVinValues } from '@shaggytools/nhtsa-api-wrapper'

const results = await DecodeVinValues('WA1A4AFY2J2008189')
/* 
results = {
  Count: 136,
  Message: 'Results returned successfully ...',
  Results: [ {...} ],
  SearchCriteria: 'VIN:WA1A4AFY2J2008189',
}
*/
```

::: tip :mag: More Info

See the [VIN Decoding](../guide/vin-decoding) page for more details.

:::

---

## List of Exported Functions

The following is an example of how to import all of the helper functions from this package.
In a real project, you would only import the functions you are using.

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

## Alternative Usage Without Fetching

You can use this package to build the full VPIC url for any endpoint, without actually fetching
the data. The url string can then be used however you want.

Using this package as a URL builder is useful if you want to use your own fetch implementation or
your project runtime doesn't support native fetch and you don't want to use a polyfill.

- [Option 1](../guide/bring-your-own-fetch#option-1-set-dofetch-to-false) (recommended):
  Use the endpoint helper functions (DecodeVin, etc.), but pass `false` as the last
  argument of the function to skip internal use of `fetch` and instead return the full VPIC url
  string to use how you want.

- [Option 2](../guide/bring-your-own-fetch#option-2-using-createurl):
  Use the `createUrl` function. You can use it to build a custom VPIC url with any endpoint name,
  path, or query params.

::: tip :mag: More Info:

- [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch)

:::

---

## Next Steps

- [VIN Decoding](../guide/vin-decoding)
- [Offline VIN Validation](../guide/offline-vin-validation)
- [VPIC API Response](../api/vpic-api-response)
- [VPIC API Endpoints](../api/endpoints/#vpic-api-endpoints)
