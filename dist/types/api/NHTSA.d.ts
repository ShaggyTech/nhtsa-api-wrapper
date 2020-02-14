import { Fetch } from './Fetch';
import { DecodeVin, DecodeVinValues, DecodeVinExtended, DecodeVinValuesExtended, DecodeWMI, GetWMIsForManufacturer, GetAllMakes, GetParts, GetAllManufacturers, GetManufacturerDetails, GetMakeForManufacturer, GetMakesForManufacturerAndYear, GetMakesForVehicleType, GetVehicleTypesForMake, GetVehicleTypesForMakeId, GetEquipmentPlantCodes, GetModelsForMake, GetModelsForMakeId, GetModelsForMakeYear, GetModelsForMakeIdYear, GetVehicleVariableList, GetVehicleVariableValuesList, GetCanadianVehicleSpecifications } from './actions';
/**
 * @class NHTSA
 *
 * @augments {Fetch}
 *
 * @implements {DecodeVin}
 * @implements {DecodeVinExtended}
 * @implements {DecodeVinValues}
 * @implements {DecodeVinValuesExtended}
 * @implements {DecodeWMI}
 * @implements {GetAllMakes}
 * @implements {GetAllManufacturers}
 * @implements {GetCanadianVehicleSpecifications}
 * @implements {GetEquipmentPlantCodes}
 * @implements {GetMakeForManufacturer}
 * @implements {GetMakesForManufacturerAndYear}
 * @implements {GetMakesForVehicleType}
 * @implements {GetManufacturerDetails}
 * @implements {GetModelsForMake}
 * @implements {GetModelsForMakeId}
 * @implements {GetModelsForMakeIdYear}
 * @implements {GetModelsForMakeYear}
 * @implements {GetParts}
 * @implements {GetVehicleTypesForMake}
 * @implements {GetVehicleTypesForMakeId}
 * @implements {GetVehicleVariableList}
 * @implements {GetVehicleVariableValuesList}
 * @implements {GetWMIsForManufacturer}
 */
declare class NHTSA extends Fetch implements DecodeVin, DecodeVinExtended, DecodeVinValues, DecodeVinValuesExtended, DecodeWMI, GetAllMakes, GetAllManufacturers, GetCanadianVehicleSpecifications, GetEquipmentPlantCodes, GetMakeForManufacturer, GetMakesForManufacturerAndYear, GetMakesForVehicleType, GetManufacturerDetails, GetModelsForMake, GetModelsForMakeId, GetModelsForMakeIdYear, GetModelsForMakeYear, GetParts, GetVehicleTypesForMake, GetVehicleTypesForMakeId, GetVehicleVariableList, GetVehicleVariableValuesList, GetWMIsForManufacturer {
    constructor(userConfig?: import('./types').FetchConfig);
    DecodeVin: (vin: string, params?: {
        modelYear?: string | number | undefined;
    }) => Promise<import("./types").ApiResponse | Error>;
    DecodeVinValues: (vin: string, params?: {
        modelYear?: string | number | undefined;
    }) => Promise<import("./types").ApiResponse | Error>;
    DecodeVinExtended: (vin: string, params?: {
        modelYear?: string | number | undefined;
    }) => Promise<import("./types").ApiResponse | Error>;
    DecodeVinValuesExtended: (vin: string, params?: {
        modelYear?: string | number | undefined;
    }) => Promise<import("./types").ApiResponse | Error>;
    DecodeWMI: (WMI: string) => Promise<import("./types").ApiResponse | Error>;
    GetAllMakes: () => Promise<import("./types").ApiResponse | Error>;
    GetAllManufacturers: (params?: {
        manufacturerType?: string | undefined;
        page?: string | number | undefined;
    }) => Promise<import("./types").ApiResponse | Error>;
    GetCanadianVehicleSpecifications: (params?: {
        year: number;
        make?: string | undefined;
        model?: string | undefined;
        units?: string | undefined;
    }) => Promise<import("./types").ApiResponse | Error>;
    GetEquipmentPlantCodes: (params?: {
        year: number;
        equipmentType: 1 | 3 | 13 | 16;
        reportType: "New" | "Updated" | "Closed" | "All";
    }) => Promise<import("./types").ApiResponse | Error>;
    GetMakeForManufacturer: (manufacturer: string | number) => Promise<import("./types").ApiResponse | Error>;
    GetMakesForManufacturerAndYear: (manufacturer: string | number, params?: {
        year: string | number;
    }) => Promise<import("./types").ApiResponse | Error>;
    GetMakesForVehicleType: (typeName: string) => Promise<import("./types").ApiResponse | Error>;
    GetManufacturerDetails: (manufacturer: string | number) => Promise<import("./types").ApiResponse | Error>;
    GetModelsForMake: (makeName: string) => Promise<import("./types").ApiResponse | Error>;
    GetModelsForMakeId: (makeID: number) => Promise<import("./types").ApiResponse | Error>;
    GetModelsForMakeIdYear: (params?: {
        makeId: number;
        modelYear?: number | undefined;
        vehicleType?: string | undefined;
    }) => Promise<import("./types").ApiResponse | Error>;
    GetModelsForMakeYear: (params?: {
        make: string;
        modelYear?: number | undefined;
        vehicleType?: string | undefined;
    }) => Promise<import("./types").ApiResponse | Error>;
    GetParts: (params?: {
        type?: string | number | undefined;
        fromDate?: string | undefined;
        toDate?: string | undefined;
        page?: string | number | undefined;
    }) => Promise<import("./types").ApiResponse | Error>;
    GetVehicleTypesForMake: (makeName: string) => Promise<import("./types").ApiResponse | Error>;
    GetVehicleTypesForMakeId: (makeID: number) => Promise<import("./types").ApiResponse | Error>;
    GetVehicleVariableList: () => Promise<import("./types").ApiResponse | Error>;
    GetVehicleVariableValuesList: (variableValue: string | number) => Promise<import("./types").ApiResponse | Error>;
    GetWMIsForManufacturer: (manufacturer: string) => Promise<import("./types").ApiResponse | Error>;
}
export { NHTSA };
export declare const Client: NHTSA;
//# sourceMappingURL=NHTSA.d.ts.map