import { describe, expect, it } from 'vitest'
import { canCarry } from './challenge-21'

const TEST_CASES: Array<TestCases<[number, number[][]], boolean>> = [
  {
    args: [
      4,
      [
        [2, 5, 8],
        [3, 6, 10],
      ],
    ],
    expected: false,
  },
  {
    args: [
      3,
      [
        [1, 1, 5],
        [2, 2, 10],
      ],
    ],
    expected: true,
  },
  {
    args: [
      3,
      [
        [2, 1, 5],
        [3, 5, 7],
      ],
    ],
    expected: true,
  },
  {
    args: [
      4,
      [
        [2, 3, 8],
        [2, 5, 7],
      ],
    ],
    expected: true,
  },
  { args: [1, [[2, 3, 8]]], expected: false },
  {
    args: [
      2,
      [
        [1, 2, 4],
        [2, 3, 8],
      ],
    ],
    expected: false,
  },
]

describe('Challenge #21: La ruta con los regalos', () => {
  it('#T should return a boolean', () => {
    expect(typeof canCarry(...TEST_CASES[0].args)).toBe('boolean')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(canCarry(...args)).toEqual(expected)
    }
  )
})
