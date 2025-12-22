import { describe } from 'vitest'
import { dropGifts } from './challenge-20'

const TEST_CASES: TestCases<[string[][], number[]], string[][]> = [
  {
    args: [
      [
        ['.', '.', '.'],
        ['.', '#', '.'],
        ['#', '#', '.'],
      ],
      [0],
    ],
    expected: [
      ['.', '.', '.'],
      ['#', '#', '.'],
      ['#', '#', '.'],
    ],
  },
  {
    args: [
      [
        ['.', '.', '.'],
        ['#', '#', '.'],
        ['#', '#', '#'],
      ],
      [0, 2],
    ],
    expected: [
      ['#', '.', '.'],
      ['#', '#', '#'],
      ['#', '#', '#'],
    ],
  },
  {
    args: [
      [
        ['.', '.', '.'],
        ['.', '.', '.'],
        ['.', '.', '.'],
      ],
      [0, 1, 2],
    ],
    expected: [
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['#', '#', '#'],
    ],
  },
  {
    args: [
      [
        ['#', '#'],
        ['#', '#'],
      ],
      [0, 0],
    ],
    expected: [
      ['#', '#'],
      ['#', '#'],
    ],
  },
]

describe('Challenge #20: 🎁 Vertical warehouse', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: dropGifts,
  })
})
