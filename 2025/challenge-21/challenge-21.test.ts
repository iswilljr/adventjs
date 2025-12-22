import { describe } from 'vitest'
import { clearGifts } from './challenge-21'

const TEST_CASES: TestCases<[string[][], number[]], string[][]> = [
  {
    args: [
      [
        ['.', '.', '.'],
        ['.', '.', '.'],
        ['#', '.', '#'],
      ],
      [1],
    ],
    expected: [
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['.', '.', '.'],
    ],
  },
  {
    args: [
      [
        ['.', '.', '#'],
        ['#', '.', '#'],
        ['#', '.', '#'],
      ],
      [0, 1, 2],
    ],
    expected: [
      ['.', '.', '#'],
      ['#', '.', '#'],
      ['#', '.', '#'],
    ],
  },
  {
    args: [
      [
        ['.', '.', '.'],
        ['#', '#', '#'],
        ['#', '.', '#'],
      ],
      [1],
    ],
    expected: [
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['#', '#', '#'],
    ],
  },
]

describe('Challenge #21: 🤖 The cleaning robot', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: clearGifts,
  })
})
