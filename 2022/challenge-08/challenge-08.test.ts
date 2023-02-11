import { describe } from 'vitest'
import { checkPart } from './challenge-08'

const TEST_CASES: TestCases<string, boolean> = [
  { args: 'uwu', expected: true },
  { args: 'will', expected: false },
  { args: 'lolol', expected: true },
  { args: 'yolooloy', expected: true },
  { args: 'zzzoonzzz', expected: true },
]

describe('Challenge #8: We need a mechanic!', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: checkPart,
  })
})
