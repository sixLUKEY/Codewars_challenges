import { assert } from "chai";
import { stringToNumber } from "../../../Typescript/11-string-to-number/app";

describe("stringToNumber", function() {
  it("should work for the examples", function() {
    assert.strictEqual(stringToNumber("1234"),1234);
    assert.strictEqual(stringToNumber("605"), 605);
    assert.strictEqual(stringToNumber("1405"),1405);
    assert.strictEqual(stringToNumber("-7"),  -7);
  });
});