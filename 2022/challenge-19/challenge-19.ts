export function sortToys(toys: string[], positions: number[]) {
  const min = Math.min(...positions)
  return toys.reduce<string[]>(
    (acc, toy, i) => ((acc[positions[i] - min] = toy), acc),
    []
  )
}
