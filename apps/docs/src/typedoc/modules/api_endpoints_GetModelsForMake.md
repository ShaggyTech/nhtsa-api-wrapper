[@shaggytools/nhtsa-api-wrapper - v3.0.0-beta.0](../index.md) / [Exports](../modules.md) / api/endpoints/GetModelsForMake

# Module: api/endpoints/GetModelsForMake

## Table of contents

### Functions

- [GetModelsForMake](api_endpoints_GetModelsForMake.md#getmodelsformake)

### Type Aliases

- [GetModelsForMakeResults](api_endpoints_GetModelsForMake.md#getmodelsformakeresults)

## Functions

### GetModelsForMake

▸ **GetModelsForMake**(`makeName`, `doFetch?`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetModelsForMakeResults`](api_endpoints_GetModelsForMake.md#getmodelsformakeresults)\>\>

::: tip :bulb: More Information
See: [GetModelsForMake Documentation](/api/get-models-for-make)
:::

`GetModelsForMake` returns the Models in the vPIC dataset for a specified `makeName`
whose Name is LIKE the Make in vPIC Dataset.

`makeName` can be a partial, or a full for more specificity, e.g., "Harley",
"Harley Davidson", etc.

#### Parameters

| Name       | Type     | Description                                                        |
| :--------- | :------- | :----------------------------------------------------------------- |
| `makeName` | `string` | Vehicle make name                                                  |
| `doFetch?` | `true`   | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetModelsForMakeResults`](api_endpoints_GetModelsForMake.md#getmodelsformakeresults)\>\>

- Api Response object

- Api Response `object`
  -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetModelsForMake.ts:28](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetModelsForMake.ts#L28)

▸ **GetModelsForMake**(`makeName`, `doFetch`): `Promise`<`string`\>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `makeName` | `string` |
| `doFetch`  | `false`  |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/GetModelsForMake.ts:33](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetModelsForMake.ts#L33)

## Type Aliases

### GetModelsForMakeResults

Ƭ **GetModelsForMakeResults**: `Object`

Objects found in the `Results` array of `GetModelsForMake` endpoint response.

#### Type declaration

| Name         | Type     |
| :----------- | :------- |
| `Make_ID`    | `number` |
| `Make_Name`  | `string` |
| `Model_ID`   | `number` |
| `Model_Name` | `string` |

#### Defined in

[api/endpoints/GetModelsForMake.ts:71](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetModelsForMake.ts#L71)
