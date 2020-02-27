/**
 * @module api/NHTSA
 * @category API
 * @description Module exporting the main (NHSTA) class for API Actions.
 *
 * > **Module Exports**:
 * > - Class: [NHTSA](NHTSA.html#NHTSA) - Class that implements all NHTSA API Actions
 */

import { Fetch /* Class */, FetchConfig /* Type */ } from './Fetch';

/* Util Helpers */
import { isValidVin } from '../utils/isValidVin';

/* Import implemented API Action classes */
import {
  DecodeVin,
  DecodeVinExtended,
  DecodeVinValues,
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
  GetWMIsForManufacturer
} from './actions';

/**
 * @class NHTSA
 * @augments module:api/Fetch.Fetch
 * @category API
 *
 * @param {FetchConfig} [userConfig] - Configuration options to construct the class with.
 *
 * @implements {module:api/actions/DecodeVin.DecodeVin}
 * @implements {module:api/actions/DecodeVinExtended.DecodeVinExtended}
 * @implements {module:api/actions/DecodeVinValues.DecodeVinValues}
 * @implements {module:api/actions/DecodeVinValuesExtended.DecodeVinValuesExtended}
 * @implements {module:api/actions/DecodeWMI.DecodeWMI}
 * @implements {module:api/actions/GetAllMakes.GetAllMakes}
 * @implements {module:api/actions/GetAllManufacturers.GetAllManufacturers}
 * @implements {module:api/actions/GetCanadianVehicleSpecifications.GetCanadianVehicleSpecifications}
 * @implements {module:api/actions/GetEquipmentPlantCodes.GetEquipmentPlantCodes}
 * @implements {module:api/actions/GetMakeForManufacturer.GetMakeForManufacturer}
 * @implements {module:api/actions/GetMakesForManufacturerAndYear.GetMakesForManufacturerAndYear}
 * @implements {module:api/actions/GetMakesForVehicleType.GetMakesForVehicleType}
 * @implements {module:api/actions/GetManufacturerDetails.GetManufacturerDetails}
 * @implements {module:api/actions/GetModelsForMake.GetModelsForMake}
 * @implements {module:api/actions/GetModelsForMakeId.GetModelsForMakeId}
 * @implements {module:api/actions/GetModelsForMakeIdYear.GetModelsForMakeIdYear}
 * @implements {module:api/actions/GetModelsForMakeYear.GetModelsForMakeYear}
 * @implements {module:api/actions/GetParts.GetParts}
 * @implements {module:api/actions/GetVehicleTypesForMake.GetVehicleTypesForMake}
 * @implements {module:api/actions/GetVehicleTypesForMakeId.GetVehicleTypesForMakeId}
 * @implements {module:api/actions/GetVehicleVariableList.GetVehicleVariableList}
 * @implements {module:api/actions/GetVehicleVariableValuesList.GetVehicleVariableValuesList}
 * @implements {module:api/actions/GetWMIsForManufacturer.GetWMIsForManufacturer}
 */
class NHTSA extends Fetch
  implements
    DecodeVin,
    DecodeVinExtended,
    DecodeVinValues,
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
    GetWMIsForManufacturer {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }
  isValidVin = isValidVin;

  DecodeVin = DecodeVin.prototype.DecodeVin;

  DecodeVinValues = DecodeVinValues.prototype.DecodeVinValues;

  DecodeVinExtended = DecodeVinExtended.prototype.DecodeVinExtended;

  DecodeVinValuesExtended =
    DecodeVinValuesExtended.prototype.DecodeVinValuesExtended;

  DecodeWMI = DecodeWMI.prototype.DecodeWMI;

  GetAllMakes = GetAllMakes.prototype.GetAllMakes;

  GetAllManufacturers = GetAllManufacturers.prototype.GetAllManufacturers;

  GetCanadianVehicleSpecifications =
    GetCanadianVehicleSpecifications.prototype.GetCanadianVehicleSpecifications;

  GetEquipmentPlantCodes =
    GetEquipmentPlantCodes.prototype.GetEquipmentPlantCodes;

  GetMakeForManufacturer =
    GetMakeForManufacturer.prototype.GetMakeForManufacturer;

  GetMakesForManufacturerAndYear =
    GetMakesForManufacturerAndYear.prototype.GetMakesForManufacturerAndYear;

  GetMakesForVehicleType =
    GetMakesForVehicleType.prototype.GetMakesForVehicleType;

  GetManufacturerDetails =
    GetManufacturerDetails.prototype.GetManufacturerDetails;

  GetModelsForMake = GetModelsForMake.prototype.GetModelsForMake;

  GetModelsForMakeId = GetModelsForMakeId.prototype.GetModelsForMakeId;

  GetModelsForMakeIdYear =
    GetModelsForMakeIdYear.prototype.GetModelsForMakeIdYear;

  GetModelsForMakeYear = GetModelsForMakeYear.prototype.GetModelsForMakeYear;

  GetParts = GetParts.prototype.GetParts;

  GetVehicleTypesForMake =
    GetVehicleTypesForMake.prototype.GetVehicleTypesForMake;

  GetVehicleTypesForMakeId =
    GetVehicleTypesForMakeId.prototype.GetVehicleTypesForMakeId;

  GetVehicleVariableList =
    GetVehicleVariableList.prototype.GetVehicleVariableList;

  GetVehicleVariableValuesList =
    GetVehicleVariableValuesList.prototype.GetVehicleVariableValuesList;

  GetWMIsForManufacturer =
    GetWMIsForManufacturer.prototype.GetWMIsForManufacturer;
}

export { NHTSA };
