type Board = string
type Moves = string
type Result = 'fail' | 'crash' | 'success'

export function moveReno(board: Board, moves: Moves): Result {
  const cleanBoard = board.trim()
  const boardArr = cleanBoard.split('\n')

  const i = cleanBoard.indexOf('@')
  const boardLen = boardArr[0].length
  const total = i / boardLen
  let y = Math.floor(total)
  const yboard = boardArr[y]
  let x = yboard.indexOf('@')

  let newY = 0
  let newX = 0

  for (const move of moves) {
    let currentY = y
    let currentX = x

    const pMoves = ['U', 'D', 'L', 'R']

    for (let i = 0; i < pMoves.length; i++) {
      if (move === pMoves[i] && i === 0) newY = newY - 1
      if (move === pMoves[i] && i === 1) newY = newY + 1
      if (move === pMoves[i] && i === 2) newX = newX - 1
      if (move === pMoves[i] && i === 3) newX = newX + 1
    }

    currentY = currentY + newY
    currentX = currentX + newX

    let value = null

    if (boardArr[currentY]) {
      value = boardArr[currentY]
    }

    if (value) {
      value = value[currentX]
    }

    const pValues = [null, '#', '*']

    for (let i = 0; i < pValues.length; i++) {
      if (value === pValues[i] && i === 0) return 'crash'
      if (value === pValues[i] && i === 1) return 'crash'
      if (value === pValues[i] && i === 2) return 'success'
    }

    if (newY) newY = 0
    if (newX) newX = 0

    y = currentY
    x = currentX
  }

  return 'fail'
}
