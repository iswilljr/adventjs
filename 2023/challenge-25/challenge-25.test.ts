import { describe } from 'vitest'
import { travelDistance } from './challenge-25'

const TEST_CASES: TestCases<string, number> = [
  {
    args: `S1`,
    expected: 1,
  },
  {
    args: `1....S`,
    expected: 5,
  },
  {
    args: `..S.1...`,
    expected: 2,
  },
  {
    args: `S12....3`,
    expected: 7,
  },
  {
    args: `.....1....\n..S.......\n..........\n....3.....\n......2...`,
    expected: 12,
  },
  {
    args: `.....2....\n..S.......\n..........\n....1.....\n......3...`,
    expected: 13,
  },
  {
    args: `3....1....\n..S.......\n.........2\n..........\n......4...`,
    expected: 31,
  },
]

describe('Challenge #25: Calculating distances', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: travelDistance,
  })
})
