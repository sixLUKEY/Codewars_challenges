import { assert } from "chai";
import { zeroFuel } from "../../../Typescript/07-Fuel-left/app";

describe("zeroFill", function () {
  it("Sample Tests", function () {
    assert.equal(zeroFuel(50, 25, 2), true);
    assert.equal(zeroFuel(100, 50, 1), false);
  });
});
