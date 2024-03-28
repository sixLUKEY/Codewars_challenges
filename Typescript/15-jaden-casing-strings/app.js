"use strict";
String.prototype.toJadenCase = function () {
    let wordArray = this.split(" ");
    let newArray = [];
    wordArray.forEach((word) => {
        let newWord = (word[0].toUpperCase() + word.slice(1)).trim();
        newArray.push(newWord);
    });
    return newArray.join(" ");
};
// OR refactor to
function toJdCase(str) {
    return str
        .split(" ")
        .map((element) => {
        element[0].toUpperCase() + element.substring(1);
    })
        .join(" ");
}
