export function dropGifts(warehouse: string[][], drops: number[]): string[][] {
  for (const drop of drops) {
    for (let i = warehouse.length - 1; i >= 0; i--) {
      const current = warehouse[i][drop]
      if (current !== '#') {
        warehouse[i][drop] = '#'
        break
      }
    }
  }

  return warehouse
}
