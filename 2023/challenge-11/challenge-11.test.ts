import { describe } from 'vitest'
import { getIndexsForPalindrome } from './challenge-11'

const TEST_CASES: TestCases<string, number[] | null> = [
  { args: 'anna', expected: [] },
  { args: 'abab', expected: [0, 1] },
  { args: 'abac', expected: null },
  { args: 'aaaaaaaa', expected: [] },
  { args: 'aaababa', expected: [1, 3] },
  { args: 'caababa', expected: null },
  { args: 'rotavator', expected: [] },
  { args: 'rotaratov', expected: [4, 8] },
  { args: 'saippuakivikauppias', expected: [] },
]

describe('Challenge #10: Create your owm Christmas tree', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: getIndexsForPalindrome,
  })
})
