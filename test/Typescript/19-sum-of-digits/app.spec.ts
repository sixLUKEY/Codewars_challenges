import { assert } from "chai";
import { digitalRoot } from "../../../Typescript/19-sum-of-digits/app";

describe("solution", () => {
    it('should work for fixed tests', () => {
      assert.equal(digitalRoot(16), 7);
      assert.equal(digitalRoot(456), 6 );
    });
  });