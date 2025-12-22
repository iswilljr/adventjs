export function detectBombs(grid: boolean[][]): number[][] {
  const board: number[][] = []
  let r = 0
  for (const row of grid) {
    board[r] = []
    let i = 0
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ of row) {
      const prevRow = grid[r - 1]
      const nextRow = grid[r + 1]

      const bombs = [
        row[i - 1],
        row[i + 1],
        prevRow?.[i - 1],
        prevRow?.[i],
        prevRow?.[i + 1],
        nextRow?.[i - 1],
        nextRow?.[i],
        nextRow?.[i + 1],
      ].filter(Boolean)

      board[r][i++] = bombs.length
    }
    r++
  }

  return board
}
