import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * `DecodeVinValuesBatch` decodes a batch of Vehicle Identification Numbers (VINs) and returns
 * useful information about the vehicles in in a _flat format_. This means the endpoint will return
 * an array with multiple objects of results. Each object represents a VIN from the `inputString`
 * and the key:value pairs in the objects are variables and their values for each particular VIN.
 *
 * For this particular API you just have to provide a string of VINs, `inputString`, that are
 * separated by a `;` char. You can also indicate the model year after the vin, preceded by a `,`
 * char.
 *
 * The `inputString` parameter should be in the following format:
 * - ex: `5UXWX7C5*BA, 2011; 5YJSA3DS*EF`
 * - no modelYear: `vin; vin; vin`
 * - with modelYear: `vin, modelYear; vin, modelYear; vin, modelYear`
 * - mix of with/without modelYear: `vin; vin, modelYear`
 * - _vin_ and _modelYear_ are placeholders for real values in these examples
 * - all spaces between `;` and `,` are used in these examples for readability ard are optional
 * - _Max 50 VINs per batch_
 *
 * Providing the modelYear in the input string allows for the decoding to specifically be done in
 * the current, or older (pre-1980), model year ranges. It is recommended to always provide
 * the model year if it is known at the time of decoding, but it is not required.
 *
 * The variable names and values in the flat format objects are equivalent to "Variable" and "Value"
 * keys found in objects returned from _nested format_ endpoints such as `DecodeVin` and
 * `DecodeVinExtended`.
 *
 * *NOTE:* For decoding VINs this package recommends using `DecodeVinValues*` endpoints such as
 * this one. The flat format is more efficient and easier to work with as you won't have to iterate
 * through a bunch of objects just to get all variable names/values as is the case with
 * _nested format_. Unless you need to obtain "ValueID" and/or "VariableID" for each variable in a
 * decoded VIN. In that case, you should use either `DecodeVin` or `DecodeVinExtended` endpoints to
 * obtain the values in a _nested format_ where each variable is an object containing individual
 * "Variable", "Value", "ValueID" and "VariableID" properties.
 *
 * *NOTE:* This endpoint is the only one to use a POST request instead of a GET request. We want to
 * ensure that response format is always set to 'json' in all requests, even POST requests. as POST
 * requests do not allow query strings, we can't set the response format to 'json' in a query
 * string like every other endpoint. Therefore, we
 * have to set the response format in the body of the request before sending it. This is performed
 * internally by the post function in `useNHTSA` composable but it is worth noting here.  We also
 *
 *
 * @param {string} inputString - A string of Vehicle Identification Numbers (full or partial)
 * following the format listed in the description
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<DecodeVinValuesBatchResults> | string>)} - Api Response `object`
 * -or- url `string` if `doFetch = false`
 */
export const DecodeVinValuesBatch = async (
  inputString: string,
  doFetch = true
): Promise<NhtsaResponse<DecodeVinValuesBatchResults> | string> => {
  const endpointName = 'DecodeVinValuesBatch'

  try {
    const args: IArgToValidate[] = [
      {
        name: 'inputString',
        value: inputString,
        required: true,
        types: ['string'],
      },
    ]
    catchInvalidArguments({ args })

    const { post, cacheUrl, getCachedUrl } = useNHTSA()

    cacheUrl({ endpointName, includeQueryString: false })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return post(getCachedUrl(), { body: inputString })
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

/**
 * Objects returned in the NhtsaResponse 'Results' array of DecodeVinValuesBatch endpoint
 *
 * @alias DecodeVINValuesBatchResults
 */
export type DecodeVinValuesBatchResults = {
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
