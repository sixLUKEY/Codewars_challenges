import { assert } from "chai";
import "../../Typescript/15-jaden-casing-strings/app";

describe("solution", function(){
    it('tests', function() {
        assert.equal("How can mirrors be real if our eyes aren't real".toJadenCase(),
                     "How Can Mirrors Be Real If Our Eyes Aren't Real")
    });
  });