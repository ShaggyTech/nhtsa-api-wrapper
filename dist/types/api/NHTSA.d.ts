/**
 * @module api/NHTSA
 * @category API
 * @description Module exporting the main (NHSTA) class for API Actions.
 *
 * > **Module Exports**:
 * > - Class: [NHTSA](NHTSA.html#NHTSA) - Class that implements all NHTSA API Actions
 */
import { Fetch, FetchConfig } from './Fetch';
import { DecodeVin, DecodeVinExtended, DecodeVinValues, DecodeVINValuesBatch, DecodeVinValuesExtended, DecodeWMI, GetAllMakes, GetAllManufacturers, GetCanadianVehicleSpecifications, GetEquipmentPlantCodes, GetMakeForManufacturer, GetMakesForManufacturerAndYear, GetMakesForVehicleType, GetManufacturerDetails, GetModelsForMake, GetModelsForMakeId, GetModelsForMakeIdYear, GetModelsForMakeYear, GetParts, GetVehicleTypesForMake, GetVehicleTypesForMakeId, GetVehicleVariableList, GetVehicleVariableValuesList, GetWMIsForManufacturer } from './actions';
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
declare class NHTSA extends Fetch implements DecodeVin, DecodeVinExtended, DecodeVinValues, DecodeVINValuesBatch, DecodeVinValuesExtended, DecodeWMI, GetAllMakes, GetAllManufacturers, GetCanadianVehicleSpecifications, GetEquipmentPlantCodes, GetMakeForManufacturer, GetMakesForManufacturerAndYear, GetMakesForVehicleType, GetManufacturerDetails, GetModelsForMake, GetModelsForMakeId, GetModelsForMakeIdYear, GetModelsForMakeYear, GetParts, GetVehicleTypesForMake, GetVehicleTypesForMakeId, GetVehicleVariableList, GetVehicleVariableValuesList, GetWMIsForManufacturer {
    constructor(userConfig?: FetchConfig);
    DecodeVin: (vin: string, params?: {
        modelYear?: number | undefined;
    } | undefined) => Promise<import("./actions/DecodeVin").DecodeVinResponse>;
    DecodeVinExtended: (vin: string, params?: {
        modelYear?: string | number | undefined;
    } | undefined) => Promise<import("./actions/DecodeVinExtended").DecodeVinExtendedResponse>;
    DecodeVinValues: (vin: string, params?: {
        modelYear?: number | undefined;
    } | undefined) => Promise<import("./actions/DecodeVinValues").DecodeVinValuesResponse>;
    DecodeVINValuesBatch: (inputString: string) => Promise<import("./actions/DecodeVINValuesBatch").DecodeVINValuesBatchResponse>;
    DecodeVinValuesExtended: (vin: string, params?: {
        modelYear?: string | number | undefined;
    } | undefined) => Promise<import("./actions/DecodeVinValuesExtended").DecodeVinValuesExtendedResponse>;
    DecodeWMI: (WMI: string) => Promise<import("./actions/DecodeWMI").DecodeWMIResponse>;
    GetAllMakes: () => Promise<import("./actions/GetAllMakes").GetAllMakesResponse>;
    GetAllManufacturers: (params?: {
        manufacturerType?: string | undefined;
        page?: number | undefined;
    }) => Promise<import("./actions/GetAllManufacturers").GetAllManufacturersResponse>;
    GetCanadianVehicleSpecifications: (params: {
        year: number;
        make?: string | undefined;
        model?: string | undefined;
        units?: string | undefined;
    }) => Promise<import("./actions/GetCanadianVehicleSpecifications").GetCanadianVehicleSpecificationsResponse>;
    GetEquipmentPlantCodes: (params: {
        year: number;
        equipmentType: 1 | 3 | 13 | 16;
        reportType: "New" | "Updated" | "Closed" | "All";
    }) => Promise<import("./actions/GetEquipmentPlantCodes").GetEquipmentPlantCodesResponse>;
    GetMakeForManufacturer: (manufacturer: string | number) => Promise<import("./actions/GetMakeForManufacturer").GetMakeForManufacturerResponse>;
    GetMakesForManufacturerAndYear: (manufacturer: string | number, params: {
        year: number;
    }) => Promise<import("./actions/GetMakesForManufacturerAndYear").GetMakesForManufacturerAndYearResponse>;
    GetMakesForVehicleType: (typeName: string) => Promise<import("./actions/GetMakesForVehicleType").GetMakesForVehicleTypeResponse>;
    GetManufacturerDetails: (manufacturer: string | number) => Promise<import("./actions/GetManufacturerDetails").GetManufacturerDetailsResponse>;
    GetModelsForMake: (makeName: string) => Promise<import("./actions/GetModelsForMake").GetModelsForMakeResponse>;
    GetModelsForMakeId: (makeID: number) => Promise<import("./actions/GetModelsForMakeId").GetModelsForMakeIdResponse>;
    GetModelsForMakeIdYear: (params: {
        makeId: number;
        modelYear?: number | undefined;
        vehicleType?: string | undefined;
    }) => Promise<import("./actions/GetModelsForMakeIdYear").GetModelsForMakeIdYearResponse>;
    GetModelsForMakeYear: (params: {
        make: string;
        modelYear?: number | undefined;
        vehicleType?: string | undefined;
    }) => Promise<import("./actions/GetModelsForMakeYear").GetModelsForMakeYearResponse>;
    GetParts: (params?: {
        type?: number | undefined;
        fromDate?: string | undefined;
        toDate?: string | undefined;
        page?: number | undefined;
    } | undefined) => Promise<import("./actions/GetParts").GetPartsResponse>;
    GetVehicleTypesForMake: (makeName: string) => Promise<import("./actions/GetVehicleTypesForMake").GetVehicleTypesForMakeResponse>;
    GetVehicleTypesForMakeId: (makeID: number) => Promise<import("./actions/GetVehicleTypesForMakeId").GetVehicleTypesForMakeIdResponse>;
    GetVehicleVariableList: () => Promise<import("./actions/GetVehicleVariableList").GetVehicleVariableListResponse>;
    GetVehicleVariableValuesList: (variableValue: string | number) => Promise<import("./actions/GetVehicleVariableValuesList").GetVehicleVariableValuesListResponse>;
    GetWMIsForManufacturer: (manufacturer: string) => Promise<import("./actions/GetWMIsForManufacturer").GetWMIsForManufacturerResponse>;
}
export { NHTSA };
//# sourceMappingURL=NHTSA.d.ts.map