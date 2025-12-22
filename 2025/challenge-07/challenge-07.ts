export function drawTree(
  height: number,
  ornament: string,
  frequency: number,
): string {
  const space = ' '.repeat(height - 1)
  let tree = ''
  let pos = 1
  for (let i = 0; i < height; i++) {
    tree += space.slice(i)
    const finalPos = pos + i * 2 + 1
    for (; pos < finalPos; pos++) {
      tree += !(pos % frequency) ? ornament : '*'
    }
    tree += '\n'
  }
  return tree + space + '#'
}
