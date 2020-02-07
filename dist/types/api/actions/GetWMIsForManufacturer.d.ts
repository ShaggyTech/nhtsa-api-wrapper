import { NhtsaResponse } from '../index';
import { Fetch } from '../Fetch';
export declare class GetWMIsForManufacturer extends Fetch {
    /**
     * Provides information on the all World Manufacturer Identifier (WMI) for a specified Manufacturer.
     * Only WMI registered in vPICList are displayed.
     */
    GetWMIsForManufacturer(manufacturer: string): Promise<NhtsaResponse | Error>;
}
//# sourceMappingURL=GetWMIsForManufacturer.d.ts.map