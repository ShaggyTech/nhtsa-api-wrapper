# GetModelsForMakeYear

---

```typescript
async function GetModelsForMakeYear(
  params: {
    make: string
  } & AtLeastOne<{
    modelYear?: string | number
    vehicleType?: string
  }>,
  doFetch?: boolean
): Promise<NhtsaResponse<GetModelsForMakeYearResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../../typedoc/api/endpoints/GetModelsForMakeYear)
:::

## Description

`GetModelsForMakeYear` returns the Models in the vPIC dataset for a specified Model Year and
Make whose name is LIKE the Make in the vPIC Dataset.

::: warning :exclamation: Required Parameters
`params.make` is **required**. It can be a partial, or a full name for more specificity, e.g.,
"Harley", "Harley Davidson", etc.

A minimum of one of the following are also **required** (or a combination of both):

- `params.modelYear` year you want to search for (years >= 1995 are supported according to NHTSA
  docs)
- `params.vehicleType` can be a partial name, or a full name for more specificity, e.g.,
  "Vehicle", "Moto", "Low Speed Vehicle", etc.

:::

_NOTE:_ This endpoint requires special behind the scenes handling of the params object, such that
none of the params are used in the query string and are instead used as part of the URL path for the
endpoint.

## Parameters

| Name                  | Type               | Default Value | Description                                                                     |
| --------------------- | ------------------ | ------------- | ------------------------------------------------------------------------------- |
| `params`              | `Object`           | `undefined`   | Object of query search names and values to append to the URL as a query string. |
| `params.make`         | `string`           | `undefined`   | Make name to search                                                             |
| `params.modelYear?`   | `string \| number` | `undefined`   | A number representing the model year to search (required if !vehicleType)       |
| `params.vehicleType?` | `string`           | `undefined`   | String representing the vehicle type to search (required if !modelYear)         |
| `doFetch`             | `boolean`          | `true`        | Whether to fetch the data or just return the URL (default: `true`)              |

::: warning 📝 NOTE

Any `params` that are not listed in the table above will be ignored.

Set `doFetch` to `false` if you want to fetch the data yourself.

- See [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[GetModelsForMakeYearResults](#type-getmodelsformakeyearresults) objects in the
`Results` key.

```typescript
=> Promise<NhtsaResponse<GetModelsForMakeYearResults>>
```

```typescript
type NhtsaResponse<GetModelsForMakeYearResults> = {
  Count: number
  Message: string
  Results: Array<GetModelsForMakeYearResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/get-models-for-make-year.ts#example-response
:::

### If `doFetch` is set to `false`

Returns a URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/audi/modelyear/2018/vehicleType/car?format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - GetModelsForMakeYearResults

<<< @/snippets/endpoints/get-models-for-make-year.ts#type-results

Ƭ **GetModelsForMakeYearResults**: `Object`

Objects returned in the `Results` array of `GetModelsForMakeYear` endpoint response.

## Examples

::: tip Examples 1-3:

- Fetches data from VPIC API

- Returns:

```typescript
=> Promise<NhtsaResponse<GetModelsForMakeYearResults>>
```

:::

### Example 1: Get Models for make and modelYear

```ts
import { GetModelsForMakeYear } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetModelsForMakeYear({
  make: 'Audi',
  modelYear: 2018,
})
```

### Example 2: Get Models for make and vehicleType

```ts
import { GetModelsForMakeYear } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetModelsForMakeYear({
  make: 'audi',
  vehicleType: 'car',
})
```

### Example 3: Get Models for make and modelYear and vehicleType

```ts
import { GetModelsForMakeYear } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetModelsForMakeYear({
  make: 'audi',
  modelYear: 2018,
  vehicleType: 'car',
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

### Example 4: Get Models for make and modelYear and doFetch = false

```ts
import { GetModelsForMakeYear } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetModelsForMakeYear(
  {
    make: 'Audi',
    modelYear: 2018,
  },
  false
)

// url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/Audi/modelyear/2018?format=json'
```

### Example 5: Get Models for make and vehicleType and doFetch = false

```ts
import { GetModelsForMakeYear } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetModelsForMakeYear(
  {
    make: 'Audi',
    vehicleType: 'car',
  },
  false
)

// url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/makeId/Audi/vehicleType/car?format=json'
```

### Example 6: Get Models for make and modelYear and vehicleType and doFetch = false

```ts
import { GetModelsForMakeYear } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetModelsForMakeYear(
  {
    make: 'Audi',
    modelYear: 2018,
    vehicleType: 'car',
  },
  false
)

// url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/Audi/modelyear/2018/vehicleType/car?format=json'
```
