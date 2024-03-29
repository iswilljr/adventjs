import { describe } from 'vitest'
import { dryNumber } from './challenge-18'

const TEST_CASES: TestCases<[number, number], number[]> = [
  { args: [1, 15], expected: [1, 10, 11, 12, 13, 14, 15] },
  { args: [2, 20], expected: [2, 12, 20] },
  { args: [3, 33], expected: [3, 13, 23, 30, 31, 32, 33] },
  { args: [4, 45], expected: [4, 14, 24, 34, 40, 41, 42, 43, 44, 45] },
  { args: [5, 55], expected: [5, 15, 25, 35, 45, 50, 51, 52, 53, 54, 55] },
  { args: [9, 8], expected: [] },
]

describe('Challenge #18: We ran out of ink!', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: dryNumber,
  })
})
