function autonomousDrive(store, movements) {
  let col = -1
  let row = -1
  let i = 0

  for (const line of store) {
    const colIndex = line.indexOf('!')
    const found = colIndex !== -1

    ;[true][+found] ??
      ((col = colIndex),
      (row = i),
      (store[i] = line.slice(0, col) + '.' + line.slice(col + 1)))

    i++
  }

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

    ;[true][+(pos !== '*')] ?? ((col = nextCol), (row = nextRow))
  }

  store[row] = store[row].slice(0, col) + '!' + store[row].slice(col + 1)

  return store
}
