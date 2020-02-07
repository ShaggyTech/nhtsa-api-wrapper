import { Fetch } from './Fetch';
import { DecodeVin, DecodeVinValues, DecodeVinExtended, DecodeVinValuesExtended, DecodeWMI, GetWMIsForManufacturer, GetAllMakes, GetParts, GetAllManufacturers, GetManufacturerDetails, GetMakeForManufacturer, GetMakesForManufacturerAndYear, GetMakesForVehicleType, GetVehicleTypesForMake, GetVehicleTypesForMakeId } from './actions';
import { FetchConfig } from './index';
declare class NHTSA extends Fetch implements DecodeVin, DecodeVinValues, DecodeVinExtended, DecodeVinValuesExtended, DecodeWMI, GetAllMakes, GetParts, GetAllManufacturers, GetManufacturerDetails, GetMakeForManufacturer, GetWMIsForManufacturer, GetMakesForManufacturerAndYear, GetMakesForVehicleType, GetVehicleTypesForMake, GetVehicleTypesForMakeId {
    constructor(userConfig?: FetchConfig);
    DecodeVin: (vin: string, params?: {
        modelYear?: string | number | undefined;
    }) => Promise<import(".").NhtsaResponse | Error>;
    DecodeVinValues: (vin: string, params?: {
        modelYear?: string | number | undefined;
    }) => Promise<import(".").NhtsaResponse | Error>;
    DecodeVinExtended: (vin: string, params?: {
        modelYear?: string | number | undefined;
    }) => Promise<import(".").NhtsaResponse | Error>;
    DecodeVinValuesExtended: (vin: string, params?: {
        modelYear?: string | number | undefined;
    }) => Promise<import(".").NhtsaResponse | Error>;
    DecodeWMI: (WMI: string) => Promise<import(".").NhtsaResponse | Error>;
    GetWMIsForManufacturer: (manufacturer: string) => Promise<import(".").NhtsaResponse | Error>;
    GetAllMakes: () => Promise<import(".").NhtsaResponse | Error>;
    GetParts: (params?: {
        type?: string | number | undefined;
        fromDate?: string | undefined;
        toDate?: string | undefined;
        page?: string | number | undefined;
    }) => Promise<import(".").NhtsaResponse | Error>;
    GetAllManufacturers: (params?: {
        manufacturerType?: string | undefined;
        page?: string | number | undefined;
    }) => Promise<import(".").NhtsaResponse | Error>;
    GetManufacturerDetails: (manufacturer: string | number) => Promise<import(".").NhtsaResponse | Error>;
    GetMakeForManufacturer: (manufacturer: string | number) => Promise<import(".").NhtsaResponse | Error>;
    GetMakesForManufacturerAndYear: (manufacturer: string | number, params?: {
        year: string | number;
    }) => Promise<import(".").NhtsaResponse | Error>;
    GetMakesForVehicleType: (typeName: string) => Promise<import(".").NhtsaResponse | Error>;
    GetVehicleTypesForMake: (makeName: string) => Promise<import(".").NhtsaResponse | Error>;
    GetVehicleTypesForMakeId: (makeID: number) => Promise<import(".").NhtsaResponse | Error>;
}
export { NHTSA };
export declare const Client: NHTSA;
//# sourceMappingURL=NHTSA.d.ts.map