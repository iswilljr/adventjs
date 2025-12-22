import { describe } from 'vitest'
import { matchGloves } from './challenge-06'

const TEST_CASES: TestCases<
  Array<{ hand: 'L' | 'R'; color: string }>,
  string[]
> = [
  {
    args: [
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'red' },
      { hand: 'R', color: 'green' },
      { hand: 'L', color: 'blue' },
      { hand: 'L', color: 'green' },
    ],
    expected: ['red', 'green'],
  },
  {
    args: [
      { hand: 'L', color: 'gold' },
      { hand: 'R', color: 'gold' },
      { hand: 'L', color: 'gold' },
      { hand: 'L', color: 'gold' },
      { hand: 'R', color: 'gold' },
    ],
    expected: ['gold', 'gold'],
  },
  {
    args: [
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'green' },
      { hand: 'L', color: 'blue' },
    ],
    expected: [],
  },
  {
    args: [
      { hand: 'L', color: 'green' },
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'red' },
      { hand: 'R', color: 'green' },
    ],
    expected: ['red', 'green'],
  },
]

describe('Challenge #6: 🧤 Matching gloves', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: matchGloves,
  })
})
