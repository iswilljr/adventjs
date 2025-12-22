export function prepareGifts(gifts: number[]) {
  return [...new Set(gifts)].sort((a, b) => a - b)
}
