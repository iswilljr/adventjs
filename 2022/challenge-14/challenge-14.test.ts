import { describe, expect, it } from 'vitest'
import { getOptimalPath } from './challenge-14'

const TEST_CASES: Array<TestCases<number[][], number>> = [
  { args: [[0], [7, 4], [2, 4, 6]], expected: 8 },
  { args: [[0], [2, 3]], expected: 2 },
  { args: [[0], [3, 4], [9, 8, 1]], expected: 5 },
  { args: [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]], expected: 8 },
  {
    args: [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]],
    expected: 7,
  },
]

describe('Challenge #14: The best path', () => {
  it('#T should return a number', () => {
    expect(typeof getOptimalPath([[0], [7, 4], [2, 4, 6]])).toBe('number')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(getOptimalPath(args)).toEqual(expected)
    }
  )
})
