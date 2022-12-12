// score: 98 - solution 1
export function getMaxGifts1(
  giftsCities: number[],
  maxGifts: number,
  maxCities: number
) {
  return Math.max(
    ...giftsCities
      .sort((x, y) => y - x)
      .reduce((result, _, i) => {
        i && giftsCities.unshift(giftsCities.pop() as number)
        i = giftsCities
          .slice(0, maxCities)
          .reduce((acc, curr) => (acc += curr), 0)

        i <= maxGifts && result.push(i)
        i - giftsCities[maxCities - 1] <= maxGifts &&
          result.push(i - giftsCities[maxCities - 1])
        return result
      }, [] as number[]),
    0
  )
}

// score: 209 - partial solution 2
export function getMaxGifts(
  giftsCities: number[],
  maxGifts: number,
  maxCities: number
) {
  return giftsCities.reduce(
    (acc, value, _i, _a, v = acc[0] + value) => {
      return v <= maxGifts && acc[1] < maxCities
        ? [v, acc[1] + 1]
        : acc[0] < value && value <= maxGifts
        ? [value, 1]
        : acc
    },
    [0, 0]
  )[0]
}
