# Module: api/endpoints/GetMakeForManufacturer

## Table of contents

### Type Aliases

- [GetMakeForManufacturerResults](api_endpoints_GetMakeForManufacturer.md#getmakeformanufacturerresults)

### Functions

- [GetMakeForManufacturer](api_endpoints_GetMakeForManufacturer.md#getmakeformanufacturer)

## Type Aliases

### GetMakeForManufacturerResults

Ƭ **GetMakeForManufacturerResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetMakeForManufacturer endpoint

**`Alias`**

GetMakeForManufacturerResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Make_ID` | `number` |
| `Make_Name` | `string` |
| `Mfr_Name` | `string` |

#### Defined in

[api/endpoints/GetMakeForManufacturer.ts:58](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/GetMakeForManufacturer.ts#L58)

## Functions

### GetMakeForManufacturer

▸ **GetMakeForManufacturer**(`manufacturer`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetMakeForManufacturerResults`](api_endpoints_GetMakeForManufacturer.md#getmakeformanufacturerresults)\>\>

`GetMakeForManufacturer` returns all the Makes in the vPIC dataset for a specified manufacturer
that is requested. Multiple results are returned in case of multiple matches.

`manufacturer` name can be a partial name, or a full name for more specificity, e.g. "988",
"honda", "HONDA OF CANADA MFG., INC.", etc.

- If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
- If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the
  provided name. It accepts a partial manufacturer name as an input.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `manufacturer` | `string` \| `number` | `undefined` | Manufacturer Name or ID |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetMakeForManufacturerResults`](api_endpoints_GetMakeForManufacturer.md#getmakeformanufacturerresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetMakeForManufacturer.ts:22](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/GetMakeForManufacturer.ts#L22)
