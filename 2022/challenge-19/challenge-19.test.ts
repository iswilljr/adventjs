import { describe, expect, it } from 'vitest'
import { sortToys } from './challenge-19'
import { typeOfValue } from 'utils/typeof'

const TEST_CASES: Array<TestCases<[string[], number[]], string[]>> = [
  {
    args: [
      ['ball', 'doll', 'car', 'puzzle'],
      [2, 3, 1, 0],
    ],
    expected: ['puzzle', 'car', 'ball', 'doll'],
  },
  {
    args: [
      ['pc', 'xbox', 'ps4', 'switch', 'nintendo'],
      [3, 1, 0, 2, 4],
    ],
    expected: ['ps4', 'xbox', 'switch', 'pc', 'nintendo'],
  },
  {
    args: [
      ['pc', 'xbox', 'ps4', 'switch', 'nintendo'],
      [8, 6, 5, 7, 9],
    ],
    expected: ['ps4', 'xbox', 'switch', 'pc', 'nintendo'],
  },
  {
    args: [
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'],
      [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111],
    ],
    expected: ['l', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'],
  },
]

describe('Challenge #19: Sorting the toys!', () => {
  it('#T should return an array', () => {
    expect(typeOfValue(sortToys(['bike'], [0]))).toBe('array')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(sortToys(...args)).toEqual(expected)
    }
  )
})
