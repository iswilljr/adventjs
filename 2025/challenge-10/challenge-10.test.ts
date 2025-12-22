import { describe } from 'vitest'
import { maxDepth } from './challenge-10'

const TEST_CASES: TestCases<string, number> = [
  {
    args: '[]',
    expected: 1,
  },
  {
    args: '()',
    expected: 0,
  },
  {
    args: '[][',
    expected: -1,
  },
  {
    args: '[[[[]]][]]',
    expected: 4,
  },
  {
    args: '[]][[]',
    expected: -1,
  },
  {
    args: '[[]]',
    expected: 2,
  },
  {
    args: '[[[ ]]]',
    expected: 3,
  },
  {
    args: '][',
    expected: -1,
  },
  {
    args: '[',
    expected: -1,
  },
  {
    args: ']',
    expected: -1,
  },
]

describe('Challenge #10: 📨 Depth of Christmas magic', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: maxDepth,
  })
})
