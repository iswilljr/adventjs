import { describe } from 'vitest'
import { pangram } from './challenge-20'

const TEST_CASES: TestCases<string, boolean> = [
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
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: pangram,
  })
})
