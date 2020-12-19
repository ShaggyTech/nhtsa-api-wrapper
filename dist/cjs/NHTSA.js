'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-d7540537.js');
require('cross-fetch');
var GetWMIsForManufacturer = require('./GetWMIsForManufacturer-90384d3e.js');

/**
 * @module api/NHTSA
 * @category API
 * @description Module exporting the main (NHSTA) class for API Actions.
 *
 * > **Module Exports**:
 * > - Class: [NHTSA](NHTSA.html#NHTSA) - Class that implements all NHTSA API Actions
 */
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
 *
 * @example <caption>Node bundle</caption>
 * const { NHTSA } = require('@shaggytools/nhtsa-api-wrapper');
 *
 * const Wrapper = new NHTSA();
 *
 * // Decode a VIN and return a response of type ApiResponse
 * const response = Wrapper.DecodeVinValues('3VWD07AJ5EM388202').catch(error => error)
 *
 * // or get details about a specific manufacturer, plus 23 other available Actions.
 * const hondaDetails = Wrapper.GetManufacturerDetails('Honda').catch(error => error)
 *
 * @example <caption>Browser bundle</caption>
 *   // Change <version> to specific version number "x.x.xx",
 *   // or remove <version> completely for the most recently published version
 *   <script
 *     type="text/javascript"
 *     src="https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/<version>/dist/bundle.min.js"
 *   ></script>
 *
 * <script type="text/javascript">
 * // NHSTA is the global browser window exported by this package
 * const Decoder = new NHSTA.NHSTA();
 *
 * const result = await Decoder.DecodeVin('3VWD07AJ5EM388202')
 *   .catch(err => err);
 * </script>
 *
 * @example <caption>Module - Node lazy loading</caption>
 * const { NHTSA } = await import('@shaggytools/nhtsa-api-wrapper/dist/module/index.js')
 *   .catch(err => err);
 *
 * const ApiClient = new NHTSA();
 *
 * const results = await ApiClient.DecodeVin('3VWD07AJ5EM388202')
 *   .catch(err => err)
 *
 * @example <caption>Module - Browser lazy loading</caption>
 * <script type="module">
 *   const { NHSTA } = await import('https://unpkg.com/@shaggytools/nhtsa-api-wrapper/dist/module/index.js')
 *    .catch(err => err);
 *
 *   const ApiClient = new NHSTA();
 *
 *   const { Results } = await ApiClient.DecodeVin('3VWD07AJ5EM388202')
 *    .catch(err => err)
 *
 *   console.log(Results)
 * </script>
 */
class NHTSA extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
        this.DecodeVin = GetWMIsForManufacturer.DecodeVin.prototype.DecodeVin;
        this.DecodeVinExtended = GetWMIsForManufacturer.DecodeVinExtended.prototype.DecodeVinExtended;
        this.DecodeVinValues = GetWMIsForManufacturer.DecodeVinValues.prototype.DecodeVinValues;
        this.DecodeVINValuesBatch = GetWMIsForManufacturer.DecodeVINValuesBatch.prototype.DecodeVINValuesBatch;
        this.DecodeVinValuesExtended = GetWMIsForManufacturer.DecodeVinValuesExtended.prototype.DecodeVinValuesExtended;
        this.DecodeWMI = GetWMIsForManufacturer.DecodeWMI.prototype.DecodeWMI;
        this.GetAllMakes = GetWMIsForManufacturer.GetAllMakes.prototype.GetAllMakes;
        this.GetAllManufacturers = GetWMIsForManufacturer.GetAllManufacturers.prototype.GetAllManufacturers;
        this.GetCanadianVehicleSpecifications = GetWMIsForManufacturer.GetCanadianVehicleSpecifications.prototype.GetCanadianVehicleSpecifications;
        this.GetEquipmentPlantCodes = GetWMIsForManufacturer.GetEquipmentPlantCodes.prototype.GetEquipmentPlantCodes;
        this.GetMakeForManufacturer = GetWMIsForManufacturer.GetMakeForManufacturer.prototype.GetMakeForManufacturer;
        this.GetMakesForManufacturerAndYear = GetWMIsForManufacturer.GetMakesForManufacturerAndYear.prototype.GetMakesForManufacturerAndYear;
        this.GetMakesForVehicleType = GetWMIsForManufacturer.GetMakesForVehicleType.prototype.GetMakesForVehicleType;
        this.GetManufacturerDetails = GetWMIsForManufacturer.GetManufacturerDetails.prototype.GetManufacturerDetails;
        this.GetModelsForMake = GetWMIsForManufacturer.GetModelsForMake.prototype.GetModelsForMake;
        this.GetModelsForMakeId = GetWMIsForManufacturer.GetModelsForMakeId.prototype.GetModelsForMakeId;
        this.GetModelsForMakeIdYear = GetWMIsForManufacturer.GetModelsForMakeIdYear.prototype.GetModelsForMakeIdYear;
        this.GetModelsForMakeYear = GetWMIsForManufacturer.GetModelsForMakeYear.prototype.GetModelsForMakeYear;
        this.GetParts = GetWMIsForManufacturer.GetParts.prototype.GetParts;
        this.GetVehicleTypesForMake = GetWMIsForManufacturer.GetVehicleTypesForMake.prototype.GetVehicleTypesForMake;
        this.GetVehicleTypesForMakeId = GetWMIsForManufacturer.GetVehicleTypesForMakeId.prototype.GetVehicleTypesForMakeId;
        this.GetVehicleVariableList = GetWMIsForManufacturer.GetVehicleVariableList.prototype.GetVehicleVariableList;
        this.GetVehicleVariableValuesList = GetWMIsForManufacturer.GetVehicleVariableValuesList.prototype.GetVehicleVariableValuesList;
        this.GetWMIsForManufacturer = GetWMIsForManufacturer.GetWMIsForManufacturer.prototype.GetWMIsForManufacturer;
    }
}

exports.NHTSA = NHTSA;
//# sourceMappingURL=NHTSA.js.map
