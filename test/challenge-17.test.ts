import { describe, expect, it } from 'vitest'
import { carryGifts } from '@/challenge-17'
import { typeOfValue } from 'utils/typeof'

const TEST_CASES: TestCases<[string[], number], string[]>[] = [
  {
    args: [['game', 'bike', 'book', 'toy'], 10],
    expected: ['game bike', 'book toy'],
  },
  {
    args: [['game', 'bike', 'book', 'toy'], 7],
    expected: ['game', 'bike', 'book toy'],
  },
  {
    args: [['game', 'bike', 'book', 'toy'], 4],
    expected: ['game', 'bike', 'book', 'toy'],
  },
  {
    args: [['toy', 'gamme', 'toy', 'bike'], 6],
    expected: ['toy', 'gamme', 'toy', 'bike'],
  },
  { args: [['toy', 'toy', 'toy', 'toy'], 2], expected: [] },
  {
    args: [['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7],
    expected: ['toy toy', 'disk', 'disk toy', 'toy'],
  },
]

describe('Challenge #17: Carrying gifts in bags', () => {
  it('#T should return an array', () => {
    expect(typeOfValue(carryGifts(['toy', 'toy', 'toy', 'toy'], 2))).toBe(
      'array'
    )
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(carryGifts(...args)).toEqual(expected)
    }
  )
})
