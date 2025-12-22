import { describe } from 'vitest'
import { hasFourInARow } from './challenge-18'

const TEST_CASES: TestCases<string[][], boolean> = [
  {
    args: [
      ['R', '.', '.', '.'],
      ['.', 'R', '.', '.'],
      ['.', '.', 'R', '.'],
      ['.', '.', '.', 'R'],
    ],
    expected: true,
  },
  {
    args: [
      ['.', '.', '.', 'G'],
      ['.', '.', 'G', '.'],
      ['.', 'G', '.', '.'],
      ['G', '.', '.', '.'],
    ],
    expected: true,
  },
  {
    args: [
      ['R', 'R', 'R', 'R'],
      ['G', 'G', '.', '.'],
      ['.', '.', '.', '.'],
      ['.', '.', '.', '.'],
    ],
    expected: true,
  },
  {
    args: [
      ['R', 'G', 'R'],
      ['G', 'R', 'G'],
      ['G', 'R', 'G'],
    ],
    expected: false,
  },
]

describe('Challenge #18: 🎄 Lights in line with diagonals', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: hasFourInARow,
  })
})
