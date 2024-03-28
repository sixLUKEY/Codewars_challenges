"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhoneNumber = void 0;
function createPhoneNumber(numbers) {
    let firstThree = numbers.slice(0, 3).join("");
    let secondThree = numbers.slice(3, 6).join("");
    let lastFour = numbers.slice(-4).join("");
    return `(${firstThree}) ${secondThree}-${lastFour}`;
}
exports.createPhoneNumber = createPhoneNumber;
// OR refactor to
function phoneNumber(numbers) {
    let phoneNumber = "(xxx) xxx-xxxx";
    for (let i = 0; i < numbers.length; i++) {
        phoneNumber = phoneNumber.replace("x", numbers[i].toString());
    }
    return phoneNumber;
}
