export function countDecorations(bigTree: Tree): number {
  return Object.values(bigTree).reduce<number>((acc, value) => {
    if (typeof value === 'number') {
      acc += value
    }

    if (typeof value === 'object' && value !== null) {
      acc += countDecorations(value)
    }

    return acc
  }, 0)
}

export interface Tree {
  value: number
  left: Tree | null
  right: Tree | null
}
