**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../../modules.md) / api/endpoints/GetVehicleTypesForMakeId

# api/endpoints/GetVehicleTypesForMakeId

## Contents

- [Type Aliases](GetVehicleTypesForMakeId.md#type-aliases)
  - [GetVehicleTypesForMakeIdResults](GetVehicleTypesForMakeId.md#getvehicletypesformakeidresults)
- [Functions](GetVehicleTypesForMakeId.md#functions)
  - [GetVehicleTypesForMakeId()](GetVehicleTypesForMakeId.md#getvehicletypesformakeid)

## Type Aliases

### GetVehicleTypesForMakeIdResults

> **GetVehicleTypesForMakeIdResults**: `object`

Objects found in the `Results` array of `GetVehicleTypesForMakeId` endpoint response.

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `VehicleTypeId` | `number` | - |
| `VehicleTypeName` | `string` | - |

#### Source

[api/endpoints/GetVehicleTypesForMakeId.ts:87](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetVehicleTypesForMakeId.ts#L87)

## Functions

### GetVehicleTypesForMakeId()

#### GetVehicleTypesForMakeId(makeId, doFetch)

> **GetVehicleTypesForMakeId**(`makeId`, `doFetch`?): `Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetVehicleTypesForMakeIdResults`](GetVehicleTypesForMakeId.md#getvehicletypesformakeidresults)\>\>

::: tip :bulb: More Information
See: [GetVehicleTypesForMakeId Documentation](/api/endpoints/get-vehicle-types-for-make-id)
:::

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

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `makeId` | `string` \| `number` | Make ID to search |
| `doFetch`? | `true` | Whether to fetch the data or just return the URL<br />(default: `true`) |

##### Returns

`Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetVehicleTypesForMakeIdResults`](GetVehicleTypesForMakeId.md#getvehicletypesformakeidresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

##### Source

[api/endpoints/GetVehicleTypesForMakeId.ts:41](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetVehicleTypesForMakeId.ts#L41)

#### GetVehicleTypesForMakeId(makeId, doFetch)

> **GetVehicleTypesForMakeId**(`makeId`, `doFetch`): `Promise`\<`string`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `makeId` | `string` \| `number` |
| `doFetch` | `false` |

##### Returns

`Promise`\<`string`\>

##### Source

[api/endpoints/GetVehicleTypesForMakeId.ts:46](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetVehicleTypesForMakeId.ts#L46)
