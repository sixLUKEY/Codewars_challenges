"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const app_1 = require("../../../Typescript/06-String-repeat/app");
describe("solution", function () {
    it("Tests", function () {
        chai_1.assert.equal((0, app_1.repeatStr)(3, "*"), "***");
    });
});
