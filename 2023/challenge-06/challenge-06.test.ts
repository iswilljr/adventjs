import { describe } from 'vitest'
import { maxDistance } from './challenge-06'

const TEST_CASES: TestCases<string, number> = [
  { args: '>>*<', expected: 2 },
  { args: '<<<<<', expected: 5 },
  { args: '>***>', expected: 5 },
  { args: '**********', expected: 10 },
  { args: '<<**>>', expected: 2 },
]

describe('Challenge #6: The reindeer on trial', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: maxDistance,
  })
})
