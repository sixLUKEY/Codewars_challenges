import { assert } from "chai";
import { rps } from "../../../Typescript/13-rock-paper-scissors/app";

describe("Beginner - Lost Without a Map", () => {
  
    const getMsg = (n: number): string => `Player ${n} won!`;  
   
    it('player 1 win', () => {
      assert.strictEqual(rps('rock', 'scissors'), getMsg(1));
      assert.strictEqual(rps('scissors', 'paper'), getMsg(1));
      assert.strictEqual(rps('paper', 'rock'), getMsg(1));
    });
  
    it('player 2 win', () => {
      assert.strictEqual(rps('scissors', 'rock'), getMsg(2));
      assert.strictEqual(rps('paper', 'scissors'), getMsg(2));
      assert.strictEqual(rps('rock', 'paper'), getMsg(2));
    });
  
    it('draw', () => {
      assert.strictEqual(rps('rock', 'rock'), 'Draw!');
      assert.strictEqual(rps('scissors', 'scissors'), 'Draw!');
      assert.strictEqual(rps('paper', 'paper'), 'Draw!');
    }); 
  });