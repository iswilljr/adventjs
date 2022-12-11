import { describe, expect, it } from 'vitest'
import { getGiftsToRefill } from '@/challenge-07'

const TEST_CASES = [
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
  it('#T should return a number', () => {
    const gifts = getGiftsToRefill([], [], [])
    expect(Array.isArray(gifts) ? 'array' : typeof gifts).toBe('array')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(
        getGiftsToRefill(...(args as [string[], string[], string[]]))
      ).toEqual(expected)
    }
  )
})
