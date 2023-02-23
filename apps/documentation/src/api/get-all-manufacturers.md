# GetAllManufacturers

[[toc]]

---

```typescript
async function GetAllManufacturers(
  params?:
    | {
        manufacturerType?: string
        page?: string | number
      }
    | boolean,
  doFetch?: boolean
): Promise<NhtsaResponse<GetAllManufacturersResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../typedoc/modules/api_endpoints_GetAllManufacturers.md)
:::

## Description

`GetAllManufacturers` provides a list of all the Manufacturers available in the vPIC Dataset.

`params.manufacturerType` is optional but allows the user to filter the list based on
manufacturer type. Types include 'Incomplete Vehicles', 'Completed Vehicle Manufacturer',
'Incomplete Vehicle Manufacturer', 'Intermediate Manufacturer', 'Final-Stage Manufacturer',
'Alterer', or any partial match of those strings.

`params.page` is optional and used to specify (n)th page of results. Results are provided in
pages of 100 items.

## Parameters

| Name                       | Type                 | Default Value | Description                                                                     |
| -------------------------- | -------------------- | ------------- | ------------------------------------------------------------------------------- |
| `params?`                  | `Object \| boolean ` | `undefined`   | Object of query search names and values to append to the URL as a query string. |
| `params.manufacturerType?` | `string`             | `undefined`   | See function description                                                        |
| `params.page?`             | `string \| number`   | `undefined`   | Specify page number (results returned 100 at a time)                            |
| `doFetch`                  | `boolean`            | `true`        | Whether to fetch the data or just return the URL (default: `true`)              |

::: warning 📝 NOTE

Any `params` that are not listed in the table above will be ignored.

As `params` is optional, it also has type `| boolean`, so you can set `doFetch` without
having to pass `undefined` in place of intentionally undefined `params`.

- See [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[GetAllManufacturersResults](#type-getallmanufacturerresults) objects in the `Results` key.

```typescript
=> Promise<NhtsaResponse<GetAllManufacturersResults>>
```

```typescript
type NhtsaApiResponse<GetAllManufacturersResults> = {
  Count: number
  Message: string
  Results: Array<GetAllManufacturersResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/get-all-manufacturers.ts#example-response
:::

### If `doFetch` is set to `false`

Returns a URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/GetParts?type=565&fromDate=1/1/2015&toDate=5/5/2015&manufacturer=hon&format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - GetAllManufacturersResults

<<< @/snippets/endpoints/get-all-manufacturers.ts#type-results

Ƭ **GetAllManufacturersResults**: `Object`

Objects returned in the `Results` array of `GetAllManufacturers` endpoint response.

## Examples

::: tip :bulb: Examples 1-4:

```typescript
=> Promise<NhtsaResponse<GetAllManufacturersResults>>
```

- Fetches data from VPIC API internally

:::

### Example 1: Get All Manufacturers

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
