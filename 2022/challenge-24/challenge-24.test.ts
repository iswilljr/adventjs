import { describe, expect, it } from 'vitest'
import { canExit } from './challenge-24'

const TEST_CASES: Array<TestCases<string[][], boolean>> = [
  {
    args: [
      [' ', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E'],
    ],
    expected: true,
  },
  {
    args: [
      [' ', ' ', 'W', 'W', 'S'],
      [' ', ' ', ' ', 'W', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E'],
    ],
    expected: false,
  },
  {
    args: [
      [' ', ' ', 'W', 'W', 'S'],
      [' ', ' ', ' ', 'W', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', ' ', 'W'],
      [' ', ' ', ' ', ' ', 'E'],
    ],
    expected: false,
  },
  {
    args: [['E', ' ', ' ', ' ', 'S']],
    expected: true,
  },
  {
    args: [['E', ' ', 'W', ' ', 'S']],
    expected: false,
  },
  {
    args: [['E', ' ', 'W', ' ', 'S']],
    expected: false,
  },
  {
    args: [
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
    ],
    expected: true,
  },
  {
    args: [
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      ['W', 'W', 'W', 'W', 'W'],
    ],
    expected: true,
  },
  {
    args: [
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', 'W', ' ', ' '],
      ['W', 'W', 'W', 'W', 'W'],
    ],
    expected: false,
  },
  {
    args: [
      ['E', 'S', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
    ],
    expected: true,
  },
]

describe('Challenge #24: The last challenge is a maze', () => {
  it('#T should return a boolean', () => {
    expect(typeof canExit(TEST_CASES[0].args)).toBe('boolean')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(canExit(args)).toEqual(expected)
    }
  )
})
