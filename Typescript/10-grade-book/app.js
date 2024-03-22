"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrade = void 0;
function getGrade(a, b, c) {
    let score = (a + b + c) / 3;
    if (score >= 90 && score <= 100) {
        return "A";
    }
    else if (score >= 80 && score < 90) {
        return "B";
    }
    else if (score >= 70 && score < 80) {
        return "C";
    }
    else if (score >= 60 && score < 70) {
        return "D";
    }
    else if (score >= 0 && score < 60) {
        return "F";
    }
    return '';
}
exports.getGrade = getGrade;
