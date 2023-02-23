[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / api/endpoints/GetEquipmentPlantCodes

# Module: api/endpoints/GetEquipmentPlantCodes

## Table of contents

### Functions

- [GetEquipmentPlantCodes](api_endpoints_GetEquipmentPlantCodes.md#getequipmentplantcodes)

### Type Aliases

- [GetEquipmentPlantCodesParams](api_endpoints_GetEquipmentPlantCodes.md#getequipmentplantcodesparams)
- [GetEquipmentPlantCodesResults](api_endpoints_GetEquipmentPlantCodes.md#getequipmentplantcodesresults)

## Functions

### GetEquipmentPlantCodes

▸ **GetEquipmentPlantCodes**(`params`, `doFetch?`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetEquipmentPlantCodesResults`](api_endpoints_GetEquipmentPlantCodes.md#getequipmentplantcodesresults)\>\>

::: tip :bulb: More Information
See: [GetEquipmentPlantCodes Documentation](/api/get-equipment-plant-codes)
:::

`GetEquipmentPlantCodes` returns assigned Equipment Plant Codes. Can be filtered by Year,
Equipment Type and Report Type.

ALL parameters are required and endpoint will return 404 if there are any undefined keys and/or
values in the query string.

`params.year`:
- year >= 2016
- NOTE: It seems API will still respond with years < 2016 but api docs state only years >= 2016
  are supported

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetEquipmentPlantCodesParams`](api_endpoints_GetEquipmentPlantCodes.md#getequipmentplantcodesparams) | Object of Query Search names and values to append to the URL as a query string |
| `doFetch?` | ``true`` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetEquipmentPlantCodesResults`](api_endpoints_GetEquipmentPlantCodes.md#getequipmentplantcodesresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetEquipmentPlantCodes.ts:47](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/881ab5c/packages/lib/src/api/endpoints/GetEquipmentPlantCodes.ts#L47)

▸ **GetEquipmentPlantCodes**(`params`, `doFetch`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetEquipmentPlantCodesParams`](api_endpoints_GetEquipmentPlantCodes.md#getequipmentplantcodesparams) |
| `doFetch` | ``false`` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/GetEquipmentPlantCodes.ts:52](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/881ab5c/packages/lib/src/api/endpoints/GetEquipmentPlantCodes.ts#L52)

## Type Aliases

### GetEquipmentPlantCodesParams

Ƭ **GetEquipmentPlantCodesParams**: `Object`

Query String Parameters for this endpoint

#### Type declaration

| Name | Type |
| :------ | :------ |
| `equipmentType` | ``"1"`` \| ``"3"`` \| ``"13"`` \| ``"16"`` \| ``1`` \| ``3`` \| ``13`` \| ``16`` |
| `reportType` | ``"New"`` \| ``"Updated"`` \| ``"Closed"`` \| ``"All"`` \| ``"new"`` \| ``"updated"`` \| ``"closed"`` \| ``"all"`` |
| `year` | `string` \| `number` |

#### Defined in

[api/endpoints/GetEquipmentPlantCodes.ts:105](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/881ab5c/packages/lib/src/api/endpoints/GetEquipmentPlantCodes.ts#L105)

___

### GetEquipmentPlantCodesResults

Ƭ **GetEquipmentPlantCodesResults**: `Object`

Objects found in the `Results` array of `GetEquipmentPlantCodes` endpoint response.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Address` | `string` \| ``null`` |
| `City` | `string` \| ``null`` |
| `Country` | `string` |
| `DOTCode` | `string` |
| `Name` | `string` |
| `OldDotCode` | `string` |
| `PostalCode` | `string` \| ``null`` |
| `StateProvince` | `string` \| ``null`` |
| `Status` | `string` \| ``null`` |

#### Defined in

[api/endpoints/GetEquipmentPlantCodes.ts:122](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/881ab5c/packages/lib/src/api/endpoints/GetEquipmentPlantCodes.ts#L122)
