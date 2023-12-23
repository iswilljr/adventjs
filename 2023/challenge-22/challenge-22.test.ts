import { describe } from 'vitest'
import { compile } from './challenge-22'

const TEST_CASES: TestCases<string, number> = [
  { args: '++*-', expected: 3 },
  { args: '++¿+?', expected: 3 },
  { args: '-+¿+?', expected: 0 },
  { args: '++*¿-?', expected: 3 },
  { args: '++%++<', expected: 6 },
  { args: '++%++<++¿*?', expected: 16 },
  { args: '++¿+?¿+?¿+?', expected: 5 },
  { args: '--¿+++?', expected: -2 },
  { args: '--¿+++?+++¿--?', expected: -1 },
  { args: '<%+¿++%++<?', expected: 7 },
  { args: '<<<<<<+<<<<<+%', expected: 2 },
]

describe('Challenge #22: Programming language', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: compile,
  })
})
