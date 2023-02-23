[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / api/endpoints/GetVehicleTypesForMake

# Module: api/endpoints/GetVehicleTypesForMake

## Table of contents

### Functions

- [GetVehicleTypesForMake](api_endpoints_GetVehicleTypesForMake.md#getvehicletypesformake)

### Type Aliases

- [GetVehicleTypesForMakeResults](api_endpoints_GetVehicleTypesForMake.md#getvehicletypesformakeresults)

## Functions

### GetVehicleTypesForMake

▸ **GetVehicleTypesForMake**(`makeName`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetVehicleTypesForMakeResults`](api_endpoints_GetVehicleTypesForMake.md#getvehicletypesformakeresults)\>\>

`GetVehicleTypesForMake` returns all the Vehicle Types in the vPIC dataset for a specified Make,
whose name is LIKE the make name in the vPIC Dataset.

`makeName` can be a partial name, or a full name for more specificity, e.g., "Merc",
"Mercedes Benz", etc.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `makeName` | `string` | `undefined` | Name of the vehicle make to search |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetVehicleTypesForMakeResults`](api_endpoints_GetVehicleTypesForMake.md#getvehicletypesformakeresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetVehicleTypesForMake.ts:23](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/881ab5c/packages/lib/src/api/endpoints/GetVehicleTypesForMake.ts#L23)

## Type Aliases

### GetVehicleTypesForMakeResults

Ƭ **GetVehicleTypesForMakeResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetVehicleTypesForMake endpoint

**`Alias`**

GetVehicleTypesForMakeResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MakeId` | `number` |
| `MakeName` | `string` |
| `VehicleTypeId` | `number` |
| `VehicleTypeName` | `string` |

#### Defined in

[api/endpoints/GetVehicleTypesForMake.ts:59](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/881ab5c/packages/lib/src/api/endpoints/GetVehicleTypesForMake.ts#L59)
