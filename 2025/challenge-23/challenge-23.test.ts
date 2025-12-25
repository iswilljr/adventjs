import { describe } from 'vitest'
import { minStepsToDeliver } from './challenge-23'

const TEST_CASES: TestCases<string[][], number> = [
  {
    args: [
      ['S', '.', 'G'],
      ['.', '#', '.'],
      ['G', '.', '.'],
    ],
    expected: 4,
  },
  {
    args: [
      ['S', '#', 'G'],
      ['#', '#', '.'],
      ['G', '.', '.'],
    ],
    expected: -1,
  },
  {
    args: [['S', 'G']],
    expected: 1,
  },
  {
    args: [
      ['S', '.', '.', 'G'],
      ['.', '#', '#', '#'],
      ['.', '.', '.', '.'],
      ['#', '#', '#', 'G'],
    ],
    expected: 9,
  },
  {
    args: [
      ['G', '.', 'S', '.', 'G'],
      ['.', '#', '#', '#', '.'],
      ['G', '.', '.', '.', 'G'],
    ],
    expected: 12,
  },
]

describe('Challenge #23: 🎁 Gift route', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: minStepsToDeliver,
  })
})
