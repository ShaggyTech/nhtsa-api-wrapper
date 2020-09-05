'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./Fetch-2f6f3d33.js');
require('cross-fetch');
require('./DecodeVin.js');
require('./DecodeVinExtended.js');
require('./DecodeVinValues.js');
require('./DecodeVINValuesBatch.js');
require('./DecodeVinValuesExtended.js');
require('./DecodeWMI.js');
require('./GetAllMakes.js');
require('./GetAllManufacturers.js');
require('./GetCanadianVehicleSpecifications.js');
require('./GetEquipmentPlantCodes.js');
require('./GetMakeForManufacturer.js');
require('./GetMakesForManufacturerAndYear.js');
require('./GetMakesForVehicleType.js');
require('./GetManufacturerDetails.js');
require('./GetModelsForMake.js');
require('./GetModelsForMakeId.js');
require('./GetModelsForMakeIdYear.js');
require('./GetModelsForMakeYear.js');
require('./GetParts.js');
require('./GetVehicleTypesForMake.js');
require('./GetVehicleTypesForMakeId.js');
require('./GetVehicleVariableList.js');
require('./GetVehicleVariableValuesList.js');
require('./GetWMIsForManufacturer.js');
var NHTSA = require('./NHTSA.js');

/**
 * @module api/Client
 * @category API
 * @description Module exporting an instance of the NHSTA class.
 *
 * > - For more information, see the documentation for the [NHTSA](module-api_NHTSA-NHTSA.html) class.
 */
/**
 * A new instance of the [NHTSA](module-api_NHTSA-NHTSA.html) class.
 *
 * @type {NHTSA}
 *
 * @example <caption>Node bundle</caption>
 * const { Client } = require('@shaggytools/nhtsa-api-wrapper');
 *
 * // Decode a VIN and return get a response of type ApiResponse
 * const response = Client.DecodeVinValues('3VWD07AJ5EM388202').catch(error => error)
 *
 * // or get details about a specific manufacturer, plus 23 other available Actions.
 * const audiDetails = Client.GetManufacturerDetails('Audi').catch(error => error)
 *
 * @example <caption>Browser bundle</caption>
 * // Change <version> to specific version number "x.x.xx",
 * // or remove <version> completely for the most recently published version
 * <script
 *   type="text/javascript"
 *   src="https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/<version>/dist/bundle.min.js"
 * ></script>
 *
 * <script type="text/javascript">
 * // NHSTA is the global browser window exported by this package
 * const Decoder = NHSTA.Client
 *
 * const result = Decoder.DecodeVin('3VWD07AJ5EM388202')
 *   .catch(err => err);
 * </script>
 *
 * @example <caption>Module - Node lazy loading</caption>
 * const { Client } = await import('@shaggytools/nhtsa-api-wrapper/dist/module/index.js')
 *   .catch(err => err);
 *
 * const results = await Client.DecodeVin('3VWD07AJ5EM388202')
 *   .catch(err => err)
 *
 * @example <caption>Module - Browser lazy loading</caption>
 * <script type="module">
 * const { Client } = await import('https://unpkg.com/@shaggytools/nhtsa-api-wrapper/dist/module/index.js')
 *  .catch(err => err);
 *
 * const { Results } = await Client.DecodeVin('3VWD07AJ5EM388202')
 *    .catch(err => err)
 * </script>
 *
 */
const Client = new NHTSA.NHTSA();

exports.Client = Client;
//# sourceMappingURL=Client.js.map
