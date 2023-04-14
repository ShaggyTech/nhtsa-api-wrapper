// #region type-results
type DecodeVinValuesResults = {
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
// Using DecodeVinValues('WA1A4AFY2J2008189')
const exampleResponse = {
  Count: 136,
  Message: 'Results returned successfully ...',
  Results: [
    {
      ABS: 'Standard',
      ActiveSafetySysNote: '',
      AdaptiveCruiseControl: '',
      AdaptiveDrivingBeam: '',
      AdaptiveHeadlights: '',
      AdditionalErrorText: '',
      AirBagLocCurtain: 'All Rows',
      AirBagLocFront: '1st Row (Driver and Passenger)',
      AirBagLocKnee: '',
      AirBagLocSeatCushion: '',
      AirBagLocSide: '1st Row (Driver and Passenger)',
      AutoReverseSystem: 'Standard',
      AutomaticPedestrianAlertingSound: '',
      AxleConfiguration: '',
      Axles: '2',
      BasePrice: '54300',
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
      BlindSpotMon: 'Standard',
      BodyCabType: '',
      BodyClass: 'Sport Utility Vehicle (SUV)/Multi-Purpose Vehicle (MPV)',
      BrakeSystemDesc: '',
      BrakeSystemType: '',
      BusFloorConfigType: 'Not Applicable',
      BusLength: '',
      BusType: 'Not Applicable',
      CAN_AACN: 'Standard',
      CIB: 'Standard',
      CashForClunkers: '',
      ChargerLevel: '',
      ChargerPowerKW: '',
      CoolingType: '',
      CurbWeightLB: '',
      CustomMotorcycleType: 'Not Applicable',
      DaytimeRunningLight: 'Standard',
      DestinationMarket: '',
      DisplacementCC: '3000',
      DisplacementCI: '183.0712322841',
      DisplacementL: '3',
      Doors: '4',
      DriveType: '',
      DriverAssist: '',
      DynamicBrakeSupport: 'Standard',
      EDR: '',
      ESC: 'Standard',
      EVDriveUnit: '',
      ElectrificationLevel: '',
      EngineConfiguration: 'V-Shaped',
      EngineCycles: '',
      EngineCylinders: '6',
      EngineHP: '354',
      EngineHP_to: '',
      EngineKW: '263.9778',
      EngineManufacturer: 'Audi',
      EngineModel: '',
      EntertainmentSystem: '',
      ErrorCode: '0',
      ErrorText: '0 - VIN decoded clean. Check Digit (9th position) is correct',
      ForwardCollisionWarning: 'Standard',
      FuelInjectionType: '',
      FuelTypePrimary: 'Gasoline',
      FuelTypeSecondary: '',
      GCWR: '',
      GCWR_to: '',
      GVWR: 'Class 1D: 5,001 - 6,000 lb (2,268 - 2,722 kg)',
      GVWR_to: '',
      KeylessIgnition: 'Standard',
      LaneCenteringAssistance: '',
      LaneDepartureWarning: '',
      LaneKeepSystem: '',
      LowerBeamHeadlampLightSource: '',
      Make: 'AUDI',
      MakeID: '582',
      Manufacturer: 'AUDI AG',
      ManufacturerId: '1149',
      Model: 'SQ5',
      ModelID: '4052',
      ModelYear: '2018',
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
      OtherEngineInfo:
        'Fuel: GASOLINE(50-st.); T.G.: JVGAJ03.0N7F; Emis. std:Bin 70/LEV III ULEV 70',
      OtherMotorcycleInfo: '',
      OtherRestraintSystemInfo: 'Advanced Front Airbags.',
      OtherTrailerInfo: '',
      ParkAssist: 'Standard',
      PedestrianAutomaticEmergencyBraking: '',
      PlantCity: 'SAN JOSE',
      PlantCompanyName: '',
      PlantCountry: 'MEXICO',
      PlantState: 'CHIAPAS',
      PossibleValues: '',
      Pretensioner: '',
      RearAutomaticEmergencyBraking: '',
      RearCrossTrafficAlert: '',
      RearVisibilitySystem: 'Standard',
      SAEAutomationLevel: '',
      SAEAutomationLevel_to: '',
      SeatBeltsAll: 'Manual',
      SeatRows: '2',
      Seats: '5',
      SemiautomaticHeadlampBeamSwitching: 'Standard',
      Series: 'SQ5 quattro Premium Plus',
      Series2: '',
      SteeringLocation: 'Left-Hand Drive (LHD)',
      SuggestedVIN: '',
      TPMS: 'Indirect',
      TopSpeedMPH: '130',
      TrackWidth: '',
      TractionControl: 'Standard',
      TrailerBodyType: 'Not Applicable',
      TrailerLength: '',
      TrailerType: 'Not Applicable',
      TransmissionSpeeds: '',
      TransmissionStyle: 'Automatic',
      Trim: '',
      Trim2: '',
      Turbo: '',
      VIN: 'WA1A4AFY2J2008189',
      ValveTrainDesign: '',
      VehicleDescriptor: 'WA1A4AFY*J2',
      VehicleType: 'MULTIPURPOSE PASSENGER VEHICLE (MPV)',
      WheelBaseLong: '',
      WheelBaseShort: '111.2',
      WheelBaseType: '',
      WheelSizeFront: '20',
      WheelSizeRear: '20',
      Wheels: '4',
      Windows: '',
    },
  ],
  SearchCriteria: 'VIN:WA1A4AFY2J2008189',
}
// #endregion example-response

export type { DecodeVinValuesResults }
export { exampleResponse }
