export function distributeGifts(weights: Array<Array<number | null>>) {
  const averages: number[][] = []

  for (const [i, row] of weights.entries()) {
    averages[i] = []

    for (const [j, col] of row.entries()) {
      const nextCol = row[j + 1]
      const prevCol = row[j - 1]
      const prevRow = weights[i - 1]?.[j]
      const nextRow = weights[i + 1]?.[j]
      const values = [col, prevCol, nextCol, prevRow, nextRow]

      const total = values.reduce<number>((acc, value) => acc + (value ?? 0), 0)
      const divisor = values.reduce<number>(
        (acc, value) => acc + +(value != null),
        0,
      )

      const average = Math.round(total / divisor)

      averages[i][j] = average
    }
  }

  return averages
}
