import { describe } from 'vitest'
import { countTime } from './challenge-09'

const TEST_CASES: TestCases<number[], number> = [
  { args: [0, 1, 1, 0, 1], expected: 7 },
  { args: [0, 0, 0, 1], expected: 21 },
  { args: [0, 0, 1, 0, 0], expected: 28 },
  { args: [1, 0, 0, 1, 0, 0], expected: 14 },
  { args: [1, 1, 0, 0, 0, 0], expected: 28 },
  { args: [1, 1, 1], expected: 0 },
]

describe('Challenge #9: Crazy Xmas lights', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: countTime,
  })
})
