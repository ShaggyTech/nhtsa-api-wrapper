[@shaggytools/nhtsa-api-wrapper](../README.md) / [Exports](../modules.md) / api/endpoints/GetModelsForMakeId

# Module: api/endpoints/GetModelsForMakeId

## Table of contents

### Type Aliases

- [GetModelsForMakeIdResults](api_endpoints_GetModelsForMakeId.md#getmodelsformakeidresults)

### Functions

- [GetModelsForMakeId](api_endpoints_GetModelsForMakeId.md#getmodelsformakeid)

## Type Aliases

### GetModelsForMakeIdResults

Ƭ **GetModelsForMakeIdResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetModelsForMakeId endpoint

**`Alias`**

GetModelsForMakeIdResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Make_ID` | `number` |
| `Make_Name` | `string` |
| `Model_ID` | `number` |
| `Model_Name` | `string` |

#### Defined in

[api/endpoints/GetModelsForMakeId.ts:68](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/e851323/packages/lib/src/api/endpoints/GetModelsForMakeId.ts#L68)

## Functions

### GetModelsForMakeId

▸ **GetModelsForMakeId**(`makeId`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetModelsForMakeIdResults`](api_endpoints_GetModelsForMakeId.md#getmodelsformakeidresults)\>\>

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

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `makeId` | `string` \| `number` | `undefined` | Make ID to search |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetModelsForMakeIdResults`](api_endpoints_GetModelsForMakeId.md#getmodelsformakeidresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetModelsForMakeId.ts:32](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/e851323/packages/lib/src/api/endpoints/GetModelsForMakeId.ts#L32)
