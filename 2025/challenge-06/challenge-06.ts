export function matchGloves(
  gloves: Array<{ hand: 'L' | 'R'; color: string }>,
): string[] {
  const matches = new Map()
  const finalMatches = []

  for (let i = 0; i < gloves.length; i++) {
    const { color, hand } = gloves[i]

    const entry = matches.get(color) ?? {
      L: 0,
      R: 0,
      indexes: [],
    }
    matches.set(color, entry)

    entry[hand]++
    entry.indexes.push(i)

    if (entry.L * entry.R) {
      entry.L--
      entry.R--
      finalMatches.push(color)
    }
  }

  return finalMatches.filter(Boolean)
}
