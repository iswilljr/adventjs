import { describe } from 'vitest'
import {
  moveTrain,
  type Board,
  type Movement,
  type Result,
} from './challenge-09'

const board = ['·····', '*····', '@····', 'o····', 'o····']

const TEST_CASES: TestCases<[Board, Movement], Result> = [
  {
    args: [board, 'U'],
    expected: 'eat',
  },
  {
    args: [board, 'D'],
    expected: 'crash',
  },
  {
    args: [board, 'L'],
    expected: 'crash',
  },
  {
    args: [board, 'R'],
    expected: 'none',
  },
]

describe('Challenge #9: 🚂 The magic train', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: moveTrain,
  })
})
