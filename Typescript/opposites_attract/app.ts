export function loveFunc(flower1: number, flower2: number): boolean {
  if (flower1 % 2 === 0 && flower2 % 2 === 0) {
    return false;
  } else if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
  } else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
    return true;
  } else return false;
}

// Alternate Solution

function alsoLoveFunc(flower1: number, flower2: number): boolean {
  return flower1 % 2 != flower2 % 2;
}

console.log(alsoLoveFunc(5, 2));
