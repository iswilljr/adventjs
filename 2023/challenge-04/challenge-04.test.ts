import { describe } from 'vitest'
import { decode } from './challenge-04'

const TEST_CASES: TestCases<string, string> = [
  { args: 'hola (odnum)', expected: 'hola mundo' },
  { args: '(olleh) (dlrow)!', expected: 'hello world!' },
  { args: 'sa(u(cla)atn)s', expected: 'santaclaus' },
  { args: '((nta)(sa))', expected: 'santa' },
  { args: '(ab(dc)(fe))', expected: 'fedcba' },
  { args: 'ab(cd)ef', expected: 'abdcef' },
]

describe('Challenge #4: Turn the parentheses around', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: decode,
  })
})
