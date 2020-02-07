import { NhtsaResponse } from '../index';
import { Fetch } from '../Fetch';
export declare class GetMakesForVehicleType extends Fetch {
    /**
     * This returns all the Makes in the vPIC dataset for a specified vehicle type,
     * whose name is LIKE the vehicle type name in vPIC Dataset.
     * Vehicle Type name can be a partial name, or a full name for more specificity
     * (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.).
     */
    GetMakesForVehicleType(typeName: string): Promise<NhtsaResponse | Error>;
}
//# sourceMappingURL=GetMakesForVehicleType.d.ts.map