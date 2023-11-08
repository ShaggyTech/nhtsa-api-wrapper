**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../../modules.md) / api/endpoints/GetMakesForManufacturerAndYear

# api/endpoints/GetMakesForManufacturerAndYear

## Contents

- [Type Aliases](GetMakesForManufacturerAndYear.md#type-aliases)
  - [GetMakesForManufacturerAndYearResults](GetMakesForManufacturerAndYear.md#getmakesformanufacturerandyearresults)
- [Functions](GetMakesForManufacturerAndYear.md#functions)
  - [GetMakesForManufacturerAndYear()](GetMakesForManufacturerAndYear.md#getmakesformanufacturerandyear)

## Type Aliases

### GetMakesForManufacturerAndYearResults

> **GetMakesForManufacturerAndYearResults**: `object`

Objects found in the `Results` array of `GetMakesForManufacturerAndYear` endpoint response.

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `MakeId` | `number` | - |
| `MakeName` | `string` | - |
| `MfrId` | `number` | - |
| `MfrName` | `string` | - |

#### Source

[api/endpoints/GetMakesForManufacturerAndYear.ts:105](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetMakesForManufacturerAndYear.ts#L105)

## Functions

### GetMakesForManufacturerAndYear()

#### GetMakesForManufacturerAndYear(manufacturer, params, doFetch)

> **GetMakesForManufacturerAndYear**(`manufacturer`, `params`, `doFetch`?): `Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetMakesForManufacturerAndYearResults`](GetMakesForManufacturerAndYear.md#getmakesformanufacturerandyearresults)\>\>

::: tip :bulb: More Information
See: [GetMakesForManufacturerAndYear Documentation](/guide/vpic/endpoints/get-makes-for-manufacturer-and-year)
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

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `manufacturer` | `string` \| `number` | Manufacturer Name (string) or Manufacturer ID (number) |
| `params` | `object` | Object of Query Search names and values to append to the URL as a query string |
| `params.year` | `string` \| `number` | Model year of the vehicle - Number, >= 2016 |
| `doFetch`? | `true` | Whether to fetch the data or just return the URL<br />(default: `true`) |

##### Returns

`Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetMakesForManufacturerAndYearResults`](GetMakesForManufacturerAndYear.md#getmakesformanufacturerandyearresults)\>\>

- Api
Response `object` -or- url `string` if `doFetch = false`

##### Source

[api/endpoints/GetMakesForManufacturerAndYear.ts:43](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetMakesForManufacturerAndYear.ts#L43)

#### GetMakesForManufacturerAndYear(manufacturer, params, doFetch)

> **GetMakesForManufacturerAndYear**(`manufacturer`, `params`, `doFetch`): `Promise`\<`string`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `manufacturer` | `string` \| `number` |
| `params` | `object` |
| `params.year` | `string` \| `number` |
| `doFetch` | `false` |

##### Returns

`Promise`\<`string`\>

##### Source

[api/endpoints/GetMakesForManufacturerAndYear.ts:49](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetMakesForManufacturerAndYear.ts#L49)
