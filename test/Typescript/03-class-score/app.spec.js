"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const app_1 = require("../../../Typescript/Class_score/app");
describe("Basic tests", () => {
    it("betterThanAverage([2, 3], 5)", () => chai_1.assert.isTrue((0, app_1.betterThanAverage)([2, 3], 5)));
    it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)", () => chai_1.assert.isTrue((0, app_1.betterThanAverage)([100, 40, 34, 57, 29, 72, 57, 88], 75)));
    it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)", () => chai_1.assert.isTrue((0, app_1.betterThanAverage)([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)));
    it("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)", () => chai_1.assert.isFalse((0, app_1.betterThanAverage)([41, 75, 72, 56, 80, 82, 81, 33], 50)));
    it("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)", () => chai_1.assert.isFalse((0, app_1.betterThanAverage)([29, 55, 74, 60, 11, 90, 67, 28], 21)));
});
