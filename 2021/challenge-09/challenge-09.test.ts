import { typeOfValue } from 'utils/typeof'
import { describe, expect, it } from 'vitest'
import { groupBy } from './challenge-09'

const TEST_CASES: Array<
  TestCases<
    [any[], string | ((value: any) => string | number)],
    Record<string, any>
  >
> = [
  {
    args: [[6.1, 4.2, 6.3], Math.floor],
    expected: { 6: [6.1, 6.3], 4: [4.2] },
  },
  {
    args: [['one', 'two', 'three'], 'length'],
    expected: { 3: ['one', 'two'], 5: ['three'] },
  },
  {
    args: [[{ age: 23 }, { age: 24 }], 'age'],
    expected: { 23: [{ age: 23 }], 24: [{ age: 24 }] },
  },
  {
    args: [
      [1397639141184, 1363223700000],
      timestamp => new Date(timestamp).getFullYear(),
    ],
    expected: { 2013: [1363223700000], 2014: [1397639141184] },
  },
  {
    args: [
      [
        { title: 'JavaScript: The Good Parts', rating: 8 },
        { title: 'Aprendiendo Git', rating: 10 },
        { title: 'Clean Code', rating: 9 },
      ],
      'rating',
    ],
    expected: {
      8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
      9: [{ title: 'Clean Code', rating: 9 }],
      10: [{ title: 'Aprendiendo Git', rating: 10 }],
    },
  },
]

describe('Challenge #9: Agrupando cosas automáticamente', () => {
  it('#T should return an object', () => {
    expect(typeOfValue(groupBy(...TEST_CASES[0].args))).toBe('object')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(groupBy(...args)).toEqual(expected)
    }
  )
})
