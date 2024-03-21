"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zeroFuel = void 0;
const zeroFuel = (distance, mpg, fuelLeft) => {
    return distance <= mpg * fuelLeft;
};
exports.zeroFuel = zeroFuel;
