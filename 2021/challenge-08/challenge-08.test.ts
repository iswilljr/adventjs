import { typeOfValue } from 'utils/typeof'
import { describe, expect, it } from 'vitest'
import { maxProfit } from './challenge-08'

const TEST_CASES: Array<TestCases<number[], number>> = [
  { args: [39, 18, 29, 25, 34, 32, 5], expected: 16 },
  { args: [10, 20, 30, 40, 50, 60, 70], expected: 60 },
  { args: [18, 15, 12, 11, 9, 7], expected: -1 },
  { args: [3, 3, 3, 3, 3], expected: -1 },
]

describe('Challenge #8: La locura de las criptomonedas', () => {
  it('#T should return a number', () => {
    expect(typeOfValue(maxProfit(TEST_CASES[0].args))).toBe('number')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(maxProfit(args)).toEqual(expected)
    }
  )
})
