"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const app_1 = require("../../../Typescript/12-exes-and-ohs/app");
describe("xo", function () {
    it("Basic Tests", function () {
        chai_1.assert.strictEqual((0, app_1.xo)('xo'), true);
        chai_1.assert.strictEqual((0, app_1.xo)("xxOo"), true);
        chai_1.assert.strictEqual((0, app_1.xo)("xxxm"), false);
        chai_1.assert.strictEqual((0, app_1.xo)("Oo"), false);
        chai_1.assert.strictEqual((0, app_1.xo)("ooom"), false);
    });
});
