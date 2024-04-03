"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const app_1 = require("../../../Typescript/19-sum-of-digits/app");
describe("solution", () => {
    it('should work for fixed tests', () => {
        chai_1.assert.equal((0, app_1.digitalRoot)(16), 7);
        chai_1.assert.equal((0, app_1.digitalRoot)(456), 6);
    });
});
