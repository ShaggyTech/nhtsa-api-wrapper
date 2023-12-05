**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../../../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../../../modules.md) / api/vpic/endpoints/GetVehicleTypesForMake

# api/vpic/endpoints/GetVehicleTypesForMake

## Contents

- [Type Aliases](GetVehicleTypesForMake.md#type-aliases)
  - [GetVehicleTypesForMakeResults](GetVehicleTypesForMake.md#getvehicletypesformakeresults)
- [Functions](GetVehicleTypesForMake.md#functions)
  - [GetVehicleTypesForMake()](GetVehicleTypesForMake.md#getvehicletypesformake)

## Type Aliases

### GetVehicleTypesForMakeResults

> **GetVehicleTypesForMakeResults**: `object`

Objects found in the `Results` array of `GetVehicleTypesForMake` endpoint response.

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `MakeId` | `number` | - |
| `MakeName` | `string` | - |
| `VehicleTypeId` | `number` | - |
| `VehicleTypeName` | `string` | - |

#### Source

[api/vpic/endpoints/GetVehicleTypesForMake.ts:73](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/vpic/endpoints/GetVehicleTypesForMake.ts#L73)

## Functions

### GetVehicleTypesForMake()

#### GetVehicleTypesForMake(makeName, doFetch)

> **GetVehicleTypesForMake**(`makeName`, `doFetch`?): `Promise`\<[`NhtsaResponse`](../../types.md#nhtsaresponseresultstype-apitype)\<[`GetVehicleTypesForMakeResults`](GetVehicleTypesForMake.md#getvehicletypesformakeresults)\>\>

::: tip :bulb: More Information
See: [GetVehicleTypesForMake Documentation](/guide/vpic/endpoints/get-vehicle-types-for-make)
:::

`GetVehicleTypesForMake` returns all the Vehicle Types in the vPIC dataset for a specified Make,
whose name is LIKE the make name in the vPIC Dataset.

`makeName` can be a partial name, or a full name for more specificity, e.g., "Merc",
"Mercedes Benz", etc.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `makeName` | `string` | Name of the vehicle make to search |
| `doFetch`? | `true` | Whether to fetch the data or just return the URL<br />(default: `true`) |

##### Returns

`Promise`\<[`NhtsaResponse`](../../types.md#nhtsaresponseresultstype-apitype)\<[`GetVehicleTypesForMakeResults`](GetVehicleTypesForMake.md#getvehicletypesformakeresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

##### Source

[api/vpic/endpoints/GetVehicleTypesForMake.ts:27](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/vpic/endpoints/GetVehicleTypesForMake.ts#L27)

#### GetVehicleTypesForMake(makeName, doFetch)

> **GetVehicleTypesForMake**(`makeName`, `doFetch`): `Promise`\<`string`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `makeName` | `string` |
| `doFetch` | `false` |

##### Returns

`Promise`\<`string`\>

##### Source

[api/vpic/endpoints/GetVehicleTypesForMake.ts:32](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/vpic/endpoints/GetVehicleTypesForMake.ts#L32)
