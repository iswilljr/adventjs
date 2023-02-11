import { describe } from 'vitest'
import { getOptimalPath } from './challenge-14'

const TEST_CASES: TestCases<number[][], number> = [
  { args: [[0], [7, 4], [2, 4, 6]], expected: 8 },
  { args: [[0], [2, 3]], expected: 2 },
  { args: [[0], [3, 4], [9, 8, 1]], expected: 5 },
  { args: [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]], expected: 8 },
  {
    args: [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]],
    expected: 7,
  },
]

describe('Challenge #14: The best path', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: getOptimalPath,
  })
})
