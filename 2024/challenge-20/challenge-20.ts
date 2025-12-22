export function fixGiftList(
  received: string[],
  expected: string[],
): { missing: Record<string, number>; extra: Record<string, number> } {
  const countGifts = (arr: string[]) => {
    return arr.reduce<Record<string, number>>((acc, gift) => {
      acc[gift] = (acc[gift] | 0) + 1
      return acc
    }, {})
  }

  const receivedCount = countGifts(received)
  const expectedCount = countGifts(expected)

  const missing: Record<string, number> = {}
  const extra: Record<string, number> = {}

  for (const gift in expectedCount) {
    const expectedQty = expectedCount[gift]
    const receivedQty = receivedCount[gift] | 0

    if (receivedQty < expectedQty) {
      missing[gift] = expectedQty - receivedQty
    }
  }

  for (const gift in receivedCount) {
    const receivedQty = receivedCount[gift]
    const expectedQty = expectedCount[gift] | 0

    if (receivedQty > expectedQty) {
      extra[gift] = receivedQty - expectedQty
    }
  }

  return { missing, extra }
}
