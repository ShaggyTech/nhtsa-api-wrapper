**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../../modules.md) / api/endpoints/GetModelsForMakeYear

# api/endpoints/GetModelsForMakeYear

## Contents

- [Type Aliases](GetModelsForMakeYear.md#type-aliases)
  - [GetModelsForMakeYearResults](GetModelsForMakeYear.md#getmodelsformakeyearresults)
- [Functions](GetModelsForMakeYear.md#functions)
  - [GetModelsForMakeYear()](GetModelsForMakeYear.md#getmodelsformakeyear)

## Type Aliases

### GetModelsForMakeYearResults

> **GetModelsForMakeYearResults**: `object`

Objects found in the `Results` array of `GetModelsForMakeYear` endpoint response.

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `Make_ID` | `number` | - |
| `Make_Name` | `string` | - |
| `Model_ID` | `number` | - |
| `Model_Name` | `string` | - |

#### Source

[api/endpoints/GetModelsForMakeYear.ts:133](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetModelsForMakeYear.ts#L133)

## Functions

### GetModelsForMakeYear()

#### GetModelsForMakeYear(params, doFetch)

> **GetModelsForMakeYear**(`params`, `doFetch`?): `Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetModelsForMakeYearResults`](GetModelsForMakeYear.md#getmodelsformakeyearresults)\>\>

::: tip :bulb: More Information
See: [GetModelsForMakeYear Documentation](/guide/vpic/endpoints/get-models-for-make-year)
:::

`GetModelsForMakeYear` returns the Models in the vPIC dataset for a specified Model Year and
Make whose name is LIKE the Make in the vPIC Dataset.

`params.make` is **required**. It can be a partial, or a full name for more specificity, e.g.,
"Harley", "Harley Davidson", etc.

A minimum of one of the following are also **required** (or a combination of both):
- `params.modelYear` year you want to search for (years >= 1995 are supported according to NHTSA
  docs)
- `params.vehicleType` can be a partial name, or a full name for more specificity, e.g.,
  "Vehicle", "Moto", "Low Speed Vehicle", etc.

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

`Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetModelsForMakeYearResults`](GetModelsForMakeYear.md#getmodelsformakeyearresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false`

##### Source

[api/endpoints/GetModelsForMakeYear.ts:47](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetModelsForMakeYear.ts#L47)

#### GetModelsForMakeYear(params, doFetch)

> **GetModelsForMakeYear**(`params`, `doFetch`): `Promise`\<`string`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `Object` |
| `doFetch` | `false` |

##### Returns

`Promise`\<`string`\>

##### Source

[api/endpoints/GetModelsForMakeYear.ts:57](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetModelsForMakeYear.ts#L57)
