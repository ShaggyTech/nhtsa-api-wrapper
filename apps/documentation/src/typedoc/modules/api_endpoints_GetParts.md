[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / api/endpoints/GetParts

# Module: api/endpoints/GetParts

## Table of contents

### Functions

- [GetParts](api_endpoints_GetParts.md#getparts)

### Type Aliases

- [GetPartsResults](api_endpoints_GetParts.md#getpartsresults)

## Functions

### GetParts

▸ **GetParts**(`params?`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetPartsResults`](api_endpoints_GetParts.md#getpartsresults)\>\>

`GetParts` provides a list of ORGs with letter date in the given range of the dates and with
specified Type (`params.type`) of ORG.

- Up to 1000 results will be returned at a time.
- Get the next page by incrementing the `params.page` query parameter.

All query `params` are optional.

`params.type`:
- (optional) number, 565 (Vehicle Identification Number Guidance, based on 49 CFR Part 565)
  or 566 (Manufacturer Identification – Reporting Requirements based on 49 CFR Part 566)
`params.fromDate`:
- (optional) ORG's Letter Date should be on or after this date
`params.manufacturer`:
- (optional) if supplied value is a number - method will do exact match on Manufacturer's Id
- if supplied value is a string - it will look for manufacturers whose name is LIKE the provided
  name
- it accepts a partial manufacturer name as an input
- multiple results are returned in case of multiple matches
- manufacturer name can be a partial name, or a full name for more specificity, e.g., "988",
  "HONDA", "HONDA OF CANADA MFG., INC.", etc.
`params.page`:
 - (optional) number, 1 (default) first 1000 records, 2 - next 1000 records, etc

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `params?` | `boolean` \| { `fromDate?`: `string` ; `page?`: `string` \| `number` ; `toDate?`: `string` ; `type?`: `string` \| `number`  } | `undefined` | Object of Query Search names and values to append to the URL as a query string. - If not providing `params` and want you want to set `doFetch = false`, you can pass `false` as the first arg in place of params, instead of having to pass the first arg as undefined, i.e. you don't have to do this: `func(undefined, doFetch)`, and can instead do this: `func(doFetch)` |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetPartsResults`](api_endpoints_GetParts.md#getpartsresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetParts.ts:49](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/1e31d45/packages/lib/src/api/endpoints/GetParts.ts#L49)

## Type Aliases

### GetPartsResults

Ƭ **GetPartsResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetParts endpoint

**`Alias`**

GetPartsResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CoverLetterURL` | `string` |
| `LetterDate` | `string` |
| `ManufacturerId` | `number` |
| `ManufacturerName` | `string` |
| `ModelYearFrom` | `number` \| ``null`` |
| `ModelYearTo` | `number` \| ``null`` |
| `Name` | `string` |
| `Type` | `string` |
| `URL` | `string` |

#### Defined in

[api/endpoints/GetParts.ts:97](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/1e31d45/packages/lib/src/api/endpoints/GetParts.ts#L97)
