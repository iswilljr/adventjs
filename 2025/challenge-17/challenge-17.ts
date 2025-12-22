export function hasFourLights(board: string[][]): boolean {
  const rows = board.length
  const cols = board[0].length

  function checkRow(y: number) {
    let count = 0
    let target = null

    for (let x = 0; x < cols; x++) {
      const cell = board[y][x]

      if (cell === '.') continue

      if (cell !== target) {
        target = cell
        count = 1
      } else {
        count++
      }

      if (count >= 4) return true
    }

    return false
  }

  function checkColumn(x: number) {
    let count = 0
    let target = null

    for (let y = 0; y < rows; y++) {
      const cell = board[y][x]

      if (cell === '.') continue

      if (cell !== target) {
        target = cell
        count = 1
      } else {
        count++
      }

      if (count >= 4) return true
    }

    return false
  }

  for (let y = 0; y < rows; y++) {
    if (checkRow(y)) return true
  }

  for (let x = 0; x < cols; x++) {
    if (checkColumn(x)) return true
  }

  return false
}
