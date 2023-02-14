[@shaggytools/nhtsa-api-wrapper](../README.md) / [Exports](../modules.md) / api/endpoints/GetVehicleVariableValuesList

# Module: api/endpoints/GetVehicleVariableValuesList

## Table of contents

### Type Aliases

- [GetVehicleVariableValuesListResults](api_endpoints_GetVehicleVariableValuesList.md#getvehiclevariablevalueslistresults)

### Functions

- [GetVehicleVariableValuesList](api_endpoints_GetVehicleVariableValuesList.md#getvehiclevariablevalueslist)

## Type Aliases

### GetVehicleVariableValuesListResults

Ƭ **GetVehicleVariableValuesListResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetVehicleVariableValuesList endpoint

**`Alias`**

GetVehicleVariableValuesListResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ElementName` | `string` |
| `Id` | `number` |
| `Name` | `string` |

#### Defined in

[api/endpoints/GetVehicleVariableValuesList.ts:56](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/e851323/packages/lib/src/api/endpoints/GetVehicleVariableValuesList.ts#L56)

## Functions

### GetVehicleVariableValuesList

▸ **GetVehicleVariableValuesList**(`variableValue`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetVehicleVariableValuesListResults`](api_endpoints_GetVehicleVariableValuesList.md#getvehiclevariablevalueslistresults)\>\>

`GetVehicleVariableValuesList` provides a list of all the accepted values for a given variable
that are stored in the vPIC dataset.

If `variableValue` is a string, it must use full name, not just part of it, e.g.,
"Battery Type", not "Battery"

`variableValue` can be also be a number, which is the ID of the variable, e.g., 1, 2, 3, etc.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `variableValue` | `string` \| `number` | `undefined` | The variable you want to get a values list of |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetVehicleVariableValuesListResults`](api_endpoints_GetVehicleVariableValuesList.md#getvehiclevariablevalueslistresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetVehicleVariableValuesList.ts:20](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/e851323/packages/lib/src/api/endpoints/GetVehicleVariableValuesList.ts#L20)
