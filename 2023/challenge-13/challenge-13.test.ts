import { describe } from 'vitest'
import { calculateTime } from './challenge-13'

const TEST_CASES: TestCases<string[], string> = [
  { args: ['00:10:00', '01:00:00', '03:30:00'], expected: '-02:20:00' },
  { args: ['01:00:00', '05:00:00', '00:30:00'], expected: '-00:30:00' },
  { args: ['02:00:00', '03:00:00', '02:00:00'], expected: '00:00:00' },
  { args: ['01:01:01', '09:59:59', '01:01:01'], expected: '05:02:01' },
  { args: ['02:00:00', '05:00:00', '00:30:00'], expected: '00:30:00' },
  {
    args: ['00:45:00', '00:45:00', '00:00:30', '00:00:30'],
    expected: '-05:29:00',
  },
  {
    args: ['01:01:01', '03:59:59', '01:01:01', '00:57:58'],
    expected: '-00:00:01',
  },
]

describe('Challenge #13: Calculating the time', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: calculateTime,
  })
})
