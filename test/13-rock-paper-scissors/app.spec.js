"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const app_1 = require("../../Typescript/13-rock-paper-scissors/app");
describe("Beginner - Lost Without a Map", () => {
    const getMsg = (n) => `Player ${n} won!`;
    it('player 1 win', () => {
        chai_1.assert.strictEqual((0, app_1.rps)('rock', 'scissors'), getMsg(1));
        chai_1.assert.strictEqual((0, app_1.rps)('scissors', 'paper'), getMsg(1));
        chai_1.assert.strictEqual((0, app_1.rps)('paper', 'rock'), getMsg(1));
    });
    it('player 2 win', () => {
        chai_1.assert.strictEqual((0, app_1.rps)('scissors', 'rock'), getMsg(2));
        chai_1.assert.strictEqual((0, app_1.rps)('paper', 'scissors'), getMsg(2));
        chai_1.assert.strictEqual((0, app_1.rps)('rock', 'paper'), getMsg(2));
    });
    it('draw', () => {
        chai_1.assert.strictEqual((0, app_1.rps)('rock', 'rock'), 'Draw!');
        chai_1.assert.strictEqual((0, app_1.rps)('scissors', 'scissors'), 'Draw!');
        chai_1.assert.strictEqual((0, app_1.rps)('paper', 'paper'), 'Draw!');
    });
});
