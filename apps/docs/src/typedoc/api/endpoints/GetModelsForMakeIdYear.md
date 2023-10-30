**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../../modules.md) / api/endpoints/GetModelsForMakeIdYear

# api/endpoints/GetModelsForMakeIdYear

## Contents

- [Type Aliases](GetModelsForMakeIdYear.md#type-aliases)
  - [GetModelsForMakeIdYearResults](GetModelsForMakeIdYear.md#getmodelsformakeidyearresults)
- [Functions](GetModelsForMakeIdYear.md#functions)
  - [GetModelsForMakeIdYear()](GetModelsForMakeIdYear.md#getmodelsformakeidyear)

## Type Aliases

### GetModelsForMakeIdYearResults

> **GetModelsForMakeIdYearResults**: `object`

Objects found in the `Results` array of `GetModelsForMakeIdYear` endpoint response.

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `Make_ID` | `number` | - |
| `Make_Name` | `string` | - |
| `Model_ID` | `number` | - |
| `Model_Name` | `string` | - |

#### Source

[api/endpoints/GetModelsForMakeIdYear.ts:152](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetModelsForMakeIdYear.ts#L152)

## Functions

### GetModelsForMakeIdYear()

#### GetModelsForMakeIdYear(params, doFetch)

> **GetModelsForMakeIdYear**(`params`, `doFetch`?): `Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetModelsForMakeIdYearResults`](GetModelsForMakeIdYear.md#getmodelsformakeidyearresults)\>\>

::: tip :bulb: More Information
See: [GetModelsForMakeIdYear Documentation](/api/endpoints/get-models-for-make-id-year)
:::

`GetModelsForMakeIdYear` returns the Models in the vPIC dataset for a specified Model Year
and Make whose name is LIKE the Make in the vPIC Dataset.

`params.makeId` is an integer and is **required**.

A minimum of one of the following are also **required** (or a combination of both):
- `params.modelYear` year you want to search for (years >= 1995 are supported according to NHTSA
  docs)
- `params.vehicleType` can be a partial name, or a full name for more specificity, e.g.,
  "Vehicle", "Moto", "Low Speed Vehicle", etc.

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

_NOTE:_ This endpoint requires special handling of the params object, such that none of the
params are used in the query string and are instead used as part of the URL path for the
endpoint. To account for this, we pass the params object to the `createUrl` function as the
`path`, after encoding the params object key:values into a url path string.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | Object of Query Search names and values to append to the URL as a query string |
| `doFetch`? | `true` | Whether to fetch the data or just return the URL<br />(default: `true`) |

##### Returns

`Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetModelsForMakeIdYearResults`](GetModelsForMakeIdYear.md#getmodelsformakeidyearresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

##### Source

[api/endpoints/GetModelsForMakeIdYear.ts:61](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetModelsForMakeIdYear.ts#L61)

#### GetModelsForMakeIdYear(params, doFetch)

> **GetModelsForMakeIdYear**(`params`, `doFetch`): `Promise`\<`string`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `Object` |
| `doFetch` | `false` |

##### Returns

`Promise`\<`string`\>

##### Source

[api/endpoints/GetModelsForMakeIdYear.ts:71](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetModelsForMakeIdYear.ts#L71)
