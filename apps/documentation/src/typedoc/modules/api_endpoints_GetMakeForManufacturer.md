[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / api/endpoints/GetMakeForManufacturer

# Module: api/endpoints/GetMakeForManufacturer

## Table of contents

### Functions

- [GetMakeForManufacturer](api_endpoints_GetMakeForManufacturer.md#getmakeformanufacturer)

### Type Aliases

- [GetMakeForManufacturerResults](api_endpoints_GetMakeForManufacturer.md#getmakeformanufacturerresults)

## Functions

### GetMakeForManufacturer

▸ **GetMakeForManufacturer**(`manufacturer`, `doFetch?`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetMakeForManufacturerResults`](api_endpoints_GetMakeForManufacturer.md#getmakeformanufacturerresults)\>\>

::: tip :bulb: More Information
See: [GetMakeForManufacturer Documentation](/api/get-makes-for-manufacturer)
:::

`GetMakeForManufacturer` returns all the Makes in the vPIC dataset for a specified manufacturer
that is requested. Multiple results are returned in case of multiple matches.

`manufacturer` name can be a partial name, or a full name for more specificity, e.g. "988",
"honda", "HONDA OF CANADA MFG., INC.", etc.

- If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
- If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the
  provided name. It accepts a partial manufacturer name as an input.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manufacturer` | `string` \| `number` | Manufacturer Name or ID |
| `doFetch?` | ``true`` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetMakeForManufacturerResults`](api_endpoints_GetMakeForManufacturer.md#getmakeformanufacturerresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetMakeForManufacturer.ts:31](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/a4e673e/packages/lib/src/api/endpoints/GetMakeForManufacturer.ts#L31)

▸ **GetMakeForManufacturer**(`manufacturer`, `doFetch`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `manufacturer` | `string` \| `number` |
| `doFetch` | ``false`` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/GetMakeForManufacturer.ts:36](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/a4e673e/packages/lib/src/api/endpoints/GetMakeForManufacturer.ts#L36)

## Type Aliases

### GetMakeForManufacturerResults

Ƭ **GetMakeForManufacturerResults**: `Object`

Objects found in the `Results` array of `GetMakeForManufacturer` endpoint response.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Make_ID` | `number` |
| `Make_Name` | `string` |
| `Mfr_Name` | `string` |

#### Defined in

[api/endpoints/GetMakeForManufacturer.ts:77](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/a4e673e/packages/lib/src/api/endpoints/GetMakeForManufacturer.ts#L77)
