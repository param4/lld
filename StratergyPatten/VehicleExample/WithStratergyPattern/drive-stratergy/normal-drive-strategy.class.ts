import { DriveStrategy } from "./drive-strategy.interface";

export class NormalDriveStrategy implements DriveStrategy {
    public drive(): void {
        console.log('Normal Drive Method called');
    }
}