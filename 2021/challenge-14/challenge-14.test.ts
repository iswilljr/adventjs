import { describe, expect, it } from 'vitest'
import { missingReindeer } from './challenge-14'

const TEST_CASES: Array<TestCases<number[], number>> = [
  { args: [0, 2, 3], expected: 1 },
  { args: [5, 6, 1, 2, 3, 7, 0], expected: 4 },
  { args: [0, 1], expected: 2 },
  { args: [3, 0, 1], expected: 2 },
  { args: [9, 2, 3, 5, 6, 4, 7, 0, 1], expected: 8 },
  { args: [0], expected: 1 },
]

describe('Challenge #14: En busca del reno perdido', () => {
  it('#T should return a number', () => {
    expect(typeof missingReindeer([0])).toBe('number')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(missingReindeer(args)).toEqual(expected)
    }
  )
})
