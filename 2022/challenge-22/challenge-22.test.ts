import { describe, expect, it } from 'vitest'
import { checkStepNumbers } from './challenge-22'

const TEST_CASES: Array<TestCases<[string[], number[]], boolean>> = [
  {
    args: [
      ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house'],
      [1, 33, 10, 2, 44, 20],
    ],
    expected: true,
  },
  {
    args: [
      ['tree_1', 'tree_1', 'house'],
      [2, 1, 10],
    ],
    expected: false,
  },
  {
    args: [
      ['tree_1', 'tree_1', 'house'],
      [1, 2, 10],
    ],
    expected: true,
  },
  {
    args: [
      [
        'house',
        'house',
        'tree_1',
        'tree_1',
        'house',
        'tree_2',
        'tree_2',
        'tree_3',
      ],
      [5, 2, 1, 2, 3, 4, 5, 6],
    ],
    expected: false,
  },
]

describe('Challenge #22: The lights in sync', () => {
  it('#T should return a boolean', () => {
    expect(typeof checkStepNumbers(...TEST_CASES[0].args)).toBe('boolean')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(checkStepNumbers(...args)).toEqual(expected)
    }
  )
})
