/* Parent Class */
import { Fetch } from './Fetch';

/* API Actions */
import {
  DecodeVin,
  DecodeVinValues,
  DecodeVinExtended,
  DecodeVinValuesExtended,
  DecodeWMI,
  GetWMIsForManufacturer,
  GetAllMakes,
  GetParts,
  GetAllManufacturers,
  GetManufacturerDetails,
  GetMakeForManufacturer,
  GetMakesForManufacturerAndYear,
  GetMakesForVehicleType,
  GetVehicleTypesForMake,
  GetVehicleTypesForMakeId,
  GetEquipmentPlantCodes,
  GetModelsForMake,
  GetModelsForMakeId,
  GetModelsForMakeYear,
  GetModelsForMakeIdYear
} from './actions';

/* Types */
import { FetchConfig } from './index';

class NHTSA extends Fetch
  implements
    DecodeVin,
    DecodeVinValues,
    DecodeVinExtended,
    DecodeVinValuesExtended,
    DecodeWMI,
    GetAllMakes,
    GetParts,
    GetAllManufacturers,
    GetManufacturerDetails,
    GetMakeForManufacturer,
    GetWMIsForManufacturer,
    GetMakesForManufacturerAndYear,
    GetMakesForVehicleType,
    GetVehicleTypesForMake,
    GetVehicleTypesForMakeId,
    GetEquipmentPlantCodes,
    GetModelsForMake,
    GetModelsForMakeId,
    GetModelsForMakeYear,
    GetModelsForMakeIdYear {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  DecodeVin = DecodeVin.prototype.DecodeVin;

  DecodeVinValues = DecodeVinValues.prototype.DecodeVinValues;

  DecodeVinExtended = DecodeVinExtended.prototype.DecodeVinExtended;

  DecodeVinValuesExtended =
    DecodeVinValuesExtended.prototype.DecodeVinValuesExtended;

  DecodeWMI = DecodeWMI.prototype.DecodeWMI;

  GetWMIsForManufacturer =
    GetWMIsForManufacturer.prototype.GetWMIsForManufacturer;

  GetAllMakes = GetAllMakes.prototype.GetAllMakes;

  GetParts = GetParts.prototype.GetParts;

  GetAllManufacturers = GetAllManufacturers.prototype.GetAllManufacturers;

  GetManufacturerDetails =
    GetManufacturerDetails.prototype.GetManufacturerDetails;

  GetMakeForManufacturer =
    GetMakeForManufacturer.prototype.GetMakeForManufacturer;

  GetMakesForManufacturerAndYear =
    GetMakesForManufacturerAndYear.prototype.GetMakesForManufacturerAndYear;

  GetMakesForVehicleType =
    GetMakesForVehicleType.prototype.GetMakesForVehicleType;

  GetVehicleTypesForMake =
    GetVehicleTypesForMake.prototype.GetVehicleTypesForMake;

  GetVehicleTypesForMakeId =
    GetVehicleTypesForMakeId.prototype.GetVehicleTypesForMakeId;

  GetEquipmentPlantCodes =
    GetEquipmentPlantCodes.prototype.GetEquipmentPlantCodes;

  GetModelsForMake = GetModelsForMake.prototype.GetModelsForMake;

  GetModelsForMakeId = GetModelsForMakeId.prototype.GetModelsForMakeId;

  GetModelsForMakeYear = GetModelsForMakeYear.prototype.GetModelsForMakeYear;

  GetModelsForMakeIdYear =
    GetModelsForMakeIdYear.prototype.GetModelsForMakeIdYear;
}

export { NHTSA };

export const Client = new NHTSA();
