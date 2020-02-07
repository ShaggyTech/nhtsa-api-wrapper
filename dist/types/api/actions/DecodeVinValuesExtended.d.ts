import { NhtsaResponse } from '../index';
import { Fetch } from '../Fetch';
export declare class DecodeVinValuesExtended extends Fetch {
    /**
     * This is exactly like the DecodeVinValues (flat format) method but provides additional information
     * on variables related to other NHTSA programs like NCSA etc.
     * This will decode the VIN and the decoded output will be made available in a flat file format.
     * Model Year in the request allows for the decoding to specifically be done in the current,
     * or older (pre-1980), model year ranges. It is recommended to always send in the model year.
     * This Action also supports partial VIN decoding (VINs that are less than 17 characters).
     * In this case, the VIN will be decoded partially with the available characters.
     * In case of partial VINs, a "*" could be used to indicate the unavailable characters.
     */
    DecodeVinValuesExtended(vin: string, params?: {
        modelYear?: string | number;
    }): Promise<NhtsaResponse | Error>;
}
//# sourceMappingURL=DecodeVinValuesExtended.d.ts.map