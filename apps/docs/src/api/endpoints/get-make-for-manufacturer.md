# GetMakeForManufacturer

[[toc]]

---

```typescript
async function GetMakeForManufacturer(
  manufacturer: string | number,
  doFetch?: boolean
): Promise<NhtsaResponse<GetMakeForManufacturerResults>
```

::: tip :bulb: More In Depth
See: [Package Reference](../../typedoc/modules/api_endpoints_GetMakeForManufacturer)
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

- See [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
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

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - GetMakeForManufacturerResults

<<< @/snippets/endpoints/get-make-for-manufacturer.ts#type-results

Ƭ **GetMakeForManufacturerResults**: `Object`

Objects returned in the `Results` array of `GetMakeForManufacturer` endpoint response.

## Examples

::: tip :bulb: Examples 1-2:

```typescript
=> Promise<NhtsaResponse<GetMakeForManufacturerResults>>
```

- Fetches data from VPIC API internally

:::

### Example 1: Get Makes for Manufacturer Name

```ts
import { GetMakeForManufacturer } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetMakeForManufacturer('honda')
```

### Example 2: Get Makes for Manufacturer ID

```ts
import { GetMakeForManufacturer } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetMakeForManufacturer(988)
```

::: warning :bulb: Examples 3-4:

```typescript
=> Promise<string>
```

- Does _NOT_ fetch data from VPIC API internally
- See: [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)

:::

### Example 3: Get Makes for Manufacturer Name with doFetch = false

```ts
import { GetMakeForManufacturer } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetMakeForManufacturer('honda', false)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/honda?format=json'
```

### Example 4: Get Makes for Manufacturer ID with doFetch = false

```ts
import { GetMakeForManufacturer } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetMakeForManufacturer(988, false)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/988?format=json'
```
