import { describe } from 'vitest'
import { drawTree } from './challenge-07'

const TEST_CASES: TestCases<[number, string, number], string> = [
  {
    args: [5, 'o', 2],
    expected: '    *\n   o*o\n  *o*o*\n o*o*o*o\n*o*o*o*o*\n    #',
  },
  {
    args: [3, '@', 3],
    expected: '  *\n *@*\n*@**@\n  #',
  },
  {
    args: [4, '+', 1],
    expected: '   +\n  +++\n +++++\n+++++++\n   #',
  },
]

describe('Challenge #7: 🎄 Decorating the tree', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: drawTree,
  })
})
