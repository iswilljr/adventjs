// score: 217
export function getMaxGifts(
  giftsCities: number[],
  maxGifts: number,
  maxCities: number
) {
  return giftsCities
    .sort((a, b) => b - a)
    .reduce((a, v) => {
      if (maxCities == 0 || a + v > maxGifts || a + v == maxGifts - 1) return a
      maxCities--
      return a + v
    }, 0)
}
