import { describe } from 'vitest'
import { detectBombs } from './challenge-17'

const TEST_CASES: TestCases<boolean[][], number[][]> = [
  {
    args: [
      [true, false, false],
      [false, true, false],
      [false, false, false],
    ],
    expected: [
      [1, 2, 1],
      [2, 1, 1],
      [1, 1, 1],
    ],
  },
  {
    args: [
      [true, true],
      [true, true],
    ],
    expected: [
      [3, 3],
      [3, 3],
    ],
  },
  {
    args: [
      [true, true],
      [false, false],
    ],
    expected: [
      [1, 1],
      [2, 2],
    ],
  },
]

describe("Challenge #17: 💣 Grinch's bombs", () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: detectBombs,
  })
})
