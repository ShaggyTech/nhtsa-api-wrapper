import { describe, expect, it } from 'vitest'
import {
  // VPIC API
  DecodeVin,
  DecodeVinExtended,
  DecodeVinValues,
  DecodeVinValuesBatch,
  DecodeVinValuesExtended,
  DecodeWMI,
  GetAllMakes,
  GetAllManufacturers,
  GetCanadianVehicleSpecifications,
  GetEquipmentPlantCodes,
  GetMakeForManufacturer,
  GetMakesForManufacturerAndYear,
  GetMakesForVehicleType,
  GetManufacturerDetails,
  GetModelsForMake,
  GetModelsForMakeId,
  GetModelsForMakeIdYear,
  GetModelsForMakeYear,
  GetParts,
  GetVehicleTypesForMake,
  GetVehicleTypesForMakeId,
  GetVehicleVariableList,
  GetVehicleVariableValuesList,
  GetWMIsForManufacturer,
  complaints,
  products,
  recalls,
  safetyRatings,
  useNHTSA,
  // Utility functions
  createQueryString,
  encodeQueryStringParams,
  isValidVin,
} from '../'

describe('api/index.ts', () => {
  it('exports DecodeVin function', () => {
    expect(DecodeVin).toBeDefined()
    expect(DecodeVin).toBeInstanceOf(Function)
  })

  it('exports DecodeVinExtended function', () => {
    expect(DecodeVinExtended).toBeDefined()
    expect(DecodeVinExtended).toBeInstanceOf(Function)
  })

  it('exports DecodeVinValues function', () => {
    expect(DecodeVinValues).toBeDefined()
    expect(DecodeVinValues).toBeInstanceOf(Function)
  })

  it('exports DecodeVinValuesBatch function', () => {
    expect(DecodeVinValuesBatch).toBeDefined()
    expect(DecodeVinValuesBatch).toBeInstanceOf(Function)
  })

  it('exports DecodeVinValuesExtended function', () => {
    expect(DecodeVinValuesExtended).toBeDefined()
    expect(DecodeVinValuesExtended).toBeInstanceOf(Function)
  })

  it('exports DecodeWMI function', () => {
    expect(DecodeWMI).toBeDefined()
    expect(DecodeWMI).toBeInstanceOf(Function)
  })

  it('exports GetAllMakes function', () => {
    expect(GetAllMakes).toBeDefined()
    expect(GetAllMakes).toBeInstanceOf(Function)
  })

  it('exports GetAllManufacturers function', () => {
    expect(GetAllManufacturers).toBeDefined()
    expect(GetAllManufacturers).toBeInstanceOf(Function)
  })

  it('exports GetCanadianVehicleSpecifications function', () => {
    expect(GetCanadianVehicleSpecifications).toBeDefined()
    expect(GetCanadianVehicleSpecifications).toBeInstanceOf(Function)
  })

  it('exports GetEquipmentPlantCodes function', () => {
    expect(GetEquipmentPlantCodes).toBeDefined()
    expect(GetEquipmentPlantCodes).toBeInstanceOf(Function)
  })

  it('exports GetMakeForManufacturer function', () => {
    expect(GetMakeForManufacturer).toBeDefined()
    expect(GetMakeForManufacturer).toBeInstanceOf(Function)
  })

  it('exports GetMakesForManufacturerAndYear function', () => {
    expect(GetMakesForManufacturerAndYear).toBeDefined()
    expect(GetMakesForManufacturerAndYear).toBeInstanceOf(Function)
  })

  it('exports GetMakesForVehicleType function', () => {
    expect(GetMakesForVehicleType).toBeDefined()
    expect(GetMakesForVehicleType).toBeInstanceOf(Function)
  })

  it('exports GetManufacturerDetails function', () => {
    expect(GetManufacturerDetails).toBeDefined()
    expect(GetManufacturerDetails).toBeInstanceOf(Function)
  })

  it('exports GetModelsForMake function', () => {
    expect(GetModelsForMake).toBeDefined()
    expect(GetModelsForMake).toBeInstanceOf(Function)
  })

  it('exports GetModelsForMakeId function', () => {
    expect(GetModelsForMakeId).toBeDefined()
    expect(GetModelsForMakeId).toBeInstanceOf(Function)
  })

  it('exports GetModelsForMakeIdYear function', () => {
    expect(GetModelsForMakeIdYear).toBeDefined()
    expect(GetModelsForMakeIdYear).toBeInstanceOf(Function)
  })

  it('exports GetModelsForMakeYear function', () => {
    expect(GetModelsForMakeYear).toBeDefined()
    expect(GetModelsForMakeYear).toBeInstanceOf(Function)
  })

  it('exports GetParts function', () => {
    expect(GetParts).toBeDefined()
    expect(GetParts).toBeInstanceOf(Function)
  })

  it('exports GetVehicleTypesForMake function', () => {
    expect(GetVehicleTypesForMake).toBeDefined()
    expect(GetVehicleTypesForMake).toBeInstanceOf(Function)
  })

  it('exports GetVehicleTypesForMakeId function', () => {
    expect(GetVehicleTypesForMakeId).toBeDefined()
    expect(GetVehicleTypesForMakeId).toBeInstanceOf(Function)
  })

  it('exports GetVehicleVariableList function', () => {
    expect(GetVehicleVariableList).toBeDefined()
    expect(GetVehicleVariableList).toBeInstanceOf(Function)
  })

  it('exports GetVehicleVariableValuesList function', () => {
    expect(GetVehicleVariableValuesList).toBeDefined()
    expect(GetVehicleVariableValuesList).toBeInstanceOf(Function)
  })

  it('exports GetWMIsForManufacturer function', () => {
    expect(GetWMIsForManufacturer).toBeDefined()
    expect(GetWMIsForManufacturer).toBeInstanceOf(Function)
  })

  it('exports complaints function', () => {
    expect(complaints).toBeDefined()
    expect(complaints).toBeInstanceOf(Function)
  })

  it('exports products function', () => {
    expect(products).toBeDefined()
    expect(products).toBeInstanceOf(Function)
  })

  it('exports recalls function', () => {
    expect(recalls).toBeDefined()
    expect(recalls).toBeInstanceOf(Function)
  })

  it('exports safetyRatings function', () => {
    expect(safetyRatings).toBeDefined()
    expect(safetyRatings).toBeInstanceOf(Function)
  })

  it('exports useNHTSA function', () => {
    expect(useNHTSA).toBeDefined()
    expect(useNHTSA).toBeInstanceOf(Function)
  })

  it('exports createQueryString function', () => {
    expect(createQueryString).toBeDefined()
    expect(createQueryString).toBeInstanceOf(Function)
  })

  it('exports encodeQueryStringParams function', () => {
    expect(encodeQueryStringParams).toBeDefined()
    expect(encodeQueryStringParams).toBeInstanceOf(Function)
  })

  it('exports isValidVin function', () => {
    expect(isValidVin).toBeDefined()
    expect(isValidVin).toBeInstanceOf(Function)
  })
})
