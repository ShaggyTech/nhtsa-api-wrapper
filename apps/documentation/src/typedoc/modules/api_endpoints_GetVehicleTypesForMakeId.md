[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / api/endpoints/GetVehicleTypesForMakeId

# Module: api/endpoints/GetVehicleTypesForMakeId

## Table of contents

### Functions

- [GetVehicleTypesForMakeId](api_endpoints_GetVehicleTypesForMakeId.md#getvehicletypesformakeid)

### Type Aliases

- [GetVehicleTypesForMakeIdResults](api_endpoints_GetVehicleTypesForMakeId.md#getvehicletypesformakeidresults)

## Functions

### GetVehicleTypesForMakeId

▸ **GetVehicleTypesForMakeId**(`makeId`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetVehicleTypesForMakeIdResults`](api_endpoints_GetVehicleTypesForMakeId.md#getvehicletypesformakeidresults)\>\>

`GetVehicleTypesForMakeId` returns the Models in the vPIC dataset for a specified Make
whose ID is equal to the `makeID` in the vPIC Dataset.

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

`Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetVehicleTypesForMakeIdResults`](api_endpoints_GetVehicleTypesForMakeId.md#getvehicletypesformakeidresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetVehicleTypesForMakeId.ts:37](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/19d28b5/packages/lib/src/api/endpoints/GetVehicleTypesForMakeId.ts#L37)

## Type Aliases

### GetVehicleTypesForMakeIdResults

Ƭ **GetVehicleTypesForMakeIdResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetVehicleTypesForMakeId endpoint

**`Alias`**

GetVehicleTypesForMakeIdResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MakeId` | `number` |
| `MakeName` | `string` |
| `VehicleTypeId` | `number` |
| `VehicleTypeName` | `string` |

#### Defined in

[api/endpoints/GetVehicleTypesForMakeId.ts:73](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/19d28b5/packages/lib/src/api/endpoints/GetVehicleTypesForMakeId.ts#L73)
