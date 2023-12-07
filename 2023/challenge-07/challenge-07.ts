export function drawGift(size: number, symbol: string) {
  if (size === 1) {
    return '#\n'
  }

  let gift = ''
  let spaces = size - 2
  let middleRestCount = 0
  const symbolSize = spaces
  const middleStep = size - 1
  const totalLevels = size * 2 - 2

  for (let level = 1; level < totalLevels; level++) {
    const isMiddle = level === middleStep
    const startSymbolCount = isMiddle ? 0 : symbolSize
    const middleWrapCount = isMiddle ? middleStep : 1

    if (level >= size) {
      middleRestCount += 2
    }

    const endSymbolCount = level - middleRestCount - 1

    const wrap = `${' '.repeat(spaces)}#${symbol.repeat(
      startSymbolCount,
    )}${'#'.repeat(middleWrapCount)}${symbol.repeat(endSymbolCount)}#\n`

    gift += wrap

    if (level < middleStep) {
      spaces--
    }
  }

  const topWrap = `${' '.repeat(middleStep)}${'#'.repeat(size)}\n`
  const bottomWrap = `${'#'.repeat(size)}\n`

  return `${topWrap}${gift}${bottomWrap}`
}
