"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const app_1 = require("../../Typescript/10-grade-book/app");
describe('should return an A', function () {
    it("getGrade(95, 90, 93)", () => chai_1.assert.strictEqual((0, app_1.getGrade)(95, 90, 93), 'A'));
    it("getGrade(100, 85, 96)", () => chai_1.assert.strictEqual((0, app_1.getGrade)(100, 85, 96), 'A'));
    it("getGrade(92, 93, 94)", () => chai_1.assert.strictEqual((0, app_1.getGrade)(92, 93, 94), 'A'));
    it("getGrade(100, 100, 100)", () => chai_1.assert.strictEqual((0, app_1.getGrade)(100, 100, 100), 'A'));
});
describe('should return a B', function () {
    it("getGrade(70, 70, 100)", () => chai_1.assert.strictEqual((0, app_1.getGrade)(70, 70, 100), 'B'));
    it("getGrade(82, 85, 87)", () => chai_1.assert.strictEqual((0, app_1.getGrade)(82, 85, 87), 'B'));
    it("getGrade(84, 79, 85)", () => chai_1.assert.strictEqual((0, app_1.getGrade)(84, 79, 85), 'B'));
});
describe('should return a C', function () {
    it("getGrade(70, 70, 70)", () => chai_1.assert.strictEqual((0, app_1.getGrade)(70, 70, 70), 'C'));
    it("getGrade(75, 70, 79)", () => chai_1.assert.strictEqual((0, app_1.getGrade)(75, 70, 79), 'C'));
    it("getGrade(60, 82, 76)", () => chai_1.assert.strictEqual((0, app_1.getGrade)(60, 82, 76), 'C'));
});
describe('should return a D', function () {
    it("getGrade(65, 70, 59)", () => chai_1.assert.strictEqual((0, app_1.getGrade)(65, 70, 59), 'D'));
    it("getGrade(66, 62, 68)", () => chai_1.assert.strictEqual((0, app_1.getGrade)(66, 62, 68), 'D'));
    it("getGrade(58, 62, 70)", () => chai_1.assert.strictEqual((0, app_1.getGrade)(58, 62, 70), 'D'));
});
describe('should return an F', function () {
    it("getGrade(44, 55, 52)", () => chai_1.assert.strictEqual((0, app_1.getGrade)(44, 55, 52), 'F'));
    it("getGrade(48, 55, 52)", () => chai_1.assert.strictEqual((0, app_1.getGrade)(48, 55, 52), 'F'));
    it("getGrade(58, 59, 60)", () => chai_1.assert.strictEqual((0, app_1.getGrade)(58, 59, 60), 'F'));
    it("getGrade(0, 0, 0)", () => chai_1.assert.strictEqual((0, app_1.getGrade)(0, 0, 0), 'F'));
});
