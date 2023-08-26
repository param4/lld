import { VehicleInterface } from "./vehicle.interface";

export class Vehicle implements VehicleInterface {
    public drive() : void {
        console.log('Normal Drive Method called');
    }
}