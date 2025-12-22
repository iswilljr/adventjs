import { describe } from 'vitest'
import { drawGift } from './challenge-03'

const TEST_CASES: TestCases<[number, string], string> = [
  {
    args: [4, '+'],
    expected: '++++\n+  +\n+  +\n++++',
  },
  {
    args: [5, '*'],
    expected: '*****\n*   *\n*   *\n*   *\n*****',
  },
  {
    args: [1, '^'],
    expected: '',
  },
  {
    args: [0, '#'],
    expected: '',
  },
  {
    args: [2, '#'],
    expected: '##\n##',
  },
]

describe('Challenge #3: 👶 Help the intern', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: drawGift,
  })
})
