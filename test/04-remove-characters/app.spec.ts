import { assert } from "chai";
import { removeChar } from "../../Typescript/Remove_characters/app";

describe('removeChar', () => {
    it('basic tests', () => {
      assert.equal(removeChar('eloquent'), 'loquen');
      assert.equal(removeChar('country'), 'ountr');
      assert.equal(removeChar('person'), 'erso');
      assert.equal(removeChar('place'), 'lac');
    });
  });