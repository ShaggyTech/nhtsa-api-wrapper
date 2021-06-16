'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-2e798510.js');
var isValidVin = require('./isValidVin.js');
var DecodeVin = require('./DecodeVin.js');
var DecodeVinExtended = require('./DecodeVinExtended.js');
var DecodeVinValues = require('./DecodeVinValues.js');
var DecodeVINValuesBatch = require('./DecodeVINValuesBatch.js');
var DecodeVinValuesExtended = require('./DecodeVinValuesExtended.js');
var DecodeWMI = require('./DecodeWMI.js');
var GetAllMakes = require('./GetAllMakes.js');
var GetAllManufacturers = require('./GetAllManufacturers.js');
var GetCanadianVehicleSpecifications = require('./GetCanadianVehicleSpecifications.js');
var GetEquipmentPlantCodes = require('./GetEquipmentPlantCodes.js');
var GetMakeForManufacturer = require('./GetMakeForManufacturer.js');
var GetMakesForManufacturerAndYear = require('./GetMakesForManufacturerAndYear.js');
var GetMakesForVehicleType = require('./GetMakesForVehicleType.js');
var GetManufacturerDetails = require('./GetManufacturerDetails.js');
var GetModelsForMake = require('./GetModelsForMake.js');
var GetModelsForMakeId = require('./GetModelsForMakeId.js');
var GetModelsForMakeIdYear = require('./GetModelsForMakeIdYear.js');
var GetModelsForMakeYear = require('./GetModelsForMakeYear.js');
var GetParts = require('./GetParts.js');
var GetVehicleTypesForMake = require('./GetVehicleTypesForMake.js');
var GetVehicleTypesForMakeId = require('./GetVehicleTypesForMakeId.js');
var GetVehicleVariableList = require('./GetVehicleVariableList.js');
var GetVehicleVariableValuesList = require('./GetVehicleVariableValuesList.js');
var GetWMIsForManufacturer = require('./GetWMIsForManufacturer.js');
require('stream');
require('http');
require('url');
require('https');
require('zlib');

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
        this.DecodeVin = DecodeVin.DecodeVin.prototype.DecodeVin;
        this.DecodeVinExtended = DecodeVinExtended.DecodeVinExtended.prototype.DecodeVinExtended;
        this.DecodeVinValues = DecodeVinValues.DecodeVinValues.prototype.DecodeVinValues;
        this.DecodeVINValuesBatch = DecodeVINValuesBatch.DecodeVINValuesBatch.prototype.DecodeVINValuesBatch;
        this.DecodeVinValuesExtended = DecodeVinValuesExtended.DecodeVinValuesExtended.prototype.DecodeVinValuesExtended;
        this.DecodeWMI = DecodeWMI.DecodeWMI.prototype.DecodeWMI;
        this.GetAllMakes = GetAllMakes.GetAllMakes.prototype.GetAllMakes;
        this.GetAllManufacturers = GetAllManufacturers.GetAllManufacturers.prototype.GetAllManufacturers;
        this.GetCanadianVehicleSpecifications = GetCanadianVehicleSpecifications.GetCanadianVehicleSpecifications.prototype.GetCanadianVehicleSpecifications;
        this.GetEquipmentPlantCodes = GetEquipmentPlantCodes.GetEquipmentPlantCodes.prototype.GetEquipmentPlantCodes;
        this.GetMakeForManufacturer = GetMakeForManufacturer.GetMakeForManufacturer.prototype.GetMakeForManufacturer;
        this.GetMakesForManufacturerAndYear = GetMakesForManufacturerAndYear.GetMakesForManufacturerAndYear.prototype.GetMakesForManufacturerAndYear;
        this.GetMakesForVehicleType = GetMakesForVehicleType.GetMakesForVehicleType.prototype.GetMakesForVehicleType;
        this.GetManufacturerDetails = GetManufacturerDetails.GetManufacturerDetails.prototype.GetManufacturerDetails;
        this.GetModelsForMake = GetModelsForMake.GetModelsForMake.prototype.GetModelsForMake;
        this.GetModelsForMakeId = GetModelsForMakeId.GetModelsForMakeId.prototype.GetModelsForMakeId;
        this.GetModelsForMakeIdYear = GetModelsForMakeIdYear.GetModelsForMakeIdYear.prototype.GetModelsForMakeIdYear;
        this.GetModelsForMakeYear = GetModelsForMakeYear.GetModelsForMakeYear.prototype.GetModelsForMakeYear;
        this.GetParts = GetParts.GetParts.prototype.GetParts;
        this.GetVehicleTypesForMake = GetVehicleTypesForMake.GetVehicleTypesForMake.prototype.GetVehicleTypesForMake;
        this.GetVehicleTypesForMakeId = GetVehicleTypesForMakeId.GetVehicleTypesForMakeId.prototype.GetVehicleTypesForMakeId;
        this.GetVehicleVariableList = GetVehicleVariableList.GetVehicleVariableList.prototype.GetVehicleVariableList;
        this.GetVehicleVariableValuesList = GetVehicleVariableValuesList.GetVehicleVariableValuesList.prototype.GetVehicleVariableValuesList;
        this.GetWMIsForManufacturer = GetWMIsForManufacturer.GetWMIsForManufacturer.prototype.GetWMIsForManufacturer;
        this.isValidVin = isValidVin.isValidVin;
    }
}

exports.NHTSA = NHTSA;
