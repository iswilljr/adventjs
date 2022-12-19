import { describe, expect, it } from 'vitest'
import { countTime } from './challenge-09'

const TEST_CASES: Array<TestCases<number[], number>> = [
  { args: [0, 1, 1, 0, 1], expected: 7 },
  { args: [0, 0, 0, 1], expected: 21 },
  { args: [0, 0, 1, 0, 0], expected: 28 },
  { args: [1, 0, 0, 1, 0, 0], expected: 14 },
  { args: [1, 1, 0, 0, 0, 0], expected: 28 },
  { args: [1, 1, 1], expected: 0 },
]

describe('Challenge #9: Crazy Xmas lights', () => {
  it('#T should return a number', () => {
    expect(typeof countTime([1, 1, 1])).toBe('number')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(countTime(args)).toEqual(expected)
    }
  )
})
