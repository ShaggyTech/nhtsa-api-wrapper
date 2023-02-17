# Module: api/endpoints/GetMakesForVehicleType

## Table of contents

### Functions

- [GetMakesForVehicleType](api_endpoints_GetMakesForVehicleType.md#getmakesforvehicletype)

### Type Aliases

- [GetMakesForVehicleTypeResults](api_endpoints_GetMakesForVehicleType.md#getmakesforvehicletyperesults)

## Functions

### GetMakesForVehicleType

▸ **GetMakesForVehicleType**(`typeName`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetMakesForVehicleTypeResults`](api_endpoints_GetMakesForVehicleType.md#getmakesforvehicletyperesults)\>\>

`GetMakesForVehicleType` returns all the Makes in the vPIC dataset for a specified vehicle type
(`typeName`), whose name is LIKE the vehicle type name in vPIC Dataset.

`typeName` can be a partial name, or a full name for more specificity, e.g., "Vehicle", "Moto",
"Low Speed Vehicle", etc.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `typeName` | `string` | `undefined` | A partial or full vehicle type name |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetMakesForVehicleTypeResults`](api_endpoints_GetMakesForVehicleType.md#getmakesforvehicletyperesults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetMakesForVehicleType.ts:23](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/a64bd4e/packages/lib/src/api/endpoints/GetMakesForVehicleType.ts#L23)

## Type Aliases

### GetMakesForVehicleTypeResults

Ƭ **GetMakesForVehicleTypeResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetMakesForVehicleType endpoint

**`Alias`**

GetMakesForVehicleTypeResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MakeId` | `number` |
| `MakeName` | `string` |
| `VehicleTypeId` | `number` |
| `VehicleTypeName` | `string` |

#### Defined in

[api/endpoints/GetMakesForVehicleType.ts:59](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/a64bd4e/packages/lib/src/api/endpoints/GetMakesForVehicleType.ts#L59)
