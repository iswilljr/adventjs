import { describe } from 'vitest'
import { canMouseEat, type Direction } from './challenge-25'

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*'],
]

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*'],
]

const TEST_CASES: TestCases<[Direction, string[][]], boolean> = [
  { args: ['up', room], expected: false },
  { args: ['down', room], expected: true },
  { args: ['right', room], expected: false },
  { args: ['left', room], expected: false },
  { args: ['up', room2], expected: false },
  { args: ['down', room2], expected: false },
  { args: ['right', room2], expected: true },
  { args: ['left', room2], expected: false },
]

describe('Challenge #25: El último juego y hasta el año que viene 👋', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: canMouseEat,
  })
})
