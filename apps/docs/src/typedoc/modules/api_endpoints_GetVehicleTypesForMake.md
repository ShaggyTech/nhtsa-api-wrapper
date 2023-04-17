[@shaggytools/nhtsa-api-wrapper](../index.md) / [Exports](../modules.md) / api/endpoints/GetVehicleTypesForMake

# Module: api/endpoints/GetVehicleTypesForMake

## Table of contents

### Functions

- [GetVehicleTypesForMake](api_endpoints_GetVehicleTypesForMake.md#getvehicletypesformake)

### Type Aliases

- [GetVehicleTypesForMakeResults](api_endpoints_GetVehicleTypesForMake.md#getvehicletypesformakeresults)

## Functions

### GetVehicleTypesForMake

▸ **GetVehicleTypesForMake**(`makeName`, `doFetch?`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetVehicleTypesForMakeResults`](api_endpoints_GetVehicleTypesForMake.md#getvehicletypesformakeresults)\>\>

::: tip :bulb: More Information
See: [GetVehicleTypesForMake Documentation](/api/get-vehicle-types-for-make)
:::

`GetVehicleTypesForMake` returns all the Vehicle Types in the vPIC dataset for a specified Make,
whose name is LIKE the make name in the vPIC Dataset.

`makeName` can be a partial name, or a full name for more specificity, e.g., "Merc",
"Mercedes Benz", etc.

#### Parameters

| Name       | Type     | Description                                                        |
| :--------- | :------- | :----------------------------------------------------------------- |
| `makeName` | `string` | Name of the vehicle make to search                                 |
| `doFetch?` | `true`   | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetVehicleTypesForMakeResults`](api_endpoints_GetVehicleTypesForMake.md#getvehicletypesformakeresults)\>\>

- Api Response
  `object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetVehicleTypesForMake.ts:27](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetVehicleTypesForMake.ts#L27)

▸ **GetVehicleTypesForMake**(`makeName`, `doFetch`): `Promise`<`string`\>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `makeName` | `string` |
| `doFetch`  | `false`  |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/GetVehicleTypesForMake.ts:32](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetVehicleTypesForMake.ts#L32)

## Type Aliases

### GetVehicleTypesForMakeResults

Ƭ **GetVehicleTypesForMakeResults**: `Object`

Objects found in the `Results` array of `GetVehicleTypesForMake` endpoint response.

#### Type declaration

| Name              | Type     |
| :---------------- | :------- |
| `MakeId`          | `number` |
| `MakeName`        | `string` |
| `VehicleTypeId`   | `number` |
| `VehicleTypeName` | `string` |

#### Defined in

[api/endpoints/GetVehicleTypesForMake.ts:73](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetVehicleTypesForMake.ts#L73)
