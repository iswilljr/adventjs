export function hasFourInARow(board: string[][]): boolean {
  const rows = board.length
  const cols = board[0].length

  const directions = [
    [0, 1], // horizontal →
    [1, 0], // vertical ↓
    [1, 1], // diagonal ↘
    [1, -1], // diagonal ↙
  ]

  const count = (r: number, c: number, dr: number, dc: number) => {
    const color = board[r][c]
    let n = 0

    while (r < rows && c < cols && board[r][c] === color) {
      n++
      if (n === 4) return true
      r += dr
      c += dc
    }

    return false
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === '.') continue

      for (const [dr, dc] of directions) {
        if (count(r, c, dr, dc)) {
          return true
        }
      }
    }
  }

  return false
}
