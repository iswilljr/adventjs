import { describe, expect, it } from 'vitest'
import { getMinJump } from './challenge-12'

const TEST_CASES: Array<TestCases<number[], number>> = [
  { args: [5, 3, 6, 7, 9], expected: 4 },
  { args: [2, 4, 6, 8, 10], expected: 7 },
  { args: [1, 2, 3, 5], expected: 4 },
  { args: [3, 7, 5], expected: 2 },
  { args: [9, 5, 1], expected: 2 },
]

describe('Challenge #12: La ruta perfecta para dejar los regalos', () => {
  it('#T should return a number', () => {
    expect(typeof getMinJump([9, 5, 1])).toBe('number')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(getMinJump(args)).toEqual(expected)
    }
  )
})
