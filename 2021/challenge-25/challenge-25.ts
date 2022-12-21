export function canMouseEat(direction: Direction, game: string[][]) {
  const isDirectionUp = direction === 'up'
  const isDirectionDown = direction === 'down'
  const isDirectionLeft = direction === 'left'
  const isDirectionRight = direction === 'right'

  const mouseRowIndex = game.findIndex(row => row.includes('m'))
  const mouseRow = game[mouseRowIndex]
  const mouseIndex = mouseRow.findIndex(str => str === 'm')

  let canEat = false

  if (isDirectionUp || isDirectionDown) {
    const upOrDown =
      game[mouseRowIndex + (isDirectionUp ? -1 : 1)]?.[mouseIndex]
    canEat = upOrDown === '*'
  }

  if (isDirectionLeft || isDirectionRight) {
    const leftOrRight = mouseRow[mouseIndex + (isDirectionLeft ? -1 : 1)]
    canEat = leftOrRight === '*'
  }

  return canEat
}

export type Direction = 'up' | 'right' | 'down' | 'left'
