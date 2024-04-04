export const digitalRoot = (n: number): number => {
  while (n >= 10) {
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    n = sum;
  }
  return n;
};

// OR Refactor

const alsoDigitalRoot = (n: number): number => {
  return ((n - 1) % 9) + 1;
};
