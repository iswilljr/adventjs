import { describe } from 'vitest'
import { getCompleted } from './challenge-11'

const TEST_CASES: TestCases<[string, string], string> = [
  { args: ['01:00:00', '03:00:00'], expected: '1/3' },
  { args: ['02:00:00', '04:00:00'], expected: '1/2' },
  { args: ['01:00:00', '01:00:00'], expected: '1/1' },
  { args: ['00:10:00', '01:00:00'], expected: '1/6' },
  { args: ['01:10:10', '03:30:30'], expected: '1/3' },
  { args: ['02:20:20', '03:30:30'], expected: '2/3' },
  { args: ['03:30:30', '05:50:50'], expected: '3/5' },
]

describe('Challenge #11: Santa Claus is Scrum Master', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: getCompleted,
  })
})
