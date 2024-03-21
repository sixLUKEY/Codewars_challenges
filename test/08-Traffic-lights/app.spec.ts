import { assert } from "chai";
import { updateLight } from "../../Typescript/08-Traffic-lights/app";

describe("Thinkful - Logic Drills: Traffic light", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(updateLight("green"), "yellow");
    assert.strictEqual(updateLight("yellow"), "red");
    assert.strictEqual(updateLight("red"), "green");
  });
});
