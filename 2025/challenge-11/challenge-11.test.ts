import { describe } from 'vitest'
import { findUnsafeGifts } from './challenge-11'

const TEST_CASES: TestCases<string[], number> = [
  {
    args: ['.*.', '*#*', '.*.'],
    expected: 0,
  },
  {
    args: ['...', '.*.', '...'],
    expected: 1,
  },
  {
    args: ['*.*', '...', '*#*'],
    expected: 2,
  },
  {
    args: ['.....', '.*.*.', '..#..', '.*.*.', '.....'],
    expected: 4,
  },
  {
    args: ['*'],
    expected: 1,
  },
  {
    args: ['#'],
    expected: 0,
  },
]

describe('Challenge #11: 📹 Unwatched gifts', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: findUnsafeGifts,
  })
})
