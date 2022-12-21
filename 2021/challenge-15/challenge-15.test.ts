import { describe, expect, it } from 'vitest'
import { checkSledJump } from './challenge-15'

const TEST_CASES: Array<TestCases<number[], boolean>> = [
  { args: [1, 2, 3, 2, 1], expected: true },
  { args: [0, 1, 0], expected: true },
  { args: [0, 3, 2, 1], expected: true },
  { args: [0, 1000, 1], expected: true },
  { args: [2, 4, 4, 6, 2], expected: false },
  { args: [1, 2, 3], expected: false },
  { args: [1, 2, 3, 2, 1, 2, 3], expected: false },
]

describe('Challenge #15: La máquina de cambio', () => {
  it('#T should return a boolean', () => {
    expect(typeof checkSledJump([1, 2, 3])).toBe('boolean')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(checkSledJump(args)).toEqual(expected)
    }
  )
})
