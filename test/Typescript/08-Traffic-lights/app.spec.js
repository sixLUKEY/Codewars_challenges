"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const app_1 = require("../../../Typescript/08-Traffic-lights/app");
describe("Thinkful - Logic Drills: Traffic light", () => {
    it("Testing for fixed tests", () => {
        chai_1.assert.strictEqual((0, app_1.updateLight)("green"), "yellow");
        chai_1.assert.strictEqual((0, app_1.updateLight)("yellow"), "red");
        chai_1.assert.strictEqual((0, app_1.updateLight)("red"), "green");
    });
});
