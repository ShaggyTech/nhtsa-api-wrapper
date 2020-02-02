export interface FetchConfig {
  apiResponseFormat: string | undefined;
  baseUrl: string | undefined;
}

export type ResultDecodeVin = [
  {
    Value?: string;
    ValueId?: string;
    Variable?: string;
    VariableId?: number;
  }
];

export type ResultDecodeVinValues = [
  {
    [propName: string]: string;
  }
];

export type ResultDecodeWMI = [
  {
    CommonName?: string;
    CreatedOn?: string;
    DateAvailableToPublic?: string;
    Make?: string;
    ManufacturerName?: string;
    ParentCompanyName?: string;
    URL?: string;
    UpdatedOn?: string;
    VehicleType?: string;
  }
];

export type ResultGetWMIsForManufacturer = [
  {
    Country?: string;
    CreatedOn?: string;
    DateAvailableToPublic?: string;
    Id?: number;
    Name?: string;
    UpdatedOn?: string;
    VehicleType?: string;
    WMI?: string;
  }
];

export type ResponseGetAllMakes = [
  {
    Make_ID: number;
    Make_Name: string;
  }
];

export type ResponseGetParts = [
  {
    CoverLetterURL?: string;
    LetterDate?: string;
    ManufacturerId?: number;
    ManufacturerName?: string;
    ModelYearFrom?: string;
    ModelYearTo?: string;
    Name?: string;
    Type?: string;
    URL?: string;
  }
];

export type NhstaResults =
  | ResultDecodeVin
  | ResultDecodeVinValues
  | ResultDecodeWMI
  | ResultGetWMIsForManufacturer;

export type NhtsaResponse = {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: NhstaResults;
};

export type FetchResponse = {
  Response: {
    headers?: Headers;
    ok?: boolean;
    redirected?: boolean;
    status?: number;
    statusText?: string;
    url?: string;
  };
} & NhtsaResponse;

export * from './NHTSA';
