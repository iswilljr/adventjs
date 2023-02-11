import { describe } from 'vitest'
import { getGiftsToRefill } from './challenge-07'

const TEST_CASES: TestCases<[string[], string[], string[]], string[]> = [
  {
    args: [
      ['bici', 'coche', 'bici', 'bici'],
      ['coche', 'bici', 'muñeca', 'coche'],
      ['bici', 'pc', 'pc'],
    ],
    expected: ['muñeca', 'pc'],
  },
  {
    args: [[], [], []],
    expected: [],
  },
  {
    args: [
      ['a', 'a'],
      ['a', 'a'],
      ['a', 'a'],
    ],
    expected: [],
  },
  {
    args: [
      ['a', 'a'],
      ['b', 'b'],
      ['c', 'c'],
    ],
    expected: ['a', 'b', 'c'],
  },
  {
    args: [
      ['a', 'b'],
      ['c', 'd'],
      ['e', 'f'],
    ],
    expected: ['a', 'b', 'c', 'd', 'e', 'f'],
  },
]

describe('Challenge #7: Doing gifts inventory', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: getGiftsToRefill,
  })
})
