import { describe, expect, it } from 'vitest'
import { decorateTree } from '@/challenge-15'
import { typeOfValue } from 'utils/typeof'

const TEST_CASES: TestCases<string, string[]>[] = [
  { args: 'B P R P', expected: ['R', 'P B', 'R B B', 'B P R P'] },
  { args: 'B B', expected: ['B', 'B B'] },
  {
    args: 'B B P R P R R',
    expected: [
      'B',
      'R P',
      'B P P',
      'P R B R',
      'P P B B P',
      'B R B B B R',
      'B B P R P R R',
    ],
  },
  {
    args: 'R R P R R',
    expected: ['R', 'R R', 'P B P', 'R B B R', 'R R P R R'],
  },
]

describe('Challenge #15: Decorating the Christmas tree', () => {
  it('#T should return an array', () => {
    expect(typeOfValue(decorateTree('B P R P'))).toBe('array')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(decorateTree(args)).toEqual(expected)
    }
  )
})
