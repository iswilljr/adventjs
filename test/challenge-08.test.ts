import { describe, expect, it } from 'vitest'
import { checkPart } from '@/challenge-08'

const TEST_CASES: Array<TestCases<string, boolean>> = [
  { args: 'uwu', expected: true },
  { args: 'will', expected: false },
  { args: 'lolol', expected: true },
  { args: 'yolooloy', expected: true },
  { args: 'zzzoonzzz', expected: true },
]

describe('Challenge #8: We need a mechanic!', () => {
  it('#T should return a boolean', () => {
    expect(typeof checkPart('will')).toBe('boolean')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(checkPart(args)).toEqual(expected)
    }
  )
})
