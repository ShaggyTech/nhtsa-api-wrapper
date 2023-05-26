[@shaggytools/nhtsa-api-wrapper - v3.0.3](../index.md) / [Exports](../modules.md) / api/endpoints/GetWMIsForManufacturer

# Module: api/endpoints/GetWMIsForManufacturer

## Table of contents

### Type Aliases

- [GetWMIsForManufacturerResults](api_endpoints_GetWMIsForManufacturer.md#getwmisformanufacturerresults)

### Functions

- [GetWMIsForManufacturer](api_endpoints_GetWMIsForManufacturer.md#getwmisformanufacturer)

## Type Aliases

### GetWMIsForManufacturerResults

Ƭ **GetWMIsForManufacturerResults**: `Object`

Objects found in the `Results` array of `GetWMIsForManufacturer` endpoint response.

#### Type declaration

| Name                    | Type               |
| :---------------------- | :----------------- |
| `Country`               | `string` \| `null` |
| `CreatedOn`             | `string`           |
| `DateAvailableToPublic` | `string`           |
| `Id`                    | `number`           |
| `Name`                  | `string`           |
| `UpdatedOn`             | `string`           |
| `VehicleType`           | `string`           |
| `WMI`                   | `string`           |

#### Defined in

[api/endpoints/GetWMIsForManufacturer.ts:123](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetWMIsForManufacturer.ts#L123)

## Functions

### GetWMIsForManufacturer

▸ **GetWMIsForManufacturer**(`params?`, `doFetch?`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetWMIsForManufacturerResults`](api_endpoints_GetWMIsForManufacturer.md#getwmisformanufacturerresults)\>\>

::: tip :bulb: More Information
See: [GetWMIsForManufacturer Documentation](/api/endpoints/get-wmis-for-manufacturer)
:::

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

_NOTE_: For this endpoint, `manufacturer` is actually part of the path string, not a query param.
We include `manufacturer` in params as it's easier to type the function args using the
'AtLeastOne' type if they are placed in the same object (params). This can cause confusion as
it's not consistent with other endpoint methods where path string is the first arg, and the query
params are the second arg.

#### Parameters

| Name       | Type                                                                                                                         | Description                                                                    |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| `params?`  | [`AtLeastOne`](utils_types.md#atleastone)<{ `manufacturer?`: `string` \| `number` ; `vehicleType?`: `string` \| `number` }\> | Object of Query Search names and values to append to the URL as a query string |
| `doFetch?` | `true`                                                                                                                       | Whether to fetch the data or just return the URL (default: `true`)             |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetWMIsForManufacturerResults`](api_endpoints_GetWMIsForManufacturer.md#getwmisformanufacturerresults)\>\>

- Api Response
  `object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetWMIsForManufacturer.ts:48](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetWMIsForManufacturer.ts#L48)

▸ **GetWMIsForManufacturer**(`params`, `doFetch`): `Promise`<`string`\>

#### Parameters

| Name      | Type                                                                                                                         |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------- |
| `params`  | [`AtLeastOne`](utils_types.md#atleastone)<{ `manufacturer?`: `string` \| `number` ; `vehicleType?`: `string` \| `number` }\> |
| `doFetch` | `false`                                                                                                                      |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/GetWMIsForManufacturer.ts:56](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetWMIsForManufacturer.ts#L56)
