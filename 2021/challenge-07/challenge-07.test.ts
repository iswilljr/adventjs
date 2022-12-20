import { typeOfValue } from 'utils/typeof'
import { describe, expect, it } from 'vitest'
import { contains } from './challenge-07'

const TEST_CASES: Array<TestCases<[Record<string, any>, string], boolean>> = [
  {
    args: [
      {
        estanteria1: {
          cajon1: {
            producto1: 'coca-cola',
            producto2: 'fanta',
            producto3: 'sprite',
          },
        },
        estanteria2: {
          cajon1: 'vacio',
          cajon2: {
            producto1: 'pantalones',
            producto2: 'camiseta',
          },
        },
      },
      'camiseta',
    ],
    expected: true,
  },
  {
    args: [
      {
        baul: {
          fondo: {
            objeto: 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando',
          },
        },
      },
      'gameboy',
    ],
    expected: false,
  },
]

describe('Challenge #7: Buscando en el almacén...', () => {
  it('#T should return a boolean', () => {
    expect(typeOfValue(contains(...TEST_CASES[0].args))).toBe('boolean')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(contains(...args)).toEqual(expected)
    }
  )
})
