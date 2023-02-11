import { describe } from 'vitest'
import { distributeGifts } from './challenge-03'

const TEST_CASES: TestCases<[string[], string[]], number> = [
  {
    args: [
      ['book', 'doll', 'ball'],
      ['dasher', 'dancer'],
    ],
    expected: 2,
  },
  {
    args: [
      ['a', 'b', 'c'],
      ['d', 'e'],
    ],
    expected: 1,
  },
  {
    args: [['videogames', 'console'], ['will']],
    expected: 0,
  },
  {
    args: [
      ['game', 'videoconsole', 'computer'],
      [
        'midudev',
        'pheralb',
        'codingwithdani',
        'carlosble',
        'blasco',
        'facundocapua',
        'madeval',
        'memxd',
      ],
    ],
    expected: 5,
  },
  {
    args: [
      ['music'],
      [
        'midudev',
        'pheralb',
        'codingwithdani',
        'carlosble',
        'blasco',
        'facundocapua',
        'madeval',
        'memxd',
      ],
    ],
    expected: 26,
  },
]

describe('Challenge #3: How many packs of gifts can Santa carry?', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: distributeGifts,
  })
})
