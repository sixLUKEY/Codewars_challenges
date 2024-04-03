"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitalRoot = void 0;
const digitalRoot = (n) => {
    while (n >= 10) {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        n = sum;
    }
    return n;
};
exports.digitalRoot = digitalRoot;
// OR Refactor
const alsoDigitalRoot = (n) => {
    return ((n - 1) % 9) + 1;
};
