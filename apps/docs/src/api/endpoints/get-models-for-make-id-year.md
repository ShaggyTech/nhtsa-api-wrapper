# GetModelsForMakeIdYear

---

```typescript
async function GetModelsForMakeIdYear(
  params: {
    makeId: string | number
  } & AtLeastOne<{
    modelYear?: string | number
    vehicleType?: string
  }>,
  doFetch?: boolean
): Promise<NhtsaResponse<GetModelsForMakeIdYearResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../../typedoc/modules/api_endpoints_GetModelsForMakeIdYear)
:::

## Description

`GetModelsForMakeIdYear` returns the Models in the vPIC dataset for a specified Model Year
and Make whose name is LIKE the Make in the vPIC Dataset.

::: warning :exclamation: Required Parameters
`params.makeId` is an integer and is **required**.

A minimum of one of the following are also **required** (or a combination of both):

- `params.modelYear` year you want to search for (years >= 1995 are supported according to NHTSA
  docs)
- `params.vehicleType` can be a partial name, or a full name for more specificity, e.g.,
  "Vehicle", "Moto", "Low Speed Vehicle", etc.

:::

You can get `makeID`s via `MAKE_ID` key in Results objects of the following endpoints:

- `GetAllMakes` endpoint
- `GetMakeForManufacturer` endpoint
- `GetModelsForMake` endpoint
- `GetModelsForMakeYear` endpoint

You can get `makeID`s via `MakeID` key in Results objects of the following endpoints:

- `DecodeVinValues`
- `DecodeVinValuesBatch`

You can get `makeID`s via `ValueId` key in Results objects of the following endpoints.
One of the objects in the `Results` array will contain both `Variable: "Make"` and
`VariableId: 26`. The `ValueId` key in that same object is the `makeID` for use in this
endpoint.

- `DecodeVin`
- `DecodeVinExtended`

_NOTE:_ This endpoint requires special behind the scenes handling of the params object, such that
none of the params are used in the query string and are instead used as part of the URL path for the
endpoint.

## Parameters

| Name                  | Type               | Default Value | Description                                                                    |
| --------------------- | ------------------ | ------------- | ------------------------------------------------------------------------------ |
| `params`              | `Object`           | `undefined`   | Object of Query Search names and values to append to the URL as a query string |
| `params.makeId`       | `string \| number` | `undefined`   | Make ID to search                                                              |
| `params.modelYear?`   | `string \| number` | `undefined`   | A number representing the model year to search (required if !vehicleType)      |
| `params.vehicleType?` | `string`           | `undefined`   | String representing the vehicle type to search (required if !modelYear)        |
| `doFetch`             | `boolean`          | `true`        | Whether to fetch the data or just return the URL (default: `true`)             |

::: warning 📝 NOTE

Any `params` that are not listed in the table above will be ignored.

Set `doFetch` to `false` if you want to fetch the data yourself.

- See [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[GetModelsForMakeIdYearResults](#type-getmodelsformakeidyearresults) objects in the
`Results` key.

```typescript
=> Promise<NhtsaResponse<GetModelsForMakeIdYearResults>>
```

```typescript
type NhtsaResponse<GetModelsForMakeIdYearResults> = {
  Count: number
  Message: string
  Results: Array<GetModelsForMakeIdYearResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/get-models-for-make-id-year.ts#example-response
:::

### If `doFetch` is set to `false`

Returns a URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2015/vehicleType/car?format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - GetModelsForMakeIdYearResults

<<< @/snippets/endpoints/get-models-for-make-id-year.ts#type-results

Ƭ **GetModelsForMakeIdYearResults**: `Object`

Objects returned in the `Results` array of `GetModelsForMakeIdYear` endpoint response.

## Examples

::: tip Examples 1-3:

- Fetches data from VPIC API
- Returns:

```typescript
=> Promise<NhtsaResponse<GetModelsForMakeIdYearResults>>
```

:::

### Example 1: Get Models for makeId and modelYear

```ts
import { GetModelsForMakeIdYear } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetModelsForMakeIdYear({
  makeId: 474,
  modelYear: 2015,
})
```

### Example 2: Get Models for makeId and vehicleType

```ts
import { GetModelsForMakeIdYear } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetModelsForMakeIdYear({
  makeId: 474,
  vehicleType: 'truck',
})
```

### Example 3: Get Models for makeId and modelYear and vehicleType

```ts
import { GetModelsForMakeIdYear } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetModelsForMakeIdYear({
  makeId: 474,
  modelYear: 2015,
  vehicleType: 'truck',
})
```

::: tip Examples 4-6:

- Does _NOT_ fetch data from VPIC API

- See: [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)

- Returns:

```typescript
=> Promise<string>
```

:::

### Example 4: Get Models for makeId and modelYear and doFetch = false

```ts
import { GetModelsForMakeIdYear } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetModelsForMakeIdYear(
  {
    makeId: 474,
    modelYear: 2015,
  },
  false
)

// url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2015?format=json'
```

### Example 5: Get Models for makeId and vehicleType and doFetch = false

```ts
import { GetModelsForMakeIdYear } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetModelsForMakeIdYear(
  {
    makeId: 474,
    vehicleType: 'truck',
  },
  false
)

// url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/vehicleType/truck?format=json'
```

### Example 6: Get Models for makeId and modelYear and vehicleType and doFetch = false

```ts
import { GetModelsForMakeIdYear } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetModelsForMakeIdYear(
  {
    makeId: 474,
    modelYear: 2015,
    vehicleType: 'truck',
  },
  false
)

// url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2015/vehicleType/truck?format=json'
```
