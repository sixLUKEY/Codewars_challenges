"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLight = void 0;
function updateLight(current) {
    switch (current) {
        case "green":
            return "yellow";
        case "yellow":
            return "red";
        case "red":
            return "green";
        default:
            return "";
    }
}
exports.updateLight = updateLight;
