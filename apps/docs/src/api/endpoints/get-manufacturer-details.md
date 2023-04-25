# GetManufacturerDetails

[[toc]]

---

```typescript
async function GetManufacturerDetails(
  manufacturer: string | number,
  doFetch?: boolean
): Promise<NhtsaResponse<GetManufacturerDetailsResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../../typedoc/modules/api_endpoints_GetManufacturerDetails)
:::

## Description

`GetManufacturerDetails` provides the details for a specific manufacturer that is requested.
Multiple results are returned in case of multiple matches.

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

- See [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[GetManufacturerDetailsResults](#type-getmanufacturerdetailsresults) objects in the
`Results` key.

```typescript
=> Promise<NhtsaResponse<GetManufacturerDetailsResults>>
```

```typescript
type NhtsaApiResponse<GetManufacturerDetailsResults> = {
  Count: number
  Message: string
  Results: Array<GetManufacturerDetailsResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/get-manufacturer-details.ts#example-response
:::

### If `doFetch` is set to `false`

Returns a URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/GetManufacturerDetails/tesla?format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - GetManufacturerDetailsResults

<<< @/snippets/endpoints/get-manufacturer-details.ts#type-results

Ƭ **GetManufacturerDetailsResults**: `Object`

Objects returned in the `Results` array of `GetManufacturerDetails` endpoint response.

## Examples

::: tip :bulb: Examples 1-2:

```typescript
=> Promise<NhtsaResponse<GetManufacturerDetailsResults>>
```

- Fetches data from VPIC API internally

:::

### Example 1: Get Manufacturer Details by Name

```ts
import { GetManufacturerDetails } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetManufacturerDetails('tesla')
```

### Example 2: Get Manufacturer Details by ID

```ts
import { GetManufacturerDetails } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetManufacturerDetails(955)
```

::: warning :bulb: Examples 3-4:

```typescript
=> Promise<string>
```

- Does _NOT_ fetch data from VPIC API internally
- See: [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)

:::

### Example 3: Get Manufacturer Details by Name and doFetch = false

```ts
import { GetManufacturerDetails } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetManufacturerDetails('tesla', false)

// url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetManufacturerDetails/tesla?format=json'
```

### Example 4: Get Manufacturer Details by ID and doFetch = false

```ts
import { GetManufacturerDetails } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetManufacturerDetails(955, false)

// url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetManufacturerDetails/955?format=json'
```
