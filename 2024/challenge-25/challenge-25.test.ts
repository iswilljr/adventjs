import { describe } from 'vitest'
import { execute } from './challenge-25'

const TEST_CASES: TestCases<string, number> = [
  {
    args: '+++',
    expected: 3,
  },
  {
    args: '+--',
    expected: -1,
  },
  {
    args: '>+++[-]',
    expected: 0,
  },
  {
    args: '>>>+{++}',
    expected: 3,
  },
  {
    args: '+{[-]+}+',
    expected: 2,
  },
  {
    args: '{+}{+}{+}',
    expected: 0,
  },
  {
    args: '------[+]++',
    expected: 2,
  },
  {
    args: '-[[++{-}]+{++++}',
    expected: 5,
  },
]

describe('Challenge #25: 🪄 Execute the magical language', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: execute,
  })
})
