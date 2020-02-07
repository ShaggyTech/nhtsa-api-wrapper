import { NhtsaResponse } from '../index';
import { Fetch } from '../Fetch';
export declare class GetVehicleTypesForMakeId extends Fetch {
    /**
     * This returns all the Vehicle Types in the vPIC dataset for a specified Make
     * whose ID equals the make ID in vPIC Dataset.
     */
    GetVehicleTypesForMakeId(makeID: number): Promise<NhtsaResponse | Error>;
}
//# sourceMappingURL=GetVehicleTypesForMakeId.d.ts.map