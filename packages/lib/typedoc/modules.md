[@shaggytools/nhtsa-api-wrapper](README.md) / Exports

# @shaggytools/nhtsa-api-wrapper

## Table of contents

### Type Aliases

- [AtLeastOne](modules.md#atleastone)
- [CreateUrlOptions](modules.md#createurloptions)
- [DecodeVinExtendedResults](modules.md#decodevinextendedresults)
- [DecodeVinResults](modules.md#decodevinresults)
- [DecodeVinValuesBatchResults](modules.md#decodevinvaluesbatchresults)
- [DecodeVinValuesExtendedResults](modules.md#decodevinvaluesextendedresults)
- [DecodeVinValuesResults](modules.md#decodevinvaluesresults)
- [DecodeWMIResults](modules.md#decodewmiresults)
- [GetAllMakesResults](modules.md#getallmakesresults)
- [GetAllManufacturersResults](modules.md#getallmanufacturersresults)
- [GetCanadianVehicleSpecificationsResults](modules.md#getcanadianvehiclespecificationsresults)
- [GetEquipmentPlantCodesResults](modules.md#getequipmentplantcodesresults)
- [GetMakeForManufacturerResults](modules.md#getmakeformanufacturerresults)
- [GetMakesForManufacturerAndYearResults](modules.md#getmakesformanufacturerandyearresults)
- [GetMakesForVehicleTypeResults](modules.md#getmakesforvehicletyperesults)
- [GetManufacturerDetailsResults](modules.md#getmanufacturerdetailsresults)
- [GetModelsForMakeIdResults](modules.md#getmodelsformakeidresults)
- [GetModelsForMakeIdYearResults](modules.md#getmodelsformakeidyearresults)
- [GetModelsForMakeResults](modules.md#getmodelsformakeresults)
- [GetModelsForMakeYearResults](modules.md#getmodelsformakeyearresults)
- [GetPartsResults](modules.md#getpartsresults)
- [GetVehicleTypesForMakeIdResults](modules.md#getvehicletypesformakeidresults)
- [GetVehicleTypesForMakeResults](modules.md#getvehicletypesformakeresults)
- [GetVehicleVariableListResults](modules.md#getvehiclevariablelistresults)
- [GetVehicleVariableValuesListResults](modules.md#getvehiclevariablevalueslistresults)
- [GetWMIsForManufacturerResults](modules.md#getwmisformanufacturerresults)
- [IArgToValidate](modules.md#iargtovalidate)
- [NhtsaResponse](modules.md#nhtsaresponse)
- [QueryStringParams](modules.md#querystringparams)
- [QueryStringParamsEncoded](modules.md#querystringparamsencoded)
- [QueryStringTypes](modules.md#querystringtypes)
- [RequireOnlyOne](modules.md#requireonlyone)

### Functions

- [DecodeVin](modules.md#decodevin)
- [DecodeVinExtended](modules.md#decodevinextended)
- [DecodeVinValues](modules.md#decodevinvalues)
- [DecodeVinValuesBatch](modules.md#decodevinvaluesbatch)
- [DecodeVinValuesExtended](modules.md#decodevinvaluesextended)
- [DecodeWMI](modules.md#decodewmi)
- [GetAllMakes](modules.md#getallmakes)
- [GetAllManufacturers](modules.md#getallmanufacturers)
- [GetCanadianVehicleSpecifications](modules.md#getcanadianvehiclespecifications)
- [GetEquipmentPlantCodes](modules.md#getequipmentplantcodes)
- [GetMakeForManufacturer](modules.md#getmakeformanufacturer)
- [GetMakesForManufacturerAndYear](modules.md#getmakesformanufacturerandyear)
- [GetMakesForVehicleType](modules.md#getmakesforvehicletype)
- [GetManufacturerDetails](modules.md#getmanufacturerdetails)
- [GetModelsForMake](modules.md#getmodelsformake)
- [GetModelsForMakeId](modules.md#getmodelsformakeid)
- [GetModelsForMakeIdYear](modules.md#getmodelsformakeidyear)
- [GetModelsForMakeYear](modules.md#getmodelsformakeyear)
- [GetParts](modules.md#getparts)
- [GetVehicleTypesForMake](modules.md#getvehicletypesformake)
- [GetVehicleTypesForMakeId](modules.md#getvehicletypesformakeid)
- [GetVehicleVariableList](modules.md#getvehiclevariablelist)
- [GetVehicleVariableValuesList](modules.md#getvehiclevariablevalueslist)
- [GetWMIsForManufacturer](modules.md#getwmisformanufacturer)
- [isValidVin](modules.md#isvalidvin)
- [useNHTSA](modules.md#usenhtsa)

## Type Aliases

### AtLeastOne

Ƭ **AtLeastOne**<`T`, `R`\>: { [P in R]-?: Required<Pick<T, P\>\> & Partial<Omit<T, P\>\> }[`R`]

Require at least one of a set of properties in an object
https://stackoverflow.com/a/49725198

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `R` | extends keyof `T` = keyof `T` |

#### Defined in

[utils/types.ts:13](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/utils/types.ts#L13)

___

### CreateUrlOptions

Ƭ **CreateUrlOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowEmptyParams?` | `boolean` |
| `endpointName` | `string` |
| `includeQueryString?` | `boolean` |
| `params?` | [`QueryStringParams`](modules.md#querystringparams) |
| `path?` | `string` |
| `saveUrl?` | `boolean` |

#### Defined in

[api/useNHTSA.ts:10](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/useNHTSA.ts#L10)

___

### DecodeVinExtendedResults

Ƭ **DecodeVinExtendedResults**: `Object`

Objects returned in the NhtsaResponse 'Results' array of DecodeVinExtended endpoint

**`Alias`**

DecodeVinExtendedResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Value` | `string` \| ``null`` |
| `ValueId` | `string` \| ``null`` |
| `Variable` | `string` |
| `VariableId` | `number` |

#### Defined in

[api/endpoints/DecodeVinExtended.ts:95](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/DecodeVinExtended.ts#L95)

___

### DecodeVinResults

Ƭ **DecodeVinResults**: `Object`

Objects returned in the NhtsaResponse 'Results' array of DecodeVin endpoint

**`Alias`**

DecodeVinResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Value` | `string` \| ``null`` |
| `ValueId` | `string` \| ``null`` |
| `Variable` | `string` |
| `VariableId` | `number` |

#### Defined in

[api/endpoints/DecodeVin.ts:91](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/DecodeVin.ts#L91)

___

### DecodeVinValuesBatchResults

Ƭ **DecodeVinValuesBatchResults**: `Object`

Objects returned in the NhtsaResponse 'Results' array of DecodeVinValuesBatch endpoint

**`Alias`**

DecodeVINValuesBatchResults

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

[api/endpoints/DecodeVinValuesBatch.ts:91](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/DecodeVinValuesBatch.ts#L91)

___

### DecodeVinValuesExtendedResults

Ƭ **DecodeVinValuesExtendedResults**: `Object`

Objects returned in the NhtsaResponse 'Results' array of DecodeVinValuesExtended endpoint

**`Alias`**

DecodeVinValuesExtendedResults

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

[api/endpoints/DecodeVinValuesExtended.ts:96](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/DecodeVinValuesExtended.ts#L96)

___

### DecodeVinValuesResults

Ƭ **DecodeVinValuesResults**: `Object`

Objects returned in the NhtsaResponse 'Results' array of DecodeVinValues endpoint

**`Alias`**

DecodeVinValuesResults

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

[api/endpoints/DecodeVinValues.ts:90](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/DecodeVinValues.ts#L90)

___

### DecodeWMIResults

Ƭ **DecodeWMIResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of DecodeWMI endpoint

**`Alias`**

DecodeWMIResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CommonName` | `string` |
| `CreatedOn` | `string` |
| `DateAvailableToPublic` | `string` |
| `Make` | `string` |
| `ManufacturerName` | `string` |
| `ParentCompanyName` | `string` |
| `URL` | `string` |
| `UpdatedOn` | `string` \| ``null`` |
| `VehicleType` | `string` |

#### Defined in

[api/endpoints/DecodeWMI.ts:60](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/DecodeWMI.ts#L60)

___

### GetAllMakesResults

Ƭ **GetAllMakesResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetAllMakes endpoint

**`Alias`**

GetAllMakesResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Make_ID` | `number` |
| `Make_Name` | `string` |

#### Defined in

[api/endpoints/GetAllMakes.ts:42](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetAllMakes.ts#L42)

___

### GetAllManufacturersResults

Ƭ **GetAllManufacturersResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetAllManufacturers endpoint

**`Alias`**

GetAllManufacturersResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Country` | `string` |
| `Mfr_CommonName` | `string` \| ``null`` |
| `Mfr_ID` | `number` |
| `Mfr_Name` | `string` |
| `VehicleTypes` | { `IsPrimary?`: `boolean` ; `Name?`: `string`  }[] |

#### Defined in

[api/endpoints/GetAllManufacturers.ts:79](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetAllManufacturers.ts#L79)

___

### GetCanadianVehicleSpecificationsResults

Ƭ **GetCanadianVehicleSpecificationsResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetCanadianVehicleSpecifications endpoint

**`Alias`**

GetCanadianVehicleSpecificationsResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Specs` | { `Name`: ``"Make"`` \| ``"Model"`` \| ``"MYR"`` \| ``"OL"`` \| ``"OW"`` \| ``"OH"`` \| ``"WB"`` \| ``"CW"`` \| ``"A"`` \| ``"B"`` \| ``"C"`` \| ``"D"`` \| ``"E"`` \| ``"F"`` \| ``"G"`` \| ``"TWF"`` \| ``"TWR"`` \| ``"WD"`` ; `Value`: `string`  }[] |

#### Defined in

[api/endpoints/GetCanadianVehicleSpecifications.ts:92](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetCanadianVehicleSpecifications.ts#L92)

___

### GetEquipmentPlantCodesResults

Ƭ **GetEquipmentPlantCodesResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetEquipmentPlantCodes endpoint

**`Alias`**

GetEquipmentPlantCodesResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Address` | `string` \| ``null`` |
| `City` | `string` \| ``null`` |
| `Country` | `string` |
| `DOTCode` | `string` |
| `Name` | `string` |
| `OldDotCode` | `string` |
| `PostalCode` | `string` \| ``null`` |
| `StateProvince` | `string` \| ``null`` |
| `Status` | `string` \| ``null`` |

#### Defined in

[api/endpoints/GetEquipmentPlantCodes.ts:92](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetEquipmentPlantCodes.ts#L92)

___

### GetMakeForManufacturerResults

Ƭ **GetMakeForManufacturerResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetMakeForManufacturer endpoint

**`Alias`**

GetMakeForManufacturerResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Make_ID` | `number` |
| `Make_Name` | `string` |
| `Mfr_Name` | `string` |

#### Defined in

[api/endpoints/GetMakeForManufacturer.ts:58](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetMakeForManufacturer.ts#L58)

___

### GetMakesForManufacturerAndYearResults

Ƭ **GetMakesForManufacturerAndYearResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetMakesForManufacturerAndYear endpoint

**`Alias`**

GetMakesForManufacturerAndYearResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MakeId` | `number` |
| `MakeName` | `string` |
| `MfrId` | `number` |
| `MfrName` | `string` |

#### Defined in

[api/endpoints/GetMakesForManufacturerAndYear.ts:80](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetMakesForManufacturerAndYear.ts#L80)

___

### GetMakesForVehicleTypeResults

Ƭ **GetMakesForVehicleTypeResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetMakesForVehicleType endpoint

**`Alias`**

GetMakesForVehicleTypeResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MakeId` | `number` |
| `MakeName` | `string` |
| `VehicleTypeId` | `number` |
| `VehicleTypeName` | `string` |

#### Defined in

[api/endpoints/GetMakesForVehicleType.ts:54](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetMakesForVehicleType.ts#L54)

___

### GetManufacturerDetailsResults

Ƭ **GetManufacturerDetailsResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetManufacturerDetails endpoint

**`Alias`**

GetManufacturerDetailsResults

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

[api/endpoints/GetManufacturerDetails.ts:58](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetManufacturerDetails.ts#L58)

___

### GetModelsForMakeIdResults

Ƭ **GetModelsForMakeIdResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetModelsForMakeId endpoint

**`Alias`**

GetModelsForMakeIdResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Make_ID` | `number` |
| `Make_Name` | `string` |
| `Model_ID` | `number` |
| `Model_Name` | `string` |

#### Defined in

[api/endpoints/GetModelsForMakeId.ts:68](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetModelsForMakeId.ts#L68)

___

### GetModelsForMakeIdYearResults

Ƭ **GetModelsForMakeIdYearResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetModelsForMakeIdYear endpoint

**`Alias`**

GetModelsForMakeIdYearResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Make_ID` | `number` |
| `Make_Name` | `string` |
| `Model_ID` | `number` |
| `Model_Name` | `string` |

#### Defined in

[api/endpoints/GetModelsForMakeIdYear.ts:123](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetModelsForMakeIdYear.ts#L123)

___

### GetModelsForMakeResults

Ƭ **GetModelsForMakeResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetModelsForMake endpoint

**`Alias`**

GetModelsForMakeResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Make_ID` | `number` |
| `Make_Name` | `string` |
| `Model_ID` | `number` |
| `Model_Name` | `string` |

#### Defined in

[api/endpoints/GetModelsForMake.ts:55](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetModelsForMake.ts#L55)

___

### GetModelsForMakeYearResults

Ƭ **GetModelsForMakeYearResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetModelsForMakeYear endpoint

**`Alias`**

GetModelsForMakeYearResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Make_ID` | `number` |
| `Make_Name` | `string` |
| `Model_ID` | `number` |
| `Model_Name` | `string` |

#### Defined in

[api/endpoints/GetModelsForMakeYear.ts:102](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetModelsForMakeYear.ts#L102)

___

### GetPartsResults

Ƭ **GetPartsResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetParts endpoint

**`Alias`**

GetPartsResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CoverLetterURL` | `string` |
| `LetterDate` | `string` |
| `ManufacturerId` | `number` |
| `ManufacturerName` | `string` |
| `ModelYearFrom` | `number` \| ``null`` |
| `ModelYearTo` | `number` \| ``null`` |
| `Name` | `string` |
| `Type` | `string` |
| `URL` | `string` |

#### Defined in

[api/endpoints/GetParts.ts:92](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetParts.ts#L92)

___

### GetVehicleTypesForMakeIdResults

Ƭ **GetVehicleTypesForMakeIdResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetVehicleTypesForMakeId endpoint

**`Alias`**

GetVehicleTypesForMakeIdResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MakeId` | `number` |
| `MakeName` | `string` |
| `VehicleTypeId` | `number` |
| `VehicleTypeName` | `string` |

#### Defined in

[api/endpoints/GetVehicleTypesForMakeId.ts:68](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetVehicleTypesForMakeId.ts#L68)

___

### GetVehicleTypesForMakeResults

Ƭ **GetVehicleTypesForMakeResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetVehicleTypesForMake endpoint

**`Alias`**

GetVehicleTypesForMakeResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MakeId` | `number` |
| `MakeName` | `string` |
| `VehicleTypeId` | `number` |
| `VehicleTypeName` | `string` |

#### Defined in

[api/endpoints/GetVehicleTypesForMake.ts:54](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetVehicleTypesForMake.ts#L54)

___

### GetVehicleVariableListResults

Ƭ **GetVehicleVariableListResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetVehicleVariableList endpoint

**`Alias`**

GetVehicleVariableListResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DataType` | ``"string"`` \| ``"int"`` \| ``"decimal"`` \| ``"lookup"`` |
| `Description` | `string` |
| `GroupName` | `string` \| ``null`` |
| `ID` | `number` |
| `Name` | `string` |

#### Defined in

[api/endpoints/GetVehicleVariableList.ts:39](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetVehicleVariableList.ts#L39)

___

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

[api/endpoints/GetVehicleVariableValuesList.ts:56](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetVehicleVariableValuesList.ts#L56)

___

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

[api/endpoints/GetWMIsForManufacturer.ts:94](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetWMIsForManufacturer.ts#L94)

___

### IArgToValidate

Ƭ **IArgToValidate**: { `name`: `string` ; `value`: `unknown`  } & [`AtLeastOne`](modules.md#atleastone)<{ `required?`: `boolean` ; `types?`: `string`[]  }\>

#### Defined in

[utils/argHandler.ts:4](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/utils/argHandler.ts#L4)

___

### NhtsaResponse

Ƭ **NhtsaResponse**<`T`\>: `Object`

Response data returned from the NHSTA API. `Results` key will be an array of objects of type "T"

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `Count` | `number` | The number of items returned in the Results object. Will = 0 if no Results |
| `Message` | `string` | A message describing the Results. If Count is 0 check the Message for helpful info |
| `Results` | `T`[] | An array of objects of type <T> returned by NHSTA, specific to each individual API Action. |
| `SearchCriteria` | `string` | Search terms (VIN, WMI, etc) used in the request URL. |

#### Defined in

[api/types.ts:7](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/types.ts#L7)

___

### QueryStringParams

Ƭ **QueryStringParams**: `Record`<`string`, [`QueryStringTypes`](modules.md#querystringtypes)\>

Object to build the query string with

#### Defined in

[utils/queryString.ts:12](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/utils/queryString.ts#L12)

___

### QueryStringParamsEncoded

Ƭ **QueryStringParamsEncoded**<`T`\>: { [key in keyof T]: string }

Object returned by encodeQueryStringParams()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[utils/queryString.ts:14](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/utils/queryString.ts#L14)

___

### QueryStringTypes

Ƭ **QueryStringTypes**: `string` \| `number` \| `boolean`

Valid URI component types

#### Defined in

[utils/queryString.ts:10](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/utils/queryString.ts#L10)

___

### RequireOnlyOne

Ƭ **RequireOnlyOne**<`T`, `Keys`\>: `Omit`<`T`, `Keys`\> & { [K in keyof Required<T\>]: Required<Pick<T, K\>\> & Partial<Record<Exclude<Keys, K\>, undefined\>\> }[`Keys`]

Require only one of a set of properties in an object
https://stackoverflow.com/a/49725198

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Keys` | extends keyof `T` = keyof `T` |

#### Defined in

[utils/types.ts:21](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/utils/types.ts#L21)

## Functions

### DecodeVin

▸ **DecodeVin**(`vin`, `params?`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`DecodeVinResults`](modules.md#decodevinresults)\>\>

`DecodeVin` decodes a Vehicle Identification Number (VIN) and returns useful information about
the vehicle.

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

NOTE: Unless you have a specific need to obtain "ValueID" or "VariableID" for each variable
in a decoded VIN, this package recommends using one of the `DecodeVinValues*` endpoints
instead. This is because they will return a single flat format object of key/value pairs,
where key is the name of the variable. `DecodeVinValuesBatch` will return multple flat format
objects, one for each VIN you search. The flat format is more efficient and easier to work with
as you won't have to iterate through a bunch of objects just to get all variable names/values.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `vin` | `string` | `undefined` | Vehicle Identification Number (full or partial) |
| `params?` | `boolean` \| { `modelYear?`: `string` \| `number`  } | `undefined` | Object of Query Search names and values to append to the URL as a query string. - If not providing `params` and want you want to set `doFetch = false`, you can pass `false` as the second arg in place of params, instead of having to pass all 3 args with params as undefined, i.e. you don't have to do this: `func(arg1, undefined, doFetch)`, and can instead do this: `func(arg1, doFetch)` |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`DecodeVinResults`](modules.md#decodevinresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/DecodeVin.ts:44](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/DecodeVin.ts#L44)

___

### DecodeVinExtended

▸ **DecodeVinExtended**(`vin`, `params?`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`DecodeVinExtendedResults`](modules.md#decodevinextendedresults)\>\>

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

NOTE: Unless you have a specific need to obtain "ValueID" or "VariableID" for each variable
in a decoded VIN, this package recommends using one of the `DecodeVinValues*` endpoints
instead. This is because they will return a single flat format object of key/value pairs,
where key is the name of the variable. `DecodeVinValuesBatch` will return multple flat format
objects, one for each VIN you search. The flat format is more efficient and easier to work with
as you won't have to iterate through a bunch of objects just to get all variable names/values.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `vin` | `string` | `undefined` | Vehicle Identification Number (full or partial) |
| `params?` | `boolean` \| { `modelYear?`: `string` \| `number`  } | `undefined` | Object of Query Search names and values to append to the URL as a query string. - If not providing `params` and want you want to set `doFetch = false`, you can pass `false` as the second arg in place of params, instead of having to pass all 3 args with params as undefined, i.e. you don't have to do this: `func(arg1, undefined, doFetch)`, and can instead do this: `func(arg1, doFetch)` |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`DecodeVinExtendedResults`](modules.md#decodevinextendedresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false` (default: `true`)

#### Defined in

[api/endpoints/DecodeVinExtended.ts:48](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/DecodeVinExtended.ts#L48)

___

### DecodeVinValues

▸ **DecodeVinValues**(`vin`, `params?`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`DecodeVinValuesResults`](modules.md#decodevinvaluesresults)\>\>

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

The variable names and values in the flat format object are equivalent to "Variable" and "Value"
keys found in objects returned from _nested format_ endpoints such as `DecodeVin` and
`DecodeVinExtended`.

*NOTE:* For decoding VINs this package recommends using `DecodeVinValues*` endpoints such as
this one. The flat format is more efficient and easier to work with as you won't have to iterate
through a bunch of objects just to get all variable names/values as is the case with
_nested format_. Unless you need to obtain "ValueID" and/or "VariableID" for each variable in a
decoded VIN. In that case, you should use either `DecodeVin` or `DecodeVinExtended` endpoints to
obtain the values in a _nested format_.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `vin` | `string` | `undefined` | Vehicle Identification Number (full or partial) |
| `params?` | `boolean` \| { `modelYear?`: `string` \| `number`  } | `undefined` | Object of Query Search names and values to append to the URL as a query string. - If not providing `params` and want you want to set `doFetch = false`, you can pass `false` as the second arg in place of params, instead of having to pass all 3 args with params as undefined, i.e. you don't have to do this: `func(arg1, undefined, doFetch)`, and can instead do this: `func(arg1, doFetch)` |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`DecodeVinValuesResults`](modules.md#decodevinvaluesresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/DecodeVinValues.ts:43](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/DecodeVinValues.ts#L43)

___

### DecodeVinValuesBatch

▸ **DecodeVinValuesBatch**(`inputString`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`DecodeVinValuesBatchResults`](modules.md#decodevinvaluesbatchresults)\>\>

`DecodeVinValuesBatch` decodes a batch of Vehicle Identification Numbers (VINs) and returns
useful information about the vehicles in in a _flat format_. This means the endpoint will return
an array with multiple objects of results. Each object represents a VIN from the `inputString`
and the key:value pairs in the objects are variables and their values for each particular VIN.

For this particular API you just have to provide a string of VINs, `inputString`, that are
separated by a `;` char. You can also indicate the model year after the vin, preceded by a `,`
char.

The `inputString` parameter should be in the following format:
- ex: `5UXWX7C5*BA, 2011; 5YJSA3DS*EF`
- no modelYear: `vin; vin; vin`
- with modelYear: `vin, modelYear; vin, modelYear; vin, modelYear`
- mix of with/without modelYear: `vin; vin, modelYear`
- _vin_ and _modelYear_ are placeholders for real values in these examples
- all spaces between `;` and `,` are used in these examples for readability ard are optional
- _Max 50 VINs per batch_

Providing the modelYear in the input string allows for the decoding to specifically be done in
the current, or older (pre-1980), model year ranges. It is recommended to always provide
the model year if it is known at the time of decoding, but it is not required.

The variable names and values in the flat format objects are equivalent to "Variable" and "Value"
keys found in objects returned from _nested format_ endpoints such as `DecodeVin` and
`DecodeVinExtended`.

*NOTE:* For decoding VINs this package recommends using `DecodeVinValues*` endpoints such as
this one. The flat format is more efficient and easier to work with as you won't have to iterate
through a bunch of objects just to get all variable names/values as is the case with
_nested format_. Unless you need to obtain "ValueID" and/or "VariableID" for each variable in a
decoded VIN. In that case, you should use either `DecodeVin` or `DecodeVinExtended` endpoints to
obtain the values in a _nested format_ where each variable is an object containing individual
"Variable", "Value", "ValueID" and "VariableID" properties.

*NOTE:* This endpoint is the only one to use a POST request instead of a GET request. We want to
ensure that response format is always set to 'json' in all requests, even POST requests. as POST
requests do not allow query strings, we can't set the response format to 'json' in a query
string like every other endpoint. Therefore, we
have to set the response format in the body of the request before sending it. This is performed
internally by the post function in `useNHTSA` composable but it is worth noting here.  We also

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `inputString` | `string` | `undefined` | A string of Vehicle Identification Numbers (full or partial) following the format listed in the description |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`DecodeVinValuesBatchResults`](modules.md#decodevinvaluesbatchresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/DecodeVinValuesBatch.ts:55](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/DecodeVinValuesBatch.ts#L55)

___

### DecodeVinValuesExtended

▸ **DecodeVinValuesExtended**(`vin`, `params?`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`DecodeVinValuesExtendedResults`](modules.md#decodevinvaluesextendedresults)\>\>

`DecodeVinValuesExtended` decodes a Vehicle Identification Number (VIN) and returns useful
information about the vehicle in in a _flat format_. This means the endpoint will return an
array with a single object of results. Each key in the object is the name of a variable.

This endpoint is similar to `DecodeVinValues` but returns additional information on variables
related to other NHTSA programs like
[NCSA](https://www.nhtsa.gov/research-data/national-center-statistics-and-analysis-ncsa), etc.

Providing `params.modelYear` allows for the decoding to specifically be done in the current, or
older (pre-1980), model year ranges. It is recommended to always provide `params.modelYear` if
the model year is known at the time of decoding, but it is not required.

This endpoint also supports partial VIN decoding (VINs that are less than 17 characters).
  - Ex: "5UXWX7C5*BA"
  - In this case, the VIN will be decoded partially with the available characters
  - In case of partial VINs, a `*` could be used to indicate the unavailable characters
  - The 9th digit is not necessary

The variable names and values in the flat format object are equivalent to "Variable" and "Value"
keys found in objects returned from _nested format_ endpoints such as `DecodeVin` and
`DecodeVinExtended`.

*NOTE:* For decoding VINs this package recommends using `DecodeVinValues*` endpoints such as
this one. The flat format is more efficient and easier to work with as you won't have to iterate
through a bunch of objects just to get all variable names/values as is the case with
_nested format_. Unless you need to obtain "ValueID" and/or "VariableID" for each variable in a
decoded VIN. In that case, you should use either `DecodeVin` or `DecodeVinExtended` endpoints to
obtain the values in a _nested format_ where each variable is an object containing individual
"Variable", "Value", "ValueID" and "VariableID" properties.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `vin` | `string` | `undefined` | Vehicle Identification Number (full or partial) |
| `params?` | `boolean` \| { `modelYear?`: `string` \| `number`  } | `undefined` | Object of Query Search names and values to append to the URL as a query string. - If not providing `params` and want you want to set `doFetch = false`, you can pass `false` as the second arg in place of params, instead of having to pass all 3 args with params as undefined, i.e. you don't have to do this: `func(arg1, undefined, doFetch)`, and can instead do this: `func(arg1, doFetch)` |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`DecodeVinValuesExtendedResults`](modules.md#decodevinvaluesextendedresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/DecodeVinValuesExtended.ts:49](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/DecodeVinValuesExtended.ts#L49)

___

### DecodeWMI

▸ **DecodeWMI**(`WMI`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`DecodeWMIResults`](modules.md#decodewmiresults)\>\>

`DecodeWMI` provides information on the World Manufacturer Identifier for a specific `WMI` code.

`WMI` may provided as either 3 characters representing VIN position 1-3 _or_ 6 characters
representing VIN positions 1-3 & 12-14.
- Examples: "JTD" "1T9131"

A list of WMI codes can be found
[here](https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/World_Manufacturer_Identifier_(WMI)),
but keep in mind that not all of the listed WMIs are registered with NHTSA and therefore may not
be available in vPIC data sets.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `WMI` | `string` | `undefined` | World Manufacturer Identifier |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`DecodeWMIResults`](modules.md#decodewmiresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false` (default: `true`)

#### Defined in

[api/endpoints/DecodeWMI.ts:24](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/DecodeWMI.ts#L24)

___

### GetAllMakes

▸ **GetAllMakes**(`doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetAllMakesResults`](modules.md#getallmakesresults)\>\>

`GetAllMakes` provides a list of all the Makes available in the vPIC Dataset.
Each object in the `Results` array represents the `Make_ID` and the `Make_Name` of
an individual vehicle Make.

- FYI there are over 10,000 registered makes in the database!

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `doFetch?` | `boolean` | `false` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetAllMakesResults`](modules.md#getallmakesresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false` (default: `true`)

#### Defined in

[api/endpoints/GetAllMakes.ts:17](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetAllMakes.ts#L17)

___

### GetAllManufacturers

▸ **GetAllManufacturers**(`params?`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetAllManufacturersResults`](modules.md#getallmanufacturersresults)\>\>

`GetAllManufacturers` provides a list of all the Manufacturers available in the vPIC Dataset.

`params.manufacturerType` is optional but allows the user to filter the list based on
manufacturer type. Types include 'Incomplete Vehicles', 'Completed Vehicle Manufacturer',
'Incomplete Vehicle Manufacturer', 'Intermediate Manufacturer', 'Final-Stage Manufacturer',
'Alterer', or any partial match of those strings.

`params.page` is optional and used to specify (n)th page of results. Results are provided in
pages of 100 items.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `params?` | `boolean` \| { `manufacturerType?`: `string` ; `page?`: `string` \| `number`  } | `undefined` | Object of Query Search names and values to append to the URL as a query string. - If not providing `params` and want you want to set `doFetch = false`, you can pass `false` as the first arg in place of params, instead of having to pass the first arg as undefined, i.e. you don't have to do this: `func(undefined, doFetch)`, and can instead do this: `func(doFetch)` |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetAllManufacturersResults`](modules.md#getallmanufacturersresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetAllManufacturers.ts:28](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetAllManufacturers.ts#L28)

___

### GetCanadianVehicleSpecifications

▸ **GetCanadianVehicleSpecifications**(`params`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetCanadianVehicleSpecificationsResults`](modules.md#getcanadianvehiclespecificationsresults)\>\>

`GetCanadianVehicleSpecifications` returns data from the Canadian Vehicle Specifications (CVS).
The CVS consists of a database of original vehicle dimensions, used primarily in
collision investigation and reconstruction, combined with a search engine.

The CVS database is compiled annually by the Collision Investigation and Research Division of
Transport Canada. Visit official
[Canadian Vehicle Specifications](http://www.carsp.ca/research/resources/safety-sources/canadian-vehicle-specifications/)
page for more details.

`params.year` is the only required query parameter, all others are optional but will still be included
in the query string as blank values even if not provided by the user. See below Note for more
details.

_NOTE:_ This endpoint does not like missing query keys and will return a 404 error if any of
them are omitted from the query string. Therefore, we must set default values to empty strings
for any query keys that are not provided by the user. This means keys not provided by user will
always show up as "something=" in the query string. `year` is the only key user must provide,
no default value is set for it so that an error will be thrown if not provided by user.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `params` | `Object` | `undefined` | Object of Query Search names and values to append to the URL as a query string |
| `params.make?` | `string` | `undefined` | Vehicle's make, like "Honda", "Toyota", etc... |
| `params.model?` | `string` | `undefined` | Vehicle's model, like "Pilot", "Focus". Can also include some other elements like Body Type, Engine Model/size, etc... |
| `params.units?` | `string` | `undefined` | "Metric" (default), or "US" for standard units |
| `params.year` | `string` \| `number` | `undefined` | Model year of the vehicle - year >= 1971 |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetCanadianVehicleSpecificationsResults`](modules.md#getcanadianvehiclespecificationsresults)\>\>

- Api
Response `object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetCanadianVehicleSpecifications.ts:37](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetCanadianVehicleSpecifications.ts#L37)

___

### GetEquipmentPlantCodes

▸ **GetEquipmentPlantCodes**(`params`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetEquipmentPlantCodesResults`](modules.md#getequipmentplantcodesresults)\>\>

`GetEquipmentPlantCodes` returns assigned Equipment Plant Codes. Can be filtered by Year,
Equipment Type and Report Type.

ALL parameters are required and endpoint will return 404 if there are any undefined keys and/or
values in the query string.

`params.year`:
- year >= 2016
- NOTE: It seems API will still respond with years < 2016 but api docs state only years >= 2016
  are supported

`params.equipmentType`:
- 1 (Tires)
- 3 (Brake Hoses)
- 13 (Glazing)
- 16 (Retread)

`params.reportType`:
- 'New' (The Equipment Plant Code was assigned during the selected year)
- 'Updated' (The Equipment Plant data was modified during the selected year)
- 'Closed' (The Equipment Plant is no longer Active)
- 'All' (All Equipment Plant Codes regardless of year, including their status (active or closed))

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `params` | `Object` | `undefined` | Object of Query Search names and values to append to the URL as a query string |
| `params.equipmentType` | ``"1"`` \| ``"3"`` \| ``"13"`` \| ``"16"`` \| ``1`` \| ``3`` \| ``13`` \| ``16`` | `undefined` | Number equal to 1, 3, 13, or 16 |
| `params.reportType` | ``"New"`` \| ``"Updated"`` \| ``"Closed"`` \| ``"All"`` | `undefined` | 'New', 'Updated', 'Closed', or 'All' |
| `params.year` | `string` \| `number` | `undefined` | Year >= 2016 |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetEquipmentPlantCodesResults`](modules.md#getequipmentplantcodesresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetEquipmentPlantCodes.ts:38](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetEquipmentPlantCodes.ts#L38)

___

### GetMakeForManufacturer

▸ **GetMakeForManufacturer**(`manufacturer`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetMakeForManufacturerResults`](modules.md#getmakeformanufacturerresults)\>\>

`GetMakeForManufacturer` returns all the Makes in the vPIC dataset for a specified manufacturer
that is requested. Multiple results are returned in case of multiple matches.

`manufacturer` name can be a partial name, or a full name for more specificity, e.g. "988",
"honda", "HONDA OF CANADA MFG., INC.", etc.

- If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
- If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the
  provided name. It accepts a partial manufacturer name as an input.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `manufacturer` | `string` \| `number` | `undefined` | Manufacturer Name or ID |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetMakeForManufacturerResults`](modules.md#getmakeformanufacturerresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetMakeForManufacturer.ts:22](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetMakeForManufacturer.ts#L22)

___

### GetMakesForManufacturerAndYear

▸ **GetMakesForManufacturerAndYear**(`manufacturer`, `params`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetMakesForManufacturerAndYearResults`](modules.md#getmakesformanufacturerandyearresults)\>\>

`GetMakesForManufacturerAndYear` returns all the Makes in the vPIC dataset for a specified
`manufacturer`, and whose "Year From" and "Year To" range cover the specified `year`. Multiple
results are returned in case of multiple matches.

Both `manufacturer` and `params.year` are required.

`manufacturer` name can be a partial name, or a full name for more specificity, e.g. "988",
"honda", "HONDA OF CANADA MFG., INC.", etc.

- If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
- If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the
  provided name. It accepts a partial manufacturer name as an input.

`params.year` must be a number > 2016, years prior to 2016 are not supported according to the
NHTSA API.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `manufacturer` | `string` | `undefined` | Manufacturer Name (string) or Manufacturer ID (number) |
| `params` | `Object` | `undefined` | Object of Query Search names and values to append to the URL as a query string |
| `params.year` | `string` \| `number` | `undefined` | Model year of the vehicle - Number, >= 2016 |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetMakesForManufacturerAndYearResults`](modules.md#getmakesformanufacturerandyearresults)\>\>

- Api
Response `object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetMakesForManufacturerAndYear.ts:30](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetMakesForManufacturerAndYear.ts#L30)

___

### GetMakesForVehicleType

▸ **GetMakesForVehicleType**(`typeName`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetMakesForVehicleTypeResults`](modules.md#getmakesforvehicletyperesults)\>\>

`GetMakesForVehicleType` returns all the Makes in the vPIC dataset for a specified vehicle type
(`typeName`), whose name is LIKE the vehicle type name in vPIC Dataset.

`typeName` can be a partial name, or a full name for more specificity, e.g., "Vehicle", "Moto",
"Low Speed Vehicle", etc.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `typeName` | `string` | `undefined` | A partial or full vehicle type name |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetMakesForVehicleTypeResults`](modules.md#getmakesforvehicletyperesults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetMakesForVehicleType.ts:18](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetMakesForVehicleType.ts#L18)

___

### GetManufacturerDetails

▸ **GetManufacturerDetails**(`manufacturer`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetManufacturerDetailsResults`](modules.md#getmanufacturerdetailsresults)\>\>

`GetManufacturerDetails` provides the details for a specific manufacturer that is requested.
Multiple results are returned in case of multiple matches.

`manufacturer` name can be a partial name, or a full name for more specificity, e.g. "988",
"honda", "HONDA OF CANADA MFG., INC.", etc.

- If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
- If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the
  provided name. It accepts a partial manufacturer name as an input.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `manufacturer` | `string` \| `number` | `undefined` | Manufacturer Name or ID |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetManufacturerDetailsResults`](modules.md#getmanufacturerdetailsresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetManufacturerDetails.ts:22](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetManufacturerDetails.ts#L22)

___

### GetModelsForMake

▸ **GetModelsForMake**(`makeName`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetModelsForMakeResults`](modules.md#getmodelsformakeresults)\>\>

`GetModelsForMake` returns the Models in the vPIC dataset for a specified `makeName`
whose Name is LIKE the Make in vPIC Dataset.

`makeName` can be a partial, or a full for more specificity, e.g., "Harley",
"Harley Davidson", etc.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `makeName` | `string` | `undefined` | Vehicle make name |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetModelsForMakeResults`](modules.md#getmodelsformakeresults)\>\>

- Api Response object

- Api Response `object`
-or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetModelsForMake.ts:19](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetModelsForMake.ts#L19)

___

### GetModelsForMakeId

▸ **GetModelsForMakeId**(`makeId`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetModelsForMakeIdResults`](modules.md#getmodelsformakeidresults)\>\>

`GetModelsForMakeId` returns the Models in the vPIC dataset for a specified Make whose ID is
equal to the `makeID` in the vPIC Dataset.

You can get `makeID`s via `MAKE_ID` key in Results objects of the following endpoints:
- `GetAllMakes` endpoint
- `GetMakeForManufacturer` endpoint
- `GetModelsForMake` endpoint
- `GetModelsForMakeYear` endpoint

You can get `makeID`s via `MakeID` key in Results objects of the following endpoints:
- `DecodeVinValues`
- `DecodeVinValuesBatch`

You can get `makeID`s via `ValueId` key in Results objects of the following endpoints.
One of the objects in the `Results` array will contain both `Variable: "Make"` and
`VariableId: 26`. The `ValueId` key in that same object is the `makeID` for use in this
endpoint.
- `DecodeVin`
- `DecodeVinExtended`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `makeId` | `string` \| `number` | `undefined` | Make ID to search |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetModelsForMakeIdResults`](modules.md#getmodelsformakeidresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetModelsForMakeId.ts:32](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetModelsForMakeId.ts#L32)

___

### GetModelsForMakeIdYear

▸ **GetModelsForMakeIdYear**(`params`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetModelsForMakeIdYearResults`](modules.md#getmodelsformakeidyearresults)\>\>

`GetModelsForMakeIdYear` returns the Models in the vPIC dataset for a specified Model Year
and Make whose name is LIKE the Make in the vPIC Dataset.

`params.makeId` is required

A minimum of one of the following are also required (or a combination of both):
- `params.modelYear` year you want to search for (years >= 1995 are supported according to NHTSA
  docs)
- `params.vehicleType` can be a partial name, or a full name for more specificity, e.g.,
  "Vehicle", "Moto", "Low Speed Vehicle", etc.

You can get `makeID`s via `MAKE_ID` key in Results objects of the following endpoints:
- `GetAllMakes` endpoint
- `GetMakeForManufacturer` endpoint
- `GetModelsForMake` endpoint
- `GetModelsForMakeYear` endpoint

You can get `makeID`s via `MakeID` key in Results objects of the following endpoints:
- `DecodeVinValues`
- `DecodeVinValuesBatch`

You can get `makeID`s via `ValueId` key in Results objects of the following endpoints.
One of the objects in the `Results` array will contain both `Variable: "Make"` and
`VariableId: 26`. The `ValueId` key in that same object is the `makeID` for use in this
endpoint.
- `DecodeVin`
- `DecodeVinExtended`

_NOTE:_ This endpoint requires special handling of the params object, such that none of the
params are used in the query string and are instead used as part of the URL path for the
endpoint. To account for this, we pass the params object to the `createUrl` function as the
`path`, after encoding the params object key:values into a url path string.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `params` | `Object` | `undefined` | Object of Query Search names and values to append to the URL as a query string |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetModelsForMakeIdYearResults`](modules.md#getmodelsformakeidyearresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetModelsForMakeIdYear.ts:52](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetModelsForMakeIdYear.ts#L52)

___

### GetModelsForMakeYear

▸ **GetModelsForMakeYear**(`params`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetModelsForMakeYearResults`](modules.md#getmodelsformakeyearresults)\>\>

`GetModelsForMakeYear` returns the Models in the vPIC dataset for a specified Model Year and
Make whose name is LIKE the Make in the vPIC Dataset.

`params.make` is required. It can be a partial, or a full name for more specificity, e.g.,
"Harley", "Harley Davidson", etc.

A minimum of one of the following are also required (or a combination of both):
- `params.modelYear` year you want to search for (years >= 1995 are supported according to NHTSA
  docs)
- `params.vehicleType` can be a partial name, or a full name for more specificity, e.g.,
  "Vehicle", "Moto", "Low Speed Vehicle", etc.

_NOTE:_ This endpoint requires special handling of the params object, such that none of the
params are used in the query string and are instead used as part of the URL path for the
endpoint. To account for this, we pass the params object to the `createUrl` function as the
`path`, after encoding the params object key:values into a url path string.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `params` | `Object` | `undefined` | Object of Query Search names and values to append to the URL as a query string |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetModelsForMakeYearResults`](modules.md#getmodelsformakeyearresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetModelsForMakeYear.ts:38](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetModelsForMakeYear.ts#L38)

___

### GetParts

▸ **GetParts**(`params?`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetPartsResults`](modules.md#getpartsresults)\>\>

`GetParts` provides a list of ORGs with letter date in the given range of the dates and with
specified Type (`params.type`) of ORG.

- Up to 1000 results will be returned at a time.
- Get the next page by incrementing the `params.page` query parameter.

All query `params` are optional.

`params.type`:
- (optional) number, 565 (Vehicle Identification Number Guidance, based on 49 CFR Part 565)
  or 566 (Manufacturer Identification – Reporting Requirements based on 49 CFR Part 566)
`params.fromDate`:
- (optional) ORG's Letter Date should be on or after this date
`params.manufacturer`:
- (optional) if supplied value is a number - method will do exact match on Manufacturer's Id
- if supplied value is a string - it will look for manufacturers whose name is LIKE the provided
  name
- it accepts a partial manufacturer name as an input
- multiple results are returned in case of multiple matches
- manufacturer name can be a partial name, or a full name for more specificity, e.g., "988",
  "HONDA", "HONDA OF CANADA MFG., INC.", etc.
`params.page`:
 - (optional) number, 1 (default) first 1000 records, 2 - next 1000 records, etc

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `params?` | `boolean` \| { `fromDate?`: `string` ; `page?`: `string` \| `number` ; `toDate?`: `string` ; `type?`: `string` \| `number`  } | `undefined` | Object of Query Search names and values to append to the URL as a query string. - If not providing `params` and want you want to set `doFetch = false`, you can pass `false` as the first arg in place of params, instead of having to pass the first arg as undefined, i.e. you don't have to do this: `func(undefined, doFetch)`, and can instead do this: `func(doFetch)` |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetPartsResults`](modules.md#getpartsresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetParts.ts:44](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetParts.ts#L44)

___

### GetVehicleTypesForMake

▸ **GetVehicleTypesForMake**(`makeName`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetVehicleTypesForMakeResults`](modules.md#getvehicletypesformakeresults)\>\>

`GetVehicleTypesForMake` returns all the Vehicle Types in the vPIC dataset for a specified Make,
whose name is LIKE the make name in the vPIC Dataset.

`makeName` can be a partial name, or a full name for more specificity, e.g., "Merc",
"Mercedes Benz", etc.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `makeName` | `string` | `undefined` | Name of the vehicle make to search |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetVehicleTypesForMakeResults`](modules.md#getvehicletypesformakeresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetVehicleTypesForMake.ts:18](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetVehicleTypesForMake.ts#L18)

___

### GetVehicleTypesForMakeId

▸ **GetVehicleTypesForMakeId**(`makeId`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetVehicleTypesForMakeIdResults`](modules.md#getvehicletypesformakeidresults)\>\>

`GetVehicleTypesForMakeId` returns the Models in the vPIC dataset for a specified Make
whose ID is equal to the `makeID` in the vPIC Dataset.

You can get `makeID`s via `MAKE_ID` key in Results objects of the following endpoints:
- `GetAllMakes` endpoint
- `GetMakeForManufacturer` endpoint
- `GetModelsForMake` endpoint
- `GetModelsForMakeYear` endpoint

You can get `makeID`s via `MakeID` key in Results objects of the following endpoints:
- `DecodeVinValues`
- `DecodeVinValuesBatch`

You can get `makeID`s via `ValueId` key in Results objects of the following endpoints.
One of the objects in the `Results` array will contain both `Variable: "Make"` and
`VariableId: 26`. The `ValueId` key in that same object is the `makeID` for use in this
endpoint.
- `DecodeVin`
- `DecodeVinExtended`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `makeId` | `string` \| `number` | `undefined` | Make ID to search |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetVehicleTypesForMakeIdResults`](modules.md#getvehicletypesformakeidresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetVehicleTypesForMakeId.ts:32](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetVehicleTypesForMakeId.ts#L32)

___

### GetVehicleVariableList

▸ **GetVehicleVariableList**(`doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetVehicleVariableListResults`](modules.md#getvehiclevariablelistresults)\>\>

`GetVehicleVariableList` provides a list of all the Vehicle related variables that are in the
vPIC dataset. Information on the name, description and the type of the variable is provided.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetVehicleVariableListResults`](modules.md#getvehiclevariablelistresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetVehicleVariableList.ts:14](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetVehicleVariableList.ts#L14)

___

### GetVehicleVariableValuesList

▸ **GetVehicleVariableValuesList**(`variableValue`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetVehicleVariableValuesListResults`](modules.md#getvehiclevariablevalueslistresults)\>\>

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

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetVehicleVariableValuesListResults`](modules.md#getvehiclevariablevalueslistresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetVehicleVariableValuesList.ts:20](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetVehicleVariableValuesList.ts#L20)

___

### GetWMIsForManufacturer

▸ **GetWMIsForManufacturer**(`params?`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetWMIsForManufacturerResults`](modules.md#getwmisformanufacturerresults)\>\>

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
| `params?` | [`AtLeastOne`](modules.md#atleastone)<{ `manufacturer?`: `string` \| `number` ; `vehicleType?`: `string` \| `number`  }, ``"manufacturer"`` \| ``"vehicleType"``\> | `undefined` | Object of Query Search names and values to append to the URL as a query string |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](modules.md#nhtsaresponse)<[`GetWMIsForManufacturerResults`](modules.md#getwmisformanufacturerresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetWMIsForManufacturer.ts:39](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/endpoints/GetWMIsForManufacturer.ts#L39)

___

### isValidVin

▸ **isValidVin**(`vin`): `boolean`

Provides **offline** validation of Vehicle Identification Numbers (VINs) using the
[VIN Check Algorithm](https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Check_digit).

If you need to test that the algorithm is working correctly, you can use 17 zeros `0` as
the VIN and it should return `true` as the result.

**`Example`**

Browser via html script tags
```ts
const isValid = NHTSA.isValidVin('3VWD07AJ5EM388202')
console.log(isValid) // true
```

**`Example`**

Imported as a module
```ts
import { isValidVin } from '@shaggytools/nhtsa-api-wrapper'
const isValid = isValidVin('3VWD07AJ5EM388202')
console.log(isValid) // true
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vin` | `string` | Vehicle Identification Number. |

#### Returns

`boolean`

True for a valid VIN, false for an invalid VIN.

#### Defined in

[utils/isValidVin.ts:66](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/utils/isValidVin.ts#L66)

___

### useNHTSA

▸ **useNHTSA**(): `Object`

This is the main composable function that is used to make requests to the NHTSA API.

`useNHTSA` is a composable function that returns an object containing methods for making HTTP
requests to the NHTSA API. All request methods return a Promise that resolves to an object
containing the response data, see [NhtsaApiResponse](#TODO-LINK-TO-DOCS) type.

Pleas see the [`/api` README](https://github.com/shaggytech/nhtsa-api-wrapper/packages/lib/src/api)
for more information on the exported methods and how to use them.

---

The exported methods are:

- `get` - Makes a GET request, uses the internal url variable if no URL is provided

- `post` - Makes a POST request, uses the internal url variable if no URL is provided

- `cacheUrl` - Builds the URL string and stores it in internal state

- `createUrl` - Builds the URL string but does not store it in internal state

- `getCachedUrl` - Returns the internal URL string

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cacheUrl` | (`options`: [`CreateUrlOptions`](modules.md#createurloptions)) => `string` |
| `createPostBody` | (`data`: `string`) => `string` |
| `createUrl` | (`options`: [`CreateUrlOptions`](modules.md#createurloptions)) => `string` |
| `get` | <T\>(`url?`: `string` \| [`CreateUrlOptions`](modules.md#createurloptions), `options?`: `RequestInit` & { `saveUrl?`: `boolean`  }) => `Promise`<[`NhtsaResponse`](modules.md#nhtsaresponse)<`T`\>\> |
| `getCachedUrl` | () => `string` |
| `post` | <T\>(`url?`: `string` \| [`CreateUrlOptions`](modules.md#createurloptions), `options?`: `RequestInit` & { `saveUrl?`: `boolean`  }) => `Promise`<[`NhtsaResponse`](modules.md#nhtsaresponse)<`T`\>\> |

#### Defined in

[api/useNHTSA.ts:44](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/96a6efd/packages/lib/src/api/useNHTSA.ts#L44)
