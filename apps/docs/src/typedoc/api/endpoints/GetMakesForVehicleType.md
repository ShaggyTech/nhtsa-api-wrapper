**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../../modules.md) / api/endpoints/GetMakesForVehicleType

# api/endpoints/GetMakesForVehicleType

## Contents

- [Type Aliases](GetMakesForVehicleType.md#type-aliases)
  - [GetMakesForVehicleTypeResults](GetMakesForVehicleType.md#getmakesforvehicletyperesults)
- [Functions](GetMakesForVehicleType.md#functions)
  - [GetMakesForVehicleType()](GetMakesForVehicleType.md#getmakesforvehicletype)

## Type Aliases

### GetMakesForVehicleTypeResults

> **GetMakesForVehicleTypeResults**: `object`

Objects found in the `Results` array of `GetMakesForVehicleType` endpoint response.

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `MakeId` | `number` | - |
| `MakeName` | `string` | - |
| `VehicleTypeId` | `number` | - |
| `VehicleTypeName` | `string` | - |

#### Source

[api/endpoints/GetMakesForVehicleType.ts:73](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetMakesForVehicleType.ts#L73)

## Functions

### GetMakesForVehicleType()

#### GetMakesForVehicleType(typeName, doFetch)

> **GetMakesForVehicleType**(`typeName`, `doFetch`?): `Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetMakesForVehicleTypeResults`](GetMakesForVehicleType.md#getmakesforvehicletyperesults)\>\>

::: tip :bulb: More Information
See: [GetMakesForVehicleType Documentation](/api/endpoints/get-makes-for-vehicle-type)
:::

`GetMakesForVehicleType` returns all the Makes in the vPIC dataset for a specified vehicle type
(`typeName`), whose name is LIKE the vehicle type name in vPIC Dataset.

`typeName` can be a partial name, or a full name for more specificity, e.g., "Vehicle", "Moto",
"Low Speed Vehicle", etc.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `typeName` | `string` | A partial or full vehicle type name |
| `doFetch`? | `true` | Whether to fetch the data or just return the URL<br />(default: `true`) |

##### Returns

`Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetMakesForVehicleTypeResults`](GetMakesForVehicleType.md#getmakesforvehicletyperesults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

##### Source

[api/endpoints/GetMakesForVehicleType.ts:27](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetMakesForVehicleType.ts#L27)

#### GetMakesForVehicleType(typeName, doFetch)

> **GetMakesForVehicleType**(`typeName`, `doFetch`): `Promise`\<`string`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `typeName` | `string` |
| `doFetch` | `false` |

##### Returns

`Promise`\<`string`\>

##### Source

[api/endpoints/GetMakesForVehicleType.ts:32](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetMakesForVehicleType.ts#L32)
