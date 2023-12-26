function distributeGifts(weights) {
  const averages = []

  for (const [i, row] of weights.entries()) {
    averages[i] = []
    for (const [j, col] of row.entries()) {
      const nextCol = row[j + 1]
      const prevCol = row[j - 1]
      const prevRow = weights[i - 1]?.[j]
      const nextRow = weights[i + 1]?.[j]

      const total =
        (+col | 0) +
        (+prevRow | 0) +
        (+nextCol | 0) +
        (+nextRow | 0) +
        (+prevCol | 0)

      const divisor =
        +(col != null) +
        +(prevRow != null) +
        +(nextCol != null) +
        +(nextRow != null) +
        +(prevCol != null)

      const average = Math.round(total / divisor)

      averages[i][j] = average
    }
  }

  return averages
}
