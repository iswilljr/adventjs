import { describe, expect, it } from 'vitest'
import { contarOvejas, Oveja } from './challenge-01'
import { typeOfValue } from 'utils/typeof'

const TEST_CASES: Array<TestCases<Oveja[], Oveja[]>> = [
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
  it('#T should return an array', () => {
    expect(typeOfValue(contarOvejas([]))).toBe('array')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(contarOvejas(args)).toEqual(expected)
    }
  )
})
