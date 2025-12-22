import { describe } from 'vitest'
import { elfBattle } from './challenge-12'

const TEST_CASES: TestCases<[string, string], 0 | 1 | 2> = [
  {
    args: ['A', 'B'],
    expected: 0,
  },
  {
    args: ['F', 'B'],
    expected: 1,
  },
  {
    args: ['AAB', 'BBA'],
    expected: 0,
  },
  {
    args: ['AFA', 'BBA'],
    expected: 1,
  },
  {
    args: ['AFAB', 'BBAF'],
    expected: 1,
  },
  {
    args: ['AA', 'FF'],
    expected: 2,
  },
  {
    args: ['F', 'F'],
    expected: 0,
  },
]

describe('Challenge #12: ⚔️ Elf battle', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: elfBattle,
  })
})
