"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xo = void 0;
function xo(str) {
    let xCount = 0;
    let oCount = 0;
    let workingStr = str.trim().toLowerCase();
    if (!workingStr.includes("x") && !workingStr.includes("o")) {
        return true;
    }
    for (let i = 0; i < workingStr.length; i++) {
        if (workingStr.charAt(i) === "x") {
            xCount++;
        }
        else if (workingStr.charAt(i) === "o") {
            oCount++;
        }
    }
    return xCount === oCount;
}
exports.xo = xo;
// OR REFACTORED TO
function XO(str) {
    // Basic check against degenerate cases, not really necessary for this exercise
    // but it is always useful to think about any possible degenerate case.
    if (str.length === 0)
        return true;
    // Keep a counter for both `x` and `o` chars
    // `x` will add to it, `o` will subtract.
    // If the counter will end up being 0, we have the
    // same number of `x` and `o`
    let count = 0;
    // For every char in the string
    for (const char of str) {
        // Make it lowercase to ignore uppercases and make the algorithm
        // case insensitive
        const caseLess = char.toLowerCase();
        // If it is an `x`, increase its counter
        if (caseLess === "x") {
            count++;
            continue; // We don't need further checks if it is a `x`
        }
        // If it is an `o` increase its counter
        if (caseLess === "o") {
            count--;
        }
        // Else it is another char, continue
    }
    // If the count of `x` match the count of `o`, return true
    return count === 0;
}
