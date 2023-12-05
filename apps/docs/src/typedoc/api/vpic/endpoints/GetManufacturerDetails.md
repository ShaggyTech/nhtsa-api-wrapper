**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../../../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../../../modules.md) / api/vpic/endpoints/GetManufacturerDetails

# api/vpic/endpoints/GetManufacturerDetails

## Contents

- [Type Aliases](GetManufacturerDetails.md#type-aliases)
  - [GetManufacturerDetailsResults](GetManufacturerDetails.md#getmanufacturerdetailsresults)
- [Functions](GetManufacturerDetails.md#functions)
  - [GetManufacturerDetails()](GetManufacturerDetails.md#getmanufacturerdetails)

## Type Aliases

### GetManufacturerDetailsResults

> **GetManufacturerDetailsResults**: `object`

Objects found in the `Results` array of `GetManufacturerDetails` endpoint response.

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `Address` | `string` \| `null` | - |
| `Address2` | `string` \| `null` | - |
| `City` | `string` \| `null` | - |
| `ContactEmail` | `string` \| `null` | - |
| `ContactFax` | `string` \| `null` | - |
| `ContactPhone` | `string` \| `null` | - |
| `Country` | `string` \| `null` | - |
| `DBAs` | `string` \| `null` | - |
| `EquipmentItems` | `unknown`[] | - |
| `LastUpdated` | `string` | - |
| `ManufacturerTypes` | `object`[] | - |
| `Mfr_CommonName` | `string` \| `null` | - |
| `Mfr_ID` | `number` \| `null` | - |
| `Mfr_Name` | `string` \| `null` | - |
| `OtherManufacturerDetails` | `string` \| `null` | - |
| `PostalCode` | `string` \| `null` | - |
| `PrimaryProduct` | `string` \| `null` | - |
| `PrincipalFirstName` | `string` \| `null` | - |
| `PrincipalLastName` | `string` \| `null` | - |
| `PrincipalPosition` | `string` \| `null` | - |
| `StateProvince` | `string` \| `null` | - |
| `SubmittedName` | `string` \| `null` | - |
| `SubmittedOn` | `string` | - |
| `SubmittedPosition` | `string` \| `null` | - |
| `VehicleTypes` | `object`[] | - |

#### Source

[api/vpic/endpoints/GetManufacturerDetails.ts:77](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/vpic/endpoints/GetManufacturerDetails.ts#L77)

## Functions

### GetManufacturerDetails()

#### GetManufacturerDetails(manufacturer, doFetch)

> **GetManufacturerDetails**(`manufacturer`, `doFetch`?): `Promise`\<[`NhtsaResponse`](../../types.md#nhtsaresponseresultstype-apitype)\<[`GetManufacturerDetailsResults`](GetManufacturerDetails.md#getmanufacturerdetailsresults)\>\>

::: tip :bulb: More Information
See: [GetMakesForVehicleType Documentation](/guide/vpic/endpoints/get-makes-for-vehicle-type)
:::

`GetManufacturerDetails` provides the details for a specific manufacturer that is requested.
Multiple results are returned in case of multiple matches.

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

`Promise`\<[`NhtsaResponse`](../../types.md#nhtsaresponseresultstype-apitype)\<[`GetManufacturerDetailsResults`](GetManufacturerDetails.md#getmanufacturerdetailsresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

##### Source

[api/vpic/endpoints/GetManufacturerDetails.ts:31](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/vpic/endpoints/GetManufacturerDetails.ts#L31)

#### GetManufacturerDetails(manufacturer, doFetch)

> **GetManufacturerDetails**(`manufacturer`, `doFetch`): `Promise`\<`string`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `manufacturer` | `string` \| `number` |
| `doFetch` | `false` |

##### Returns

`Promise`\<`string`\>

##### Source

[api/vpic/endpoints/GetManufacturerDetails.ts:36](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/vpic/endpoints/GetManufacturerDetails.ts#L36)
