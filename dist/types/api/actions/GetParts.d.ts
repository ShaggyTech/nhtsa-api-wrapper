import { NhtsaResponse } from '../index';
import { Fetch } from '../Fetch';
export declare class GetParts extends Fetch {
    /**
     * This provides a list of ORGs with letter date in the given range of the dates and with specified Type of ORG.
     * Up to 1000 results will be returned at a time, get the next page by incrementing the "page" parameter.
     */
    GetParts(params?: {
        type?: string | number;
        fromDate?: string;
        toDate?: string;
        page?: string | number;
    }): Promise<NhtsaResponse | Error>;
}
//# sourceMappingURL=GetParts.d.ts.map