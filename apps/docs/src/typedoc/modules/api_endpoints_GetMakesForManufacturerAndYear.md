[@shaggytools/nhtsa-api-wrapper](../index.md) / [Exports](../modules.md) / api/endpoints/GetMakesForManufacturerAndYear

# Module: api/endpoints/GetMakesForManufacturerAndYear

## Table of contents

### Functions

- [GetMakesForManufacturerAndYear](api_endpoints_GetMakesForManufacturerAndYear.md#getmakesformanufacturerandyear)

### Type Aliases

- [GetMakesForManufacturerAndYearResults](api_endpoints_GetMakesForManufacturerAndYear.md#getmakesformanufacturerandyearresults)

## Functions

### GetMakesForManufacturerAndYear

▸ **GetMakesForManufacturerAndYear**(`manufacturer`, `params`, `doFetch?`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetMakesForManufacturerAndYearResults`](api_endpoints_GetMakesForManufacturerAndYear.md#getmakesformanufacturerandyearresults)\>\>

::: tip :bulb: More Information
See: [GetMakesForManufacturerAndYear Documentation](/api/get-makes-for-manufacturer-and-year)
:::

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
NHTSA API. During testing it was found that the API still returns data for years prior to 2016.

::: warning :exclamation: Required Parameters
Both `manufacturer` and `params.year` are required.
:::

#### Parameters

| Name           | Type                 | Description                                                                    |
| :------------- | :------------------- | :----------------------------------------------------------------------------- |
| `manufacturer` | `string` \| `number` | Manufacturer Name (string) or Manufacturer ID (number)                         |
| `params`       | `Object`             | Object of Query Search names and values to append to the URL as a query string |
| `params.year`  | `string` \| `number` | Model year of the vehicle - Number, >= 2016                                    |
| `doFetch?`     | `true`               | Whether to fetch the data or just return the URL (default: `true`)             |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetMakesForManufacturerAndYearResults`](api_endpoints_GetMakesForManufacturerAndYear.md#getmakesformanufacturerandyearresults)\>\>

- Api
  Response `object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetMakesForManufacturerAndYear.ts:43](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetMakesForManufacturerAndYear.ts#L43)

▸ **GetMakesForManufacturerAndYear**(`manufacturer`, `params`, `doFetch`): `Promise`<`string`\>

#### Parameters

| Name           | Type                 |
| :------------- | :------------------- |
| `manufacturer` | `string` \| `number` |
| `params`       | `Object`             |
| `params.year`  | `string` \| `number` |
| `doFetch`      | `false`              |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/GetMakesForManufacturerAndYear.ts:49](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetMakesForManufacturerAndYear.ts#L49)

## Type Aliases

### GetMakesForManufacturerAndYearResults

Ƭ **GetMakesForManufacturerAndYearResults**: `Object`

Objects found in the `Results` array of `GetMakesForManufacturerAndYear` endpoint response.

#### Type declaration

| Name       | Type     |
| :--------- | :------- |
| `MakeId`   | `number` |
| `MakeName` | `string` |
| `MfrId`    | `number` |
| `MfrName`  | `string` |

#### Defined in

[api/endpoints/GetMakesForManufacturerAndYear.ts:105](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetMakesForManufacturerAndYear.ts#L105)
