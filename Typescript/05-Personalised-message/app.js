"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
function greet(name, owner) {
    return name === owner ? `Hello boss` : `Hello guest`;
}
exports.greet = greet;
