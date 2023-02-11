import { describe } from 'vitest'
import { getCoins } from './challenge-10'

const TEST_CASES: TestCases<number, number[]> = [
  { args: 51, expected: [1, 0, 0, 0, 0, 1] },
  { args: 3, expected: [1, 1, 0, 0, 0, 0] },
  { args: 5, expected: [0, 0, 1, 0, 0, 0] },
  { args: 16, expected: [1, 0, 1, 1, 0, 0] },
  { args: 100, expected: [0, 0, 0, 0, 0, 2] },
]

describe('Challenge #10: La máquina de cambio', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: getCoins,
  })
})
