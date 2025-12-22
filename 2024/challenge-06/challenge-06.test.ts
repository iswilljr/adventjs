import { describe } from 'vitest'
import { inBox } from './challenge-06'

const TEST_CASES: TestCases<string[], boolean> = [
  {
    args: ['###', '#*#', '###'],
    expected: true,
  },
  {
    args: ['####', '#* #', '#  #', '####'],
    expected: true,
  },
  {
    args: ['#####', '#   #', '#  #*', '#####'],
    expected: false,
  },
  {
    args: ['#####', '#   #', '#   #', '#   #', '#####'],
    expected: false,
  },
]

describe('Challenge #6: 📦 Is the gift inside the box?', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: inBox,
  })
})
