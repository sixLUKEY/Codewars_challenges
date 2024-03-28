"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rps = void 0;
function rps(p1, p2) {
    if (p1 === p2) {
        return "Draw!";
    }
    if ((p1 === "rock" && p2 === "paper") ||
        (p1 === "paper" && p2 === "scissors") ||
        (p1 === "scissors" && p2 === "rock")) {
        return "Player 2 won!";
    }
    if ((p2 === "rock" && p1 === "paper") ||
        (p2 === "paper" && p1 === "scissors") ||
        (p2 === "scissors" && p1 === "rock")) {
        return "Player 1 won!";
    }
    return "";
}
exports.rps = rps;
// OR Refactor to
const beats = {
    'scissors': 'paper',
    'paper': 'rock',
    'rock': 'scissors',
};
function RPS(p1, p2) {
    if (p1 === p2)
        return 'Draw!';
    if (beats[p1] == p2)
        return 'Player 1 won!';
    return 'Player 2 won!';
}
