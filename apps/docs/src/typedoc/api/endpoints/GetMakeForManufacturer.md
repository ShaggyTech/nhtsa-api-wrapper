**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../../modules.md) / api/endpoints/GetMakeForManufacturer

# api/endpoints/GetMakeForManufacturer

## Contents

- [Type Aliases](GetMakeForManufacturer.md#type-aliases)
  - [GetMakeForManufacturerResults](GetMakeForManufacturer.md#getmakeformanufacturerresults)
- [Functions](GetMakeForManufacturer.md#functions)
  - [GetMakeForManufacturer()](GetMakeForManufacturer.md#getmakeformanufacturer)

## Type Aliases

### GetMakeForManufacturerResults

> **GetMakeForManufacturerResults**: `object`

Objects found in the `Results` array of `GetMakeForManufacturer` endpoint response.

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `Make_ID` | `number` | - |
| `Make_Name` | `string` | - |
| `Mfr_Name` | `string` | - |

#### Source

[api/endpoints/GetMakeForManufacturer.ts:77](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetMakeForManufacturer.ts#L77)

## Functions

### GetMakeForManufacturer()

#### GetMakeForManufacturer(manufacturer, doFetch)

> **GetMakeForManufacturer**(`manufacturer`, `doFetch`?): `Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetMakeForManufacturerResults`](GetMakeForManufacturer.md#getmakeformanufacturerresults)\>\>

::: tip :bulb: More Information
See: [GetMakeForManufacturer Documentation](/api/endpoints/get-make-for-manufacturer)
:::

`GetMakeForManufacturer` returns all the Makes in the vPIC dataset for a specified manufacturer
that is requested. Multiple results are returned in case of multiple matches.

`manufacturer` name can be a partial name, or a full name for more specificity, e.g. "988",
"honda", "HONDA OF CANADA MFG., INC.", etc.

- If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
- If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the
  provided name. It accepts a partial manufacturer name as an input.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `manufacturer` | `string` \| `number` | Manufacturer Name or ID |
| `doFetch`? | `true` | Whether to fetch the data or just return the URL<br />(default: `true`) |

##### Returns

`Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetMakeForManufacturerResults`](GetMakeForManufacturer.md#getmakeformanufacturerresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

##### Source

[api/endpoints/GetMakeForManufacturer.ts:31](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetMakeForManufacturer.ts#L31)

#### GetMakeForManufacturer(manufacturer, doFetch)

> **GetMakeForManufacturer**(`manufacturer`, `doFetch`): `Promise`\<`string`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `manufacturer` | `string` \| `number` |
| `doFetch` | `false` |

##### Returns

`Promise`\<`string`\>

##### Source

[api/endpoints/GetMakeForManufacturer.ts:36](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetMakeForManufacturer.ts#L36)
