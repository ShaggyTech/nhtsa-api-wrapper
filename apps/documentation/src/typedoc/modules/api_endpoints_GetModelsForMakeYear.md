[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / api/endpoints/GetModelsForMakeYear

# Module: api/endpoints/GetModelsForMakeYear

## Table of contents

### Functions

- [GetModelsForMakeYear](api_endpoints_GetModelsForMakeYear.md#getmodelsformakeyear)

### Type Aliases

- [GetModelsForMakeYearResults](api_endpoints_GetModelsForMakeYear.md#getmodelsformakeyearresults)

## Functions

### GetModelsForMakeYear

▸ **GetModelsForMakeYear**(`params`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetModelsForMakeYearResults`](api_endpoints_GetModelsForMakeYear.md#getmodelsformakeyearresults)\>\>

`GetModelsForMakeYear` returns the Models in the vPIC dataset for a specified Model Year and
Make whose name is LIKE the Make in the vPIC Dataset.

`params.make` is required. It can be a partial, or a full name for more specificity, e.g.,
"Harley", "Harley Davidson", etc.

A minimum of one of the following are also required (or a combination of both):
- `params.modelYear` year you want to search for (years >= 1995 are supported according to NHTSA
  docs)
- `params.vehicleType` can be a partial name, or a full name for more specificity, e.g.,
  "Vehicle", "Moto", "Low Speed Vehicle", etc.

_NOTE:_ This endpoint requires special handling of the params object, such that none of the
params are used in the query string and are instead used as part of the URL path for the
endpoint. To account for this, we pass the params object to the `createUrl` function as the
`path`, after encoding the params object key:values into a url path string.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `params` | `Object` | `undefined` | Object of Query Search names and values to append to the URL as a query string |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetModelsForMakeYearResults`](api_endpoints_GetModelsForMakeYear.md#getmodelsformakeyearresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetModelsForMakeYear.ts:43](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/1e31d45/packages/lib/src/api/endpoints/GetModelsForMakeYear.ts#L43)

## Type Aliases

### GetModelsForMakeYearResults

Ƭ **GetModelsForMakeYearResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetModelsForMakeYear endpoint

**`Alias`**

GetModelsForMakeYearResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Make_ID` | `number` |
| `Make_Name` | `string` |
| `Model_ID` | `number` |
| `Model_Name` | `string` |

#### Defined in

[api/endpoints/GetModelsForMakeYear.ts:107](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/1e31d45/packages/lib/src/api/endpoints/GetModelsForMakeYear.ts#L107)
