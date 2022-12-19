import { describe, expect, it } from 'vitest'
import { listGifts } from './challenge-02'

const TEST_CASES: Array<TestCases<string, Record<string, number>>> = [
  {
    args: 'bici coche balón _playstation bici coche peluche',
    expected: {
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1,
    },
  },
]

describe('Challenge #2: ¡Ayuda al elfo a listar los regalos!', () => {
  it('#T should return a number', () => {
    expect(typeof listGifts('bici')).toBe('object')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(listGifts(args)).toEqual(expected)
    }
  )
})
