[@shaggytools/nhtsa-api-wrapper](../README.md) / [Exports](../modules.md) / api/endpoints/DecodeVinExtended

# Module: api/endpoints/DecodeVinExtended

## Table of contents

### Type Aliases

- [DecodeVinExtendedResults](api_endpoints_DecodeVinExtended.md#decodevinextendedresults)

### Functions

- [DecodeVinExtended](api_endpoints_DecodeVinExtended.md#decodevinextended)

## Type Aliases

### DecodeVinExtendedResults

Ƭ **DecodeVinExtendedResults**: `Object`

Objects returned in the NhtsaResponse 'Results' array of DecodeVinExtended endpoint

**`Alias`**

DecodeVinExtendedResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Value` | `string` \| ``null`` |
| `ValueId` | `string` \| ``null`` |
| `Variable` | `string` |
| `VariableId` | `number` |

#### Defined in

[api/endpoints/DecodeVinExtended.ts:95](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/e851323/packages/lib/src/api/endpoints/DecodeVinExtended.ts#L95)

## Functions

### DecodeVinExtended

▸ **DecodeVinExtended**(`vin`, `params?`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinExtendedResults`](api_endpoints_DecodeVinExtended.md#decodevinextendedresults)\>\>

`DecodeVinExtended` decodes a Vehicle Identification Number (VIN) and returns useful information
about the vehicle.

This endpoint is similar to `DecodeVin` but returns additional information on variables related
to other NHTSA programs like the
[NCSA](https://www.nhtsa.gov/research-data/national-center-statistics-and-analysis-ncsa).

In the return object, `Results` will be an array with multiple objects containing 'key:value'
results. Each object will contain:
- "Variable" (variable name) and "Value" (variable value)
- "VariableID" and "ValueID" (unique ID associated with the variable/value)
- In case of text variables, the "ValueID" is not applicable

Providing `params.modelYear` allows for the decoding to specifically be done in the current, or
older (pre-1980), model year ranges. It is recommended to always provide `params.modelYear` if
the model year is known at the time of decoding, but it is not required.

This endpoint also supports partial VIN decoding (VINs that are less than 17 characters).
  - Ex: 5UXWX7C5*BA
  - In this case, the VIN will be decoded partially with the available characters
  - In case of partial VINs, a `*` could be used to indicate the unavailable characters
  - The 9th digit is not necessary

NOTE: Unless you have a specific need to obtain "ValueID" or "VariableID" for each variable
in a decoded VIN, this package recommends using one of the `DecodeVinValues*` endpoints
instead. This is because they will return a single flat format object of key/value pairs,
where key is the name of the variable. `DecodeVinValuesBatch` will return multple flat format
objects, one for each VIN you search. The flat format is more efficient and easier to work with
as you won't have to iterate through a bunch of objects just to get all variable names/values.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `vin` | `string` | `undefined` | Vehicle Identification Number (full or partial) |
| `params?` | `boolean` \| { `modelYear?`: `string` \| `number`  } | `undefined` | Object of Query Search names and values to append to the URL as a query string. - If not providing `params` and want you want to set `doFetch = false`, you can pass `false` as the second arg in place of params, instead of having to pass all 3 args with params as undefined, i.e. you don't have to do this: `func(arg1, undefined, doFetch)`, and can instead do this: `func(arg1, doFetch)` |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinExtendedResults`](api_endpoints_DecodeVinExtended.md#decodevinextendedresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false` (default: `true`)

#### Defined in

[api/endpoints/DecodeVinExtended.ts:48](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/e851323/packages/lib/src/api/endpoints/DecodeVinExtended.ts#L48)
