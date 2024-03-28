export function validBraces(braces: string): boolean {
  let stack: string[] = [];
  const bracesMap: { [key: string]: string } = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let char of braces) {
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    } else {
      let top = stack.pop();
      if (bracesMap[char] !== top) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
