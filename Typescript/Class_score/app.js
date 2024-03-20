"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.betterThanAverage = void 0;
function betterThanAverage(classPoints, yourPoints) {
    return (yourPoints >
        classPoints.reduce((a, b) => {
            return a + b;
        }) /
            classPoints.length);
}
exports.betterThanAverage = betterThanAverage;
