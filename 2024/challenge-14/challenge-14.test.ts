import { describe } from 'vitest'
import { minMovesToStables } from './challenge-14'

const TEST_CASES: TestCases<[number[], number[]], number> = [
  {
    args: [
      [2, 6, 9],
      [3, 8, 5],
    ],
    expected: 3,
  },
  {
    args: [
      [1, 1, 3],
      [1, 8, 4],
    ],
    expected: 8,
  },
  {
    args: [
      [5, 15, 10],
      [8, 18, 12],
    ],
    expected: 8,
  },
  {
    args: [
      [30, 1, 2],
      [1, 2, 30],
    ],
    expected: 0,
  },
  {
    args: [
      [30, 20, 10],
      [35, 25, 15],
    ],
    expected: 15,
  },
]

describe('Challenge #14: 🦌 Weaving the reno', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: args => minMovesToStables(...args),
  })
})
