---
outline: deep
---

# DecodeVinValues

[[toc]]

---

```typescript
function DecodeVinValues(
  vin: string,
  params?:
    | {
        modelYear?: string | number
      }
    | boolean,
  doFetch?: boolean
) => Promise<NhtsaResponse<DecodeVinValuesResults> | string>
```

## Parameters

| Name                | Type                 | Default Value | Description                                                                     |
| ------------------- | -------------------- | ------------- | ------------------------------------------------------------------------------- |
| `vin`               | `string`             | `undefined`   | Vehicle Identification Number (full or partial)                                 |
| `params?`           | `Object \| boolean ` | `undefined`   | Object of query search names and values to append to the URL as a query string. |
| `params.modelYear?` | `string \| number`   | `undefined`   | Optional Model Year search parameter                                            |
| `doFetch`           | `boolean`            | `true`        | Whether to fetch the data or just return the URL (default: `true`)              |

::: warning 📝 NOTE

Any `params` that are not listed in the table above will be ignored.

As `params` is optional, it also has type `| boolean`, so you can set `doFetch` without
having to pass `undefined` in place of intentionally undefined `params`.

- See [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Description

`DecodeVinValues` decodes a Vehicle Identification Number (VIN) and returns useful information
about the vehicle in in a _flat format_. This means the endpoint will return an array with a
single object of results. Each key in the object is the name of a variable.

Providing `params.modelYear` allows for the decoding to specifically be done in the current, or
older (pre-1980), model year ranges. It is recommended to always provide `params.modelYear` if
the model year is known at the time of decoding, but it is not required.

This endpoint also supports partial VIN decoding (VINs that are less than 17 characters).

- Ex: "5UXWX7C5\*BA"
- In this case, the VIN will be decoded partially with the available characters
- In case of partial VINs, a `*` could be used to indicate the unavailable characters
- The 9th digit is not necessary

::: tip :bulb: TIP
The flat format is more efficient and easier to work with as you won't have to iterate through a
bunch of objects just to get all variable names/values.

The variable names and values in the flat format object are equivalent to "Variable" and "Value"
keys found in objects returned from _nested format_ endpoints such as `DecodeVin` and
`DecodeVinExtended`.
:::

## Returns

**Default:**

Returns a Promise that resolves to a **_single_** NhtsaResponse object of type
[DecodeVinValuesResults](#type-decodevinvaluesresults) in the `Results` key.

```typescript
=> Promise<NhtsaResponse<DecodeVinValuesResults>>
```

::: code-group

```typescript [NhtsaApiResponse]
interface NhtsaApiResponse<DecodeVinValuesResults> = {
  Count: number
  Message: string
  Results: Array<DecodeVinValuesResults>
  SearchCriteria: string
}
```

```typescript [Example Response]
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
  ]
  SearchCriteria: 'VIN:WA1A4AFY2J2008189',
}

```

:::

**If `doFetch` is set to `false`:**

Returns the URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/WA1A4AFY2J2008189?format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - DecodeVinValuesResults

Ƭ **DecodeVinValuesResults**: `Object`

Object returned in the `Results` array of `DecodeVinValues` endpoint response.

In the return object, `Results` will be an array with a single object of type
`DecodeVinValuesResults`.

::: details Click to See Type Definition

```typescript
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
```

:::

## Examples

---

::: tip :bulb: Examples 1-3:

- Fetches data internally
- Returns `Promise<NhtsaResponse<DecodeVinValuesResults>>`

:::

### Example 1: Decode VIN

```ts
import { DecodeVinValues } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVinValues('WA1A4AFY2J2008189')
```

### Example 2: Decode VIN with optional Model Year

```ts
import { DecodeVinValues } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVinValues('WA1A4AFY2J2008189', { modelYear: 2018 })
```

### Example 3: Decode Partial VIN

```ts
import { DecodeVinValues } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVinValues('5UXWX7C5*BA')
```

---

::: warning :bulb: Examples 4-5:

- Does _not_ fetch data internally
- Returns `Promise<string>`
- See: [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)

:::

### Example 4: Decode VIN and doFetch = false

```ts
import { DecodeVinValues } from '@shaggytools/nhtsa-api-wrapper'

const url = await DecodeVinValues('WA1A4AFY2J2008189', false)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/WA1A4AFY2J2008189?format=json'
```

### Example 5: Decode VIN with optional Model Year and doFetch = false

```ts
import { DecodeVinValues } from '@shaggytools/nhtsa-api-wrapper'

const url = await DecodeVinValues(
  'WA1A4AFY2J2008189',
  { modelYear: 2018 },
  false
)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/WA1A4AFY2J2008189?modelYear=2018&format=json'
```
