export function drawTable(
  data: Array<Record<string, string | number>>,
): string {
  const columnKeys = Object.keys(data[0])

  const columnHeaders = columnKeys.map(
    key => key.charAt(0).toUpperCase() + key.slice(1),
  )

  const rows = data.map(row => columnKeys.map(key => String(row[key])))

  const table = [columnHeaders, ...rows]

  const columnWidths = columnKeys.map((_, colIndex) =>
    Math.max(...table.map(row => row[colIndex].length)),
  )

  const separator =
    '+' + columnWidths.map(w => '-'.repeat(w + 2)).join('+') + '+'

  const drawRow = (row: string[]) =>
    '|' +
    row
      .map((cell, i) => ' ' + cell.padEnd(columnWidths[i], ' ') + ' ')
      .join('|') +
    '|\n'

  let resp = separator + '\n'
  resp += drawRow(columnHeaders)
  resp += separator + '\n'

  for (const row of rows) {
    resp += drawRow(row)
  }

  resp += separator

  return resp
}
