import { describe } from 'vitest'
import { shouldBuyFidelity } from './challenge-11'

const TEST_CASES: TestCases<number, boolean> = [
  { args: 1, expected: false },
  { args: 100, expected: true },
]

describe('Challenge #11: ¿Vale la pena la tarjeta fidelidad del cine?', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: shouldBuyFidelity,
  })
})
