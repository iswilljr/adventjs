import { describe } from 'vitest'
import { adjustLights } from './challenge-09'

const TEST_CASES: TestCases<string[], number> = [
  { args: ['🔴', '🔴', '🔴'], expected: 1 },
  { args: ['🔴', '🔴', '🔴', '🔴'], expected: 2 },
  { args: ['🟢', '🔴', '🟢', '🟢', '🟢'], expected: 1 },
  { args: ['🔴', '🔴', '🟢', '🟢', '🔴'], expected: 2 },
  { args: ['🟢', '🔴', '🟢', '🔴', '🟢'], expected: 0 },
  { args: ['🔴', '🔴', '🟢', '🟢', '🟢'], expected: 2 },
  { args: ['🟢', '🟢', '🟢', '🔴', '🔴'], expected: 2 },
  {
    args: ['🔴', '🔴', '🟢', '🟢', '🟢', '🔴', '🔴', '🟢', '🟢', '🟢', '🟢'],
    expected: 5,
  },
]

describe('Challenge #9: Switch the light', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: adjustLights,
  })
})
