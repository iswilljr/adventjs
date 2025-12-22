import { describe } from 'vitest'
import { packGifts } from './challenge-16'

const TEST_CASES: TestCases<[number[], number], number | null> = [
  {
    args: [[2, 3, 4, 1], 5],
    expected: 2,
  },
  {
    args: [[3, 3, 2, 1], 3],
    expected: 3,
  },
  {
    args: [[1, 1, 1, 1], 2],
    expected: 2,
  },
  {
    args: [[5, 6, 1], 5],
    expected: null,
  },
  {
    args: [[], 10],
    expected: 0,
  },
]

describe('Challenge #16: 🎁 Packing gifts for Santa', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: packGifts,
  })
})
