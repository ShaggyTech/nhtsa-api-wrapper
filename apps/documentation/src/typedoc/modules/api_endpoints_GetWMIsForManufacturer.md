# Module: api/endpoints/GetWMIsForManufacturer

## Table of contents

### Type Aliases

- [GetWMIsForManufacturerResults](api_endpoints_GetWMIsForManufacturer.md#getwmisformanufacturerresults)

### Functions

- [GetWMIsForManufacturer](api_endpoints_GetWMIsForManufacturer.md#getwmisformanufacturer)

## Type Aliases

### GetWMIsForManufacturerResults

Ƭ **GetWMIsForManufacturerResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetWMIsForManufacturer endpoint

**`Alias`**

GetWMIsForManufacturerResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Country` | `string` \| ``null`` |
| `CreatedOn` | `string` |
| `DateAvailableToPublic` | `string` |
| `Id` | `number` |
| `Name` | `string` |
| `UpdatedOn` | `string` |
| `VehicleType` | `string` |
| `WMI` | `string` |

#### Defined in

[api/endpoints/GetWMIsForManufacturer.ts:94](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/GetWMIsForManufacturer.ts#L94)

## Functions

### GetWMIsForManufacturer

▸ **GetWMIsForManufacturer**(`params?`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetWMIsForManufacturerResults`](api_endpoints_GetWMIsForManufacturer.md#getwmisformanufacturerresults)\>\>

`GetWMIsForManufacturer` provides information on the World Manufacturer Identifier (WMI) for a
specified `manufacturer`. Only WMIs registered in vPICList are displayed. Multiple results are
returned in case of multiple matches.

Both `manufacturer` and `vehicleType` are optional but at least one must be provided.

`manufacturer` can be a partial name, or a full name for more specificity, or WMI ID number,
 e.g., "Merc", "Mercedes Benz", 987, etc.
- If `manufacturer` is a number - method will do exact match on Manufacturer's Id
- If `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided
  name (it accepts a partial Manufacturer name as an input)

`vehicleType` can be a string or number, e.g., "car", 1, etc.
- If `vehicleType` is a number - method will do exact match on VehicleType's Id
- If `vehicleType` is a string - it will look for VehicleType whose name is LIKE the provided
  name (it accepts a partial VehicleType name as an input).

For this endpoint, `manufacturer` is actually part of the path string, not a query param. We
include `manufacturer` in params as it's easier to type the function args using the 'AtLeastOne'
type if they are placed in the same object (params). This can cause confusion as it's not
consistent with other endpoint methods where path string is the first arg, and the query params
are the second arg.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `params?` | [`AtLeastOne`](utils_types.md#atleastone)<{ `manufacturer?`: `string` \| `number` ; `vehicleType?`: `string` \| `number`  }, ``"manufacturer"`` \| ``"vehicleType"``\> | `undefined` | Object of Query Search names and values to append to the URL as a query string |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetWMIsForManufacturerResults`](api_endpoints_GetWMIsForManufacturer.md#getwmisformanufacturerresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetWMIsForManufacturer.ts:39](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/GetWMIsForManufacturer.ts#L39)
