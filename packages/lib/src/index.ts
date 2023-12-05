/**
 * @module exports
 * @category Package Exports
 */

/**
 * @category Exported NHTSA API Functions
 */
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
  useNHTSA,
  safetyRatings,
} from '@/api'

/**
 * @category Exported Utility Functions
 */
export { createQueryString, encodeQueryStringParams, isValidVin } from '@/utils'

/**
 * @category Exported Types
 */
export type {
  DecodeVinExtendedResults,
  DecodeVinResults,
  DecodeVinValuesBatchResults,
  DecodeVinValuesExtendedResults,
  DecodeVinValuesResults,
  DecodeVinExtendedVariable,
  DecodeVinVariable,
  GetCanadianVehicleSpecificationsResults,
  GetEquipmentPlantCodesResults,
  GetMakeForManufacturerResults,
  DecodeWMIResults,
  GetAllMakesResults,
  GetAllManufacturersResults,
  GetEquipmentPlantCodesParams,
  GetMakesForManufacturerAndYearResults,
  GetMakesForVehicleTypeResults,
  GetManufacturerDetailsResults,
  GetModelsForMakeIdResults,
  GetModelsForMakeIdYearResults,
  GetModelsForMakeResults,
  GetModelsForMakeYearResults,
  GetPartsResults,
  GetVehicleTypesForMakeIdResults,
  GetVehicleTypesForMakeResults,
  GetVehicleVariableListResults,
  GetVehicleVariableValuesListResults,
  GetWMIsForManufacturerResults,
  NhtsaResponse,
  SafetyRatingsOptions,
  SafetyRatingsOptionsBase,
  SafetyRatingsOptionsEmpty,
  SafetyRatingsOptionsMake,
  SafetyRatingsOptionsModel,
  SafetyRatingsOptionsModelYear,
  SafetyRatingsOptionsVehicleId,
  SafetyRatingsResponseByOptions,
  SafetyRatingsResponseByVariant,
  SafetyRatingsResultsByOptions,
  SafetyRatingsResultsByVariant,
  SafetyRatingsResultsData,
  SafetyRatingsResultsVariants,
} from '@/types'
