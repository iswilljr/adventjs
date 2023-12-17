import { describe } from 'vitest'
import { optimizeIntervals } from './challenge-17'

const TEST_CASES: TestCases<
  Array<[number, number]>,
  Array<[number, number]>
> = [
  {
    args: [
      [2, 7],
      [3, 4],
      [5, 8],
    ],
    expected: [[2, 8]],
  },
  {
    args: [
      [3, 4],
      [5, 8],
      [2, 7],
    ],
    expected: [[2, 8]],
  },
  {
    args: [
      [1, 3],
      [2, 6],
      [8, 10],
    ],
    expected: [
      [1, 6],
      [8, 10],
    ],
  },
  {
    args: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    expected: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
  },
  {
    args: [
      [5, 7],
      [6, 8],
    ],
    expected: [[5, 8]],
  },
  {
    args: [
      [1, 5],
      [6, 10],
      [11, 15],
      [16, 20],
    ],
    expected: [
      [1, 5],
      [6, 10],
      [11, 15],
      [16, 20],
    ],
  },
  {
    args: [
      [1, 15],
      [8, 12],
      [4, 7],
    ],
    expected: [[1, 15]],
  },
]

describe('Challenge #17: Optimizing the rental', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: optimizeIntervals,
  })
})
