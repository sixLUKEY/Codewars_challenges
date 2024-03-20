import { assert } from "chai";
import { loveFunc } from "../../Typescript/opposites_attract/app";

describe("do we love each other?", () => {
  it("Basic Tests", () => {
    assert.isTrue(loveFunc(1, 4));
    assert.isFalse(loveFunc(2, 2));
    assert.isTrue(loveFunc(0, 1));
    assert.isFalse(loveFunc(0, 0));
  });
});
