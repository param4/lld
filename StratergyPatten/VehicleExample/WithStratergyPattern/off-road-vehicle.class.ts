import { Vehicle } from "./vehicle.class";
import { SpecialDriveStrategy } from "./drive-stratergy/special-drive-strategy.class";

export class OffRoadVehicle extends Vehicle {
    constructor() {
        super(new SpecialDriveStrategy());
    }
}