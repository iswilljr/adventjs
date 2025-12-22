import { describe } from 'vitest'
import { removeSnow } from './challenge-16'

const TEST_CASES: TestCases<string, string> = [
  { args: 'zxxzoz', expected: 'oz' },
  { args: 'abcdd', expected: 'abc' },
  { args: 'zzz', expected: 'z' },
  { args: 'a', expected: 'a' },
  { args: 'azxxzy', expected: 'ay' },
  { args: 'abbaca', expected: 'ca' },
]

describe('Challenge #16: ❄️ Cleaning the snow path', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: removeSnow,
  })
})
