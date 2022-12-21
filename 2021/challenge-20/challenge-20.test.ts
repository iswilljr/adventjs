import { describe, expect, it } from 'vitest'
import { pangram } from './challenge-20'

const TEST_CASES: Array<TestCases<string, boolean>> = [
  {
    args: 'Extraño pan de col y kiwi se quemó bajo fugaz vaho',
    expected: true,
  },
  {
    args: 'Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!',
    expected: true,
  },
  {
    args: 'Esto es una frase larga pero no tiene todas las letras del abecedario',
    expected: false,
  },
  { args: 'De la a a la z, nos faltan letras', expected: false },
]

describe('Challenge #20: ¿Una carta de pangramas? ¡QUÉ!', () => {
  it('#T should return a boolean', () => {
    expect(typeof pangram(TEST_CASES[0].args)).toBe('boolean')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(pangram(args)).toEqual(expected)
    }
  )
})
