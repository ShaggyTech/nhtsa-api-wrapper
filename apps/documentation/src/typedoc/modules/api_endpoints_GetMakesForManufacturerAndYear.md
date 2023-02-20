[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / api/endpoints/GetMakesForManufacturerAndYear

# Module: api/endpoints/GetMakesForManufacturerAndYear

## Table of contents

### Functions

- [GetMakesForManufacturerAndYear](api_endpoints_GetMakesForManufacturerAndYear.md#getmakesformanufacturerandyear)

### Type Aliases

- [GetMakesForManufacturerAndYearResults](api_endpoints_GetMakesForManufacturerAndYear.md#getmakesformanufacturerandyearresults)

## Functions

### GetMakesForManufacturerAndYear

▸ **GetMakesForManufacturerAndYear**(`manufacturer`, `params`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetMakesForManufacturerAndYearResults`](api_endpoints_GetMakesForManufacturerAndYear.md#getmakesformanufacturerandyearresults)\>\>

`GetMakesForManufacturerAndYear` returns all the Makes in the vPIC dataset for a specified
`manufacturer`, and whose "Year From" and "Year To" range cover the specified `year`. Multiple
results are returned in case of multiple matches.

Both `manufacturer` and `params.year` are required.

`manufacturer` name can be a partial name, or a full name for more specificity, e.g. "988",
"honda", "HONDA OF CANADA MFG., INC.", etc.

- If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
- If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the
  provided name. It accepts a partial manufacturer name as an input.

`params.year` must be a number > 2016, years prior to 2016 are not supported according to the
NHTSA API.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `manufacturer` | `string` | `undefined` | Manufacturer Name (string) or Manufacturer ID (number) |
| `params` | `Object` | `undefined` | Object of Query Search names and values to append to the URL as a query string |
| `params.year` | `string` \| `number` | `undefined` | Model year of the vehicle - Number, >= 2016 |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetMakesForManufacturerAndYearResults`](api_endpoints_GetMakesForManufacturerAndYear.md#getmakesformanufacturerandyearresults)\>\>

- Api
Response `object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetMakesForManufacturerAndYear.ts:35](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/ffa4a7a/packages/lib/src/api/endpoints/GetMakesForManufacturerAndYear.ts#L35)

## Type Aliases

### GetMakesForManufacturerAndYearResults

Ƭ **GetMakesForManufacturerAndYearResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetMakesForManufacturerAndYear endpoint

**`Alias`**

GetMakesForManufacturerAndYearResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MakeId` | `number` |
| `MakeName` | `string` |
| `MfrId` | `number` |
| `MfrName` | `string` |

#### Defined in

[api/endpoints/GetMakesForManufacturerAndYear.ts:85](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/ffa4a7a/packages/lib/src/api/endpoints/GetMakesForManufacturerAndYear.ts#L85)
