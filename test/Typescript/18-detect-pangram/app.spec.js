"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const app_1 = require("../../../Typescript/18-detect-pangram/app");
describe("example", function () {
    it("test", function () {
        chai_1.assert.strictEqual((0, app_1.isPangram)("The quick brown fox jumps over the lazy dog."), true);
        chai_1.assert.strictEqual((0, app_1.isPangram)("This is not a pangram."), false);
    });
});
