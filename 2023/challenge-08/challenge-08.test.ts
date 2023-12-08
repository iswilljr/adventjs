import { describe } from 'vitest'
import { organizeGifts } from './challenge-08'

const TEST_CASES: TestCases<string, string> = [
  { args: '76a11b', expected: '[a]{a}{a}(aaaaaa){b}(b)' },
  { args: '20a', expected: '{a}{a}' },
  { args: '70b120a4c', expected: '[b]{b}{b}[a][a]{a}{a}(cccc)' },
  { args: '9c', expected: '(ccccccccc)' },
  { args: '19d51e', expected: '{d}(ddddddddd)[e](e)' },
]

describe('Challenge #8: Sorting the warehouse', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: organizeGifts,
  })
})
