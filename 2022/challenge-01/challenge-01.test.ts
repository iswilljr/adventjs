import { describe, expect, it } from 'vitest'
import { wrapping } from './challenge-01'
import { typeOfValue } from 'utils/typeof'

const TEST_CASES: Array<TestCases<string[], string[]>> = [
  {
    args: ['cat', 'game', 'socks'],
    expected: [
      '*****\n*cat*\n*****',
      '******\n*game*\n******',
      '*******\n*socks*\n*******',
    ],
  },
  { args: ['will'], expected: ['******\n*will*\n******'] },
  { args: ['a'], expected: ['***\n*a*\n***'] },
  { args: [], expected: [] },
]

describe('Challenge #1: Automating Christmas gift wrapping!', () => {
  it('#T should return an array', () => {
    expect(typeOfValue(wrapping([]))).toBe('array')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(wrapping(args)).toEqual(expected)
    }
  )
})
