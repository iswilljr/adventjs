export type Board = string[]
export type Movement = 'U' | 'D' | 'R' | 'L'
export type Result = 'none' | 'crash' | 'eat'

export function moveTrain(board: Board, mov: Movement): Result {
  const trainY = board.findIndex(function (b) {
    return b.includes('@')
  })

  const trainX = board[trainY].indexOf('@')

  const MOVES = {
    U: [-1, 0],
    D: [1, 0],
    R: [0, 1],
    L: [0, -1],
  }

  const MOVE = MOVES[mov]

  const newPos = board[trainY + MOVE[0]]?.[trainX + MOVE[1]]

  if (newPos === '·') return 'none'
  if (newPos === '*') return 'eat'

  return 'crash'
}
