"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areYouPlayingBanjo = void 0;
function areYouPlayingBanjo(name) {
    let workingName = name.toLowerCase().trim();
    if (workingName.startsWith("r")) {
        return `${name} plays banjo`;
    }
    return `${name} does not play banjo`;
}
exports.areYouPlayingBanjo = areYouPlayingBanjo;
