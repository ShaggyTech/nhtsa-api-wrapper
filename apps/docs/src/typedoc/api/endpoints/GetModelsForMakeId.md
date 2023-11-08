**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../../modules.md) / api/endpoints/GetModelsForMakeId

# api/endpoints/GetModelsForMakeId

## Contents

- [Type Aliases](GetModelsForMakeId.md#type-aliases)
  - [GetModelsForMakeIdResults](GetModelsForMakeId.md#getmodelsformakeidresults)
- [Functions](GetModelsForMakeId.md#functions)
  - [GetModelsForMakeId()](GetModelsForMakeId.md#getmodelsformakeid)

## Type Aliases

### GetModelsForMakeIdResults

> **GetModelsForMakeIdResults**: `object`

Objects found in the `Results` array of `GetModelsForMakeId` endpoint response.

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `Make_ID` | `number` | - |
| `Make_Name` | `string` | - |
| `Model_ID` | `number` | - |
| `Model_Name` | `string` | - |

#### Source

[api/endpoints/GetModelsForMakeId.ts:87](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetModelsForMakeId.ts#L87)

## Functions

### GetModelsForMakeId()

#### GetModelsForMakeId(makeId, doFetch)

> **GetModelsForMakeId**(`makeId`, `doFetch`?): `Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetModelsForMakeIdResults`](GetModelsForMakeId.md#getmodelsformakeidresults)\>\>

::: tip :bulb: More Information
See: [GetModelsForMakeId Documentation](/guide/vpic/endpoints/get-models-for-make-id)
:::

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

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `makeId` | `string` \| `number` | Make ID to search |
| `doFetch`? | `true` | Whether to fetch the data or just return the URL<br />(default: `true`) |

##### Returns

`Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetModelsForMakeIdResults`](GetModelsForMakeId.md#getmodelsformakeidresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false`

##### Source

[api/endpoints/GetModelsForMakeId.ts:41](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetModelsForMakeId.ts#L41)

#### GetModelsForMakeId(makeId, doFetch)

> **GetModelsForMakeId**(`makeId`, `doFetch`): `Promise`\<`string`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `makeId` | `string` \| `number` |
| `doFetch` | `false` |

##### Returns

`Promise`\<`string`\>

##### Source

[api/endpoints/GetModelsForMakeId.ts:46](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetModelsForMakeId.ts#L46)
