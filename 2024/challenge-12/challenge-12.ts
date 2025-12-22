export function calculatePrice(ornaments: string): number | undefined {
  let total = 0
  const values: Record<string, number> = {
    '*': 1,
    o: 5,
    '^': 10,
    '#': 50,
    '@': 100,
  }

  for (let i = 0; i < ornaments.length; i++) {
    const ornamentValue = values[ornaments[i]]
    const prevOrnamentValue = values[ornaments[i - 1]] | 0

    total += ornamentValue

    if (prevOrnamentValue < ornamentValue) {
      total -= prevOrnamentValue * 2
    }
  }

  return total || undefined
}
