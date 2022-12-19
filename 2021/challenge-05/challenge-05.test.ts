import { describe, expect, it } from 'vitest'
import { daysToXmas } from './challenge-05'

const TEST_CASES: Array<TestCases<string, number>> = [
  { args: 'Dec 1, 2021', expected: 24 },
  { args: 'Dec 24, 2021 00:00:01', expected: 1 },
  { args: 'Dec 24, 2021 23:59:59', expected: 1 },
  { args: 'December 20, 2021 03:24:00', expected: 5 },
  { args: 'Dec 25, 2021', expected: 0 },
  { args: 'Dec 26, 2021', expected: -1 },
  { args: 'Dec 31, 2021', expected: -6 },
  { args: 'Jan 1, 2022 00:00:01', expected: -7 },
  { args: 'Jan 1, 2022 23:59:59', expected: -7 },
]

describe('Challenge #5: Contando los días para los regalos', () => {
  it('#T should return a number', () => {
    expect(typeof daysToXmas(new Date('Dec 1, 2021'))).toBe('number')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is "new Date($args)"',
    ({ args, expected }) => {
      expect(daysToXmas(new Date(args))).toEqual(expected)
    }
  )
})
