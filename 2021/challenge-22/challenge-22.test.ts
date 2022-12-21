import { describe, expect, it } from 'vitest'
import { countDecorations, Tree } from './challenge-22'

const TEST_CASES: Array<TestCases<Tree, number>> = [
  {
    args: {
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 3, left: null, right: null },
    },
    expected: 6,
  },
  {
    args: {
      value: 1,
      left: {
        value: 5,
        left: {
          value: 7,
          left: { value: 3, left: null, right: null },
          right: null,
        },
        right: null,
      },
      right: {
        value: 6,
        left: { value: 5, left: null, right: null },
        right: { value: 1, left: null, right: null },
      },
    },
    expected: 28,
  },
]

describe('Challenge #22: ¿Cuántos adornos necesita el árbol?', () => {
  it('#T should return a number', () => {
    expect(typeof countDecorations(TEST_CASES[0].args)).toBe('number')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(countDecorations(args)).toEqual(expected)
    }
  )
})
