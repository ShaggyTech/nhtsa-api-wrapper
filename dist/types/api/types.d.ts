/**
 * Used when instantiating a Fetch class or related subclass.
 *
 * @memberof module:api/types
 */
export declare type FetchConfig = {
    /** Requests response format from the NHSTA API (hardcoded to 'json' for now). */
    apiResponseFormat?: string;
    /** Base of the URL to build fetch URLs from. */
    baseUrl?: string;
};
export declare type ResultDecodeVin = [{
    Value?: string | null;
    ValueId?: string | null;
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
export declare type ResultGetEquipmentPlantCodes = [{
    Address?: string;
    City?: string;
    Country?: string;
    DOTCode?: string;
    Name?: string;
    OldDotCode?: string;
    PostalCode?: string;
    StateProvince?: string;
    Status?: string;
}];
export declare type ResultGetModelsForMake = [{
    Make_ID?: number;
    Make_Name?: string;
    Model_ID?: number;
    Model_Name?: string;
}];
export declare type ResultGetModelsForMakeYear = [{
    Make_ID?: number;
    Make_Name?: string;
    Model_ID?: number;
    Model_Name?: string;
}];
export declare type ResultGetModelsForMakeIdYear = [{
    Make_ID?: number;
    Make_Name?: string;
    Model_ID?: number;
    Model_Name?: string;
}];
export declare type ResultGetVehicleVariableList = [{
    DataType?: string;
    Description?: string;
    ID?: number;
    Name?: string;
}];
export declare type ResultGetVehicleVariableValuesList = [{
    ElementName?: string;
    Id?: number;
    Name?: string;
}];
export declare type ResultGetCanadianVehicleSpecifications = [{
    Specs: [{
        Name: string;
        Value: string;
    }];
}];
export declare type NhstaResults = ResultDecodeVin | ResultDecodeVinValues | ResultDecodeWMI | ResultGetWMIsForManufacturer | ResultGetAllMakes | ResultGetParts | ResultGetAllManufacturers | ResultGetManufacturerDetails | ResultGetMakeForManufacturer | ResultGetMakesForManufacturerAndYear | ResultGetMakesForVehicleType | ResultGetVehicleTypesForMake | ResultGetVehicleTypesForMakeId | ResultGetEquipmentPlantCodes | ResultGetModelsForMake | ResultGetModelsForMakeYear | ResultGetModelsForMakeIdYear | ResultGetVehicleVariableList | ResultGetVehicleVariableValuesList | ResultGetCanadianVehicleSpecifications;
/**
 * Various [Fetch API Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) properties.
 *
 * @memberof module:api/types
 */
export declare type FetchResponse = {
    /** The [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) object associated with the response. */
    headers: Headers;
    /** A boolean indicating whether the response was successful (status in the range 200–299) or not. */
    ok: boolean;
    /** Indicates whether or not the response is the result of a redirect (that is, its URL list has more than one entry). */
    redirected: boolean;
    /** The status code of the response. (This will be 200 for a success). */
    status: number;
    /** The status message corresponding to the status code. (e.g., OK for 200). */
    statusText: string;
    /** The URL of the response. */
    url: string;
};
/**
 * Response data returned from the NHSTA API.
 *
 * @memberof module:api/types
 */
export declare type NhtsaResponse = {
    /** The number of items returned in the Results object. */
    Count: number;
    /** A message describing the Results. */
    Message: string;
    /** Search terms (VIN, WMI, etc) used in the request URL. */
    SearchCriteria: string;
    /** Results of the NHSTSA API request. */
    Results: NhstaResults;
};
/**
 * Complete response returned by {@link module:api/Fetch.Fetch#get}.
 *
 * @memberof module:api/types
 */
export declare type ApiResponse = {
    /** The number of items returned in the Results object. */
    Count: number;
    /** A message describing the Results. */
    Message: string;
    /** Search terms (VIN, WMI, etc) used in the request URL. */
    SearchCriteria: string;
    /** Results of the NHSTSA API request. */
    Results: NhstaResults;
    /** {@link module:api/types.FetchResponse} */
    Response: FetchResponse;
};
/**
 * @module api/types
 */
//# sourceMappingURL=types.d.ts.map