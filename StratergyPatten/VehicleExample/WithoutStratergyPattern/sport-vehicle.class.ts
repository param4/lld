import { Vehicle } from "./vehicle.class";


export class SportVehicle extends Vehicle {
    drive(): void {
        console.log('Special drive method called');
    }
}