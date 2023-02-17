[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / api/endpoints/DecodeVinValues

# Module: api/endpoints/DecodeVinValues

## Table of contents

### Functions

- [DecodeVinValues](api_endpoints_DecodeVinValues.md#decodevinvalues)

### Type Aliases

- [DecodeVinValuesResults](api_endpoints_DecodeVinValues.md#decodevinvaluesresults)

## Functions

### DecodeVinValues

▸ **DecodeVinValues**(`vin`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinValuesResults`](api_endpoints_DecodeVinValues.md#decodevinvaluesresults)\>\>

::: tip :bulb: More Information
See: [DecodeVinValues Documentation](/api/decode-vin-values)
:::

`DecodeVinValues` decodes a Vehicle Identification Number (VIN) and returns useful information
about the vehicle in in a _flat format_. This means the endpoint will return an array with a
single object of results. Each key in the object is the name of a variable.

Providing `params.modelYear` allows for the decoding to specifically be done in the current, or
older (pre-1980), model year ranges. It is recommended to always provide `params.modelYear` if
the model year is known at the time of decoding, but it is not required.

This endpoint also supports partial VIN decoding (VINs that are less than 17 characters).
  - Ex: "5UXWX7C5*BA"
  - In this case, the VIN will be decoded partially with the available characters
  - In case of partial VINs, a `*` could be used to indicate the unavailable characters
  - The 9th digit is not necessary

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vin` | `string` | Vehicle Identification Number (full or partial) |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinValuesResults`](api_endpoints_DecodeVinValues.md#decodevinvaluesresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/DecodeVinValues.ts:37](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/19d28b5/packages/lib/src/api/endpoints/DecodeVinValues.ts#L37)

▸ **DecodeVinValues**(`vin`, `params`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinValuesResults`](api_endpoints_DecodeVinValues.md#decodevinvaluesresults)\>\>

### Overload: `vin` + `params`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vin` | `string` |
| `params` | `Object` |
| `params.modelYear` | `string` \| `number` |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinValuesResults`](api_endpoints_DecodeVinValues.md#decodevinvaluesresults)\>\>

#### Defined in

[api/endpoints/DecodeVinValues.ts:43](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/19d28b5/packages/lib/src/api/endpoints/DecodeVinValues.ts#L43)

▸ **DecodeVinValues**(`vin`, `doFetch`, `_dummy?`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinValuesResults`](api_endpoints_DecodeVinValues.md#decodevinvaluesresults)\>\>

### Overload: `vin` + `doFetch = true`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vin` | `string` |
| `doFetch` | ``true`` |
| `_dummy?` | `undefined` |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinValuesResults`](api_endpoints_DecodeVinValues.md#decodevinvaluesresults)\>\>

#### Defined in

[api/endpoints/DecodeVinValues.ts:50](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/19d28b5/packages/lib/src/api/endpoints/DecodeVinValues.ts#L50)

▸ **DecodeVinValues**(`vin`, `params`, `doFetch`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinValuesResults`](api_endpoints_DecodeVinValues.md#decodevinvaluesresults)\>\>

### Overload: `vin` + `params` + `doFetch = true`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vin` | `string` |
| `params` | `Object` |
| `params.modelYear` | `string` \| `number` |
| `doFetch` | ``true`` |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`DecodeVinValuesResults`](api_endpoints_DecodeVinValues.md#decodevinvaluesresults)\>\>

#### Defined in

[api/endpoints/DecodeVinValues.ts:58](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/19d28b5/packages/lib/src/api/endpoints/DecodeVinValues.ts#L58)

▸ **DecodeVinValues**(`vin`, `doFetch`, `_dummy?`): `Promise`<`string`\>

### Overload: `vin` + `doFetch = false`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vin` | `string` |
| `doFetch` | ``false`` |
| `_dummy?` | `undefined` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/DecodeVinValues.ts:66](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/19d28b5/packages/lib/src/api/endpoints/DecodeVinValues.ts#L66)

▸ **DecodeVinValues**(`vin`, `params`, `doFetch`): `Promise`<`string`\>

### Overload: `vin` + `params` + `doFetch = false`

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

[api/endpoints/DecodeVinValues.ts:74](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/19d28b5/packages/lib/src/api/endpoints/DecodeVinValues.ts#L74)

## Type Aliases

### DecodeVinValuesResults

Ƭ **DecodeVinValuesResults**: `Object`

Single object found in the `Results` array of `DecodeVinValues` endpoint response.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ABS` | `string` |
| `ActiveSafetySysNote` | `string` |
| `AdaptiveCruiseControl` | `string` |
| `AdaptiveDrivingBeam` | `string` |
| `AdaptiveHeadlights` | `string` |
| `AdditionalErrorText` | `string` |
| `AirBagLocCurtain` | `string` |
| `AirBagLocFront` | `string` |
| `AirBagLocKnee` | `string` |
| `AirBagLocSeatCushion` | `string` |
| `AirBagLocSide` | `string` |
| `AutoReverseSystem` | `string` |
| `AutomaticPedestrianAlertingSound` | `string` |
| `AxleConfiguration` | `string` |
| `Axles` | `string` |
| `BasePrice` | `string` |
| `BatteryA` | `string` |
| `BatteryA_to` | `string` |
| `BatteryCells` | `string` |
| `BatteryInfo` | `string` |
| `BatteryKWh` | `string` |
| `BatteryKWh_to` | `string` |
| `BatteryModules` | `string` |
| `BatteryPacks` | `string` |
| `BatteryType` | `string` |
| `BatteryV` | `string` |
| `BatteryV_to` | `string` |
| `BedLengthIN` | `string` |
| `BedType` | `string` |
| `BlindSpotIntervention` | `string` |
| `BlindSpotMon` | `string` |
| `BodyCabType` | `string` |
| `BodyClass` | `string` |
| `BrakeSystemDesc` | `string` |
| `BrakeSystemType` | `string` |
| `BusFloorConfigType` | `string` |
| `BusLength` | `string` |
| `BusType` | `string` |
| `CAN_AACN` | `string` |
| `CIB` | `string` |
| `CashForClunkers` | `string` |
| `ChargerLevel` | `string` |
| `ChargerPowerKW` | `string` |
| `CoolingType` | `string` |
| `CurbWeightLB` | `string` |
| `CustomMotorcycleType` | `string` |
| `DaytimeRunningLight` | `string` |
| `DestinationMarket` | `string` |
| `DisplacementCC` | `string` |
| `DisplacementCI` | `string` |
| `DisplacementL` | `string` |
| `Doors` | `string` |
| `DriveType` | `string` |
| `DriverAssist` | `string` |
| `DynamicBrakeSupport` | `string` |
| `EDR` | `string` |
| `ESC` | `string` |
| `EVDriveUnit` | `string` |
| `ElectrificationLevel` | `string` |
| `EngineConfiguration` | `string` |
| `EngineCycles` | `string` |
| `EngineCylinders` | `string` |
| `EngineHP` | `string` |
| `EngineHP_to` | `string` |
| `EngineKW` | `string` |
| `EngineManufacturer` | `string` |
| `EngineModel` | `string` |
| `EntertainmentSystem` | `string` |
| `ErrorCode` | `string` |
| `ErrorText` | `string` |
| `ForwardCollisionWarning` | `string` |
| `FuelInjectionType` | `string` |
| `FuelTypePrimary` | `string` |
| `FuelTypeSecondary` | `string` |
| `GCWR` | `string` |
| `GCWR_to` | `string` |
| `GVWR` | `string` |
| `GVWR_to` | `string` |
| `KeylessIgnition` | `string` |
| `LaneCenteringAssistance` | `string` |
| `LaneDepartureWarning` | `string` |
| `LaneKeepSystem` | `string` |
| `LowerBeamHeadlampLightSource` | `string` |
| `Make` | `string` |
| `MakeID` | `string` |
| `Manufacturer` | `string` |
| `ManufacturerId` | `string` |
| `Model` | `string` |
| `ModelID` | `string` |
| `ModelYear` | `string` |
| `MotorcycleChassisType` | `string` |
| `MotorcycleSuspensionType` | `string` |
| `NCSABodyType` | `string` |
| `NCSAMake` | `string` |
| `NCSAMapExcApprovedBy` | `string` |
| `NCSAMapExcApprovedOn` | `string` |
| `NCSAMappingException` | `string` |
| `NCSAModel` | `string` |
| `NCSANote` | `string` |
| `NonLandUse` | `string` |
| `Note` | `string` |
| `OtherBusInfo` | `string` |
| `OtherEngineInfo` | `string` |
| `OtherMotorcycleInfo` | `string` |
| `OtherRestraintSystemInfo` | `string` |
| `OtherTrailerInfo` | `string` |
| `ParkAssist` | `string` |
| `PedestrianAutomaticEmergencyBraking` | `string` |
| `PlantCity` | `string` |
| `PlantCompanyName` | `string` |
| `PlantCountry` | `string` |
| `PlantState` | `string` |
| `PossibleValues` | `string` |
| `Pretensioner` | `string` |
| `RearAutomaticEmergencyBraking` | `string` |
| `RearCrossTrafficAlert` | `string` |
| `RearVisibilitySystem` | `string` |
| `SAEAutomationLevel` | `string` |
| `SAEAutomationLevel_to` | `string` |
| `SeatBeltsAll` | `string` |
| `SeatRows` | `string` |
| `Seats` | `string` |
| `SemiautomaticHeadlampBeamSwitching` | `string` |
| `Series` | `string` |
| `Series2` | `string` |
| `SteeringLocation` | `string` |
| `SuggestedVIN` | `string` |
| `TPMS` | `string` |
| `TopSpeedMPH` | `string` |
| `TrackWidth` | `string` |
| `TractionControl` | `string` |
| `TrailerBodyType` | `string` |
| `TrailerLength` | `string` |
| `TrailerType` | `string` |
| `TransmissionSpeeds` | `string` |
| `TransmissionStyle` | `string` |
| `Trim` | `string` |
| `Trim2` | `string` |
| `Turbo` | `string` |
| `VIN` | `string` |
| `ValveTrainDesign` | `string` |
| `VehicleDescriptor` | `string` |
| `VehicleType` | `string` |
| `WheelBaseLong` | `string` |
| `WheelBaseShort` | `string` |
| `WheelBaseType` | `string` |
| `WheelSizeFront` | `string` |
| `WheelSizeRear` | `string` |
| `Wheels` | `string` |
| `Windows` | `string` |

#### Defined in

[api/endpoints/DecodeVinValues.ts:128](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/19d28b5/packages/lib/src/api/endpoints/DecodeVinValues.ts#L128)
