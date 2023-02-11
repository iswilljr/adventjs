import { describe } from 'vitest'
import { daysToXmas } from './challenge-05'

const TEST_CASES: TestCases<string, number> = [
  { args: 'Dec 1, 2021', expected: 24 },
  { args: 'Dec 24, 2021 00:00:01', expected: 1 },
  { args: 'Dec 24, 2021 23:59:59', expected: 1 },
  { args: 'December 20, 2021 03:24:00', expected: 5 },
  { args: 'Dec 25, 2021', expected: 0 },
  { args: 'Dec 26, 2021', expected: -1 },
  { args: 'Dec 31, 2021', expected: -6 },
  { args: 'Jan 1, 2022 00:00:01', expected: -7 },
  { args: 'Jan 1, 2022 23:59:59', expected: -7 },
]

describe('Challenge #5: Contando los días para los regalos', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: date => daysToXmas(new Date(date)),
  })
})
