export function listGifts(letter: string) {
  return letter.split(' ').reduce<Record<string, number>>((acc, gift) => {
    if (gift && !gift.startsWith('_')) acc[gift] = acc[gift] + 1 || 1
    return acc
  }, {})
}
