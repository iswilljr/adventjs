export function findUnsafeGifts(warehouse: string[]): number {
  let count = 0
  for (const i of warehouse.keys()) {
    const arr = [...warehouse[i]]
    for (const j of arr.keys()) {
      const line = arr[j]
      if (line !== '*') continue
      const top = warehouse[i - 1]?.[j]
      const bottom = warehouse[i + 1]?.[j]
      const left = warehouse[i]?.[j - 1]
      const right = warehouse[i]?.[j + 1]

      const isSecure = [top, bottom, left, right].includes('#')

      count += +!isSecure
    }
  }

  return count
}
