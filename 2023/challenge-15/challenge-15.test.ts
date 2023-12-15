import { describe } from 'vitest'
import { autonomousDrive } from './challenge-15'

const TEST_CASES: TestCases<[string[], string[]], string[]> = [
  { args: [['..!....'], ['R', 'L']], expected: ['..!....'] },
  {
    args: [
      ['!..', '***'],
      ['U', 'L'],
    ],
    expected: ['!..', '***'],
  },
  {
    args: [
      ['!..', '***'],
      ['R', 'L'],
    ],
    expected: ['!..', '***'],
  },
  {
    args: [
      ['..!....', '......*'],
      ['R', 'D', 'L'],
    ],
    expected: ['.......', '..!...*'],
  },
  {
    args: [
      ['*..!..*', '*.....*'],
      ['R', 'R', 'R', 'D', 'D'],
    ],
    expected: ['*.....*', '*....!*'],
  },
  {
    args: [
      ['***', '.!.', '***'],
      ['D', 'U', 'R', 'R', 'R'],
    ],
    expected: ['***', '..!', '***'],
  },
  {
    args: [
      ['***', '*!*', '***'],
      ['D', 'U', 'R', 'L'],
    ],
    expected: ['***', '*!*', '***'],
  },
  {
    args: [
      ['.**.*.*.', '.***....', '..!.....'],
      ['D', 'U', 'R', 'R', 'R'],
    ],
    expected: ['.**.*.*.', '.***....', '.....!..'],
  },
]

describe('Challenge #15: Autonomous robot', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: autonomousDrive,
  })
})
