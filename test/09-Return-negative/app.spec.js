"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const app_1 = require("../../Typescript/09-Return-negative/app");
describe("makeNegative", function () {
    it("Sample tests", function () {
        chai_1.assert.equal((0, app_1.makeNegative)(42), -42);
    });
});
