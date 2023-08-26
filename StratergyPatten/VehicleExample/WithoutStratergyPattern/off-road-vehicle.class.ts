import { Vehicle } from "./vehicle.class";

export class OffRoadVehicle extends Vehicle {
    public drive(): void {
        console.log('Special drive method called');
    }
}