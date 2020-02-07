import { QueryStringParameters } from '../utils';
import { FetchConfig, FetchResponse } from './index';
export declare const BASE_URL = "https://vpic.nhtsa.dot.gov/api/vehicles";
export declare const DEFAULT_CONFIG: FetchConfig;
export declare class Fetch {
    apiResponseFormat?: string;
    baseUrl?: string;
    config?: FetchConfig;
    constructor(userConfig?: FetchConfig);
    buildQueryString(params: QueryStringParameters): Promise<string | Error>;
    get(url: string): Promise<FetchResponse | Error>;
}
//# sourceMappingURL=Fetch.d.ts.map