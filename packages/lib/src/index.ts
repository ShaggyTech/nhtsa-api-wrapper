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
  products,
} from '@/api'

/**
 * @category Exported Utility Functions
 */
export {
  createQueryString,
  encodeQueryStringParams,
  generateRandomVIN,
  isValidVin,
} from '@/utils'

/**
 * @category Exported Types
 */
export type {
  NhtsaResponse,
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
  ProductsIssueType,
  ProductsOptions,
  ProductsOptionsBase,
  ProductsOptionsEmpty,
  ProductsOptionsMake,
  ProductsOptionsModelYear,
  ProductsResponse,
  ProductsResponseByOptions,
  ProductsResponseByVariant,
  ProductsResultsByOptions,
  ProductsResultsByVariant,
  ProductsResultsData,
  ProductsResultsVariant,
  SafetyRatingsOptions,
  SafetyRatingsOptionsBase,
  SafetyRatingsOptionsEmpty,
  SafetyRatingsOptionsMake,
  SafetyRatingsOptionsModelYear,
  SafetyRatingsOptionsVehicle,
  SafetyRatingsOptionsVehicleId,
  SafetyRatingsResponseByOptions,
  SafetyRatingsResponseByVariant,
  SafetyRatingsResultsByOptions,
  SafetyRatingsResultsByVariant,
  SafetyRatingsResultsData,
  SafetyRatingsResultsVariant,
} from '@/types'
