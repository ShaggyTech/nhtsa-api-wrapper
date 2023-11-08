**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../../modules.md) / api/endpoints/GetAllMakes

# api/endpoints/GetAllMakes

## Contents

- [Type Aliases](GetAllMakes.md#type-aliases)
  - [GetAllMakesResults](GetAllMakes.md#getallmakesresults)
- [Functions](GetAllMakes.md#functions)
  - [GetAllMakes()](GetAllMakes.md#getallmakes)

## Type Aliases

### GetAllMakesResults

> **GetAllMakesResults**: `object`

Objects found in the `Results` array of `GetAllMakes` endpoint response.

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `Make_ID` | `number` | - |
| `Make_Name` | `string` | - |

#### Source

[api/endpoints/GetAllMakes.ts:56](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetAllMakes.ts#L56)

## Functions

### GetAllMakes()

#### GetAllMakes(doFetch)

> **GetAllMakes**(`doFetch`?): `Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetAllMakesResults`](GetAllMakes.md#getallmakesresults)\>\>

::: tip :bulb: More Information
See: [GetAllMakes Documentation](/guide/vpic/endpoints/get-all-makes)
:::

`GetAllMakes` provides a list of all the Makes available in the vPIC Dataset.
Each object in the `Results` array represents the `Make_ID` and the `Make_Name` of
an individual vehicle Make.

- FYI there are over 10,000 registered makes in the database!

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `doFetch`? | `true` | Whether to fetch the data or just return the URL<br />(default: `true`) |

##### Returns

`Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetAllMakesResults`](GetAllMakes.md#getallmakesresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false` (default: `true`)

##### Source

[api/endpoints/GetAllMakes.ts:26](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetAllMakes.ts#L26)

#### GetAllMakes(doFetch)

> **GetAllMakes**(`doFetch`): `Promise`\<`string`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `doFetch` | `false` |

##### Returns

`Promise`\<`string`\>

##### Source

[api/endpoints/GetAllMakes.ts:28](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetAllMakes.ts#L28)
