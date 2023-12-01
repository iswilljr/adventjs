export function createXmasTree(height: number) {
  const leaves = [...Array(height)]
    .map((_, i) =>
      '*'
        .repeat(2 * i + 1)
        .padStart(i + height, '_')
        .padEnd(height * 2 - 1, '_')
        .concat('\n'),
    )
    .join('')

  const base = '#'
    .padStart(height, '_')
    .padEnd(height * 2 - 1, '_')
    .concat('\n')
    .repeat(2)

  return leaves.concat(base).trimEnd()
}
