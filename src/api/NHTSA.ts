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
  GetVehicleTypesForMakeId
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
    GetVehicleTypesForMakeId {
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
}

export { NHTSA };

export const Client = new NHTSA();
