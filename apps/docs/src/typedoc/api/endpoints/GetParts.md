**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../../modules.md) / api/endpoints/GetParts

# api/endpoints/GetParts

## Contents

- [Type Aliases](GetParts.md#type-aliases)
  - [GetPartsResults](GetParts.md#getpartsresults)
- [Functions](GetParts.md#functions)
  - [GetParts()](GetParts.md#getparts)

## Type Aliases

### GetPartsResults

> **GetPartsResults**: `object`

Objects found in the `Results` array of `GetParts` endpoint response.

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `CoverLetterURL` | `string` | - |
| `LetterDate` | `string` | - |
| `ManufacturerId` | `number` | - |
| `ManufacturerName` | `string` | - |
| `ModelYearFrom` | `number` \| `null` | - |
| `ModelYearTo` | `number` \| `null` | - |
| `Name` | `string` | - |
| `Type` | `string` | - |
| `URL` | `string` | - |

#### Source

[api/endpoints/GetParts.ts:143](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetParts.ts#L143)

## Functions

### GetParts()

#### GetParts(doFetch, _dummy)

> **GetParts**(`doFetch`?, `_dummy`?): `Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetPartsResults`](GetParts.md#getpartsresults)\>\>

::: tip :bulb: More Information
See: [GetParts Documentation](/api/endpoints/get-parts)
:::

`GetParts` provides a list of ORGs with letter date in the given range of the dates and with
specified Type (`params.type`) of ORG.

- Up to 1000 results will be returned at a time.
- Get the next page by incrementing the `params.page` query parameter.

All query `params` are optional.

`params.manufacturer`:
- (optional) if supplied value is a number - method will do exact match on Manufacturer's Id
- if supplied value is a string - it will look for manufacturers whose name is LIKE the provided
  name
- it accepts a partial manufacturer name as an input
- multiple results are returned in case of multiple matches
- manufacturer name can be a partial name, or a full name for more specificity, e.g., "988",
  "HONDA", "HONDA OF CANADA MFG., INC.", etc.

`params.type`:
- (optional) number, 565 (Vehicle Identification Number Guidance, based on 49 CFR Part 565)
  or 566 (Manufacturer Identification – Reporting Requirements based on 49 CFR Part 566)

`params.fromDate`:
- (optional) ORG's Letter Date should be on or after this date

`params.toDate`:
- (optional) ORG's Letter Date should be on or before this date

`params.page`:
 - (optional) number, 1 (default) first 1000 records, 2 - next 1000 records, etc

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `doFetch`? | `true` | Whether to fetch the data or just return the URL<br />(default: `true`) |
| `_dummy`? | `undefined` | - |

##### Returns

`Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetPartsResults`](GetParts.md#getpartsresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false`

##### Source

[api/endpoints/GetParts.ts:60](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetParts.ts#L60)

#### GetParts(doFetch, _dummy)

> **GetParts**(`doFetch`?, `_dummy`?): `Promise`\<`string`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `doFetch`? | `false` |
| `_dummy`? | `undefined` |

##### Returns

`Promise`\<`string`\>

##### Source

[api/endpoints/GetParts.ts:65](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetParts.ts#L65)

#### GetParts(params, doFetch)

> **GetParts**(`params`, `doFetch`): `Promise`\<`string`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `object` |
| `params.fromDate`? | `string` |
| `params.manufacturer`? | `string` \| `number` |
| `params.page`? | `string` \| `number` |
| `params.toDate`? | `string` |
| `params.type`? | `565` \| `566` |
| `doFetch` | `false` |

##### Returns

`Promise`\<`string`\>

##### Source

[api/endpoints/GetParts.ts:67](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetParts.ts#L67)

#### GetParts(params, doFetch)

> **GetParts**(`params`?, `doFetch`?): `Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetPartsResults`](GetParts.md#getpartsresults)\>\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `params`? | `object` |
| `params.fromDate`? | `string` |
| `params.manufacturer`? | `string` \| `number` |
| `params.page`? | `string` \| `number` |
| `params.toDate`? | `string` |
| `params.type`? | `565` \| `566` |
| `doFetch`? | `true` |

##### Returns

`Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetPartsResults`](GetParts.md#getpartsresults)\>\>

##### Source

[api/endpoints/GetParts.ts:78](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetParts.ts#L78)
