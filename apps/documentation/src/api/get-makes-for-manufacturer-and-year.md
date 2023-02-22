# GetMakesForManufacturerAndYear

[[toc]]

---

```typescript
async function GetMakesForManufacturerAndYear(
  manufacturer: string | number,
  params: {
    year: string | number
  },
  doFetch = true
): Promise<NhtsaResponse<GetMakesForManufacturerAndYearResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../typedoc/modules/api_endpoints_GetMakesForManufacturerAndYear.md)
:::

## Description

`GetMakesForManufacturerAndYear` returns all the Makes in the vPIC dataset for a specified
`manufacturer`, and whose "Year From" and "Year To" range cover the specified `year`. Multiple
results are returned in case of multiple matches.

`manufacturer` name can be a partial name, or a full name for more specificity, e.g. "988",
"honda", "HONDA OF CANADA MFG., INC.", etc.

- If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
- If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the
  provided name. It accepts a partial manufacturer name as an input.

`params.year` must be a number > 2016, years prior to 2016 are not supported according to the
NHTSA API. During testing it was found that the API still returns data for years prior to 2016.

::: warning :exclamation: Required Parameters
Both `manufacturer` and `params.year` are required.
:::

## Parameters

| Name           | Type                 | Default value | Description                                                                    |
| :------------- | :------------------- | :------------ | :----------------------------------------------------------------------------- |
| `manufacturer` | `string` \| `number` | `undefined`   | Manufacturer Name (string) or Manufacturer ID (number)                         |
| `params`       | `Object`             | `undefined`   | Object of Query Search names and values to append to the URL as a query string |
| `params.year`  | `string` \| `number` | `undefined`   | Model year of the vehicle - Number, >= 2016                                    |
| `doFetch?`     | `boolean`            | `true`        | Whether to fetch the data or just return the URL (default: `true`)             |

::: warning 📝 NOTE

Any `params` that are not listed in the table above will be ignored.

Set `doFetch` to `false` if you want to fetch the data yourself.

- See [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[GetMakeForManufacturerResults](#type-getmakesformanufacturerandyearresults) objects in the
`Results` key.

```typescript
=> Promise<NhtsaResponse<GetMakesForManufacturerAndYearResults>>
```

```typescript
type NhtsaApiResponse<GetMakesForManufacturerAndYearResults> = {
  Count: number
  Message: string
  Results: Array<GetMakesForManufacturerAndYearResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/get-makes-for-manufacturer-and-year.ts#example-response
:::

### If `doFetch` is set to `false`

Returns a URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForManufacturerAndYear/volks?year=2020&format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - GetMakesForManufacturerAndYearResults

<<< @/snippets/endpoints/get-makes-for-manufacturer-and-year.ts#type-results

Ƭ **GetMakesForManufacturerAndYearResults**: `Object`

Objects returned in the `Results` array of `GetMakesForManufacturerAndYear` endpoint response.

## Examples

::: tip :bulb: Examples 1-2:

```typescript
=> Promise<NhtsaResponse<GetMakesForManufacturerAndYearResults>>
```

- Fetches data from VPIC API internally

:::

### Example 1: Get Makes for Manufacturer Name and Year

```ts
import { GetMakesForManufacturerAndYear } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetMakesForManufacturerAndYear('volks', { year: 2020 })
```

### Example 1: Get Makes for Manufacturer ID and Year

```ts
import { GetMakesForManufacturerAndYear } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetMakesForManufacturerAndYear(1148, { year: 2020 })
```

::: warning :bulb: Examples 3-4:

```typescript
=> Promise<string>
```

- Does _NOT_ fetch data from VPIC API internally
- See: [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)

:::

### Example 3: Get Makes for Manufacturer Name and Year with doFetch = false

```ts
import { GetMakesForManufacturerAndYear } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetMakesForManufacturerAndYear('volks', { year: 2020 }, false)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForManufacturerAndYear/volks?year=2020&format=json'
```

### Example 4: Example 1: Get Makes for Manufacturer ID and Year with doFetch = false

```ts
import { GetMakesForManufacturerAndYear } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetMakesForManufacturerAndYear(1148, { year: 2020 }, false)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForManufacturerAndYear/1148?year=2020&format=json'
```
