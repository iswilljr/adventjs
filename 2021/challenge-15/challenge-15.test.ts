import { describe } from 'vitest'
import { checkSledJump } from './challenge-15'

const TEST_CASES: TestCases<number[], boolean> = [
  { args: [1, 2, 3, 2, 1], expected: true },
  { args: [0, 1, 0], expected: true },
  { args: [0, 3, 2, 1], expected: true },
  { args: [0, 1000, 1], expected: true },
  { args: [2, 4, 4, 6, 2], expected: false },
  { args: [1, 2, 3], expected: false },
  { args: [1, 2, 3, 2, 1, 2, 3], expected: false },
]

describe('Challenge #15: La máquina de cambio', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: checkSledJump,
  })
})
