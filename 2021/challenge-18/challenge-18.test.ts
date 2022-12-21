import { typeOfValue } from 'utils/typeof'
import { describe, expect, it } from 'vitest'
import { fixFiles } from './challenge-18'

const TEST_CASES: Array<TestCases<string[], string[]>> = [
  {
    args: ['photo', 'postcard', 'photo', 'photo', 'video'],
    expected: ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video'],
  },
  {
    args: ['file', 'file', 'file', 'game', 'game'],
    expected: ['file', 'file(1)', 'file(2)', 'game', 'game(1)'],
  },
  {
    args: ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'],
    expected: ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)'],
  },
]

describe('Challenge #18: El sistema operativo de Santa Claus', () => {
  it('#T should return an array', () => {
    expect(typeOfValue(fixFiles(TEST_CASES[0].args))).toBe('array')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(fixFiles(args)).toEqual(expected)
    }
  )
})
