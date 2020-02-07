export interface FetchConfig {
    apiResponseFormat: string | undefined;
    baseUrl: string | undefined;
}
export declare type RequestManufacturerType = 'Incomplete Vehicles' | 'Completed Vehicle Manufacturer' | 'Incomplete Vehicle Manufacturer' | 'Intermediate Manufacturer' | 'Final-Stage Manufacturer' | 'Alterer' | string;
export declare type ResultDecodeVin = [{
    Value?: string;
    ValueId?: string;
    Variable?: string;
    VariableId?: number;
}];
export declare type ResultDecodeVinValues = [{
    [propName: string]: string;
}];
export declare type ResultDecodeWMI = [{
    CommonName?: string;
    CreatedOn?: string;
    DateAvailableToPublic?: string;
    Make?: string;
    ManufacturerName?: string;
    ParentCompanyName?: string;
    URL?: string;
    UpdatedOn?: string;
    VehicleType?: string;
}];
export declare type ResultGetWMIsForManufacturer = [{
    Country?: string;
    CreatedOn?: string;
    DateAvailableToPublic?: string;
    Id?: number;
    Name?: string;
    UpdatedOn?: string;
    VehicleType?: string;
    WMI?: string;
}];
export declare type ResultGetAllMakes = [{
    Make_ID: number;
    Make_Name: string;
}];
export declare type ResultGetParts = [{
    CoverLetterURL?: string;
    LetterDate?: string;
    ManufacturerId?: number;
    ManufacturerName?: string;
    ModelYearFrom?: string;
    ModelYearTo?: string;
    Name?: string;
    Type?: string;
    URL?: string;
}];
export declare type ResultGetAllManufacturers = [{
    Country?: string;
    Mfr_CommonName?: string;
    Mfr_ID?: number;
    Mfr_Name?: string;
    VehicleTypes?: Array<any>;
}];
export declare type ResultGetManufacturerDetails = [{
    Address?: string;
    Address2?: string;
    City?: string;
    ContactEmail?: string;
    ContactFax?: string;
    ContactPhone?: string;
    Country?: string;
    DBAs?: string;
    EquipmentItems?: Array<any>;
    LastUpdated?: string;
    ManufacturerTypes?: Array<any>;
    Mfr_CommonName?: string;
    Mfr_ID?: number;
    Mfr_Name?: string;
    OtherManufacturerDetails?: string;
    PostalCode?: string;
    PrimaryProduct?: string;
    PrincipalFirstName?: string;
    PrincipalLastName?: string;
    PrincipalPosition?: string;
    StateProvince?: string;
    SubmittedName?: string;
    SubmittedOn?: string;
    SubmittedPosition?: string;
    VehicleTypes?: Array<any>;
}];
export declare type ResultGetMakeForManufacturer = [{
    Make_ID?: number;
    Make_Name?: string;
    Mfr_Name?: string;
}];
export declare type ResultGetMakesForManufacturerAndYear = [{
    MakeId?: number;
    MakeName?: string;
    MfrId?: number;
    MfrName?: string;
}];
export declare type ResultGetMakesForVehicleType = [{
    MakeId?: number;
    MakeName?: string;
    VehicleTypeId?: number;
    VehicleTypeName?: string;
}];
export declare type ResultGetVehicleTypesForMake = [{
    MakeId?: number;
    MakeName?: string;
    VehicleTypeId?: number;
    VehicleTypeName?: string;
}];
export declare type ResultGetVehicleTypesForMakeId = [{
    VehicleTypeId?: number;
    VehicleTypeName?: string;
}];
export declare type NhstaResults = ResultDecodeVin | ResultDecodeVinValues | ResultDecodeWMI | ResultGetWMIsForManufacturer | ResultGetAllMakes | ResultGetParts | ResultGetAllManufacturers | ResultGetManufacturerDetails | ResultGetMakeForManufacturer | ResultGetMakesForManufacturerAndYear | ResultGetMakesForVehicleType | ResultGetVehicleTypesForMake;
export declare type NhtsaResponse = {
    Count: number;
    Message: string;
    SearchCriteria: string;
    Results: NhstaResults;
};
export declare type FetchResponse = {
    Response: {
        headers?: Headers;
        ok?: boolean;
        redirected?: boolean;
        status?: number;
        statusText?: string;
        url?: string;
    };
} & NhtsaResponse;
export { NHTSA, Client } from './NHTSA';
//# sourceMappingURL=index.d.ts.map