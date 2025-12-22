interface Shoe {
  type: 'I' | 'R'
  size: number
}

export function organizeShoes(shoes: Shoe[]): number[] {
  const shoeCounts: Record<number, { I: number; R: number }> = {}

  for (const shoe of shoes) {
    shoeCounts[shoe.size] ??= { I: 0, R: 0 }
    shoeCounts[shoe.size][shoe.type]++
  }

  const pairedSizes = []
  for (const size in shoeCounts) {
    const { I, R } = shoeCounts[size]
    if (I && R) {
      const min = Math.min(I, R)
      pairedSizes.push(...new Array(min).fill(+size))
    }
  }

  return pairedSizes
}
