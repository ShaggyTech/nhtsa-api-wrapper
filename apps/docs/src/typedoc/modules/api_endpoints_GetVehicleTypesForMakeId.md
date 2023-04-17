[@shaggytools/nhtsa-api-wrapper](../index.md) / [Exports](../modules.md) / api/endpoints/GetVehicleTypesForMakeId

# Module: api/endpoints/GetVehicleTypesForMakeId

## Table of contents

### Functions

- [GetVehicleTypesForMakeId](api_endpoints_GetVehicleTypesForMakeId.md#getvehicletypesformakeid)

### Type Aliases

- [GetVehicleTypesForMakeIdResults](api_endpoints_GetVehicleTypesForMakeId.md#getvehicletypesformakeidresults)

## Functions

### GetVehicleTypesForMakeId

▸ **GetVehicleTypesForMakeId**(`makeId`, `doFetch?`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetVehicleTypesForMakeIdResults`](api_endpoints_GetVehicleTypesForMakeId.md#getvehicletypesformakeidresults)\>\>

::: tip :bulb: More Information
See: [GetVehicleTypesForMakeId Documentation](/api/get-vehicle-types-for-make-id)
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

#### Parameters

| Name       | Type                 | Description                                                        |
| :--------- | :------------------- | :----------------------------------------------------------------- |
| `makeId`   | `string` \| `number` | Make ID to search                                                  |
| `doFetch?` | `true`               | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetVehicleTypesForMakeIdResults`](api_endpoints_GetVehicleTypesForMakeId.md#getvehicletypesformakeidresults)\>\>

- Api Response
  `object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetVehicleTypesForMakeId.ts:41](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetVehicleTypesForMakeId.ts#L41)

▸ **GetVehicleTypesForMakeId**(`makeId`, `doFetch`): `Promise`<`string`\>

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `makeId`  | `string` \| `number` |
| `doFetch` | `false`              |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/GetVehicleTypesForMakeId.ts:46](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetVehicleTypesForMakeId.ts#L46)

## Type Aliases

### GetVehicleTypesForMakeIdResults

Ƭ **GetVehicleTypesForMakeIdResults**: `Object`

Objects found in the `Results` array of `GetVehicleTypesForMakeId` endpoint response.

#### Type declaration

| Name              | Type     |
| :---------------- | :------- |
| `VehicleTypeId`   | `number` |
| `VehicleTypeName` | `string` |

#### Defined in

[api/endpoints/GetVehicleTypesForMakeId.ts:87](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetVehicleTypesForMakeId.ts#L87)
