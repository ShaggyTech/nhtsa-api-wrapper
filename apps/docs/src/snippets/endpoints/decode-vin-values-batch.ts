// #region type-results
type DecodeVinValuesBatchResults = {
  ABS: string
  ActiveSafetySysNote: string
  AdaptiveCruiseControl: string
  AdaptiveDrivingBeam: string
  AdaptiveHeadlights: string
  AdditionalErrorText: string
  AirBagLocCurtain: string
  AirBagLocFront: string
  AirBagLocKnee: string
  AirBagLocSeatCushion: string
  AirBagLocSide: string
  AutoReverseSystem: string
  AutomaticPedestrianAlertingSound: string
  AxleConfiguration: string
  Axles: string
  BasePrice: string
  BatteryA: string
  BatteryA_to: string
  BatteryCells: string
  BatteryInfo: string
  BatteryKWh: string
  BatteryKWh_to: string
  BatteryModules: string
  BatteryPacks: string
  BatteryType: string
  BatteryV: string
  BatteryV_to: string
  BedLengthIN: string
  BedType: string
  BlindSpotIntervention: string
  BlindSpotMon: string
  BodyCabType: string
  BodyClass: string
  BrakeSystemDesc: string
  BrakeSystemType: string
  BusFloorConfigType: string
  BusLength: string
  BusType: string
  CAN_AACN: string
  CIB: string
  CashForClunkers: string
  ChargerLevel: string
  ChargerPowerKW: string
  CoolingType: string
  CurbWeightLB: string
  CustomMotorcycleType: string
  DaytimeRunningLight: string
  DestinationMarket: string
  DisplacementCC: string
  DisplacementCI: string
  DisplacementL: string
  Doors: string
  DriveType: string
  DriverAssist: string
  DynamicBrakeSupport: string
  EDR: string
  ESC: string
  EVDriveUnit: string
  ElectrificationLevel: string
  EngineConfiguration: string
  EngineCycles: string
  EngineCylinders: string
  EngineHP: string
  EngineHP_to: string
  EngineKW: string
  EngineManufacturer: string
  EngineModel: string
  EntertainmentSystem: string
  ErrorCode: string
  ErrorText: string
  ForwardCollisionWarning: string
  FuelInjectionType: string
  FuelTypePrimary: string
  FuelTypeSecondary: string
  GCWR: string
  GCWR_to: string
  GVWR: string
  GVWR_to: string
  KeylessIgnition: string
  LaneCenteringAssistance: string
  LaneDepartureWarning: string
  LaneKeepSystem: string
  LowerBeamHeadlampLightSource: string
  Make: string
  MakeID: string
  Manufacturer: string
  ManufacturerId: string
  Model: string
  ModelID: string
  ModelYear: string
  MotorcycleChassisType: string
  MotorcycleSuspensionType: string
  NCSABodyType: string
  NCSAMake: string
  NCSAMapExcApprovedBy: string
  NCSAMapExcApprovedOn: string
  NCSAMappingException: string
  NCSAModel: string
  NCSANote: string
  NonLandUse: string
  Note: string
  OtherBusInfo: string
  OtherEngineInfo: string
  OtherMotorcycleInfo: string
  OtherRestraintSystemInfo: string
  OtherTrailerInfo: string
  ParkAssist: string
  PedestrianAutomaticEmergencyBraking: string
  PlantCity: string
  PlantCompanyName: string
  PlantCountry: string
  PlantState: string
  PossibleValues: string
  Pretensioner: string
  RearAutomaticEmergencyBraking: string
  RearCrossTrafficAlert: string
  RearVisibilitySystem: string
  SAEAutomationLevel: string
  SAEAutomationLevel_to: string
  SeatBeltsAll: string
  SeatRows: string
  Seats: string
  SemiautomaticHeadlampBeamSwitching: string
  Series: string
  Series2: string
  SteeringLocation: string
  SuggestedVIN: string
  TPMS: string
  TopSpeedMPH: string
  TrackWidth: string
  TractionControl: string
  TrailerBodyType: string
  TrailerLength: string
  TrailerType: string
  TransmissionSpeeds: string
  TransmissionStyle: string
  Trim: string
  Trim2: string
  Turbo: string
  VIN: string
  ValveTrainDesign: string
  VehicleDescriptor: string
  VehicleType: string
  WheelBaseLong: string
  WheelBaseShort: string
  WheelBaseType: string
  WheelSizeFront: string
  WheelSizeRear: string
  Wheels: string
  Windows: string
}
// #endregion type-results

// #region example-response
// Using DecodeVinValuesBatch('5UXWX7C5*BA,2011; 5YJSA3DS*EF')
const exampleResponse = {
  Count: 2,
  Message: 'Results returned successfully ...',
  Results: [
    {
      ABS: '',
      ActiveSafetySysNote: '',
      AdaptiveCruiseControl: '',
      AdaptiveDrivingBeam: '',
      AdaptiveHeadlights: '',
      AdditionalErrorText: '',
      AirBagLocCurtain: '',
      AirBagLocFront: '1st Row (Driver and Passenger)',
      AirBagLocKnee: '',
      AirBagLocSeatCushion: '',
      AirBagLocSide: '1st Row (Driver and Passenger)',
      AutoReverseSystem: '',
      AutomaticPedestrianAlertingSound: '',
      AxleConfiguration: '',
      Axles: '',
      BasePrice: '',
      BatteryA: '',
      BatteryA_to: '',
      BatteryCells: '',
      BatteryInfo: '',
      BatteryKWh: '',
      BatteryKWh_to: '',
      BatteryModules: '',
      BatteryPacks: '',
      BatteryType: '',
      BatteryV: '',
      BatteryV_to: '',
      BedLengthIN: '',
      BedType: '',
      BlindSpotIntervention: '',
      BlindSpotMon: '',
      BodyCabType: '',
      BodyClass: 'Sport Utility Vehicle (SUV)/Multi-Purpose Vehicle (MPV)',
      BrakeSystemDesc: '',
      BrakeSystemType: '',
      BusFloorConfigType: 'Not Applicable',
      BusLength: '',
      BusType: 'Not Applicable',
      CAN_AACN: '',
      CIB: '',
      CashForClunkers: '',
      ChargerLevel: '',
      ChargerPowerKW: '',
      CoolingType: '',
      CurbWeightLB: '',
      CustomMotorcycleType: 'Not Applicable',
      DaytimeRunningLight: '',
      DestinationMarket: '',
      DisplacementCC: '2979.1682352',
      DisplacementCI: '181.8',
      DisplacementL: '3.0',
      Doors: '4',
      DriveType: '',
      DriverAssist: '',
      DynamicBrakeSupport: '',
      EDR: '',
      ESC: '',
      EVDriveUnit: '',
      ElectrificationLevel: '',
      EngineConfiguration: '',
      EngineCycles: '',
      EngineCylinders: '6',
      EngineHP: '300',
      EngineHP_to: '',
      EngineKW: '223.7100',
      EngineManufacturer: '',
      EngineModel: '',
      EntertainmentSystem: '',
      ErrorCode: '6',
      ErrorText: '6 - Incomplete VIN',
      ForwardCollisionWarning: '',
      FuelInjectionType: '',
      FuelTypePrimary: 'Gasoline',
      FuelTypeSecondary: '',
      GCWR: '',
      GCWR_to: '',
      GVWR: 'Class 1D: 5,001 - 6,000 lb (2,268 - 2,722 kg)',
      GVWR_to: '',
      KeylessIgnition: '',
      LaneCenteringAssistance: '',
      LaneDepartureWarning: '',
      LaneKeepSystem: '',
      LowerBeamHeadlampLightSource: '',
      Make: 'BMW',
      MakeID: '452',
      Manufacturer: 'BMW MANUFACTURER CORPORATION / BMW NORTH AMERICA',
      ManufacturerId: '968',
      Model: 'X3',
      ModelID: '1719',
      ModelYear: '2011',
      MotorcycleChassisType: 'Not Applicable',
      MotorcycleSuspensionType: 'Not Applicable',
      NCSABodyType: '',
      NCSAMake: '',
      NCSAMapExcApprovedBy: '',
      NCSAMapExcApprovedOn: '',
      NCSAMappingException: '',
      NCSAModel: '',
      NCSANote: '',
      NonLandUse: '',
      Note: '',
      OtherBusInfo: '',
      OtherEngineInfo: '',
      OtherMotorcycleInfo: '',
      OtherRestraintSystemInfo:
        'Head Inflatable Restraint for Driver, Front Passenger, Rear Outboard Driver-side and Rear Outboard Passenger-side.  Knee Inflatable Restraint for Driver.  Pretensioners for Driver and Front Passenger.',
      OtherTrailerInfo: '',
      ParkAssist: '',
      PedestrianAutomaticEmergencyBraking: '',
      PlantCity: 'MUNICH',
      PlantCompanyName: '',
      PlantCountry: 'GERMANY',
      PlantState: '',
      PossibleValues: '',
      Pretensioner: 'Yes',
      RearAutomaticEmergencyBraking: '',
      RearCrossTrafficAlert: '',
      RearVisibilitySystem: '',
      SAEAutomationLevel: '',
      SAEAutomationLevel_to: '',
      SeatBeltsAll: 'Manual',
      SeatRows: '',
      Seats: '',
      SemiautomaticHeadlampBeamSwitching: '',
      Series: '',
      Series2: '',
      SteeringLocation: '',
      SuggestedVIN: '',
      TPMS: 'Direct',
      TopSpeedMPH: '',
      TrackWidth: '',
      TractionControl: '',
      TrailerBodyType: 'Not Applicable',
      TrailerLength: '',
      TrailerType: 'Not Applicable',
      TransmissionSpeeds: '',
      TransmissionStyle: '',
      Trim: 'xDrive35i',
      Trim2: 'SAV',
      Turbo: '',
      VIN: '5UXWX7C5*BA',
      ValveTrainDesign: '',
      VehicleDescriptor: '5UXWX7C5*BA',
      VehicleType: 'MULTIPURPOSE PASSENGER VEHICLE (MPV)',
      WheelBaseLong: '',
      WheelBaseShort: '',
      WheelBaseType: '',
      WheelSizeFront: '',
      WheelSizeRear: '',
      Wheels: '',
      Windows: '',
    },
    {
      ABS: '',
      ActiveSafetySysNote: '',
      AdaptiveCruiseControl: '',
      AdaptiveDrivingBeam: '',
      AdaptiveHeadlights: '',
      AdditionalErrorText:
        'In the Possible values section, the Numeric value before the : indicates the position in error and the values after the : indicate the possible values that are allowed in this position. Unused position(s): 8;',
      AirBagLocCurtain: '',
      AirBagLocFront: '1st Row (Driver and Passenger)',
      AirBagLocKnee: '1st Row (Driver and Passenger)',
      AirBagLocSeatCushion: '',
      AirBagLocSide: 'All Rows',
      AutoReverseSystem: '',
      AutomaticPedestrianAlertingSound: '',
      AxleConfiguration: '',
      Axles: '',
      BasePrice: '',
      BatteryA: '',
      BatteryA_to: '',
      BatteryCells: '',
      BatteryInfo: '',
      BatteryKWh: '20',
      BatteryKWh_to: '',
      BatteryModules: '',
      BatteryPacks: '',
      BatteryType: '',
      BatteryV: '',
      BatteryV_to: '',
      BedLengthIN: '',
      BedType: 'Not Applicable',
      BlindSpotIntervention: '',
      BlindSpotMon: '',
      BodyCabType: 'Not Applicable',
      BodyClass: 'Hatchback/Liftback/Notchback',
      BrakeSystemDesc: '',
      BrakeSystemType: '',
      BusFloorConfigType: 'Not Applicable',
      BusLength: '',
      BusType: 'Not Applicable',
      CAN_AACN: '',
      CIB: '',
      CashForClunkers: '',
      ChargerLevel: '',
      ChargerPowerKW: '',
      CoolingType: '',
      CurbWeightLB: '',
      CustomMotorcycleType: 'Not Applicable',
      DaytimeRunningLight: '',
      DestinationMarket: '',
      DisplacementCC: '',
      DisplacementCI: '',
      DisplacementL: '',
      Doors: '5',
      DriveType: 'RWD/Rear-Wheel Drive',
      DriverAssist: '',
      DynamicBrakeSupport: '',
      EDR: '',
      ESC: '',
      EVDriveUnit: '',
      ElectrificationLevel: '',
      EngineConfiguration: '',
      EngineCycles: '',
      EngineCylinders: '',
      EngineHP: '',
      EngineHP_to: '',
      EngineKW: '',
      EngineManufacturer: '',
      EngineModel: '',
      EntertainmentSystem: '',
      ErrorCode: '4,6,14',
      ErrorText:
        '4 - VIN corrected, error in one position only (indicated by ! in Suggested VIN), multiple matches found; 6 - Incomplete VIN; 14 - Unable to provide information for some of the characters in the VIN, based on the manufacturer submission.',
      ForwardCollisionWarning: '',
      FuelInjectionType: '',
      FuelTypePrimary: '',
      FuelTypeSecondary: '',
      GCWR: '',
      GCWR_to: '',
      GVWR: '',
      GVWR_to: '',
      KeylessIgnition: '',
      LaneCenteringAssistance: '',
      LaneDepartureWarning: '',
      LaneKeepSystem: '',
      LowerBeamHeadlampLightSource: '',
      Make: 'TESLA',
      MakeID: '441',
      Manufacturer: 'TESLA, INC.',
      ManufacturerId: '955',
      Model: 'Model S',
      ModelID: '1685',
      ModelYear: '2014',
      MotorcycleChassisType: 'Not Applicable',
      MotorcycleSuspensionType: 'Not Applicable',
      NCSABodyType: '',
      NCSAMake: '',
      NCSAMapExcApprovedBy: '',
      NCSAMapExcApprovedOn: '',
      NCSAMappingException: '',
      NCSAModel: '',
      NCSANote: '',
      NonLandUse: '',
      Note: '',
      OtherBusInfo: '',
      OtherEngineInfo: '',
      OtherMotorcycleInfo: '',
      OtherRestraintSystemInfo: '',
      OtherTrailerInfo: '',
      ParkAssist: '',
      PedestrianAutomaticEmergencyBraking: '',
      PlantCity: 'FREMONT',
      PlantCompanyName: 'Tesla - Fremont, CA (FRE)',
      PlantCountry: 'UNITED STATES (USA)',
      PlantState: 'CALIFORNIA',
      PossibleValues: '(8:12)',
      Pretensioner: '',
      RearAutomaticEmergencyBraking: '',
      RearCrossTrafficAlert: '',
      RearVisibilitySystem: '',
      SAEAutomationLevel: '',
      SAEAutomationLevel_to: '',
      SeatBeltsAll: 'Manual',
      SeatRows: '',
      Seats: '',
      SemiautomaticHeadlampBeamSwitching: '',
      Series: '',
      Series2: '',
      SteeringLocation: 'Left-Hand Drive (LHD)',
      SuggestedVIN: '5YJSA3D!*EF',
      TPMS: '',
      TopSpeedMPH: '',
      TrackWidth: '',
      TractionControl: '',
      TrailerBodyType: 'Not Applicable',
      TrailerLength: '',
      TrailerType: 'Not Applicable',
      TransmissionSpeeds: '',
      TransmissionStyle: '',
      Trim: 'w/DC Fast Charge',
      Trim2: '',
      Turbo: '',
      VIN: '5YJSA3DS*EF',
      ValveTrainDesign: '',
      VehicleDescriptor: '5YJSA3DS*EF',
      VehicleType: 'PASSENGER CAR',
      WheelBaseLong: '',
      WheelBaseShort: '',
      WheelBaseType: '',
      WheelSizeFront: '',
      WheelSizeRear: '',
      Wheels: '',
      Windows: '',
    },
  ],
  SearchCriteria: '',
}
// #endregion example-response

export type { DecodeVinValuesBatchResults }
export { exampleResponse }
