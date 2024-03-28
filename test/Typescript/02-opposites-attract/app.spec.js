"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const app_1 = require("../../../Typescript/opposites_attract/app");
describe("do we love each other?", () => {
    it("Basic Tests", () => {
        chai_1.assert.isTrue((0, app_1.loveFunc)(1, 4));
        chai_1.assert.isFalse((0, app_1.loveFunc)(2, 2));
        chai_1.assert.isTrue((0, app_1.loveFunc)(0, 1));
        chai_1.assert.isFalse((0, app_1.loveFunc)(0, 0));
    });
});
