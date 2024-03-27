type rpsMove = "rock" | "paper" | "scissors";

export function rps<T extends rpsMove>(p1: T, p2: T): string {
  if (p1 === p2) {
    return "Draw!";
  }
  if (
    (p1 === "rock" && p2 === "paper") ||
    (p1 === "paper" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "rock")
  ) {
    return "Player 2 won!";
  }
  if (
    (p2 === "rock" && p1 === "paper") ||
    (p2 === "paper" && p1 === "scissors") ||
    (p2 === "scissors" && p1 === "rock")
  ) {
    return "Player 1 won!";
  }
  return "";
}

// OR Refactor to

const beats: {[index: string]: string} = {
    'scissors': 'paper',
    'paper': 'rock',
    'rock': 'scissors',
  }
  
function RPS(p1: string, p2: string): string{
    if (p1 === p2) return 'Draw!'
    
    if (beats[p1] == p2) return 'Player 1 won!'
    return 'Player 2 won!'
  }