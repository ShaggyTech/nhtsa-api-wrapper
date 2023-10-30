## Types This Package Exports

::: tip :bulb: INFO
All types used by this package can be found in the [Typedoc Section](../typedoc/types).
:::

Each endpoint function returns a `NhtsaResponse<T>` object where `T` is one of the `Results` types
listed below.

For example, the `DecodeVin` endpoint returns `NhtsaResponse<DecodeVinResults>`.
The `Results` key in the returned object contains the actual relevant data returned by the API.
The number of objects and structure of of the `Results` depends on the endpoint you're using.

```javascript
import type {
  NhtsaResponse, // full response object returned by the VPIC API

  // Results
  DecodeVinResults,
  DecodeVinExtendedResults,
  DecodeVinValuesResults,
  DecodeVinValuesBatchResults,
  DecodeVinValuesExtendedResults,
  DecodeWMIResults,
  GetAllMakesResults,
  GetAllManufacturersResults,
  GetCanadianVehicleSpecificationsResults,
  GetEquipmentPlantCodesResults,
  GetMakeForManufacturerResults,
  GetMakesForManufacturerAndYearResults,
  GetMakesForVehicleTypeResults,
  GetManufacturerDetailsResults,
  GetModelsForMakeResults,
  GetModelsForMakeIdResults,
  GetModelsForMakeIdYearResults,
  GetModelsForMakeYearResults,
  GetPartsResults,
  GetVehicleTypesForMakeResults,
  GetVehicleTypesForMakeIdResults,
  GetVehicleVariableListResults,
  GetVehicleVariableValuesListResults,
  GetWMIsForManufacturerResults,

  // possible string values for results Variables
  DecodeVinVariable,
  DecodeVinExtendedVariable,

  // useNHTSA
  CreateUrlOptions,

  // Query String (internal)
  QueryStringParams,
  QueryStringParamsEncoded,
  QueryStringTypes,
} from '@shaggytools/nhtsa-api-wrapper'
```

::: tip :bulb: TIP
You can find specific details on each endpoint's `Results` types on their respective pages.

See [DecodeVinResults](../api/endpoints/decode-vin#type-decodevinresults) for example.
:::
