import { describe, expect, it } from 'vitest'
import { canReconfigure } from './challenge-23'

const TEST_CASES: Array<TestCases<[string, string], boolean>> = [
  { args: ['BAL', 'LIB'], expected: true },
  { args: ['CON', 'JUU'], expected: false },
  { args: ['MMM', 'MID'], expected: false },
]

describe('Challenge #23: ¿Puedes reconfigurar las fábricas para no parar de crear regalos?', () => {
  it('#T should return a boolean', () => {
    expect(typeof canReconfigure(...TEST_CASES[0].args)).toBe('boolean')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(canReconfigure(...args)).toEqual(expected)
    }
  )
})
