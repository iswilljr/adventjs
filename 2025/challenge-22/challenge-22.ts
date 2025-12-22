export function canEscape(maze: string[][]): boolean {
  function dfs(row: number, col: number) {
    const x = maze[row]?.[col]

    if (x === 'E') return true

    if (x !== '#' && x != null) {
      maze[row][col] = '#'
      if (dfs(row - 1, col)) return true
      if (dfs(row + 1, col)) return true
      if (dfs(row, col - 1)) return true
      if (dfs(row, col + 1)) return true
    }

    return false
  }

  const cols = maze[0].length
  const entrancePos = maze
    .map(c => c.join(''))
    .join('')
    .indexOf('S')
  const entranceRow = Math.floor(entrancePos / cols)
  const entranceCol = entrancePos % cols

  const foundExit = dfs(entranceRow, entranceCol)
  return foundExit
}
