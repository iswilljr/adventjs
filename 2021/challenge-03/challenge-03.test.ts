import { describe, it } from 'vitest'
import {} from './challenge-03'

const TEST_CASES: Array<TestCases<string, boolean>> = [
  { args: 'bici coche (balón) bici coche peluche', expected: true },
  { args: '(muñeca) consola bici', expected: true },
  { args: 'bici coche (balón bici coche', expected: false },
  { args: 'peluche (bici [coche) bici coche balón', expected: false },
  { args: '(peluche {) bici', expected: false },
  { args: '() bici', expected: false },
]

describe.skip('Challenge #3: El Grinch quiere fastidiar la Navidad', () => {
  it.todo('#T should return a number', () => {})

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    () => {}
  )
})
