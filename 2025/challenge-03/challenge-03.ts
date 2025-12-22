export function drawGift(size: number, symbol: string): string {
  if (size < 2) return ''

  let gift = ''
  for (let i = 0; i < size; i++) {
    const isFirstOrLast = i === 0 || i === size - 1
    if (isFirstOrLast) {
      gift += symbol.repeat(size) + '\n'
    } else {
      gift += symbol + ' '.repeat(size - 2) + symbol + '\n'
    }
  }

  return gift.trimEnd()
}
