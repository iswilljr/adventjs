import { describe } from 'vitest'
import { missingReindeer } from './challenge-14'

const TEST_CASES: TestCases<number[], number> = [
  { args: [0, 2, 3], expected: 1 },
  { args: [5, 6, 1, 2, 3, 7, 0], expected: 4 },
  { args: [0, 1], expected: 2 },
  { args: [3, 0, 1], expected: 2 },
  { args: [9, 2, 3, 5, 6, 4, 7, 0, 1], expected: 8 },
  { args: [0], expected: 1 },
]

describe('Challenge #14: En busca del reno perdido', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: missingReindeer,
  })
})
