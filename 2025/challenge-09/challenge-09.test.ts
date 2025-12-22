import { describe } from 'vitest'
import { moveReno } from './challenge-09'

const board = `
  .....
  .*#.*
  .@...
  .....
`

const TEST_CASES: TestCases<[string, string], 'fail' | 'crash' | 'success'> = [
  {
    args: [board, 'D'],
    expected: 'crash',
  },
  {
    args: [board, 'U'],
    expected: 'fail',
  },
  {
    args: [board, 'RU'],
    expected: 'fail',
  },
  {
    args: [board, 'RRRUU'],
    expected: 'fail',
  },
  {
    args: [board, 'DD'],
    expected: 'crash',
  },
  {
    args: [board, 'UUU'],
    expected: 'fail',
  },
  {
    args: [board, 'RR'],
    expected: 'fail',
  },
]

describe('Challenge #9: 🦌 The reno robot aspirator', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: moveReno,
  })
})
