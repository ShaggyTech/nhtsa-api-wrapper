# GetVehicleTypesForMake

---

```typescript
async function GetVehicleTypesForMake(
  makeName: string,
  doFetch?: boolean
): Promise<NhtsaResponse<GetVehicleTypesForMakeResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../../typedoc/modules/api_endpoints_GetVehicleTypesForMake)
:::

## Description

`GetVehicleTypesForMake` returns all the Vehicle Types in the vPIC dataset for a specified Make,
whose name is LIKE the make name in the vPIC Dataset.

`makeName` can be a partial name, or a full name for more specificity, e.g., "Merc",
"Mercedes Benz", etc.

## Parameters

| Name       | Type      | Default value | Description                                                        |
| :--------- | :-------- | :------------ | :----------------------------------------------------------------- |
| `makeName` | `string`  | `undefined`   | Name of the vehicle make to search                                 |
| `doFetch?` | `boolean` | `true`        | Whether to fetch the data or just return the URL (default: `true`) |

::: warning 📝 NOTE

Set `doFetch` to `false` if you want to fetch the data yourself.

- See [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[GetVehicleTypesForMakeResults](#type-getvehicletypesformakeresults) objects in the
`Results` key.

```typescript
=> Promise<NhtsaResponse<GetVehicleTypesForMakeResults>>
```

```typescript
type NhtsaApiResponse<GetVehicleTypesForMakeResults> = {
  Count: number
  Message: string
  Results: Array<GetVehicleTypesForMakeResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/get-vehicle-types-for-make.ts#example-response
:::

### If `doFetch` is set to `false`

Returns a URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - GetVehicleTypesForMakeResults

<<< @/snippets/endpoints/get-vehicle-types-for-make.ts#type-results

Ƭ **GetVehicleTypesForMakeResults**: `Object`

Objects returned in the `Results` array of `GetVehicleTypesForMake` endpoint response.

## Examples

::: tip Example 1:

- Fetches data from VPIC API

- Returns:

```typescript
=> Promise<NhtsaResponse<GetVehicleTypesForMakeResults>>
```

:::

### Example 1: Get Vehicle Types for Make

```ts
import { GetVehicleTypesForMake } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetVehicleTypesForMake('merc')
```

::: tip Example 2:

- Does _NOT_ fetch data from VPIC API

- See: [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)

- Returns:

```typescript
=> Promise<string>
```

:::

### Example 2: Get Vehicle Types for Make and doFetch = false

```ts
import { GetVehicleTypesForMake } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetVehicleTypesForMake('merc', false)

// url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json'
```
