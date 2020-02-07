import { NhtsaResponse } from '../index';
import { Fetch } from '../Fetch';
export declare class DecodeVin extends Fetch {
    /**
     * The DecodeVin API Action will decode the VIN and the decoded output will be made available in the format of Key-value pairs.
     * The IDs (VariableID and ValueID) represent the unique ID associated with the Variable/Value.
     * In case of text variables, the ValueID is not applicable.
     * Model Year in the request allows for the decoding to specifically be done in the current,
     * or older (pre-1980), model year ranges. It is recommended to always send in the model year.
     * This API also supports partial VIN decoding (VINs that are less than 17 characters).
     * In this case, the VIN will be decoded partially with the available characters.
     * In case of partial VINs, a "*" could be used to indicate the unavailable characters.
     * The 9th digit is not necessary.
     */
    DecodeVin(vin: string, params?: {
        modelYear?: string | number;
    }): Promise<NhtsaResponse | Error>;
}
//# sourceMappingURL=DecodeVin.d.ts.map