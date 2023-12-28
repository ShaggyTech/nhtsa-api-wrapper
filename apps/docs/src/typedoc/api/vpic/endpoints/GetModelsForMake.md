**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../../../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../../../modules.md) / api/vpic/endpoints/GetModelsForMake

# api/vpic/endpoints/GetModelsForMake

## Contents

- [Type Aliases](GetModelsForMake.md#type-aliases)
  - [GetModelsForMakeResults](GetModelsForMake.md#getmodelsformakeresults)
- [Functions](GetModelsForMake.md#functions)
  - [GetModelsForMake()](GetModelsForMake.md#getmodelsformake)

## Type Aliases

### GetModelsForMakeResults

> **GetModelsForMakeResults**: `object`

Objects found in the `Results` array of `GetModelsForMake` endpoint response.

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `Make_ID` | `number` | - |
| `Make_Name` | `string` | - |
| `Model_ID` | `number` | - |
| `Model_Name` | `string` | - |

#### Source

[api/vpic/endpoints/GetModelsForMake.ts:71](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/vpic/endpoints/GetModelsForMake.ts#L71)

## Functions

### GetModelsForMake()

#### GetModelsForMake(makeName, doFetch)

> **GetModelsForMake**(`makeName`, `doFetch`?): `Promise`\<[`NhtsaResponse`](../../types.md#nhtsaresponseresultstype-apitype)\<[`GetModelsForMakeResults`](GetModelsForMake.md#getmodelsformakeresults)\>\>

::: tip :bulb: More Information
See: [GetModelsForMake Documentation](/guide/vpic/endpoints/get-models-for-make)
:::

`GetModelsForMake` returns the Models in the vPIC dataset for a specified `makeName`
whose Name is LIKE the Make in vPIC Dataset.

`makeName` can be a partial, or a full for more specificity, e.g., "Harley",
"Harley Davidson", etc.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `makeName` | `string` | Vehicle make name |
| `doFetch`? | `true` | Whether to fetch the data or just return the URL<br />(default: `true`) |

##### Returns

`Promise`\<[`NhtsaResponse`](../../types.md#nhtsaresponseresultstype-apitype)\<[`GetModelsForMakeResults`](GetModelsForMake.md#getmodelsformakeresults)\>\>

- Api Response object

- Api Response `object`
-or- url `string` if `doFetch = false`

##### Source

[api/vpic/endpoints/GetModelsForMake.ts:28](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/vpic/endpoints/GetModelsForMake.ts#L28)

#### GetModelsForMake(makeName, doFetch)

> **GetModelsForMake**(`makeName`, `doFetch`): `Promise`\<`string`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `makeName` | `string` |
| `doFetch` | `false` |

##### Returns

`Promise`\<`string`\>

##### Source

[api/vpic/endpoints/GetModelsForMake.ts:33](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/vpic/endpoints/GetModelsForMake.ts#L33)
