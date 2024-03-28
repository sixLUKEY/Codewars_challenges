import { assert } from "chai";
import { greet } from "../../../Typescript/05-Personalised-message/app";

describe("example", () => {
  it("Fixed test", () => {
    assert.strictEqual(greet("Daniel", "Daniel"), "Hello boss");
    assert.strictEqual(greet("Greg", "Daniel"), "Hello guest");
  });
});
