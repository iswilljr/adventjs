export function createXmasTree(height: number, ornament: string): string {
  const startEnd = '_'.repeat(height)
  const base = startEnd.slice(0, -1)
  let leaves = 1
  let tree = ''

  for (let i = 0; i < height; i++) {
    const r = startEnd.slice(0, height - i - 1)
    tree += r + ornament.repeat(leaves) + r + '\n'
    leaves += 2
  }

  tree += base + '#' + base + '\n'
  tree += base + '#' + base

  return tree
}
