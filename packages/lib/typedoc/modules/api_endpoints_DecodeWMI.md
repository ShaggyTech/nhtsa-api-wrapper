[@shaggytools/nhtsa-api-wrapper](../README.md) / [Exports](../modules.md) / api/endpoints/DecodeWMI

# Module: api/endpoints/DecodeWMI

## Table of contents

### Type Aliases

- [DecodeWMIResults](api_endpoints_DecodeWMI.md#decodewmiresults)

### Functions

- [DecodeWMI](api_endpoints_DecodeWMI.md#decodewmi)

## Type Aliases

### DecodeWMIResults

Ƭ **DecodeWMIResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of DecodeWMI endpoint

**`Alias`**

DecodeWMIResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CommonName` | `string` |
| `CreatedOn` | `string` |
| `DateAvailableToPublic` | `string` |
| `Make` | `string` |
| `ManufacturerName` | `string` |
| `ParentCompanyName` | `string` |
| `URL` | `string` |
| `UpdatedOn` | `string` \| ``null`` |
| `VehicleType` | `string` |

#### Defined in

[api/endpoints/DecodeWMI.ts:60](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/e851323/packages/lib/src/api/endpoints/DecodeWMI.ts#L60)

## Functions

### DecodeWMI

▸ **DecodeWMI**(`WMI`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeWMIResults`](api_endpoints_DecodeWMI.md#decodewmiresults)\>\>

`DecodeWMI` provides information on the World Manufacturer Identifier for a specific `WMI` code.

`WMI` may provided as either 3 characters representing VIN position 1-3 _or_ 6 characters
representing VIN positions 1-3 & 12-14.
- Examples: "JTD" "1T9131"

A list of WMI codes can be found
[here](https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/World_Manufacturer_Identifier_(WMI)),
but keep in mind that not all of the listed WMIs are registered with NHTSA and therefore may not
be available in vPIC data sets.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `WMI` | `string` | `undefined` | World Manufacturer Identifier |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeWMIResults`](api_endpoints_DecodeWMI.md#decodewmiresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false` (default: `true`)

#### Defined in

[api/endpoints/DecodeWMI.ts:24](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/e851323/packages/lib/src/api/endpoints/DecodeWMI.ts#L24)
