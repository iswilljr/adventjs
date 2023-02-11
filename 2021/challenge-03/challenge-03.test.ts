import { describe } from 'vitest'
import { isValid } from './challenge-03'

const TEST_CASES: TestCases<string, boolean> = [
  { args: 'bici coche (balón) bici coche peluche', expected: true },
  { args: '(muñeca) consola bici', expected: true },
  { args: 'bici coche (balón bici coche', expected: false },
  { args: 'peluche (bici [coche) bici coche balón', expected: false },
  { args: '(peluche {) bici', expected: false },
  { args: '() bici', expected: false },
]

describe('Challenge #3: El Grinch quiere fastidiar la Navidad', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: isValid,
  })
})
