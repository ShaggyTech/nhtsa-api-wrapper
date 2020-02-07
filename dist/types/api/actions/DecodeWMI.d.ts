import { NhtsaResponse } from '../index';
import { Fetch } from '../Fetch';
export declare class DecodeWMI extends Fetch {
    /**
     * This provides information on the World Manufacturer Identifier for a specific WMI code.
     * WMIs may be put in as either 3 characters representing VIN position 1-3 or 6 characters
     * representing VIN positions 1-3 & 12-14. Example "JTD", "1T9131".
     */
    DecodeWMI(WMI: string): Promise<NhtsaResponse | Error>;
}
//# sourceMappingURL=DecodeWMI.d.ts.map