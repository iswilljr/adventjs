export function isRobotBack(moves: string): true | [number, number] {
  const opposites: Record<string, string> = {
    U: 'D',
    D: 'U',
    L: 'R',
    R: 'L',
  }

  const movesMade = new Set<string>()
  let x = 0
  let y = 0

  for (let i = 0; i < moves.length; i++) {
    let char = moves[i]
    let multiplier = 1
    let inverted = false
    let onlyIfNew = false

    if (char === '*') {
      multiplier = 2
      i++
      char = moves[i]
    } else if (char === '!') {
      inverted = true
      i++
      char = moves[i]
    } else if (char === '?') {
      onlyIfNew = true
      i++
      char = moves[i]
    }

    const moveChar = inverted ? opposites[char] : char

    if (!onlyIfNew || !movesMade.has(moveChar)) {
      if (moveChar === 'U') y += multiplier
      if (moveChar === 'D') y -= multiplier
      if (moveChar === 'L') x -= multiplier
      if (moveChar === 'R') x += multiplier

      movesMade.add(moveChar)
    }
  }

  return x === 0 && y === 0 ? true : [x, y]
}
