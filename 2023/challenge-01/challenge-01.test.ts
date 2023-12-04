import { describe } from 'vitest'
import { findFirstRepeated } from './challenge-01'

const TEST_CASES: TestCases<number[], number> = [
  {
    args: [2, 1, 3, 5, 3, 2],
    expected: 3,
  },
  { args: [2, 2], expected: 2 },
  { args: [2, 4, 3, 5, 1], expected: -1 },
  { args: [1], expected: -1 },
  { args: [], expected: -1 },
  { args: [10, 20, 30], expected: -1 },
  { args: [5, 1, 2, 3, 2, 5, 1], expected: 2 },
  { args: [12, 20, 30, 11, 20, 12], expected: 20 },
  { args: [12, 10, 13, 12, 13], expected: 12 },
  { args: [0, 10, 13, 0, 13], expected: 0 },
  { args: [1, 3, 4, 5, 0, 1, 3, 0, 7], expected: 1 },
  { args: [1, 10, 2, 10, 20, 50, 7, 0, 0, 7], expected: 10 },
]

describe('Challenge #1: First gift repeated!', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: findFirstRepeated,
  })
})
