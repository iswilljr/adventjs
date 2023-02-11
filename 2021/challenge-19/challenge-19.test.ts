import { describe } from 'vitest'
import { learn } from './challenge-19'

const TEST_CASES: TestCases<[number, number[]], number[] | null> = [
  { args: [10, [2, 3, 8, 1, 4]], expected: [0, 2] },
  { args: [15, [2, 10, 4, 1]], expected: [1, 2] },
  { args: [25, [10, 15, 20, 5]], expected: [0, 1] },
  { args: [8, [8, 2, 1]], expected: [1, 2] },
  { args: [8, [8, 2, 1, 4, 3]], expected: [3, 4] },
  { args: [4, [10, 14, 20]], expected: null },
  { args: [5, [5, 5, 5]], expected: null },
]

describe('Challenge #19: ¿Qué deberíamos aprender en Platzi?', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: learn,
  })
})
