import { DriveStrategy } from "./drive-strategy.interface";

export class SpecialDriveStrategy implements DriveStrategy {
    public drive(): void {
        console.log('Special drive method called');
    }
}