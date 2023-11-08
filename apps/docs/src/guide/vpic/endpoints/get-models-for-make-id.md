# GetModelsForMakeId

---

```typescript
async function GetModelsForMakeId(
  makeId: string | number,
  doFetch?: boolean
): Promise<NhtsaResponse<GetModelsForMakeIdResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../../../typedoc/api/endpoints/GetModelsForMakeId)
:::

## Description

`GetModelsForMakeId` returns the Models in the vPIC dataset for a specified Make whose ID is
equal to the `makeID` in the vPIC Dataset.

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

## Parameters

| Name       | Type                 | Default value | Description                                                        |
| :--------- | :------------------- | :------------ | :----------------------------------------------------------------- |
| `makeId`   | `string` \| `number` | `undefined`   | Make ID to search                                                  |
| `doFetch?` | `boolean`            | `true`        | Whether to fetch the data or just return the URL (default: `true`) |

::: warning 📝 NOTE

Set `doFetch` to `false` if you want to fetch the data yourself.

- See [BYOF - Bring Your Own Fetch](../../bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[GetModelsForMakeIdResults](#type-getmodelsformakeidresults) objects in the
`Results` key.

```typescript
=> Promise<NhtsaResponse<GetModelsForMakeIdResults>>
```

```typescript
type NhtsaResponse<GetModelsForMakeIdResults> = {
  Count: number
  Message: string
  Results: Array<GetModelsForMakeIdResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/get-models-for-make-id.ts#example-response
:::

### If `doFetch` is set to `false`

Returns a URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/582?format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../../bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - GetModelsForMakeIdResults

<<< @/snippets/endpoints/get-models-for-make-id.ts#type-results

Ƭ **GetModelsForMakeIdResults**: `Object`

Objects returned in the `Results` array of `GetModelsForMakeId` endpoint response.

## Examples

::: tip Example 1:

- Fetches data from VPIC API

- Returns:

```typescript
=> Promise<NhtsaResponse<GetModelsForMakeIdResults>>
```

:::

### Example 1: Get Models for Make ID

```ts
import { GetModelsForMakeId } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetModelsForMakeId(582)
```

::: tip Example 2:

- Does _NOT_ fetch data from VPIC API

- See: [BYOF - Bring Your Own Fetch](../../bring-your-own-fetch.md#option-1-set-dofetch-to-false)

- Returns:

```typescript
=> Promise<string>
```

:::

### Example 2: Get Models for Make ID and doFetch = false

```ts
import { GetModelsForMakeId } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetModelsForMakeId(582, false)

// url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/582?format=json'
```
