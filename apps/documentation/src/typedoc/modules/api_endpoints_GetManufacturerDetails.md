[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / api/endpoints/GetManufacturerDetails

# Module: api/endpoints/GetManufacturerDetails

## Table of contents

### Functions

- [GetManufacturerDetails](api_endpoints_GetManufacturerDetails.md#getmanufacturerdetails)

### Type Aliases

- [GetManufacturerDetailsResults](api_endpoints_GetManufacturerDetails.md#getmanufacturerdetailsresults)

## Functions

### GetManufacturerDetails

▸ **GetManufacturerDetails**(`manufacturer`, `doFetch?`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetManufacturerDetailsResults`](api_endpoints_GetManufacturerDetails.md#getmanufacturerdetailsresults)\>\>

::: tip :bulb: More Information
See: [GetMakesForVehicleType Documentation](/api/get-makes-for-vehicle-type)
:::

`GetManufacturerDetails` provides the details for a specific manufacturer that is requested.
Multiple results are returned in case of multiple matches.

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

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetManufacturerDetailsResults`](api_endpoints_GetManufacturerDetails.md#getmanufacturerdetailsresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetManufacturerDetails.ts:31](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetManufacturerDetails.ts#L31)

▸ **GetManufacturerDetails**(`manufacturer`, `doFetch`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `manufacturer` | `string` \| `number` |
| `doFetch` | ``false`` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/GetManufacturerDetails.ts:36](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetManufacturerDetails.ts#L36)

## Type Aliases

### GetManufacturerDetailsResults

Ƭ **GetManufacturerDetailsResults**: `Object`

Objects found in the `Results` array of `GetManufacturerDetails` endpoint response.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Address` | `string` \| ``null`` |
| `Address2` | `string` \| ``null`` |
| `City` | `string` \| ``null`` |
| `ContactEmail` | `string` \| ``null`` |
| `ContactFax` | `string` \| ``null`` |
| `ContactPhone` | `string` \| ``null`` |
| `Country` | `string` \| ``null`` |
| `DBAs` | `string` \| ``null`` |
| `EquipmentItems` | `unknown`[] |
| `LastUpdated` | `string` |
| `ManufacturerTypes` | { `Name`: `string`  }[] |
| `Mfr_CommonName` | `string` \| ``null`` |
| `Mfr_ID` | `number` \| ``null`` |
| `Mfr_Name` | `string` \| ``null`` |
| `OtherManufacturerDetails` | `string` \| ``null`` |
| `PostalCode` | `string` \| ``null`` |
| `PrimaryProduct` | `string` \| ``null`` |
| `PrincipalFirstName` | `string` \| ``null`` |
| `PrincipalLastName` | `string` \| ``null`` |
| `PrincipalPosition` | `string` \| ``null`` |
| `StateProvince` | `string` \| ``null`` |
| `SubmittedName` | `string` \| ``null`` |
| `SubmittedOn` | `string` |
| `SubmittedPosition` | `string` \| ``null`` |
| `VehicleTypes` | { `GVWRFrom`: `string` ; `GVWRTo`: `string` ; `IsPrimary`: `boolean` ; `Name`: `string`  }[] |

#### Defined in

[api/endpoints/GetManufacturerDetails.ts:77](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetManufacturerDetails.ts#L77)
