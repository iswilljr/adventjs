import { describe } from 'vitest'
import { timeUntilTakeOff } from './challenge-05'

const TEST_CASES: TestCases<[string, string], number> = [
  {
    args: ['2025*12*25@00|00|00 NP', '2025*12*25@00|00|05 NP'],
    expected: 5,
  },
  {
    args: ['2025*12*25@00|00|05 NP', '2025*12*25@00|00|00 NP'],
    expected: -5,
  },
  {
    args: ['2025*12*25@00|00|00 NP', '2025*12*25@00|00|00 NP'],
    expected: 0,
  },
  {
    args: ['2024*12*31@23|59|59 NP', '2025*01*01@00|00|00 NP'],
    expected: 1,
  },
  {
    args: ['2025*12*25@00|00|00 NP', '2025*12*25@01|00|00 NP'],
    expected: 3600,
  },
]

describe('Challenge #5: ⏱️ The countdown to take off', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: timeUntilTakeOff,
  })
})
