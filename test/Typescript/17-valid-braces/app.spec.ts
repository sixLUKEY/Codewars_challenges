import { assert } from "chai";
import { validBraces } from "../../../Typescript/17-valid-braces/app";

describe("solution", function() {
    it("should handle basic tests", function() {
      assert.strictEqual(validBraces("()"), true); 
      assert.strictEqual(validBraces("[(])"), false); 
    });
  });