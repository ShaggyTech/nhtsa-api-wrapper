# GetParts

---

```typescript
async function GetParts(
  params?:
    | {
        manufacturer?: string | number
        type?: 565 | 566
        fromDate?: string
        toDate?: string
        page?: string | number
      }
    | boolean,
  doFetch?: boolean
): Promise<NhtsaResponse<GetPartsResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../../typedoc/modules/api_endpoints_GetParts)
:::

## Description

`GetParts` provides a list of ORGs with letter date in the given range of the dates and with
specified Type (`params.type`) of ORG.

- Up to 1000 results will be returned at a time.
- Get the next page by incrementing the `params.page` query parameter.

All query `params` are optional.

`params.manufacturer`:

- (optional) if supplied value is a number - method will do exact match on Manufacturer's Id
- if supplied value is a string - it will look for manufacturers whose name is LIKE the provided
  name
- it accepts a partial manufacturer name as an input
- multiple results are returned in case of multiple matches
- manufacturer name can be a partial name, or a full name for more specificity, e.g., "988",
  "HONDA", "HONDA OF CANADA MFG., INC.", etc.

`params.type`:

- (optional) number, 565 (Vehicle Identification Number Guidance, based on 49 CFR Part 565)
  or 566 (Manufacturer Identification – Reporting Requirements based on 49 CFR Part 566)

`params.fromDate`:

- (optional) ORG's Letter Date should be on or after this date

`params.toDate`:

- (optional) ORG's Letter Date should be on or before this date

`params.page`:

- (optional) number, 1 (default) first 1000 records, 2 - next 1000 records, etc

## Parameters

| Name                   | Type                 | Default Value | Description                                                                     |
| ---------------------- | -------------------- | ------------- | ------------------------------------------------------------------------------- |
| `params?`              | `Object \| boolean ` | `undefined`   | Object of query search names and values to append to the URL as a query string. |
| `params.manufacturer?` | `string \| number`   | `undefined`   | Manufacturer Name or ID                                                         |
| `params.type?`         | `565 \| 566`         | `undefined`   | Specified type of ORG to search                                                 |
| `params.fromDate?`     | `string`             | `undefined`   | Start date of search query                                                      |
| `params.toDate?`       | `string`             | `undefined`   | End date of search query                                                        |
| `params.page?`         | `string \| number`   | `undefined`   | Which page number of results to request (up to 1000 results per page)           |
| `doFetch`              | `boolean`            | `true`        | Whether to fetch the data or just return the URL (default: `true`)              |

::: warning 📝 NOTE

Any `params` that are not listed in the table above will be ignored.

As `params` is optional, it also has type `| boolean`, so you can set `doFetch` without
having to pass `undefined` in place of intentionally undefined `params`.

- See [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[GetPartsResults](#type-getpartsresults) objects in the `Results` key.

```typescript
=> Promise<NhtsaResponse<GetPartsResults>>
```

```typescript
type NhtsaApiResponse<GetPartsResults> = {
  Count: number
  Message: string
  Results: Array<GetPartsResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/get-parts.ts#example-response
:::

### If `doFetch` is set to `false`

Returns a URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/GetParts?type=565&fromDate=1/1/2015&toDate=5/5/2015&manufacturer=honda&page=1format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - GetPartsResults

<<< @/snippets/endpoints/get-parts.ts#type-results

Ƭ **GetPartsResults**: `Object`

Objects returned in the `Results` array of `GetParts` endpoint response.

## Examples

::: tip Examples 1-2:

- Fetches data from VPIC API

- Returns:

```typescript
=> Promise<NhtsaResponse<GetPartsResults>>
```

:::

### Example 1: Get Parts

```ts
import { GetParts } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetParts()
```

### Example 2: Get Parts With Optional Params

```ts
import { GetParts } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetParts({
  type: 565,
  fromDate: '2019-01-01',
  toDate: '2019-12-31',
  manufacturer: 'honda',
  page: 1,
})
```

::: tip Examples 3-4:

- Does _NOT_ fetch data from VPIC API

- See: [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)

- Returns:

```typescript
=> Promise<string>
```

:::

### Example 3: Get Parts and doFetch = false

```ts
import { GetParts } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetParts(false)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetParts?format=json'
```

### Example 4: Get Parts With Optional Params and doFetch = false

```ts
import { GetParts } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetParts(
  {
    type: 565,
    fromDate: '1/1/2015',
    toDate: '5/5/2015',
    manufacturer: 'honda',
    page: 2,
  },
  false
)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetParts?type=565&fromDate=1/1/2015&toDate=5/5/2015&manufacturer=honda&page=2format=json'
```
