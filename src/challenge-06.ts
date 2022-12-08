// score: 160
export function createCube(size: number) {
  let cube: string[] = [],
    topRight = '_\\'.repeat(size),
    bottomRight = '_/'.repeat(size)
  for (let i = 0; i < size; i++) {
    const space = ' '.repeat(i),
      s = size - i
    cube.unshift(`${space}${'/\\'.repeat(s)}${topRight}`)
    cube.push(`${space}${'\\/'.repeat(s)}${bottomRight}`)
  }
  return cube.join('\n')
}
