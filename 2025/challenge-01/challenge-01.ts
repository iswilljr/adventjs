export function filterGifts(gifts: string[]): string[] {
  return gifts.filter(gift => !gift.includes('#'))
}
