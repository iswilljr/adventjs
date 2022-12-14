import { describe, expect, it } from 'vitest'
import { distributeGifts } from '@/challenge-03'

const TEST_CASES: TestCases<[string[], string[]], number>[] = [
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
  it('#T should return a number', () => {
    expect(
      typeof distributeGifts(['book', 'doll', 'ball'], ['dasher', 'dancer'])
    ).toBe('number')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(distributeGifts(...args)).toEqual(expected)
    }
  )
})
