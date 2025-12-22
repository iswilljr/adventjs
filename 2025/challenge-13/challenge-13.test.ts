import { describe } from 'vitest'
import { runFactory } from './challenge-13'

const TEST_CASES: TestCases<string[], 'completed' | 'loop' | 'broken'> = [
  {
    args: ['>>.'],
    expected: 'completed',
  },
  {
    args: ['>>>'],
    expected: 'broken',
  },
  {
    args: ['>><'],
    expected: 'loop',
  },
  {
    args: ['>>v', '..<'],
    expected: 'completed',
  },
  {
    args: ['>>v', '<<<'],
    expected: 'broken',
  },
  {
    args: ['>v.', '^..'],
    expected: 'completed',
  },
  {
    args: ['v.', '^.'],
    expected: 'loop',
  },
]

describe('Challenge #13: 🏭 The assembly line', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: runFactory,
  })
})
