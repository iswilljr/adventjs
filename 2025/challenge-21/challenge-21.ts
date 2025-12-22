export function clearGifts(warehouse: string[][], drops: number[]): string[][] {
  const cols = warehouse[0].length
  console.log(warehouse)

  for (const drop of drops) {
    for (let i = warehouse.length - 1; i >= 0; i--) {
      if (warehouse[i][drop] === '.') {
        warehouse[i][drop] = '#'

        // clear full rows
        for (let r = warehouse.length - 1; r >= 0; r--) {
          if (warehouse[r].every(c => c === '#')) {
            warehouse.pop()
            warehouse.unshift(Array(cols).fill('.'))
          }
        }

        break
      }
    }
  }

  return warehouse
}
