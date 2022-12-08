// score: 175
export function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  return Math.floor(
    (reindeers.join('').length * 2) / packOfGifts.join('').length
  )
}
