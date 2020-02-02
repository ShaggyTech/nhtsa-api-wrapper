export interface FetchConfig {
  apiResponseFormat: string | undefined;
  baseUrl: string | undefined;
}

export type NhtsaResultsKeyValue = [
  {
    Value: string;
    ValueId: string;
    Variable: string;
    VariableId: number;
  }
];

export type NhtsaResultsFlatFile = [
  {
    [propName: string]: string;
  }
];

export type NhstaResults = NhtsaResultsKeyValue | NhtsaResultsFlatFile;

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
