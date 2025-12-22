import { describe } from 'vitest'
import { calculatePrice } from './challenge-12'

const TEST_CASES: TestCases<string, number | undefined> = [
  { args: '***', expected: 3 },
  { args: '*o', expected: 4 },
  { args: 'o*', expected: 6 },
  { args: '*o*', expected: 5 },
  { args: '**o*', expected: 6 },
  { args: 'o***', expected: 8 },
  { args: '*o@', expected: 94 },
  { args: '*#', expected: 49 },
  { args: '@@@', expected: 300 },
  { args: '#@', expected: 50 },
  { args: '#@Z', expected: undefined },
]

describe('Challenge #12: 💵 How much does the tree cost?', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: calculatePrice,
  })
})
