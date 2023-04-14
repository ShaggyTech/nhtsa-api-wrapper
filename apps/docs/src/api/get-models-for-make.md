# GetModelsForMake

[[toc]]

---

```typescript
async function GetModelsForMake(
  makeName: string,
  doFetch?: boolean
): Promise<NhtsaResponse<GetModelsForMakeResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../typedoc/modules/api_endpoints_GetModelsForMake.md)
:::

## Description

`GetModelsForMake` returns the Models in the vPIC dataset for a specified `makeName`
whose Name is LIKE the Make in vPIC Dataset.

`makeName` can be a partial, or a full for more specificity, e.g., "Harley",
"Harley Davidson", etc.

## Parameters

| Name       | Type      | Default value | Description                                                        |
| :--------- | :-------- | :------------ | :----------------------------------------------------------------- |
| `makeName` | `string`  | `undefined`   | Vehicle make name                                                  |
| `doFetch?` | `boolean` | `true`        | Whether to fetch the data or just return the URL (default: `true`) |

::: warning 📝 NOTE

Set `doFetch` to `false` if you want to fetch the data yourself.

- See [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[GetManufacturerDetailsResults](#type-getmodelsformakeresults) objects in the
`Results` key.

```typescript
=> Promise<NhtsaResponse<GetModelsForMakeResults>>
```

```typescript
type NhtsaApiResponse<GetModelsForMakeResults> = {
  Count: number
  Message: string
  Results: Array<GetModelsForMakeResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/get-models-for-make.ts#example-response
:::

### If `doFetch` is set to `false`

Returns a URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/audi?format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - GetModelsForMakeResults

<<< @/snippets/endpoints/get-models-for-make.ts#type-results

Ƭ **GetModelsForMakeResults**: `Object`

Objects returned in the `Results` array of `GetModelsForMake` endpoint response.

## Examples

::: tip :bulb: Example 1:

```typescript
=> Promise<NhtsaResponse<GetModelsForMakeResults>>
```

- Fetches data from VPIC API internally

:::

### Example 1: Get Models for Make

```ts
import { GetModelsForMake } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetModelsForMake('audi')
```

::: warning :bulb: Example 2:

```typescript
=> Promise<string>
```

- Does _NOT_ fetch data from VPIC API internally
- See: [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)

:::

### Example 2: Get Models for Make and doFetch = false

```ts
import { GetModelsForMake } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetModelsForMake('audi', false)

// url: 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/audi?format=json'
```
