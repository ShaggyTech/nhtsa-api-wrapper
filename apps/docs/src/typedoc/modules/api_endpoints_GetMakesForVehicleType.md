[@shaggytools/nhtsa-api-wrapper](../index.md) / [Exports](../modules.md) / api/endpoints/GetMakesForVehicleType

# Module: api/endpoints/GetMakesForVehicleType

## Table of contents

### Functions

- [GetMakesForVehicleType](api_endpoints_GetMakesForVehicleType.md#getmakesforvehicletype)

### Type Aliases

- [GetMakesForVehicleTypeResults](api_endpoints_GetMakesForVehicleType.md#getmakesforvehicletyperesults)

## Functions

### GetMakesForVehicleType

▸ **GetMakesForVehicleType**(`typeName`, `doFetch?`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetMakesForVehicleTypeResults`](api_endpoints_GetMakesForVehicleType.md#getmakesforvehicletyperesults)\>\>

::: tip :bulb: More Information
See: [GetMakesForVehicleType Documentation](/api/get-makes-for-vehicle-type)
:::

`GetMakesForVehicleType` returns all the Makes in the vPIC dataset for a specified vehicle type
(`typeName`), whose name is LIKE the vehicle type name in vPIC Dataset.

`typeName` can be a partial name, or a full name for more specificity, e.g., "Vehicle", "Moto",
"Low Speed Vehicle", etc.

#### Parameters

| Name       | Type     | Description                                                        |
| :--------- | :------- | :----------------------------------------------------------------- |
| `typeName` | `string` | A partial or full vehicle type name                                |
| `doFetch?` | `true`   | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetMakesForVehicleTypeResults`](api_endpoints_GetMakesForVehicleType.md#getmakesforvehicletyperesults)\>\>

- Api Response
  `object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetMakesForVehicleType.ts:27](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetMakesForVehicleType.ts#L27)

▸ **GetMakesForVehicleType**(`typeName`, `doFetch`): `Promise`<`string`\>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `typeName` | `string` |
| `doFetch`  | `false`  |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/GetMakesForVehicleType.ts:32](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetMakesForVehicleType.ts#L32)

## Type Aliases

### GetMakesForVehicleTypeResults

Ƭ **GetMakesForVehicleTypeResults**: `Object`

Objects found in the `Results` array of `GetMakesForVehicleType` endpoint response.

#### Type declaration

| Name              | Type     |
| :---------------- | :------- |
| `MakeId`          | `number` |
| `MakeName`        | `string` |
| `VehicleTypeId`   | `number` |
| `VehicleTypeName` | `string` |

#### Defined in

[api/endpoints/GetMakesForVehicleType.ts:73](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetMakesForVehicleType.ts#L73)
