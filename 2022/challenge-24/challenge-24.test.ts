import { describe } from 'vitest'
import { canExit } from './challenge-24'

const TEST_CASES: TestCases<string[][], boolean> = [
  {
    args: [
      [' ', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E'],
    ],
    expected: true,
  },
  {
    args: [
      [' ', ' ', 'W', 'W', 'S'],
      [' ', ' ', ' ', 'W', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E'],
    ],
    expected: false,
  },
  {
    args: [
      [' ', ' ', 'W', 'W', 'S'],
      [' ', ' ', ' ', 'W', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', ' ', 'W'],
      [' ', ' ', ' ', ' ', 'E'],
    ],
    expected: false,
  },
  {
    args: [['E', ' ', ' ', ' ', 'S']],
    expected: true,
  },
  {
    args: [['E', ' ', 'W', ' ', 'S']],
    expected: false,
  },
  {
    args: [['E', ' ', 'W', ' ', 'S']],
    expected: false,
  },
  {
    args: [
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
    ],
    expected: true,
  },
  {
    args: [
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      ['W', 'W', 'W', 'W', 'W'],
    ],
    expected: true,
  },
  {
    args: [
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', 'W', ' ', ' '],
      ['W', 'W', 'W', 'W', 'W'],
    ],
    expected: false,
  },
  {
    args: [
      ['E', 'S', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
    ],
    expected: true,
  },
]

describe('Challenge #24: The last challenge is a maze', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: canExit,
  })
})
