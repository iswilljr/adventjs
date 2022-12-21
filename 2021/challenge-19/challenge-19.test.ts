import { typeOfValue } from 'utils/typeof'
import { describe, expect, it } from 'vitest'
import { learn } from './challenge-19'

const TEST_CASES: Array<TestCases<[number, number[]], number[] | null>> = [
  { args: [10, [2, 3, 8, 1, 4]], expected: [0, 2] },
  { args: [15, [2, 10, 4, 1]], expected: [1, 2] },
  { args: [25, [10, 15, 20, 5]], expected: [0, 1] },
  { args: [8, [8, 2, 1]], expected: [1, 2] },
  { args: [8, [8, 2, 1, 4, 3]], expected: [3, 4] },
  { args: [4, [10, 14, 20]], expected: null },
  { args: [5, [5, 5, 5]], expected: null },
]

describe('Challenge #19: ¿Qué deberíamos aprender en Platzi?', () => {
  it('#T should return an array', () => {
    expect(typeOfValue(learn(...TEST_CASES[0].args))).toBe('array')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(learn(...args)).toEqual(expected)
    }
  )
})
