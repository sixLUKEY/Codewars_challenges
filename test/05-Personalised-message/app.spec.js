"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const app_1 = require("../../Typescript/05-Personalised-message/app");
describe("example", () => {
    it("Fixed test", () => {
        chai_1.assert.strictEqual((0, app_1.greet)("Daniel", "Daniel"), "Hello boss");
        chai_1.assert.strictEqual((0, app_1.greet)("Greg", "Daniel"), "Hello guest");
    });
});
