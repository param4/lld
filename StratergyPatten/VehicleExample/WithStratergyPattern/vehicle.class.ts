import { DriveStrategy } from "./drive-stratergy/drive-strategy.interface";
import { VehicleInterface } from "./vehicle.interface";

export class Vehicle implements VehicleInterface {
    private driveApproach: DriveStrategy;
    
    constructor (driveApproach: DriveStrategy) {
        this.driveApproach = driveApproach; 
    }
    public drive() : void {
        this.driveApproach.drive();
    }
}