const Results = [
  {
    ABS: "",
    ActiveSafetySysNote: "",
    AdaptiveCruiseControl: "",
    AdaptiveDrivingBeam: "",
    AdaptiveHeadlights: "",
    AdditionalErrorText:
      "The error positions are indicated by ! in Suggested VIN. In the Possible values section, each pair of parenthesis indicate information about each error position in VIN . The Numeric value before the : indicates the position in error and the values after the : indicate the possible values that are allowed in this position Unused position(s): 4,5,7,8,11;",
    AirBagLocCurtain: "1st and 2nd Rows",
    AirBagLocFront: "1st Row (Driver and Passenger)",
    AirBagLocKnee: "",
    AirBagLocSeatCushion: "",
    AirBagLocSide: "1st Row (Driver and Passenger)",
    AutoReverseSystem: "",
    AutomaticPedestrianAlertingSound: "",
    AxleConfiguration: "",
    Axles: "",
    BasePrice: "",
    BatteryA: "",
    BatteryA_to: "",
    BatteryCells: "",
    BatteryInfo: "",
    BatteryKWh: "",
    BatteryKWh_to: "",
    BatteryModules: "",
    BatteryPacks: "",
    BatteryType: "",
    BatteryV: "",
    BatteryV_to: "",
    BedLengthIN: "",
    BedType: "",
    BlindSpotIntervention: "",
    BlindSpotMon: "",
    BodyCabType: "",
    BodyClass: "",
    BrakeSystemDesc: "",
    BrakeSystemType: "",
    BusFloorConfigType: "Not Applicable",
    BusLength: "",
    BusType: "Not Applicable",
    CAN_AACN: "",
    CIB: "",
    CashForClunkers: "",
    ChargerLevel: "",
    ChargerPowerKW: "",
    CoolingType: "",
    CurbWeightLB: "",
    CustomMotorcycleType: "Not Applicable",
    DaytimeRunningLight: "",
    DestinationMarket: "",
    DisplacementCC: "",
    DisplacementCI: "",
    DisplacementL: "",
    Doors: "",
    DriveType: "",
    DriverAssist: "",
    DynamicBrakeSupport: "",
    EDR: "",
    ESC: "",
    EVDriveUnit: "",
    ElectrificationLevel: "",
    EngineConfiguration: "",
    EngineCycles: "",
    EngineCylinders: "",
    EngineHP: "",
    EngineHP_to: "",
    EngineKW: "",
    EngineManufacturer: "",
    EngineModel: "",
    EntertainmentSystem: "",
    ErrorCode: "5,12,14",
    ErrorText:
      "5 - VIN has errors in few positions; 12 - Model Year Warning - Model Year entered for decoding with VIN does not match the model year based on the 10th position in VIN.; 14 - Unable to provide information for some of the characters in the VIN, based on the manufacturer submission.",
    ForwardCollisionWarning: "",
    FuelInjectionType: "",
    FuelTypePrimary: "",
    FuelTypeSecondary: "",
    GCWR: "",
    GCWR_to: "",
    GVWR: "",
    GVWR_to: "",
    KeylessIgnition: "",
    LaneCenteringAssistance: "",
    LaneDepartureWarning: "",
    LaneKeepSystem: "",
    LowerBeamHeadlampLightSource: "",
    Make: "AUDI",
    MakeID: "582",
    Manufacturer: "AUDI AG",
    ManufacturerId: "1149",
    Model: "",
    ModelID: "",
    ModelYear: "2011",
    MotorcycleChassisType: "Not Applicable",
    MotorcycleSuspensionType: "Not Applicable",
    NCSABodyType: "",
    NCSAMake: "",
    NCSAMapExcApprovedBy: "",
    NCSAMapExcApprovedOn: "",
    NCSAMappingException: "",
    NCSAModel: "",
    NCSANote: "",
    NonLandUse: "",
    Note: "",
    OtherBusInfo: "",
    OtherEngineInfo: "",
    OtherMotorcycleInfo: "",
    OtherRestraintSystemInfo: "Active Seat Belt, Advanced Front AirBag",
    OtherTrailerInfo: "",
    ParkAssist: "",
    PedestrianAutomaticEmergencyBraking: "",
    PlantCity: "",
    PlantCompanyName: "",
    PlantCountry: "",
    PlantState: "",
    PossibleValues: "(4:CDLMVW)(5:FGKM)(8:EP)(11:17ADKNR)",
    Pretensioner: "",
    RearAutomaticEmergencyBraking: "",
    RearCrossTrafficAlert: "",
    RearVisibilitySystem: "",
    SAEAutomationLevel: "",
    SAEAutomationLevel_to: "",
    SeatBeltsAll: "Manual",
    SeatRows: "",
    Seats: "",
    SemiautomaticHeadlampBeamSwitching: "",
    Series: "",
    Series2: "",
    SteeringLocation: "",
    SuggestedVIN: "WA1!!AF!2J!008189",
    TPMS: "",
    TopSpeedMPH: "",
    TrackWidth: "",
    TractionControl: "",
    TrailerBodyType: "Not Applicable",
    TrailerLength: "",
    TrailerType: "Not Applicable",
    TransmissionSpeeds: "",
    TransmissionStyle: "",
    Trim: "",
    Trim2: "",
    Turbo: "",
    VIN: "WA1A4AFY2J2008189",
    ValveTrainDesign: "",
    VehicleDescriptor: "WA1A4AFY*J2",
    VehicleType: "MULTIPURPOSE PASSENGER VEHICLE (MPV)",
    WheelBaseLong: "",
    WheelBaseShort: "",
    WheelBaseType: "",
    WheelSizeFront: "",
    WheelSizeRear: "",
    Wheels: "",
    Windows: "",
  },
];

const variableNames = Results.map((item) => `"${item.Variable}"`).join(" | ");

console.log(variableNames);
