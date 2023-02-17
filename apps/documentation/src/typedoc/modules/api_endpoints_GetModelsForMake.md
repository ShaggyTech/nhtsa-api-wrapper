[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / api/endpoints/GetModelsForMake

# Module: api/endpoints/GetModelsForMake

## Table of contents

### Functions

- [GetModelsForMake](api_endpoints_GetModelsForMake.md#getmodelsformake)

### Type Aliases

- [GetModelsForMakeResults](api_endpoints_GetModelsForMake.md#getmodelsformakeresults)

## Functions

### GetModelsForMake

▸ **GetModelsForMake**(`makeName`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetModelsForMakeResults`](api_endpoints_GetModelsForMake.md#getmodelsformakeresults)\>\>

`GetModelsForMake` returns the Models in the vPIC dataset for a specified `makeName`
whose Name is LIKE the Make in vPIC Dataset.

`makeName` can be a partial, or a full for more specificity, e.g., "Harley",
"Harley Davidson", etc.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `makeName` | `string` | `undefined` | Vehicle make name |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetModelsForMakeResults`](api_endpoints_GetModelsForMake.md#getmodelsformakeresults)\>\>

- Api Response object

- Api Response `object`
-or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetModelsForMake.ts:24](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/6668ba3/packages/lib/src/api/endpoints/GetModelsForMake.ts#L24)

## Type Aliases

### GetModelsForMakeResults

Ƭ **GetModelsForMakeResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetModelsForMake endpoint

**`Alias`**

GetModelsForMakeResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Make_ID` | `number` |
| `Make_Name` | `string` |
| `Model_ID` | `number` |
| `Model_Name` | `string` |

#### Defined in

[api/endpoints/GetModelsForMake.ts:60](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/6668ba3/packages/lib/src/api/endpoints/GetModelsForMake.ts#L60)
