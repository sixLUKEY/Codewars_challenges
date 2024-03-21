export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  return (
    yourPoints >
    classPoints.reduce((a, b) => {
      return a + b;
    }) /
      classPoints.length
  );
}
