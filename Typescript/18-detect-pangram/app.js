"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPangram = void 0;
const isPangram = (phrase) => {
    const allLetters = new Set();
    for (const char of phrase) {
        if (/[a-z]/i.test(char)) {
            allLetters.add(char.toLowerCase());
        }
        if (allLetters.size === 26) {
            return true;
        }
    }
    return false;
};
exports.isPangram = isPangram;
// function containsEveryLetter(str: string) {
//   // Create an array to store whether each letter is found
//   let alphabetStatus = new Array(26).fill(false);
//   // Loop through each character in the string
//   for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i).toLowerCase(); // Convert to lowercase for case-insensitivity
//     let charCode = char.charCodeAt(0) - 97; // Get the character code and convert to index (a=0, b=1, ..., z=25)
//     // Check if the character is a lowercase letter
//     if (charCode >= 0 && charCode <= 25) {
//       alphabetStatus[charCode] = true; // Mark the letter as found
//     }
//   }
//   // Check if every letter in the alphabet has been found
//   return alphabetStatus.every((status) => status);
// }
// console.log(
//   "The quick brown fox jumps over the lazy dog."
//     .trim()
//     .toLowerCase()
//     .includes("c")
// );
// let string = "";
// console.time();
// containsEveryLetter(string);
// console.timeEnd();
// console.time();
// isPangram2(string);
// console.timeEnd();
// OR Refactor to
// function isPangram2(str: string) {
//   const allLetters = new Set();
//   for (const char of str) {
//     if (/[a-z]/i.test(char)) {
//       allLetters.add(char.toLowerCase());
//     }
//     if (allLetters.size === 26) {
//       return true;
//     }
//   }
//   return false;
// }
