"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const app_1 = require("../../Typescript/Remove_characters/app");
describe('removeChar', () => {
    it('basic tests', () => {
        chai_1.assert.equal((0, app_1.removeChar)('eloquent'), 'loquen');
        chai_1.assert.equal((0, app_1.removeChar)('country'), 'ountr');
        chai_1.assert.equal((0, app_1.removeChar)('person'), 'erso');
        chai_1.assert.equal((0, app_1.removeChar)('place'), 'lac');
    });
});
