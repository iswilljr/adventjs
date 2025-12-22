type Result = 'completed' | 'loop' | 'broken'

export function runFactory(factory: string[]): Result {
  const Moves: Record<string, [number, number]> = {
    '>': [0, 1],
    '<': [0, -1],
    '^': [-1, 0],
    v: [1, 0],
    '.': [0, 0],
  }

  let y = 0
  let x = 0

  const seen = new Set()

  while (true) {
    const item = factory[y][x]
    const [yVal, xVal] = Moves[item]

    x += xVal
    y += yVal

    const key = `${y}-${x}`
    const nextItem = factory[y]?.[x]

    if (seen.has(key)) return 'loop'
    if (!nextItem) return 'broken'
    if (nextItem === '.') return 'completed'

    seen.add(key)
  }
}
