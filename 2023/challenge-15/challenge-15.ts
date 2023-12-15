export function autonomousDrive(store: string[], movements: string[]) {
  let row = store.findIndex(line => line.includes('!'))
  let col = store[row].indexOf('!')

  function placeRobot(robot: string) {
    const line = store[row]
    store[row] = line.slice(0, col) + robot + line.slice(col + 1)
  }

  placeRobot('.')

  const maxRow = store.length
  const maxCol = store[0].length

  for (const move of movements) {
    const rowMove = row + +(move === 'D') - +(move === 'U')
    const colMove = col + +(move === 'R') - +(move === 'L')
    const rowValues = [row, row, rowMove]
    const colValues = [col, col, colMove]

    const nextRow = rowValues[+(rowMove >= 0) + +(rowMove < maxRow)]
    const nextCol = colValues[+(colMove >= 0) + +(colMove < maxCol)]

    const pos = store[nextRow][nextCol]

    if (pos !== '*') {
      col = nextCol
      row = nextRow
    }
  }

  placeRobot('!')

  return store
}
