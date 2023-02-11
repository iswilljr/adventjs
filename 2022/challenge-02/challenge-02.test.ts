import { describe } from 'vitest'
import { countHours } from './challenge-02'

const TEST_CASES: TestCases<[number, string[]], number> = [
  { args: [2023, ['01/06', '04/01', '12/25']], expected: 4 },
  { args: [2022, ['01/06', '04/01', '12/25']], expected: 4 },
  {
    args: [
      1985,
      ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'],
    ],
    expected: 10,
  },
  { args: [2000, ['01/01']], expected: 0 },
]

describe('Challenge #2: Nobody wants to do extra hours at work', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: countHours,
  })
})
