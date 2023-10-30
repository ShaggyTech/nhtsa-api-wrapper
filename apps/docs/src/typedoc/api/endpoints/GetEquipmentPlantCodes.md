**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../../modules.md) / api/endpoints/GetEquipmentPlantCodes

# api/endpoints/GetEquipmentPlantCodes

## Contents

- [Type Aliases](GetEquipmentPlantCodes.md#type-aliases)
  - [GetEquipmentPlantCodesParams](GetEquipmentPlantCodes.md#getequipmentplantcodesparams)
  - [GetEquipmentPlantCodesResults](GetEquipmentPlantCodes.md#getequipmentplantcodesresults)
- [Functions](GetEquipmentPlantCodes.md#functions)
  - [GetEquipmentPlantCodes()](GetEquipmentPlantCodes.md#getequipmentplantcodes)

## Type Aliases

### GetEquipmentPlantCodesParams

> **GetEquipmentPlantCodesParams**: `object`

Query String Parameters for this endpoint

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `equipmentType` | `"1"` \| `"3"` \| `"13"` \| `"16"` \| `1` \| `3` \| `13` \| `16` | - |
| `reportType` | `"New"` \| `"Updated"` \| `"Closed"` \| `"All"` \| `"new"` \| `"updated"` \| `"closed"` \| `"all"` | - |
| `year` | `string` \| `number` | - |

#### Source

[api/endpoints/GetEquipmentPlantCodes.ts:105](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetEquipmentPlantCodes.ts#L105)

***

### GetEquipmentPlantCodesResults

> **GetEquipmentPlantCodesResults**: `object`

Objects found in the `Results` array of `GetEquipmentPlantCodes` endpoint response.

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `Address` | `string` \| `null` | - |
| `City` | `string` \| `null` | - |
| `Country` | `string` | - |
| `DOTCode` | `string` | - |
| `Name` | `string` | - |
| `OldDotCode` | `string` | - |
| `PostalCode` | `string` \| `null` | - |
| `StateProvince` | `string` \| `null` | - |
| `Status` | `string` \| `null` | - |

#### Source

[api/endpoints/GetEquipmentPlantCodes.ts:122](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetEquipmentPlantCodes.ts#L122)

## Functions

### GetEquipmentPlantCodes()

#### GetEquipmentPlantCodes(params, doFetch)

> **GetEquipmentPlantCodes**(`params`, `doFetch`?): `Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetEquipmentPlantCodesResults`](GetEquipmentPlantCodes.md#getequipmentplantcodesresults)\>\>

::: tip :bulb: More Information
See: [GetEquipmentPlantCodes Documentation](/api/endpoints/get-equipment-plant-codes)
:::

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
- NOTE: It seems API will still respond with years `< 2016 but api docs state only years >` = 2016
  are supported

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetEquipmentPlantCodesParams`](GetEquipmentPlantCodes.md#getequipmentplantcodesparams) | Object of Query Search names and values to append to the URL as a query string |
| `doFetch`? | `true` | Whether to fetch the data or just return the URL<br />(default: `true`) |

##### Returns

`Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetEquipmentPlantCodesResults`](GetEquipmentPlantCodes.md#getequipmentplantcodesresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

##### Source

[api/endpoints/GetEquipmentPlantCodes.ts:47](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetEquipmentPlantCodes.ts#L47)

#### GetEquipmentPlantCodes(params, doFetch)

> **GetEquipmentPlantCodes**(`params`, `doFetch`): `Promise`\<`string`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`GetEquipmentPlantCodesParams`](GetEquipmentPlantCodes.md#getequipmentplantcodesparams) |
| `doFetch` | `false` |

##### Returns

`Promise`\<`string`\>

##### Source

[api/endpoints/GetEquipmentPlantCodes.ts:52](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetEquipmentPlantCodes.ts#L52)
