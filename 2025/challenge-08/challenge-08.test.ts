import { describe } from 'vitest'
import { findUniqueToy } from './challenge-08'

const TEST_CASES: TestCases<string, string> = [
  {
    args: 'Gift',
    expected: 'G',
  },
  {
    args: 'sS',
    expected: '',
  },
  {
    args: 'reindeeR',
    expected: 'i',
  },
  {
    args: 'AaBbCc',
    expected: '',
  },
  {
    args: 'abcDEF',
    expected: 'a',
  },
  {
    args: 'aAaAaAF',
    expected: 'F',
  },
  {
    args: 'sTreSS',
    expected: 'T',
  },
  {
    args: 'z',
    expected: 'z',
  },
]

describe('Challenge #8: 🎁 Find the unique toy', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: findUniqueToy,
  })
})
