# GetMakeForManufacturer

[[toc]]

---

```typescript
async function GetMakeForManufacturer(
  manufacturer: string | number,
  doFetch = true
): Promise<NhtsaResponse<GetMakeForManufacturerResults>
```

::: tip :bulb: More In Depth
See: [Package Reference](../typedoc/modules/api_endpoints_GetMakeForManufacturer.md)
:::

## Description

`GetMakeForManufacturer` returns all the Makes in the vPIC dataset for a specified manufacturer
that is requested. Multiple results are returned in case of multiple matches.

`manufacturer` name can be a partial name, or a full name for more specificity, e.g. "988",
"honda", "HONDA OF CANADA MFG., INC.", etc.

- If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
- If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the
  provided name. It accepts a partial manufacturer name as an input.

## Parameters

| Name           | Type                 | Default value | Description                                                        |
| :------------- | :------------------- | :------------ | :----------------------------------------------------------------- |
| `manufacturer` | `string` \| `number` | `undefined`   | Manufacturer Name or ID                                            |
| `doFetch?`     | `boolean`            | `true`        | Whether to fetch the data or just return the URL (default: `true`) |

::: warning 📝 NOTE

Set `doFetch` to `false` if you want to fetch the data yourself.

- See [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[GetMakeForManufacturerResults](#type-getmakeformanufacturerresults) objects in the `Results` key.

```typescript
=> Promise<NhtsaResponse<GetMakeForManufacturerResults>>
```

```typescript
type NhtsaApiResponse<GetMakeForManufacturerResults> = {
  Count: number
  Message: string
  Results: Array<GetMakeForManufacturerResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/get-make-for-manufacturer.ts#example-response
:::

### If `doFetch` is set to `false`

Returns a URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/?format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - GetMakeForManufacturerResults

<<< @/snippets/endpoints/get-make-for-manufacturer.ts#type-results

Ƭ **GetMakeForManufacturerResults**: `Object`

Objects returned in the `Results` array of `GetMakeForManufacturer` endpoint response.

## Examples

::: tip :bulb: Examples 1-4:

```typescript
=> Promise<NhtsaResponse<GetMakeForManufacturerResults>>
```

- Fetches data from VPIC API internally

:::

### Example 1: Get Makes for Manufacturer

```ts
import { GetAllManufacturers } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetAllManufacturers()
```

### Example 2: Get All Manufacturers and filter by type

```ts
import { GetAllManufacturers } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetAllManufacturers({
  manufacturerType: 'Completed Vehicle Manufacturer'
})
```

### Example 3: Get All Manufacturers and filter by page

```ts
import { GetAllManufacturers } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetAllManufacturers({ page: 2 })
```

### Example 4: Get All Manufacturers and filter by type and page

```ts
import { GetAllManufacturers } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetAllManufacturers({
  manufacturerType: 'Final-Staged Manufacturer',
  page: 2
})
```

::: warning :bulb: Examples 5-6:

```typescript
=> Promise<string>
```

- Does _NOT_ fetch data from VPIC API internally
- See: [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)

:::

### Example 5: Get All Manufacturers and doFetch = false

```ts
import { GetAllManufacturers } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetAllManufacturers(false)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers/?format=json'
```

See: [Overload](../typedoc/modules/api_endpoints_DecodeVin#overload-vin-dofetch-false)

### Example 6: Get All Manufacturers with optional filters and doFetch = false

```ts
import { GetAllManufacturers } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetAllManufacturers(
  {
    manufacturerType: 'Incomplete Vehicles',
    page: 3
  },
  false
)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers/?manufacturerType=Incomplete%20Vehicles&page=3&format=json'
```
