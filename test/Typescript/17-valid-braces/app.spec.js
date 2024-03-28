"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const app_1 = require("../../../Typescript/17-valid-braces/app");
describe("solution", function () {
    it("should handle basic tests", function () {
        chai_1.assert.strictEqual((0, app_1.validBraces)("()"), true);
        chai_1.assert.strictEqual((0, app_1.validBraces)("[(])"), false);
    });
});
