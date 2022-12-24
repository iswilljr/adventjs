export function canExit(maze: string[][]) {
  function replace(str: string) {
    return str
      .replace(/[S][\sE]/g, 'SS')
      .replace(/[\sE][S]/g, 'SS')
      .split('')
  }

  const length = Math.min(Math.floor((maze.length * maze[0].length) / 2), 9)

  const checks: string[][][] = []
  new Array(length).fill(0).forEach(() => {
    const check = [...maze]
    maze.forEach((horizontal, i) => {
      maze[i] = replace(horizontal.join(''))
      maze[i] = maze[0].map((_, j) => replace(maze.map(x => x[j]).join(''))[i])
    })
    check.join('') === maze.join('') && checks.push(check)
  })

  return !checks.flat(2).includes('E')
}
