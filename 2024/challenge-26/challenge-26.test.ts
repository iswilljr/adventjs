import { describe } from 'vitest'
import { getCompleted } from './challenge-26'

const TEST_CASES: TestCases<[string, string], string> = [
  {
    args: ['01:00:00', '03:00:00'],
    expected: '33%',
  },
  {
    args: ['02:00:00', '04:00:00'],
    expected: '50%',
  },
  {
    args: ['01:00:00', '01:00:00'],
    expected: '100%',
  },
  {
    args: ['00:10:00', '01:00:00'],
    expected: '17%',
  },
  {
    args: ['01:10:10', '03:30:30'],
    expected: '33%',
  },
  {
    args: ['03:30:30', '05:50:50'],
    expected: '60%',
  },
]

describe('Challenge #26: 🎯 Calculate the completed percentage', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: args => getCompleted(...args),
  })
})
