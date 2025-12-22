import { describe } from 'vitest'
import { hasFourLights } from './challenge-17'

const TEST_CASES: TestCases<string[][], boolean> = [
  {
    args: [
      ['.', '.', '.', '.', '.'],
      ['R', 'R', 'R', 'R', '.'],
      ['G', 'G', '.', '.', '.'],
    ],
    expected: true,
  },
  {
    args: [
      ['.', 'G', '.', '.'],
      ['.', 'G', '.', '.'],
      ['.', 'G', '.', '.'],
      ['.', 'G', '.', '.'],
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
  {
    args: [
      ['R', 'R', 'R', 'G', 'R', 'R', 'R'],
      ['G', 'G', 'G', 'R', 'G', 'G', 'G'],
    ],
    expected: false,
  },
]

describe('Challenge #17: 🎄 The Christmas lights panel', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: hasFourLights,
  })
})
