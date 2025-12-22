import { describe } from 'vitest'
import { isRobotBack } from './challenge-13'

const TEST_CASES: TestCases<string, true | [number, number]> = [
  { args: 'R', expected: [1, 0] },
  { args: 'RL', expected: true },
  { args: 'RLUD', expected: true },
  { args: '*RU', expected: [2, 1] },
  { args: 'R*U', expected: [1, 2] },
  { args: 'LLL!R', expected: [-4, 0] },
  { args: 'R?R', expected: [1, 0] },
  { args: 'U?D', expected: true },
  { args: 'R!L', expected: [2, 0] },
  { args: 'U!D', expected: [0, 2] },
  { args: 'R?L', expected: true },
  { args: 'U?U', expected: [0, 1] },
  { args: '*U?U', expected: [0, 2] },
  { args: 'U?D?U', expected: true },
]

describe('Challenge #13: 🤖 Is the robot back?', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: isRobotBack,
  })
})
