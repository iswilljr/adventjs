import { describe } from 'vitest'
import { canCarry } from './challenge-21'

const TEST_CASES: TestCases<[number, number[][]], boolean> = [
  {
    args: [
      4,
      [
        [2, 5, 8],
        [3, 6, 10],
      ],
    ],
    expected: false,
  },
  {
    args: [
      3,
      [
        [1, 1, 5],
        [2, 2, 10],
      ],
    ],
    expected: true,
  },
  {
    args: [
      3,
      [
        [2, 1, 5],
        [3, 5, 7],
      ],
    ],
    expected: true,
  },
  {
    args: [
      4,
      [
        [2, 3, 8],
        [2, 5, 7],
      ],
    ],
    expected: true,
  },
  { args: [1, [[2, 3, 8]]], expected: false },
  {
    args: [
      2,
      [
        [1, 2, 4],
        [2, 3, 8],
      ],
    ],
    expected: false,
  },
]

describe('Challenge #21: La ruta con los regalos', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: canCarry,
  })
})
