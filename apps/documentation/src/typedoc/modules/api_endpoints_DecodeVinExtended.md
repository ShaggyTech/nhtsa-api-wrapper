# Module: api/endpoints/DecodeVinExtended

## Table of contents

### Type Aliases

- [DecodeVinExtendedResults](api_endpoints_DecodeVinExtended.md#decodevinextendedresults)
- [DecodeVinExtendedVariable](api_endpoints_DecodeVinExtended.md#decodevinextendedvariable)

### Functions

- [DecodeVinExtended](api_endpoints_DecodeVinExtended.md#decodevinextended)

## Type Aliases

### DecodeVinExtendedResults

Ƭ **DecodeVinExtendedResults**: `Object`

Objects in the `Results` array of `DecodeVinExtended` endpoint response.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Value` | `string` \| ``null`` |
| `ValueId` | `string` \| ``null`` |
| `Variable` | [`DecodeVinExtendedVariable`](api_endpoints_DecodeVinExtended.md#decodevinextendedvariable) \| `string` |
| `VariableId` | `number` |

#### Defined in

[api/endpoints/DecodeVinExtended.ts:123](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/DecodeVinExtended.ts#L123)

___

### DecodeVinExtendedVariable

Ƭ **DecodeVinExtendedVariable**: ``"Suggested VIN"`` \| ``"Error Code"`` \| ``"Possible Values"`` \| ``"Additional Error Text"`` \| ``"Error Text"`` \| ``"Vehicle Descriptor"`` \| ``"Destination Market"`` \| ``"Make"`` \| ``"Manufacturer Name"`` \| ``"Model"`` \| ``"Model Year"`` \| ``"Plant City"`` \| ``"Series"`` \| ``"Trim"`` \| ``"Vehicle Type"`` \| ``"Plant Country"`` \| ``"Plant Company Name"`` \| ``"Plant State"`` \| ``"Trim2"`` \| ``"Series2"`` \| ``"Note"`` \| ``"Base Price ($)"`` \| ``"Non-Land Use"`` \| ``"Body Class"`` \| ``"Doors"`` \| ``"Windows"`` \| ``"Wheel Base Type"`` \| ``"Track Width (inches)"`` \| ``"Gross Vehicle Weight Rating From"`` \| ``"Bed Length (inches)"`` \| ``"Curb Weight (pounds)"`` \| ``"Wheel Base (inches) From"`` \| ``"Wheel Base (inches) To"`` \| ``"Gross Combination Weight Rating From"`` \| ``"Gross Combination Weight Rating To"`` \| ``"Gross Vehicle Weight Rating To"`` \| ``"Bed Type"`` \| ``"Cab Type"`` \| ``"Trailer Type Connection"`` \| ``"Trailer Body Type"`` \| ``"Trailer Length (feet)"`` \| ``"Other Trailer Info"`` \| ``"Number of Wheels"`` \| ``"Wheel Size Front (inches)"`` \| ``"Wheel Size Rear (inches)"`` \| ``"Entertainment System"`` \| ``"Steering Location"`` \| ``"Number of Seats"`` \| ``"Number of Seat Rows"`` \| ``"Transmission Style"`` \| ``"Transmission Speeds"`` \| ``"Drive Type"`` \| ``"Axles"`` \| ``"Axle Configuration"`` \| ``"Brake System Type"`` \| ``"Brake System Description"`` \| ``"Other Battery Info"`` \| ``"Battery Type"`` \| ``"Number of Battery Cells per Module"`` \| ``"Battery Current (Amps) From"`` \| ``"Battery Voltage (Volts) From"`` \| ``"Battery Energy (kWh) From"`` \| ``"EV Drive Unit"`` \| ``"Battery Current (Amps) To"`` \| ``"Battery Voltage (Volts) To"`` \| ``"Battery Energy (kWh) To"`` \| ``"Number of Battery Modules per Pack"`` \| ``"Number of Battery Packs per Vehicle"`` \| ``"Charger Level"`` \| ``"Charger Power (kW)"`` \| ``"Engine Number of Cylinders"`` \| ``"Displacement (CC)"`` \| ``"Displacement (CI)"`` \| ``"Displacement (L)"`` \| ``"Engine Stroke Cycles"`` \| ``"Engine Model"`` \| ``"Engine Power (kW)"`` \| ``"Fuel Type - Primary"`` \| ``"Valve Train Design"`` \| ``"Engine Configuration"`` \| ``"Fuel Type - Secondary"`` \| ``"Fuel Delivery / Fuel Injection Type"`` \| ``"Engine Brake (hp) From"`` \| ``"Cooling Type"`` \| ``"Engine Brake (hp) To"`` \| ``"Electrification Level"`` \| ``"Other Engine Info"`` \| ``"Turbo"`` \| ``"Top Speed (MPH)"`` \| ``"Engine Manufacturer"`` \| ``"Pretensioner"`` \| ``"Seat Belt Type"`` \| ``"Other Restraint System Info"`` \| ``"Curtain Air Bag Locations"`` \| ``"Seat Cushion Air Bag Locations"`` \| ``"Front Air Bag Locations"`` \| ``"Knee Air Bag Locations"`` \| ``"Side Air Bag Locations"`` \| ``"Anti-lock Braking System (ABS)"`` \| ``"Electronic Stability Control (ESC)"`` \| ``"Traction Control"`` \| ``"Tire Pressure Monitoring System (TPMS) Type"`` \| ``"Active Safety System Note"`` \| ``"Auto-Reverse System for Windows and Sunroofs"`` \| ``"Automatic Pedestrian Alerting Sound (for Hybrid and EV only)"`` \| ``"Event Data Recorder (EDR)"`` \| ``"Keyless Ignition"`` \| ``"SAE Automation Level From"`` \| ``"SAE Automation Level To"`` \| ``"NCSA Body Type"`` \| ``"NCSA Make"`` \| ``"NCSA Model"`` \| ``"NCSA Note"`` \| ``"Adaptive Cruise Control (ACC)"`` \| ``"Crash Imminent Braking (CIB)"`` \| ``"Blind Spot Warning (BSW)"`` \| ``"Forward Collision Warning (FCW)"`` \| ``"Lane Departure Warning (LDW)"`` \| ``"Lane Keeping Assistance (LKA)"`` \| ``"Backup Camera"`` \| ``"Parking Assist"`` \| ``"Bus Length (feet)"`` \| ``"Bus Floor Configuration Type"`` \| ``"Bus Type"`` \| ``"Other Bus Info"`` \| ``"Custom Motorcycle Type"`` \| ``"Motorcycle Suspension Type"`` \| ``"Motorcycle Chassis Type"`` \| ``"Other Motorcycle Info"`` \| ``"Dynamic Brake Support (DBS)"`` \| ``"Pedestrian Automatic Emergency Braking (PAEB)"`` \| ``"Automatic Crash Notification (ACN) / Advanced Automatic Crash Notification (AACN)"`` \| ``"Daytime Running Light (DRL)"`` \| ``"Headlamp Light Source"`` \| ``"Semiautomatic Headlamp Beam Switching"`` \| ``"Adaptive Driving Beam (ADB)"`` \| ``"Rear Cross Traffic Alert"`` \| ``"Rear Automatic Emergency Braking"`` \| ``"Blind Spot Intervention (BSI)"`` \| ``"Lane Centering Assistance"`` \| `string` & `Record`<`string`, `never`\>

Possible `DecodeVinExtendedResults.Variable` values for DecodeVinExtended endpoint.

This type is here to provide a list of possible values manually extracted from an actual API
response. There are some things to note:
- Names are ordered to mirror actual API response order.
- Names have been known to change slightly or be added/removed.
- Some listed here could be missing from the API response.
- There may be more actual values than listed here.

Last Updated: 02/14/2023

#### Defined in

[api/endpoints/DecodeVinExtended.ts:142](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/DecodeVinExtended.ts#L142)

## Functions

### DecodeVinExtended

▸ **DecodeVinExtended**(`vin`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinExtendedResults`](api_endpoints_DecodeVinExtended.md#decodevinextendedresults)\>\>

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vin` | `string` | Vehicle Identification Number (full or partial) |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinExtendedResults`](api_endpoints_DecodeVinExtended.md#decodevinextendedresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false` (default: `true`)

#### Defined in

[api/endpoints/DecodeVinExtended.ts:44](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/DecodeVinExtended.ts#L44)

▸ **DecodeVinExtended**(`vin`, `params`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinExtendedResults`](api_endpoints_DecodeVinExtended.md#decodevinextendedresults)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vin` | `string` |
| `params` | `Object` |
| `params.modelYear` | `string` \| `number` |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinExtendedResults`](api_endpoints_DecodeVinExtended.md#decodevinextendedresults)\>\>

#### Defined in

[api/endpoints/DecodeVinExtended.ts:47](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/DecodeVinExtended.ts#L47)

▸ **DecodeVinExtended**(`vin`, `params`, `doFetch`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinExtendedResults`](api_endpoints_DecodeVinExtended.md#decodevinextendedresults)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vin` | `string` |
| `params` | `Object` |
| `params.modelYear` | `string` \| `number` |
| `doFetch` | ``true`` |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinExtendedResults`](api_endpoints_DecodeVinExtended.md#decodevinextendedresults)\>\>

#### Defined in

[api/endpoints/DecodeVinExtended.ts:53](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/DecodeVinExtended.ts#L53)

▸ **DecodeVinExtended**(`vin`, `doFetch`, `_dummy?`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinExtendedResults`](api_endpoints_DecodeVinExtended.md#decodevinextendedresults)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vin` | `string` |
| `doFetch` | ``true`` |
| `_dummy?` | `undefined` |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinExtendedResults`](api_endpoints_DecodeVinExtended.md#decodevinextendedresults)\>\>

#### Defined in

[api/endpoints/DecodeVinExtended.ts:58](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/DecodeVinExtended.ts#L58)

▸ **DecodeVinExtended**(`vin`, `params`, `doFetch`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vin` | `string` |
| `params` | `Object` |
| `params.modelYear` | `string` \| `number` |
| `doFetch` | ``false`` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/DecodeVinExtended.ts:65](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/DecodeVinExtended.ts#L65)

▸ **DecodeVinExtended**(`vin`, `doFetch`, `_dummy?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vin` | `string` |
| `doFetch` | ``false`` |
| `_dummy?` | `undefined` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/DecodeVinExtended.ts:70](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/DecodeVinExtended.ts#L70)
