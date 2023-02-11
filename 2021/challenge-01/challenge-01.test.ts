import { describe } from 'vitest'
import { contarOvejas, type Oveja } from './challenge-01'

const TEST_CASES: TestCases<Oveja[], Oveja[]> = [
  {
    args: [
      { name: 'Noa', color: 'azul' },
      { name: 'Euge', color: 'rojo' },
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' },
      { name: 'AAAAAaaaaa', color: 'rojo' },
      { name: 'Nnnnnnnn', color: 'rojo' },
    ],
    expected: [
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' },
    ],
  },
]

describe('Challenge #1: Contando Ovejas para dormir', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: contarOvejas,
  })
})
