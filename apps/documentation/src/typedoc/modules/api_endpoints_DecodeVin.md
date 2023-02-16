# Module: api/endpoints/DecodeVin

## Table of contents

### Type Aliases

- [DecodeVinResults](api_endpoints_DecodeVin.md#decodevinresults)
- [DecodeVinVariable](api_endpoints_DecodeVin.md#decodevinvariable)

### Functions

- [DecodeVin](api_endpoints_DecodeVin.md#decodevin)

## Type Aliases

### DecodeVinResults

Ƭ **DecodeVinResults**: `Object`

Objects in the `Results` array of `DecodeVin` endpoint response.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Value` | `string` \| ``null`` |
| `ValueId` | `string` \| ``null`` |
| `Variable` | [`DecodeVinVariable`](api_endpoints_DecodeVin.md#decodevinvariable) |
| `VariableId` | `number` |

#### Defined in

[api/endpoints/DecodeVin.ts:120](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/DecodeVin.ts#L120)

___

### DecodeVinVariable

Ƭ **DecodeVinVariable**: ``"Suggested VIN"`` \| ``"Error Code"`` \| ``"Possible Values"`` \| ``"Additional Error Text"`` \| ``"Error Text"`` \| ``"Vehicle Descriptor"`` \| ``"Destination Market"`` \| ``"Make"`` \| ``"Manufacturer Name"`` \| ``"Model"`` \| ``"Model Year"`` \| ``"Plant City"`` \| ``"Series"`` \| ``"Trim"`` \| ``"Vehicle Type"`` \| ``"Plant Country"`` \| ``"Plant Company Name"`` \| ``"Plant State"`` \| ``"Trim2"`` \| ``"Series2"`` \| ``"Note"`` \| ``"Base Price ($)"`` \| ``"Non-Land Use"`` \| ``"Body Class"`` \| ``"Doors"`` \| ``"Windows"`` \| ``"Wheel Base Type"`` \| ``"Track Width (inches)"`` \| ``"Gross Vehicle Weight Rating From"`` \| ``"Bed Length (inches)"`` \| ``"Curb Weight (pounds)"`` \| ``"Wheel Base (inches) From"`` \| ``"Wheel Base (inches) To"`` \| ``"Gross Combination Weight Rating From"`` \| ``"Gross Combination Weight Rating To"`` \| ``"Gross Vehicle Weight Rating To"`` \| ``"Bed Type"`` \| ``"Cab Type"`` \| ``"Trailer Type Connection"`` \| ``"Trailer Body Type"`` \| ``"Trailer Length (feet)"`` \| ``"Other Trailer Info"`` \| ``"Number of Wheels"`` \| ``"Wheel Size Front (inches)"`` \| ``"Wheel Size Rear (inches)"`` \| ``"Entertainment System"`` \| ``"Steering Location"`` \| ``"Number of Seats"`` \| ``"Number of Seat Rows"`` \| ``"Transmission Style"`` \| ``"Transmission Speeds"`` \| ``"Drive Type"`` \| ``"Axles"`` \| ``"Axle Configuration"`` \| ``"Brake System Type"`` \| ``"Brake System Description"`` \| ``"Other Battery Info"`` \| ``"Battery Type"`` \| ``"Number of Battery Cells per Module"`` \| ``"Battery Current (Amps) From"`` \| ``"Battery Voltage (Volts) From"`` \| ``"Battery Energy (kWh) From"`` \| ``"EV Drive Unit"`` \| ``"Battery Current (Amps) To"`` \| ``"Battery Voltage (Volts) To"`` \| ``"Battery Energy (kWh) To"`` \| ``"Number of Battery Modules per Pack"`` \| ``"Number of Battery Packs per Vehicle"`` \| ``"Charger Level"`` \| ``"Charger Power (kW)"`` \| ``"Engine Number of Cylinders"`` \| ``"Displacement (CC)"`` \| ``"Displacement (CI)"`` \| ``"Displacement (L)"`` \| ``"Engine Stroke Cycles"`` \| ``"Engine Model"`` \| ``"Engine Power (kW)"`` \| ``"Fuel Type - Primary"`` \| ``"Valve Train Design"`` \| ``"Engine Configuration"`` \| ``"Fuel Type - Secondary"`` \| ``"Fuel Delivery / Fuel Injection Type"`` \| ``"Engine Brake (hp) From"`` \| ``"Cooling Type"`` \| ``"Engine Brake (hp) To"`` \| ``"Electrification Level"`` \| ``"Other Engine Info"`` \| ``"Turbo"`` \| ``"Top Speed (MPH)"`` \| ``"Engine Manufacturer"`` \| ``"Pretensioner"`` \| ``"Seat Belt Type"`` \| ``"Other Restraint System Info"`` \| ``"Curtain Air Bag Locations"`` \| ``"Seat Cushion Air Bag Locations"`` \| ``"Front Air Bag Locations"`` \| ``"Knee Air Bag Locations"`` \| ``"Side Air Bag Locations"`` \| ``"Anti-lock Braking System (ABS)"`` \| ``"Electronic Stability Control (ESC)"`` \| ``"Traction Control"`` \| ``"Tire Pressure Monitoring System (TPMS) Type"`` \| ``"Active Safety System Note"`` \| ``"Auto-Reverse System for Windows and Sunroofs"`` \| ``"Automatic Pedestrian Alerting Sound (for Hybrid and EV only)"`` \| ``"Event Data Recorder (EDR)"`` \| ``"Keyless Ignition"`` \| ``"SAE Automation Level From"`` \| ``"SAE Automation Level To"`` \| ``"Adaptive Cruise Control (ACC)"`` \| ``"Crash Imminent Braking (CIB)"`` \| ``"Blind Spot Warning (BSW)"`` \| ``"Forward Collision Warning (FCW)"`` \| ``"Lane Departure Warning (LDW)"`` \| ``"Lane Keeping Assistance (LKA)"`` \| ``"Backup Camera"`` \| ``"Parking Assist"`` \| ``"Bus Length (feet)"`` \| ``"Bus Floor Configuration Type"`` \| ``"Bus Type"`` \| ``"Other Bus Info"`` \| ``"Custom Motorcycle Type"`` \| ``"Motorcycle Suspension Type"`` \| ``"Motorcycle Chassis Type"`` \| ``"Other Motorcycle Info"`` \| ``"Dynamic Brake Support (DBS)"`` \| ``"Pedestrian Automatic Emergency Braking (PAEB)"`` \| ``"Automatic Crash Notification (ACN) / Advanced Automatic Crash Notification (AACN)"`` \| ``"Daytime Running Light (DRL)"`` \| ``"Headlamp Light Source"`` \| ``"Semiautomatic Headlamp Beam Switching"`` \| ``"Adaptive Driving Beam (ADB)"`` \| ``"Rear Cross Traffic Alert"`` \| ``"Rear Automatic Emergency Braking"`` \| ``"Blind Spot Intervention (BSI)"`` \| ``"Lane Centering Assistance"`` \| `string` & `Record`<`string`, `never`\>

Possible `DecodeVinResults.Variable` values for DecodeVin endpoint.

This type is here to provide a list of possible values manually extracted from an actual API
response. There are some things to note:
- Names are ordered to mirror actual API response order.
- Names have been known to change slightly or be added/removed.
- Some listed here could be missing from the API response.
- There may be more actual values than listed here.

Last Updated: 02/14/2023

#### Defined in

[api/endpoints/DecodeVin.ts:139](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/DecodeVin.ts#L139)

## Functions

### DecodeVin

▸ **DecodeVin**(`vin`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinResults`](api_endpoints_DecodeVin.md#decodevinresults)\>\>

With `vin`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vin` | `string` |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinResults`](api_endpoints_DecodeVin.md#decodevinresults)\>\>

#### Defined in

[api/endpoints/DecodeVin.ts:39](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/DecodeVin.ts#L39)

▸ **DecodeVin**(`vin`, `params`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinResults`](api_endpoints_DecodeVin.md#decodevinresults)\>\>

With `vin` + `params`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vin` | `string` |
| `params` | `Object` |
| `params.modelYear` | `string` \| `number` |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinResults`](api_endpoints_DecodeVin.md#decodevinresults)\>\>

#### Defined in

[api/endpoints/DecodeVin.ts:41](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/DecodeVin.ts#L41)

▸ **DecodeVin**(`vin`, `doFetch`, `_dummy?`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinResults`](api_endpoints_DecodeVin.md#decodevinresults)\>\>

With `vin` + `doFetch = true`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vin` | `string` |
| `doFetch` | ``true`` |
| `_dummy?` | `undefined` |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinResults`](api_endpoints_DecodeVin.md#decodevinresults)\>\>

#### Defined in

[api/endpoints/DecodeVin.ts:47](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/DecodeVin.ts#L47)

▸ **DecodeVin**(`vin`, `params`, `doFetch`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinResults`](api_endpoints_DecodeVin.md#decodevinresults)\>\>

`vin` + `params` + `doFetch = true`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vin` | `string` |
| `params` | `Object` |
| `params.modelYear` | `string` \| `number` |
| `doFetch` | ``true`` |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinResults`](api_endpoints_DecodeVin.md#decodevinresults)\>\>

#### Defined in

[api/endpoints/DecodeVin.ts:53](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/DecodeVin.ts#L53)

▸ **DecodeVin**(`vin`, `doFetch`, `_dummy?`): `Promise`<`string`\>

With `vin` + `doFetch = false`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vin` | `string` |
| `doFetch` | ``false`` |
| `_dummy?` | `undefined` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/DecodeVin.ts:60](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/DecodeVin.ts#L60)

▸ **DecodeVin**(`vin`, `params`, `doFetch`): `Promise`<`string`\>

With `vin` + `params` + `doFetch = false`

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

[api/endpoints/DecodeVin.ts:66](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/DecodeVin.ts#L66)
