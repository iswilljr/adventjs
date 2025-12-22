import { describe } from 'vitest'
import { canEscape } from './challenge-22'

const TEST_CASES: TestCases<string[][], boolean> = [
  {
    args: [
      ['S', '.', '#', '.'],
      ['#', '.', '#', '.'],
      ['.', '.', '.', '.'],
      ['#', '#', '#', 'E'],
    ],
    expected: true,
  },
  {
    args: [
      ['S', '#', '#'],
      ['.', '#', '.'],
      ['.', '#', 'E'],
    ],
    expected: false,
  },
  {
    args: [['S', 'E']],
    expected: true,
  },
  {
    args: [
      ['S', '.', '.', '.', '.'],
      ['#', '#', '#', '#', '.'],
      ['.', '.', '.', '.', '.'],
      ['.', '#', '#', '#', '#'],
      ['.', '.', '.', '.', 'E'],
    ],
    expected: true,
  },
  {
    args: [
      ['S', '.', '.'],
      ['.', '.', '.'],
      ['#', '#', '#'],
      ['.', '.', 'E'],
    ],
    expected: false,
  },
]

describe('Challenge #22: 🎄 The sleigh maze', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: canEscape,
  })
})
