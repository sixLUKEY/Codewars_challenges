"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const app_1 = require("../../Typescript/11-string-to-number/app");
describe("stringToNumber", function () {
    it("should work for the examples", function () {
        chai_1.assert.strictEqual((0, app_1.stringToNumber)("1234"), 1234);
        chai_1.assert.strictEqual((0, app_1.stringToNumber)("605"), 605);
        chai_1.assert.strictEqual((0, app_1.stringToNumber)("1405"), 1405);
        chai_1.assert.strictEqual((0, app_1.stringToNumber)("-7"), -7);
    });
});
