# GetVehicleVariableValuesList

---

```typescript
async function GetVehicleVariableValuesList(
  variableValue: number | string,
  doFetch?: boolean
): Promise<NhtsaResponse<GetVehicleVariableValuesListResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../../../typedoc/api/endpoints/GetVehicleVariableValuesList)
:::

## Description

`GetVehicleVariableValuesList` provides a list of all the accepted values for a given variable
that are stored in the vPIC dataset.

If `variableValue` is a string, it must use full name, not just part of it, e.g.,
"Battery Type", not "Battery"

`variableValue` can be also be a number, which is the ID of the variable, e.g., 1, 2, 3, etc.

## Parameters

| Name            | Type                 | Default value | Description                                                        |
| :-------------- | :------------------- | :------------ | :----------------------------------------------------------------- |
| `variableValue` | `string` \| `number` | `undefined`   | The variable you want to get a values list of                      |
| `doFetch?`      | `boolean`            | `true`        | Whether to fetch the data or just return the URL (default: `true`) |

::: warning 📝 NOTE

Set `doFetch` to `false` if you want to fetch the data yourself.

- See [BYOF - Bring Your Own Fetch](../../bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[GetVehicleVariableValuesListResults](#type-getvehiclevariablevalueslistresults) objects in the
`Results` key.

```typescript
=> Promise<NhtsaResponse<GetVehicleVariableValuesListResults>>
```

```typescript
type NhtsaResponse<GetVehicleVariableValuesListResults> = {
  Count: number
  Message: string
  Results: Array<GetVehicleVariableValuesListResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/get-vehicle-variable-values-list.ts#example-response
:::

### If `doFetch` is set to `false`

Returns a URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleVariableValuesList/battery%20type?format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../../bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - GetVehicleVariableValuesListResults

<<< @/snippets/endpoints/get-vehicle-variable-values-list.ts#type-results

Ƭ **GetVehicleVariableValuesListResults**: `Object`

Objects returned in the `Results` array of `GetVehicleVariableValuesList` endpoint response.

## Examples

::: tip Examples 1-2:

- Fetches data from VPIC API

- Returns:

```typescript
=> Promise<NhtsaResponse<GetVehicleVariableValuesListResults>>
```

:::

### Example 1: Get Vehicle Variable Values List by Name

```ts
import { GetVehicleVariableValuesList } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetVehicleVariableValuesList('battery type')
```

### Example 2: Get Vehicle Variable Values List by Variable ID

```ts
import { GetVehicleVariableValuesList } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetVehicleVariableValuesList(1)
```

::: tip Examples 3-4:

- Does _NOT_ fetch data from VPIC API

- See: [BYOF - Bring Your Own Fetch](../../bring-your-own-fetch.md#option-1-set-dofetch-to-false)

- Returns:

```typescript
=> Promise<string>
```

:::

### Example 3: Get Vehicle Variable Values List by Name and doFetch = false

```ts
import { GetVehicleVariableValuesList } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetVehicleVariableValuesList('battery type', false)

// url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleVariableValuesList/battery%20type?format=json'
```

### Example 4: Get Vehicle Variable Values List by Variable ID and doFetch = false

```ts
import { GetVehicleVariableValuesList } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetVehicleVariableValuesList(1, false)

// url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleVariableValuesList/1?format=json'
```
