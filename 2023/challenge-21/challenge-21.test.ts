import { describe } from 'vitest'
import { findBalancedSegment } from './challenge-21'

const TEST_CASES: TestCases<number[], number[]> = [
  { args: [1, 1, 0, 1, 1, 0, 1, 1], expected: [2, 5] },
  { args: [1, 1, 0], expected: [1, 2] },
  { args: [1, 1, 1], expected: [] },
  { args: [1, 0, 1], expected: [0, 1] },
  { args: [1, 0, 1, 0], expected: [0, 3] },
  { args: [1, 1, 0, 1, 0, 1], expected: [1, 4] },
  { args: [1, 0, 0, 0, 1, 1, 1, 0, 0, 0], expected: [0, 7] },
  { args: [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1], expected: [5, 10] },
]

describe('Challenge #21: Binary message', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: findBalancedSegment,
  })
})
