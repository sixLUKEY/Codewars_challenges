"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const app_1 = require("../app");
describe("Are you playing banjo?", () => {
    it("Fixed test", () => {
        chai_1.assert.strictEqual((0, app_1.areYouPlayingBanjo)("Adam"), "Adam does not play banjo");
        chai_1.assert.strictEqual((0, app_1.areYouPlayingBanjo)("Paul"), "Paul does not play banjo");
        chai_1.assert.strictEqual((0, app_1.areYouPlayingBanjo)("Ringo"), "Ringo plays banjo");
        chai_1.assert.strictEqual((0, app_1.areYouPlayingBanjo)("bravo"), "bravo does not play banjo");
        chai_1.assert.strictEqual((0, app_1.areYouPlayingBanjo)("rolf"), "rolf plays banjo");
    });
});
