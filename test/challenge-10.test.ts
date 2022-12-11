import { describe, expect, it } from 'vitest'
import { checkJump } from '@/challenge-10'

const TEST_CASES = [
  { args: [1, 3, 8, 5, 2], expected: true },
  { args: [1, 7, 3, 5], expected: false },
  { args: [1, 2, 3, 2, 1], expected: true },
  { args: [1, 2, 2, 2, 1], expected: true },
  { args: [0, 1, 0], expected: true },
  { args: [2, 2, 2, 2], expected: false },
  { args: [1, 2, 3], expected: false },
  { args: [1, 2, 3, 2, 1, 2, 3], expected: false },
  { args: [1, 1000, 900, 800], expected: true },
  { args: [1, 1000, 100, 800], expected: false },
  { args: [1, 1, 1, 1, 1, 1, 1, 1, 2, 1], expected: true },
  { args: [1, 2, 3, 1, 3, 1], expected: false },
  { args: [1, 3, 2, 5, 4, 3, 2, 1], expected: false },
]

describe('Challenge #10: The Santa Claus sleigh jump', () => {
  it('#T should return a boolean', () => {
    expect(typeof checkJump([1, 2, 1])).toBe('boolean')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(checkJump(args)).toEqual(expected)
    }
  )
})
