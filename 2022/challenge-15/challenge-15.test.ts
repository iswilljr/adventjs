import { describe } from 'vitest'
import { decorateTree } from './challenge-15'

const TEST_CASES: TestCases<string, string[]> = [
  { args: 'B P R P', expected: ['R', 'P B', 'R B B', 'B P R P'] },
  { args: 'B B', expected: ['B', 'B B'] },
  {
    args: 'B B P R P R R',
    expected: [
      'B',
      'R P',
      'B P P',
      'P R B R',
      'P P B B P',
      'B R B B B R',
      'B B P R P R R',
    ],
  },
  {
    args: 'R R P R R',
    expected: ['R', 'R R', 'P B P', 'R B B R', 'R R P R R'],
  },
]

describe('Challenge #15: Decorating the Christmas tree', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: decorateTree,
  })
})
