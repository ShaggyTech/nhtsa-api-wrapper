# GetEquipmentPlantCodes

---

```typescript
async function GetEquipmentPlantCodes(
  params: GetEquipmentPlantCodesParams,
  doFetch?: boolean
): Promise<NhtsaResponse<GetEquipmentPlantCodesResults> | string>
```

Shown with expanded `params` types:

```typescript
async function GetEquipmentPlantCodes(
  params: {
    equipmentType: '1' | '3' | '13' | '16' | 1 | 3 | 13 | 16
    reportType:
      | 'New'
      | 'Updated'
      | 'Closed'
      | 'All'
      | 'new'
      | 'updated'
      | 'closed'
      | 'all'
    year: string | number
  },
  doFetch = true
): Promise<NhtsaResponse<GetEquipmentPlantCodesResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../../../typedoc/api/vpic/endpoints/GetEquipmentPlantCodes)
:::

## Description

`GetEquipmentPlantCodes` returns assigned Equipment Plant Codes. Can be filtered by Year,
Equipment Type and Report Type.

ALL parameters are required and endpoint will return 404 if there are any undefined keys and/or
values in the query string.

`params.equipmentType`:

- 1 (Tires)
- 3 (Brake Hoses)
- 13 (Glazing)
- 16 (Retread)

`params.reportType`:

- 'New' (The Equipment Plant Code was assigned during the selected year)
- 'Updated' (The Equipment Plant data was modified during the selected year)
- 'Closed' (The Equipment Plant is no longer Active)
- 'All' (All Equipment Plant Codes regardless of year, including their status (active or closed))

`params.year`:

- year >= 2016
- NOTE: It seems API will still respond with years < 2016 but api docs state only years >= 2016
  are supported

## Parameters

| Name                   | Type                                                                                               | Default value | Description                                                                    |
| :--------------------- | :------------------------------------------------------------------------------------------------- | :------------ | :----------------------------------------------------------------------------- |
| `params`               | `Object`                                                                                           | `undefined`   | Object of Query Search names and values to append to the URL as a query string |
| `params.equipmentType` | `"1"` \| `"3"` \| `"13"` \| `"16"` \| `1` \| `3` \| `13` \| `16`                                   | `undefined`   | Number equal to 1, 3, 13, or 16                                                |
| `params.reportType`    | `"New"` \| `"Updated"` \| `"Closed"` \| `"All"` \| `"new"` \| `"updated"` \| `"closed"` \| `"all"` | `undefined`   | 'New', 'Updated', 'Closed', or 'All'                                           |
| `params.year`          | `string` \| `number`                                                                               | `undefined`   | Year >= 2016                                                                   |
| `doFetch?`             | `boolean`                                                                                          | `true`        | Whether to fetch the data or just return the URL (default: `true`)             |

::: warning 📝 NOTE

Any `params` that are not listed in the table above will be ignored.

Set `doFetch` to `false` if you want to fetch the data yourself.

- See [BYOF - Bring Your Own Fetch](../../bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[GetEquipmentPlantCodesResults](#type-getequipmentplantcodesresults) objects in
the `Results` key.

```typescript
=> Promise<NhtsaResponse<GetEquipmentPlantCodesResults>>
```

```typescript
type NhtsaResponse<GetEquipmentPlantCodesResults> = {
  Count: number
  Message: string
  Results: Array<GetEquipmentPlantCodesResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/get-equipment-plant-codes.ts#example-response
:::

### If `doFetch` is set to `false`

Returns a URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/GetEquipmentPlantCodes?year=2015&equipmentType=1&reportType=new&format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../../bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - GetEquipmentPlantCodesParams

<<< @/snippets/endpoints/get-equipment-plant-codes.ts#type-params

Ƭ **GetEquipmentPlantCodesParams**: `Object`

Query String Parameters for this endpoint

## Type - GetEquipmentPlantCodesResults

<<< @/snippets/endpoints/get-equipment-plant-codes.ts#type-results

Ƭ **GetEquipmentPlantCodesResults**: `Object`

Objects returned in the `Results` array of `GetEquipmentPlantCodes` endpoint
response.

## Examples

::: tip Example 1:

- Fetches data from VPIC API

- Returns:

```typescript
=> Promise<NhtsaResponse<GetEquipmentPlantCodesResults>>
```

:::

### Example 1: Get Equipment Plant Codes

```ts
import { GetEquipmentPlantCodes } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetEquipmentPlantCodes({
  year: 2015,
  equipmentType: 1,
  reportType: 'New',
})
```

::: tip Example 2:

- Does _NOT_ fetch data from VPIC API

- See: [BYOF - Bring Your Own Fetch](../../bring-your-own-fetch.md#option-1-set-dofetch-to-false)

- Returns:

```typescript
=> Promise<string>
```

:::

### Example 2: Get Equipment Plant Codes and doFetch = false

```ts
import { GetEquipmentPlantCodes } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetEquipmentPlantCodes(
  {
    year: 2015,
    equipmentType: 1,
    reportType: 'New',
  },
  false
)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetEquipmentPlantCodes?year=2015&equipmentType=1&reportType=New&format=json'
```
