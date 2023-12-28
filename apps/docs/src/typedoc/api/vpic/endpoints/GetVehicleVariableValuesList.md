**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../../../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../../../modules.md) / api/vpic/endpoints/GetVehicleVariableValuesList

# api/vpic/endpoints/GetVehicleVariableValuesList

## Contents

- [Type Aliases](GetVehicleVariableValuesList.md#type-aliases)
  - [GetVehicleVariableValuesListResults](GetVehicleVariableValuesList.md#getvehiclevariablevalueslistresults)
- [Functions](GetVehicleVariableValuesList.md#functions)
  - [GetVehicleVariableValuesList()](GetVehicleVariableValuesList.md#getvehiclevariablevalueslist)

## Type Aliases

### GetVehicleVariableValuesListResults

> **GetVehicleVariableValuesListResults**: `object`

Objects found in the `Results` array of `GetVehicleVariableValuesList` endpoint response.

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `ElementName` | `string` | - |
| `Id` | `number` | - |
| `Name` | `string` | - |

#### Source

[api/vpic/endpoints/GetVehicleVariableValuesList.ts:75](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/vpic/endpoints/GetVehicleVariableValuesList.ts#L75)

## Functions

### GetVehicleVariableValuesList()

#### GetVehicleVariableValuesList(variableValue, doFetch)

> **GetVehicleVariableValuesList**(`variableValue`, `doFetch`?): `Promise`\<[`NhtsaResponse`](../../types.md#nhtsaresponseresultstype-apitype)\<[`GetVehicleVariableValuesListResults`](GetVehicleVariableValuesList.md#getvehiclevariablevalueslistresults)\>\>

::: tip :bulb: More Information
See: [GetVehicleVariableValuesList Documentation](/guide/vpic/endpoints/get-vehicle-variable-values-list)
:::

`GetVehicleVariableValuesList` provides a list of all the accepted values for a given variable
that are stored in the vPIC dataset.

If `variableValue` is a string, it must use full name, not just part of it, e.g.,
"Battery Type", not "Battery"

`variableValue` can be also be a number, which is the ID of the variable, e.g., 1, 2, 3, etc.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `variableValue` | `string` \| `number` | The variable you want to get a values list of |
| `doFetch`? | `true` | Whether to fetch the data or just return the URL<br />(default: `true`) |

##### Returns

`Promise`\<[`NhtsaResponse`](../../types.md#nhtsaresponseresultstype-apitype)\<[`GetVehicleVariableValuesListResults`](GetVehicleVariableValuesList.md#getvehiclevariablevalueslistresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

##### Source

[api/vpic/endpoints/GetVehicleVariableValuesList.ts:29](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/vpic/endpoints/GetVehicleVariableValuesList.ts#L29)

#### GetVehicleVariableValuesList(variableValue, doFetch)

> **GetVehicleVariableValuesList**(`variableValue`, `doFetch`): `Promise`\<`string`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `variableValue` | `string` \| `number` |
| `doFetch` | `false` |

##### Returns

`Promise`\<`string`\>

##### Source

[api/vpic/endpoints/GetVehicleVariableValuesList.ts:34](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/vpic/endpoints/GetVehicleVariableValuesList.ts#L34)
