import type { NhtsaResponse } from '../../types';
/**
 * DecodeVinValuesBatch decodes a batch of VINs that are submitted in a standardized format (see below) and returns multiple decodes in a flat format.
 *
 * For this particular API you just have to provie a string of VINs `inputString` that are separated by a “;”.
 *
 * You can also indicate the model year prior to the “;” separated by a “,”
 *
 * The `inputString` parameter should be in the following format
 * - no modelYear: `vin;vin;vin`
 * - with modelYear`vin,modelYear;vin,modelYear;vin,modelYear`
 * - mix of with/without modelYear`vin;vin,modelYear`
 * - vin and modelYear are placeholders for real values in these examples
 *
 *  Max 50 VINs per batch
 *
 * @async
 * @param {string} inputString - A string of Vehicle Identification Numbers (full or partial) following the format listed in the description
 * @returns {(Promise<DecodeVINValuesBatchResponse>)} - Api Response object
 */
export declare const DecodeVinValuesBatch: (inputString: string) => Promise<NhtsaResponse<DecodeVinValuesBatchResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for DecodeVinValuesBatch endpoint
 *
 * @alias DecodeVINValuesBatchResults
 */
export declare type DecodeVinValuesBatchResults = {
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
//# sourceMappingURL=DecodeVinValuesBatch.d.ts.map