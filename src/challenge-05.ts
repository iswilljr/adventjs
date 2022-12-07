// score: 98 - solution 1
export function getMaxGifts1(giftsCities: number[], maxGifts: number, maxCities: number) {
  let max = 0;
  function findMax(numbers: number[], c: number[]) {
    if (c.length <= maxCities) {
      const cSum = c.reduce((a, b) => a + b, 0);

      if (cSum <= maxGifts && cSum > max) {
        max = cSum;
      }
    }
    numbers.forEach((number, index, arr) => {
      c.push(number);
      findMax(arr.slice(index + 1), c);
      c.pop();
    });
  }
  findMax(giftsCities, []);
  return max;
}

// score: 209 - partial solution 2
export function getMaxGifts(giftsCities: number[], maxGifts: number, maxCities: number) {
  return giftsCities.reduce(
    (acc, value, _i, _a, v = acc[0] + value) => {
      return v <= maxGifts && acc[1] < maxCities
        ? [v, acc[1] + 1]
        : acc[0] < value && value <= maxGifts
        ? [value, 1]
        : acc;
    },
    [0, 0]
  )[0];
}
