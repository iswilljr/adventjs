import { describe } from 'vitest'
import { decodeNumber } from './challenge-16'

const TEST_CASES: TestCases<string, number> = [
  { args: '...', expected: 3 },
  { args: '.,', expected: 4 },
  { args: ',.', expected: 6 },
  { args: ',...', expected: 8 },
  { args: '.........!', expected: 107 },
  { args: '.;', expected: 49 },
  { args: '..,', expected: 5 },
  { args: '..,!', expected: 95 },
  { args: '.;!', expected: 49 },
  { args: '!!!', expected: 300 },
  { args: ';!', expected: 50 },
  { args: ';.W', expected: NaN },
]

describe('Challenge #16: Descifrando los números...', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: decodeNumber,
  })
})
