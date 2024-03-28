import { assert } from "chai";
import { xo } from "../../../Typescript/12-exes-and-ohs/app";

describe("xo", function() {
  it("Basic Tests", function() {
    assert.strictEqual(xo('xo'),true);
    assert.strictEqual(xo("xxOo"),true);
    assert.strictEqual(xo("xxxm"),false);
    assert.strictEqual(xo("Oo"),false);
    assert.strictEqual(xo("ooom"),false);
  });
});