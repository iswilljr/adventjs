import { describe } from 'vitest'
import { prepareGifts } from './challenge-01'

const TEST_CASES: TestCases<number[], number[]> = [
  {
    args: [3, 1, 2, 3, 4, 2, 5],
    expected: [1, 2, 3, 4, 5],
  },
  {
    args: [5, 5, 5, 5],
    expected: [5],
  },
  {
    args: [1, 2, 3],
    expected: [1, 2, 3],
  },
  {
    args: [],
    expected: [],
  },
  {
    args: [10, 20, 10, 30, 20, 30, 40],
    expected: [10, 20, 30, 40],
  },
  {
    args: [3, 1, 2, 3, 1, 2],
    expected: [1, 2, 3],
  },
]

describe('Challenge #1: First gift repeated', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: prepareGifts,
  })
})
