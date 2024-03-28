String.prototype.toJadenCase = function (): string {
  let wordArray = this.split(" ");
  let newArray: string[] = [];
  wordArray.forEach((word) => {
    let newWord: string = (word[0].toUpperCase() + word.slice(1)).trim();
    newArray.push(newWord);
  });
  return newArray.join(" ");
};

interface String {
  // Declaration needed, don't remove it
  toJadenCase(): string;
}

// OR refactor to

function jdCase(str: string) {
  return str
    .split(" ")
    .map((element) => {
      element[0].toUpperCase() + element.substring(1);
    })
    .join(" ");
}
