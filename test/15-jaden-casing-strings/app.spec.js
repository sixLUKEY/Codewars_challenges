"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("../../Typescript/15-jaden-casing-strings/app");
describe("solution", function () {
    it('tests', function () {
        chai_1.assert.equal("How can mirrors be real if our eyes aren't real".toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
    });
});
