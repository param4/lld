import { GoodsVehicle } from "./goods-vehicle.class";
import { OffRoadVehicle } from "./off-road-vehicle.class";
import { PassengerVehicle } from "./passenger-vehicle.class";
import { SportVehicle } from "./sport-vehicle.class";

const goodsVehicle = new GoodsVehicle();
const offRoadVehicle = new OffRoadVehicle();
const passengerVehicle = new PassengerVehicle();
const sportVehicle = new SportVehicle();


goodsVehicle.drive();
offRoadVehicle.drive();
passengerVehicle.drive();
sportVehicle.drive();