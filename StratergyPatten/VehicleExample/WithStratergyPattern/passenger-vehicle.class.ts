import { Vehicle } from "./vehicle.class";
import { NormalDriveStrategy } from "./drive-stratergy/normal-drive-strategy.class";

export class PassengerVehicle extends Vehicle {
    constructor() {
        super(new NormalDriveStrategy());
    }
}