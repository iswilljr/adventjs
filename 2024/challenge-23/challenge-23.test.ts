import { describe } from 'vitest'
import { getMissingNumbers } from './challenge-23'

const TEST_CASES: TestCases<number[], number[]> = [
  {
    args: [4, 8, 7, 2],
    expected: [1, 3, 5, 6],
  },
  {
    args: [3, 2, 4, 1],
    expected: [],
  },
  {
    args: [5, 5, 5, 3, 3, 2, 1],
    expected: [4],
  },
  {
    args: [1, 2, 3, 4, 5],
    expected: [],
  },
]

describe('Challenge #23: 🔢 Find the missing numbers', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: getMissingNumbers,
  })
})
