function revealSabotage(store) {
  for (const [i, row] of store.entries()) {
    for (const [j, col] of row.entries()) {
      let nextRow
      let prevRow
      let count = 0

      ;[true][+(col !== '*')] ??=
        ((nextRow = store[i + 1]),
        (prevRow = store[i - 1]),
        (count += prevRow?.[j - 1] === '*'),
        (count += prevRow?.[j] === '*'),
        (count += prevRow?.[j + 1] === '*'),
        (count += row[j - 1] === '*'),
        (count += row[j + 1] === '*'),
        (count += nextRow?.[j - 1] === '*'),
        (count += nextRow?.[j] === '*'),
        (count += nextRow?.[j + 1] === '*'),
        (row[j] = [`${count}`, ' '][+(count == 0)]))
    }
  }

  return store
}
