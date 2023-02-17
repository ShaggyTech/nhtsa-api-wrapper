[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / api/endpoints/GetAllMakes

# Module: api/endpoints/GetAllMakes

## Table of contents

### Functions

- [GetAllMakes](api_endpoints_GetAllMakes.md#getallmakes)

### Type Aliases

- [GetAllMakesResults](api_endpoints_GetAllMakes.md#getallmakesresults)

## Functions

### GetAllMakes

▸ **GetAllMakes**(): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetAllMakesResults`](api_endpoints_GetAllMakes.md#getallmakesresults)\>\>

::: tip :bulb: More Information
See: [GetAllMakes Documentation](/api/get-all-makes)
:::

`GetAllMakes` provides a list of all the Makes available in the vPIC Dataset.
Each object in the `Results` array represents the `Make_ID` and the `Make_Name` of
an individual vehicle Make.

- FYI there are over 10,000 registered makes in the database!

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetAllMakesResults`](api_endpoints_GetAllMakes.md#getallmakesresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false` (default: `true`)

#### Defined in

[api/endpoints/GetAllMakes.ts:26](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/6668ba3/packages/lib/src/api/endpoints/GetAllMakes.ts#L26)

▸ **GetAllMakes**(`doFetch`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetAllMakesResults`](api_endpoints_GetAllMakes.md#getallmakesresults)\>\>

### Overload: `doFetch = true`

#### Parameters

| Name | Type |
| :------ | :------ |
| `doFetch` | ``true`` |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetAllMakesResults`](api_endpoints_GetAllMakes.md#getallmakesresults)\>\>

#### Defined in

[api/endpoints/GetAllMakes.ts:30](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/6668ba3/packages/lib/src/api/endpoints/GetAllMakes.ts#L30)

▸ **GetAllMakes**(`doFetch`): `Promise`<`string`\>

### Overload: `doFetch = false`

#### Parameters

| Name | Type |
| :------ | :------ |
| `doFetch` | ``false`` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/GetAllMakes.ts:34](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/6668ba3/packages/lib/src/api/endpoints/GetAllMakes.ts#L34)

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

[api/endpoints/GetAllMakes.ts:62](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/6668ba3/packages/lib/src/api/endpoints/GetAllMakes.ts#L62)
