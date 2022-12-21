import type { Tree } from '../challenge-22/challenge-22'

export function checkIsSameTree(treeA: Tree, treeB: Tree) {
  const countDecorations = (bigTree: Tree) =>
    Object.values(bigTree).reduce<number>((acc, value) => {
      if (typeof value === 'number') {
        acc += value
      }
      if (typeof value === 'object' && value !== null) {
        acc += countDecorations(value)
      }
      return acc
    }, 0)

  const total = countDecorations(treeA)
  const total2 = countDecorations(treeB)
  return total === total2
}

export { Tree }
