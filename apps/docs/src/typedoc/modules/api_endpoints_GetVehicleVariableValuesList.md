[@shaggytools/nhtsa-api-wrapper - v3.0.3](../index.md) / [Exports](../modules.md) / api/endpoints/GetVehicleVariableValuesList

# Module: api/endpoints/GetVehicleVariableValuesList

## Table of contents

### Type Aliases

- [GetVehicleVariableValuesListResults](api_endpoints_GetVehicleVariableValuesList.md#getvehiclevariablevalueslistresults)

### Functions

- [GetVehicleVariableValuesList](api_endpoints_GetVehicleVariableValuesList.md#getvehiclevariablevalueslist)

## Type Aliases

### GetVehicleVariableValuesListResults

Ƭ **GetVehicleVariableValuesListResults**: `Object`

Objects found in the `Results` array of `GetVehicleVariableValuesList` endpoint response.

#### Type declaration

| Name          | Type     |
| :------------ | :------- |
| `ElementName` | `string` |
| `Id`          | `number` |
| `Name`        | `string` |

#### Defined in

[api/endpoints/GetVehicleVariableValuesList.ts:75](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetVehicleVariableValuesList.ts#L75)

## Functions

### GetVehicleVariableValuesList

▸ **GetVehicleVariableValuesList**(`variableValue`, `doFetch?`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetVehicleVariableValuesListResults`](api_endpoints_GetVehicleVariableValuesList.md#getvehiclevariablevalueslistresults)\>\>

::: tip :bulb: More Information
See: [GetVehicleVariableValuesList Documentation](/api/endpoints/get-vehicle-variable-values-list)
:::

`GetVehicleVariableValuesList` provides a list of all the accepted values for a given variable
that are stored in the vPIC dataset.

If `variableValue` is a string, it must use full name, not just part of it, e.g.,
"Battery Type", not "Battery"

`variableValue` can be also be a number, which is the ID of the variable, e.g., 1, 2, 3, etc.

#### Parameters

| Name            | Type                 | Description                                                        |
| :-------------- | :------------------- | :----------------------------------------------------------------- |
| `variableValue` | `string` \| `number` | The variable you want to get a values list of                      |
| `doFetch?`      | `true`               | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetVehicleVariableValuesListResults`](api_endpoints_GetVehicleVariableValuesList.md#getvehiclevariablevalueslistresults)\>\>

- Api Response
  `object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetVehicleVariableValuesList.ts:29](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetVehicleVariableValuesList.ts#L29)

▸ **GetVehicleVariableValuesList**(`variableValue`, `doFetch`): `Promise`<`string`\>

#### Parameters

| Name            | Type                 |
| :-------------- | :------------------- |
| `variableValue` | `string` \| `number` |
| `doFetch`       | `false`              |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/GetVehicleVariableValuesList.ts:34](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetVehicleVariableValuesList.ts#L34)
