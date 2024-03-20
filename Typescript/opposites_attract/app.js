"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loveFunc = void 0;
function loveFunc(flower1, flower2) {
    if (flower1 % 2 === 0 && flower2 % 2 === 0) {
        return false;
    }
    else if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
        return true;
    }
    else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
        return true;
    }
    else
        return false;
}
exports.loveFunc = loveFunc;
