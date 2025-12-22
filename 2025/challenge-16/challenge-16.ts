export function packGifts(gifts: number[], maxWeight: number): number | null {
  let sleighs = 0
  let current = 0
  for (let i = 0; i < gifts.length; i++) {
    const gift = gifts[i]
    if (gift > maxWeight) {
      return null
    }
    if (current + gift > maxWeight) {
      sleighs++
      current = gift
    } else {
      current += gift
    }
  }
  if (current > 0) sleighs++
  return sleighs
}
