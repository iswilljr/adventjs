import { describe } from 'vitest'
import { contains } from './challenge-07'

const TEST_CASES: TestCases<[Record<string, any>, string], boolean> = [
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
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: contains,
  })
})
