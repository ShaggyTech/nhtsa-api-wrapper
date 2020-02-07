import { NhtsaResponse } from '../index';
import { Fetch } from '../Fetch';
export declare class GetVehicleTypesForMake extends Fetch {
    /**
     * This returns all the Vehicle Types in the vPIC dataset for a specified Make,
     * whose name is LIKE the make name in vPIC Dataset.
     * Make name can be a partial name, or a full name for more specificity
     * (e.g., "Merc", "Mercedes Benz", etc.).
     */
    GetVehicleTypesForMake(makeName: string): Promise<NhtsaResponse | Error>;
}
//# sourceMappingURL=GetVehicleTypesForMake.d.ts.map