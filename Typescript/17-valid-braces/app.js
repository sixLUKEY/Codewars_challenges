"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validBraces = void 0;
function validBraces(braces) {
    let stack = [];
    const bracesMap = {
        "}": "{",
        "]": "[",
        ")": "(",
    };
    for (let char of braces) {
        if (char === "{" || char === "[" || char === "(") {
            stack.push(char);
        }
        else {
            let top = stack.pop();
            if (bracesMap[char] !== top) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
exports.validBraces = validBraces;
