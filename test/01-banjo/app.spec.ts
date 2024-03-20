import { assert } from "chai";
import { areYouPlayingBanjo } from "../../Typescript/Are_you_playing_banjo/app";

describe("Are you playing banjo?", () => {
  it("Fixed test", () => {
    assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
    assert.strictEqual(
      areYouPlayingBanjo("bravo"),
      "bravo does not play banjo"
    );
    assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
  });
});
