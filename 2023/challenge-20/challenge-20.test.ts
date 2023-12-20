import { describe } from 'vitest'
import { distributeGifts } from './challenge-20'

const TEST_CASES: TestCases<Array<Array<number | null>>, number[][]> = [
  {
    args: [
      [4, 5, 1],
      [6, null, 3],
      [8, null, 4],
    ],
    expected: [
      [5, 3, 3],
      [6, 5, 3],
      [7, 6, 4],
    ],
  },
  {
    args: [
      [2, null],
      [null, 3],
    ],
    expected: [
      [2, 3],
      [3, 3],
    ],
  },
  {
    args: [
      [2, 1, 1],
      [3, 4, null],
    ],
    expected: [
      [2, 2, 1],
      [3, 3, 3],
    ],
  },
  {
    args: [
      [null, 5],
      [3, null],
    ],
    expected: [
      [4, 5],
      [3, 4],
    ],
  },
  {
    args: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    expected: [
      [2, 3, 4],
      [4, 5, 6],
      [6, 7, 8],
    ],
  },
  {
    args: [
      [null, 1, null, 1, null],
      [1, null, 1, null, 1],
    ],
    expected: [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ],
  },
]

describe('Challenge #20: Distribute the weight', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: distributeGifts,
  })
})
