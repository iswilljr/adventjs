// score: 175
export function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  const reindeersWight = reindeers.join('').length * 2
  const packWeight = packOfGifts.join('').length

  return Math.floor(reindeersWight / packWeight)
}
