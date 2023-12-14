import { describe } from 'vitest'
import { maxGifts } from './challenge-14'

const TEST_CASES: TestCases<number[], number> = [
  { args: [2, 4, 2], expected: 4 },
  { args: [5, 1, 1, 5], expected: 10 },
  { args: [4, 1, 1, 4, 2, 1], expected: 9 },
  { args: [1, 3, 1, 3, 100], expected: 103 },
  { args: [1, 2, 3, 1], expected: 4 },
  { args: [2, 7, 9, 3, 1], expected: 12 },
  { args: [0, 0, 0, 0, 1], expected: 1 },
  { args: [100], expected: 100 },
  { args: [1, 1, 1, 1], expected: 2 },
  { args: [1, 1, 1], expected: 2 },
  { args: [3, 4, 5], expected: 8 },
  { args: [99], expected: 99 },
]

describe('Challenge #14: Avoid the alarm', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: maxGifts,
  })
})
