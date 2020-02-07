import { RequestManufacturerType, NhtsaResponse } from '../index';
import { Fetch } from '../Fetch';
export declare class GetAllManufacturers extends Fetch {
    /**
     * This provides a list of all the Manufacturers available in vPIC Dataset.
     * Parameter "manufacturerType" allows to filter the list based on manufacturer type,
     * (Incomplete Vehicles, Completed Vehicle Manufacturer, Incomplete Vehicle Manufacturer,
     * Intermediate Manufacturer, Final-Stage Manufacturer, Alterer, or any part of it), optional.
     * You can get a list of all manufacturer types with this API call:
     * "/api/vehicles/getvehiclevariablevalueslist/Manufacturer Type"
     * Results are provided in pages of 100 items.
     * Use parameter "page" to specify 1-st (default), 2nd, 3rd, ...Nth ... page.
     */
    GetAllManufacturers(params?: {
        manufacturerType?: RequestManufacturerType;
        page?: string | number;
    }): Promise<NhtsaResponse | Error>;
}
//# sourceMappingURL=GetAllManufacturers.d.ts.map