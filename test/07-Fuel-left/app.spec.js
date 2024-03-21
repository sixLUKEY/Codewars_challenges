"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const app_1 = require("../../Typescript/07-Fuel-left/app");
describe("zeroFill", function () {
    it("Sample Tests", function () {
        chai_1.assert.equal((0, app_1.zeroFuel)(50, 25, 2), true);
        chai_1.assert.equal((0, app_1.zeroFuel)(100, 50, 1), false);
    });
});
