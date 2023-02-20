[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / api/endpoints/GetAllMakes

# Module: api/endpoints/GetAllMakes

## Table of contents

### Functions

- [GetAllMakes](api_endpoints_GetAllMakes.md#getallmakes)

### Type Aliases

- [GetAllMakesResults](api_endpoints_GetAllMakes.md#getallmakesresults)

## Functions

### GetAllMakes

▸ **GetAllMakes**(`doFetch?`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetAllMakesResults`](api_endpoints_GetAllMakes.md#getallmakesresults)\>\>

::: tip :bulb: More Information
See: [GetAllMakes Documentation](/api/get-all-makes)
:::

`GetAllMakes` provides a list of all the Makes available in the vPIC Dataset.
Each object in the `Results` array represents the `Make_ID` and the `Make_Name` of
an individual vehicle Make.

- FYI there are over 10,000 registered makes in the database!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doFetch?` | ``true`` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetAllMakesResults`](api_endpoints_GetAllMakes.md#getallmakesresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false` (default: `true`)

#### Defined in

[api/endpoints/GetAllMakes.ts:41](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/ffa4a7a/packages/lib/src/api/endpoints/GetAllMakes.ts#L41)

▸ **GetAllMakes**(`doFetch`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `doFetch` | ``false`` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/GetAllMakes.ts:43](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/ffa4a7a/packages/lib/src/api/endpoints/GetAllMakes.ts#L43)

## Type Aliases

### GetAllMakesResults

Ƭ **GetAllMakesResults**: `Object`

Objects found in the `Results` array of `GetAllMakes` endpoint response.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Make_ID` | `number` |
| `Make_Name` | `string` |

#### Defined in

[api/endpoints/GetAllMakes.ts:71](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/ffa4a7a/packages/lib/src/api/endpoints/GetAllMakes.ts#L71)
