import { typeOfValue } from 'utils/typeof'
import { describe, expect, it } from 'vitest'
import { sumPairs } from './challenge-06'

const TEST_CASES: Array<TestCases<[number[], number], number[] | null>> = [
  { args: [[3, 5, 7, 2], 10], expected: [3, 7] },
  { args: [[-3, -2, 7, -5], 10], expected: null },
  { args: [[2, 2, 3, 1], 4], expected: [2, 2] },
  { args: [[6, 7, 1, 2], 8], expected: [6, 2] },
  { args: [[0, 2, 2, 3, -1, 1, 5], 6], expected: [1, 5] },
]

describe('Challenge #6: Rematando los exámenes finales', () => {
  it('#T should return an array', () => {
    expect(typeOfValue(sumPairs([3, 5, 7, 2], 10))).toBe('array')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(sumPairs(...args)).toEqual(expected)
    }
  )
})
