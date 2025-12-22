import { describe } from 'vitest'
import { fixPackages } from './challenge-07'

const TEST_CASES: TestCases<string, string> = [
  {
    args: 'a(cb)de',
    expected: 'abcde',
  },
  {
    args: 'a(bc(def)g)h',
    expected: 'agdefcbh',
  },
  {
    args: 'abc(def(gh)i)jk',
    expected: 'abcighfedjk',
  },
  {
    args: 'a(b(c))e',
    expected: 'acbe',
  },
]

describe("Challenge #7: 👹 The Grinch's attack", () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: fixPackages,
  })
})
