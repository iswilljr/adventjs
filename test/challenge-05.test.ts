import { describe, expect, it } from 'vitest'
import { getMaxGifts } from '@/challenge-05'

const TEST_CASES: TestCases<[number[], number, number], number>[] = [
  { args: [[12, 3, 11, 5, 7], 20, 3], expected: 20 },
  { args: [[50], 15, 1], expected: 0 },
  { args: [[50], 100, 1], expected: 50 },
  { args: [[50], 100, 1], expected: 50 },
  { args: [[50, 70], 100, 1], expected: 70 },
  { args: [[50, 70, 30], 100, 3], expected: 100 },
  { args: [[50, 10, 40, 1000, 500, 200], 199, 4], expected: 100 },
  { args: [[50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000], expected: 115 },
]

describe("Challenge #5: Optimizing Santa's trips", () => {
  it('#T should return a number', () => {
    expect(typeof getMaxGifts([50], 100, 1)).toBe('number')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(getMaxGifts(...args)).toEqual(expected)
    }
  )
})
