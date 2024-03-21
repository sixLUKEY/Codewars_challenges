"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeChar = void 0;
function removeChar(str) {
    //   return str.replace(str.charAt(1), "").replace(str.charAt(str.length - 1), "");
    return str.slice(1, -1);
    /** OR
     *
      return str.split("").slice(1, -1).join('');
     */
}
exports.removeChar = removeChar;
let string = "hello";
console.log(removeChar(string));
