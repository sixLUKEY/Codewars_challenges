import { assert } from "chai";
import { repeatStr } from "../../Typescript/06-String-repeat/app";

describe("solution", function(){
    it("Tests", function(){
      assert.equal(repeatStr(3, "*"), "***");
    });
  });