import { describe } from 'vitest'
import { distributeWeight } from './challenge-19'

const TEST_CASES: TestCases<number, string> = [
  {
    args: 1,
    expected: ' _ \n|_|',
  },
  {
    args: 2,
    expected: ' ___ \n|___|',
  },
  {
    args: 3,
    expected: ' _ \n|_|_\n|___|',
  },
  {
    args: 4,
    expected: ' ___ \n|___|\n|___|',
  },
  {
    args: 5,
    expected: ' _____ \n|     |\n|_____|',
  },
  {
    args: 6,
    expected: ' _ \n|_|___\n|     |\n|_____|',
  },
]

describe('Challenge #19: 📦 Stack magical boxes to deliver gifts', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: distributeWeight,
  })
})
