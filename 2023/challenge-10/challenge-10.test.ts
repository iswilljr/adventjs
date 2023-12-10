import { describe } from 'vitest'
import { createChristmasTree } from './challenge-10'

const TEST_CASES: TestCases<[string, number], string> = [
  { args: ['x', 3], expected: `  x\n x x\nx x x\n  |\n` },
  { args: ['xo', 4], expected: `   x\n  o x\n o x o\nx o x o\n   |\n` },
  {
    args: ['123', 5],
    expected: `    1\n   2 3\n  1 2 3\n 1 2 3 1\n2 3 1 2 3\n    |\n`,
  },
  { args: ['*@o', 3], expected: `  *\n @ o\n* @ o\n  |\n` },
]

describe('Challenge #10: Create your owm Christmas tree', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: createChristmasTree,
  })
})
