type Data = Array<Record<string, string | number>>

export function drawTable(data: Data, sortBy: string): string {
  data.sort((a, b) =>
    typeof a[sortBy] === 'string'
      ? (a[sortBy] as string).localeCompare(b[sortBy] as string)
      : (a[sortBy] as number) - (b[sortBy] as number),
  )

  const columnKeys = Object.keys(data[0])
  const columnHeaders = columnKeys.map((_, i) => String.fromCharCode(65 + i))

  const rows = data.map(row => columnKeys.map(key => row[key].toString()))

  const table = [columnHeaders, ...rows]

  const columnWidths = columnKeys.map((_, colIndex) =>
    Math.max(...table.map(row => row[colIndex].length)),
  )

  const separator =
    '+' + columnWidths.map(w => '-'.repeat(w + 2)).join('+') + '+'

  let resp = separator + '\n'

  const drawRow = (row: string[]) =>
    '|' +
    row
      .map((cell, i) => ' ' + cell.padEnd(columnWidths[i], ' ') + ' ')
      .join('|') +
    '|\n'

  resp += drawRow(columnHeaders)
  resp += separator + '\n'

  for (const row of rows) {
    resp += drawRow(row)
  }

  resp += separator

  return resp
}
