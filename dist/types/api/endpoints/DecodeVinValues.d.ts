import type { NhtsaResponse } from '../../types';
/**
 * DecodeVinValues will decode the VIN with the Results returned in a _flat file_ format.
 * - The results will be made available in a flat file format of a single object containing
 *   'key<string>: value<string>' results
 * - Providing params.modelYear allows for the decoding to specifically be done in the current,
 *   or older (pre-1980), model year ranges
 *   - It is recommended to always provide `params.modelYear` if the model year is known at the time of decoding
 * - This endpoint also supports partial VIN decoding (VINs that are less than 17 characters)
 *   - In this case, the VIN will be decoded partially with the available characters
 *   - In case of partial VINs, a "*" could be used to indicate the unavailable characters
 *   - The 9th digit is not necessary
 *   - Ex: 5UXWX7C5*BA
 *
 * @async
 * @param {string} vin - Vehicle Identification Number (full or partial)
 * @param {Object} [params] - Query Search Parameters to append to the URL
 * @param {(number|string)} [params.modelYear] - Optional Model Year search parameter
 * @returns {(Promise<NhtsaResponse<DecodeVinValuesResults>>)} Api Response object
 */
export declare const DecodeVinValues: (vin: string, params?: {
    modelYear?: number;
}) => Promise<NhtsaResponse<DecodeVinValuesResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for DecodeVinValues endpoint
 *
 * @alias DecodeVinValuesResults
 */
export declare type DecodeVinValuesResults = {
    /** Flat file format, single object containing keys and values of type string */
    ABS: string;
    ActiveSafetySysNote: string;
    AdaptiveCruiseControl: string;
    AdaptiveDrivingBeam: string;
    AdaptiveHeadlights: string;
    AdditionalErrorText: string;
    AirBagLocCurtain: string;
    AirBagLocFront: string;
    AirBagLocKnee: string;
    AirBagLocSeatCushion: string;
    AirBagLocSide: string;
    AutoReverseSystem: string;
    AutomaticPedestrianAlertingSound: string;
    AxleConfiguration: string;
    Axles: string;
    BasePrice: string;
    BatteryA: string;
    BatteryA_to: string;
    BatteryCells: string;
    BatteryInfo: string;
    BatteryKWh: string;
    BatteryKWh_to: string;
    BatteryModules: string;
    BatteryPacks: string;
    BatteryType: string;
    BatteryV: string;
    BatteryV_to: string;
    BedLengthIN: string;
    BlindSpotIntervention: string;
    BlindSpotMon: string;
    BodyCabType: string;
    BodyClass: string;
    BrakeSystemDesc: string;
    BrakeSystemType: string;
    BusFloorConfigType: string;
    BusLength: string;
    BusType: string;
    CAN_AACN: string;
    CIB: string;
    CashForClunkers: string;
    ChargerLevel: string;
    ChargerPowerKW: string;
    CoolingType: string;
    CurbWeightLB: string;
    CustomMotorcycleType: string;
    DaytimeRunningLight: string;
    DestinationMarket: string;
    DisplacementCC: string;
    DisplacementCI: string;
    DisplacementL: string;
    Doors: string;
    DriveType: string;
    DriverAssist: string;
    DynamicBrakeSupport: string;
    EDR: string;
    ESC: string;
    EVDriveUnit: string;
    ElectrificationLevel: string;
    EngineConfiguration: string;
    EngineCycles: string;
    EngineCylinders: string;
    EngineHP: string;
    EngineHP_to: string;
    EngineKW: string;
    EngineManufacturer: string;
    EngineModel: string;
    EntertainmentSystem: string;
    ErrorCode: string;
    ErrorText: string;
    ForwardCollisionWarning: string;
    FuelInjectionType: string;
    FuelTypePrimary: string;
    FuelTypeSecondary: string;
    GCWR: string;
    GCWR_to: string;
    GVWR: string;
    GVWR_to: string;
    KeylessIgnition: string;
    LaneCenteringAssistance: string;
    LaneDepartureWarning: string;
    LaneKeepSystem: string;
    LowerBeamHeadlampLightSource: string;
    Make: string;
    MakeID: string;
    Manufacturer: string;
    ManufacturerId: string;
    Model: string;
    ModelID: string;
    ModelYear: string;
    MotorcycleChassisType: string;
    MotorcycleSuspensionType: string;
    NCSABodyType: string;
    NCSAMake: string;
    NCSAMapExcApprovedBy: string;
    NCSAMapExcApprovedOn: string;
    NCSAMappingException: string;
    NCSAModel: string;
    NCSANote: string;
    NonLandUse: string;
    Note: string;
    OtherBusInfo: string;
    OtherEngineInfo: string;
    OtherMotorcycleInfo: string;
    OtherRestraintSystemInfo: string;
    OtherTrailerInfo: string;
    ParkAssist: string;
    PedestrianAutomaticEmergencyBraking: string;
    PlantCity: string;
    PlantCompanyName: string;
    PlantCountry: string;
    PlantState: string;
    PossibleValues: string;
    Pretensioner: string;
    RearAutomaticEmergencyBraking: string;
    RearCrossTrafficAlert: string;
    RearVisibilitySystem: string;
    SAEAutomationLevel: string;
    SAEAutomationLevel_to: string;
    SeatBeltsAll: string;
    SeatRows: string;
    Seats: string;
    SemiautomaticHeadlampBeamSwitching: string;
    Series: string;
    Series2: string;
    SteeringLocation: string;
    SuggestedVIN: string;
    TPMS: string;
    TopSpeedMPH: string;
    TrackWidth: string;
    TractionControl: string;
    TrailerBodyType: string;
    TrailerLength: string;
    TrailerType: string;
    TransmissionSpeeds: string;
    TransmissionStyle: string;
    Trim: string;
    Trim2: string;
    Turbo: string;
    VIN: string;
    ValveTrainDesign: string;
    VehicleDescriptor: string;
    VehicleType: string;
    WheelBaseLong: string;
    WheelBaseShort: string;
    WheelBaseType: string;
    WheelSizeFront: string;
    WheelSizeRear: string;
    Wheels: string;
    Windows: string;
};
