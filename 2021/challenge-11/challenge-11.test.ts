import { describe, expect, it } from 'vitest'
import { shouldBuyFidelity } from './challenge-11'

const TEST_CASES: Array<TestCases<number, boolean>> = [
  { args: 1, expected: false },
  { args: 100, expected: true },
]

describe('Challenge #11: ¿Vale la pena la tarjeta fidelidad del cine?', () => {
  it('#T should return a boolean', () => {
    expect(typeof shouldBuyFidelity(3)).toBe('boolean')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(shouldBuyFidelity(args)).toEqual(expected)
    }
  )
})
