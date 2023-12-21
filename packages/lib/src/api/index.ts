/**
 * @module api
 * @category API
 */

export { complaints } from './complaints/complaints'
export { products } from './products/products'
export { recalls } from './recalls/recalls'
export { safetyRatings } from './safetyRatings/safetyRatings'
export {
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
  GetMakesForVehicleType,
  GetManufacturerDetails,
  GetMakesForManufacturerAndYear,
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
} from './vpic'
export { useNHTSA } from './useNHTSA'
