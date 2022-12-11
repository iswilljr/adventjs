import { describe, expect, it } from 'vitest'
import { countHours } from '@/challenge-02'

const TEST_CASES = [
  { args: [2023, ['01/06', '04/01', '12/25']], expected: 4 },
  { args: [2022, ['01/06', '04/01', '12/25']], expected: 4 },
  {
    args: [
      1985,
      ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'],
    ],
    expected: 10,
  },
  { args: [2000, ['01/01']], expected: 0 },
]

describe('Challenge #2: Nobody wants to do extra hours at work', () => {
  it('#T should return a number', () => {
    expect(typeof countHours(2003, ['11/01'])).toBe('number')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(countHours(...(args as [number, string[]]))).toEqual(expected)
    }
  )
})
