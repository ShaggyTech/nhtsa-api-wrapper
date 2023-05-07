# GetMakesForVehicleType

---

```typescript
async function GetMakesForVehicleType(
  typeName: string,
  doFetch?: boolean
): Promise<NhtsaResponse<GetMakesForVehicleTypeResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../../typedoc/modules/api_endpoints_GetMakesForVehicleType)
:::

## Description

`GetMakesForVehicleType` returns all the Makes in the vPIC dataset for a specified vehicle type
(`typeName`), whose name is LIKE the vehicle type name in vPIC Dataset.

`typeName` can be a partial name, or a full name for more specificity, e.g., "Vehicle", "Moto",
"Low Speed Vehicle", etc.

## Parameters

| Name       | Type      | Default value | Description                                                        |
| :--------- | :-------- | :------------ | :----------------------------------------------------------------- |
| `typeName` | `string`  | `undefined`   | A partial or full vehicle type name                                |
| `doFetch?` | `boolean` | `true`        | Whether to fetch the data or just return the URL (default: `true`) |

::: warning 📝 NOTE

Set `doFetch` to `false` if you want to fetch the data yourself.

- See [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[GetMakesForVehicleTypeResults](#type-getmakesforvehicletyperesults) objects in the
`Results` key.

```typescript
=> Promise<NhtsaResponse<GetMakesForVehicleTypeResults>>
```

```typescript
type NhtsaApiResponse<GetMakesForVehicleTypeResults> = {
  Count: number
  Message: string
  Results: Array<GetMakesForVehicleTypeResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/get-makes-for-vehicle-type.ts#example-response
:::

### If `doFetch` is set to `false`

Returns a URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/truck?format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - GetMakesForVehicleTypeResults

<<< @/snippets/endpoints/get-makes-for-vehicle-type.ts#type-results

Ƭ **GetMakesForVehicleTypeResults**: `Object`

Objects returned in the `Results` array of `GetMakesForVehicleTypeResults` endpoint response.

## Examples

::: tip Example 1:

- Fetches data from VPIC API

- Returns:

```typescript
=> Promise<NhtsaResponse<GetMakesForVehicleTypeResults>>
```

:::

### Example 1: Get Makes for Vehicle Type

```ts
import { GetMakesForVehicleType } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetMakesForVehicleType('truck')
```

::: tip Example 2:

- Does _NOT_ fetch data from VPIC API

- See: [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)

- Returns:

```typescript
=> Promise<string>
```

:::

### Example 2: Get Makes for Vehicle Type with doFetch = false

```ts
import { GetMakesForVehicleType } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetMakesForVehicleType('truck', false)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/truck?format=json'
```
