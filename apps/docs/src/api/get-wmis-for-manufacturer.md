# GetWMIsForManufacturer

[[toc]]

---

```typescript
async function GetWMIsForManufacturer(
  params: AtLeastOne<{
    manufacturer?: string | number
    vehicleType?: string | number
  }>,
  doFetch?: boolean
): Promise<NhtsaResponse<GetWMIsForManufacturerResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../typedoc/modules/api_endpoints_GetWMIsForManufacturer.md)
:::

## Description

`GetWMIsForManufacturer` provides information on the World Manufacturer Identifier (WMI) for a
specified `manufacturer`. Only WMIs registered in vPICList are displayed. Multiple results are
returned in case of multiple matches.

Both `manufacturer` and `vehicleType` are optional but at least one must be provided.

`manufacturer` can be a partial name, or a full name for more specificity, or WMI ID number,
e.g., "Merc", "Mercedes Benz", 987, etc.

- If `manufacturer` is a number - method will do exact match on Manufacturer's Id
- If `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided
  name (it accepts a partial Manufacturer name as an input)

`vehicleType` can be a string or number, e.g., "car", 1, etc.

- If `vehicleType` is a number - method will do exact match on VehicleType's Id
- If `vehicleType` is a string - it will look for VehicleType whose name is LIKE the provided
  name (it accepts a partial VehicleType name as an input).

_NOTE_: For this endpoint, `manufacturer` is actually part of the path string, not a query param. We
include `manufacturer` in params as it's easier to type the function args using the 'AtLeastOne'
type if they are placed in the same object (params). This can cause confusion as it's not
consistent with other endpoint methods where path string is the first arg, and the query params
are the second arg.

## Parameters

| Name                   | Type               | Default Value | Description                                                                     |
| ---------------------- | ------------------ | ------------- | ------------------------------------------------------------------------------- |
| `params`               | `Object`           | `undefined`   | Object of query search names and values to append to the URL as a query string. |
| `params.manufacturer?` | `string \| number` | `undefined`   | Manufacturer Name or ID, or WMI ID (required if !vehicleType)                   |
| `params.vehicleType?`  | `string \| number` | `undefined`   | Optional Vehicle Type search parameter (required if !manufacturer)              |
| `doFetch`              | `boolean`          | `true`        | Whether to fetch the data or just return the URL (default: `true`)              |

::: warning 📝 NOTE

Any `params` that are not listed in the table above will be ignored.

Set `doFetch` to `false` if you want to fetch the data yourself.

- See [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[GetWMIsForManufacturerResults](#type-getwmisformanufacturerresults) objects in the
`Results` key.

```typescript
=> Promise<NhtsaResponse<GetWMIsForManufacturerResults>>
```

```typescript
type NhtsaApiResponse<GetWMIsForManufacturerResults> = {
  Count: number
  Message: string
  Results: Array<GetWMIsForManufacturerResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/get-wmis-for-manufacturer.ts#example-response
:::

### If `doFetch` is set to `false`

Returns a URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleVariableValuesList/battery%20type?format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - GetWMIsForManufacturerResults

<<< @/snippets/endpoints/get-wmis-for-manufacturer.ts#type-results

Ƭ **GetWMIsForManufacturerResults**: `Object`

Objects returned in the `Results` array of `GetWMIsForManufacturer` endpoint response.

## Examples

::: tip :bulb: Examples 1-3:

```typescript
=> Promise<NhtsaResponse<GetWMIsForManufacturerResults>>
```

- Fetches data from VPIC API internally

:::

### Example 1: Get WMIs for Manufacturer

```ts
import { GetWMIsForManufacturer } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetWMIsForManufacturer({ manufacturer: 'Mercedes Benz' })
```

### Example 2: Get WMIs for Vehicle Type

```ts
import { GetWMIsForManufacturer } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetWMIsForManufacturer({ vehicleType: 'car' })
```

### Example 3: Get WMIs for Manufacturer and Vehicle Type

```ts
import { GetWMIsForManufacturer } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetWMIsForManufacturer({
  manufacturer: 'honda',
  vehicleType: 'car'
})
```

::: warning :bulb: Examples 4-6:

```typescript
=> Promise<string>
```

- Does _NOT_ fetch data from VPIC API internally
- See: [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)

:::

### Example 4: Get WMIs for Manufacturer and doFetch = false

```ts
import { GetWMIsForManufacturer } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetWMIsForManufacturer({ manufacturer: 'honda' }, false)

// url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetWMIsForManufacturer/honda?format=json'
```

### Example 5: Get WMIs for Vehicle Type and doFetch = false

```ts
import { GetWMIsForManufacturer } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetWMIsForManufacturer({ vehicleType: 'car' }, false)

// url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetWMIsForManufacturer?vehicleType=car&format=json'
```

### Example 6: Get WMIs for Manufacturer and Vehicle Type and doFetch = false

```ts
import { GetWMIsForManufacturer } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetWMIsForManufacturer(
  { manufacturer: 'honda', vehicleType: 'car' },
  false
)

// url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetWMIsForManufacturer/honda?vehicleType=car&format=json'
```
