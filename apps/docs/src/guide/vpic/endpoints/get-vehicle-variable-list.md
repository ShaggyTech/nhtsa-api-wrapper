# GetVehicleVariableList

---

```typescript
async function GetVehicleVariableList(
  doFetch?: boolean
): Promise<NhtsaResponse<GetVehicleVariableListResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../../../typedoc/api/endpoints/GetVehicleVariableList)
:::

## Description

`GetVehicleVariableList` provides a list of all the Vehicle related variables that are in the
vPIC dataset. Information on the name, description and the type of the variable is provided.

## Parameters

| Name       | Type      | Default value | Description                                                        |
| :--------- | :-------- | :------------ | :----------------------------------------------------------------- |
| `doFetch?` | `boolean` | `true`        | Whether to fetch the data or just return the URL (default: `true`) |

::: warning 📝 NOTE

Set `doFetch` to `false` if you want to fetch the data yourself.

- See [BYOF - Bring Your Own Fetch](../../bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[GetVehicleVariableListResults](#type-getvehiclevariablelistresults) objects in the
`Results` key.

```typescript
=> Promise<NhtsaResponse<GetVehicleVariableListResults>>
```

```typescript
type NhtsaResponse<GetVehicleVariableListResults> = {
  Count: number
  Message: string
  Results: Array<GetVehicleVariableListResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/get-vehicle-variable-list.ts#example-response
:::

### If `doFetch` is set to `false`

Returns a URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../../bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - GetVehicleVariableListResults

<<< @/snippets/endpoints/get-vehicle-variable-list.ts#type-results

Ƭ **GetVehicleVariableListResults**: `Object`

Objects returned in the `Results` array of `GetVehicleVariableList` endpoint response.

## Examples

::: tip Example 1:

- Fetches data from VPIC API

- Returns:

```typescript
=> Promise<NhtsaResponse<GetVehicleVariableListResults>>
```

:::

### Example 1: Get Vehicle Variable List

```ts
import { GetVehicleVariableList } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetVehicleVariableList()
```

::: tip Example 2:

- Does _NOT_ fetch data from VPIC API

- See: [BYOF - Bring Your Own Fetch](../../bring-your-own-fetch.md#option-1-set-dofetch-to-false)

- Returns:

```typescript
=> Promise<string>
```

:::

### Example 2: Get Vehicle Variable List and doFetch = false

```ts
import { GetVehicleVariableList } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetVehicleVariableList(false)

// url: 'https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json'
```
