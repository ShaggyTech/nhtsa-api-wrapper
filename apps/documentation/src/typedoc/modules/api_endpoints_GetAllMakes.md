[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / api/endpoints/GetAllMakes

# Module: api/endpoints/GetAllMakes

## Table of contents

### Functions

- [GetAllMakes](api_endpoints_GetAllMakes.md#getallmakes)

### Type Aliases

- [GetAllMakesResults](api_endpoints_GetAllMakes.md#getallmakesresults)

## Functions

### GetAllMakes

▸ **GetAllMakes**(`doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetAllMakesResults`](api_endpoints_GetAllMakes.md#getallmakesresults)\>\>

`GetAllMakes` provides a list of all the Makes available in the vPIC Dataset.
Each object in the `Results` array represents the `Make_ID` and the `Make_Name` of
an individual vehicle Make.

- FYI there are over 10,000 registered makes in the database!

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `doFetch?` | `boolean` | `false` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetAllMakesResults`](api_endpoints_GetAllMakes.md#getallmakesresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false` (default: `true`)

#### Defined in

[api/endpoints/GetAllMakes.ts:22](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/19d28b5/packages/lib/src/api/endpoints/GetAllMakes.ts#L22)

## Type Aliases

### GetAllMakesResults

Ƭ **GetAllMakesResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetAllMakes endpoint

**`Alias`**

GetAllMakesResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Make_ID` | `number` |
| `Make_Name` | `string` |

#### Defined in

[api/endpoints/GetAllMakes.ts:47](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/19d28b5/packages/lib/src/api/endpoints/GetAllMakes.ts#L47)
