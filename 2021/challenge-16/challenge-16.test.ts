import { describe, expect, it } from 'vitest'
import { decodeNumber } from './challenge-16'

const TEST_CASES: Array<TestCases<string, number>> = [
  { args: '...', expected: 3 },
  { args: '.,', expected: 4 },
  { args: ',.', expected: 6 },
  { args: ',...', expected: 8 },
  { args: '.........!', expected: 107 },
  { args: '.;', expected: 49 },
  { args: '..,', expected: 5 },
  { args: '..,!', expected: 95 },
  { args: '.;!', expected: 49 },
  { args: '!!!', expected: 300 },
  { args: ';!', expected: 50 },
  { args: ';.W', expected: NaN },
]

describe('Challenge #16: Descifrando los números...', () => {
  it('#T should return a number', () => {
    expect(typeof decodeNumber(';.W')).toBe('number')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(decodeNumber(args)).toEqual(expected)
    }
  )
})
