"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const app_1 = require("../../Typescript/14-make-uppercase/app");
describe("MakeUpperCase", () => {
    it("Fixed tests", () => {
        chai_1.assert.strictEqual((0, app_1.makeUpperCase)("hello"), "HELLO");
        chai_1.assert.strictEqual((0, app_1.makeUpperCase)("hello world"), "HELLO WORLD");
        chai_1.assert.strictEqual((0, app_1.makeUpperCase)("hello world !"), "HELLO WORLD !");
        chai_1.assert.strictEqual((0, app_1.makeUpperCase)("heLlO wORLd !"), "HELLO WORLD !");
        chai_1.assert.strictEqual((0, app_1.makeUpperCase)("1,2,3 hello world!"), "1,2,3 HELLO WORLD!");
    });
});
