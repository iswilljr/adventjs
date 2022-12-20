// score: 200
export function createCube(size: number) {
  const cube: string[] = []
  const topRight = '_\\'.repeat(size)
  const bottomRight = '_/'.repeat(size)

  for (let i = 0; i < size; i++) {
    const space = ' '.repeat(i)
    const borderSize = size - i

    cube.unshift(`${space}${'/\\'.repeat(borderSize)}${topRight}`)
    cube.push(`${space}${'\\/'.repeat(borderSize)}${bottomRight}`)
  }

  return cube.join('\n')
}
