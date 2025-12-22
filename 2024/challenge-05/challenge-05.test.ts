import { describe } from 'vitest'
import { organizeShoes } from './challenge-05'

const TEST_CASES: TestCases<
  Array<{ type: 'I' | 'R'; size: number }>,
  number[]
> = [
  {
    args: [
      { type: 'I', size: 38 },
      { type: 'R', size: 38 },
      { type: 'R', size: 42 },
      { type: 'I', size: 41 },
      { type: 'I', size: 42 },
    ],
    expected: [38, 42],
  },
  {
    args: [
      { type: 'I', size: 38 },
      { type: 'R', size: 38 },
      { type: 'I', size: 38 },
      { type: 'I', size: 38 },
      { type: 'R', size: 38 },
    ],
    expected: [38, 38],
  },
  {
    args: [
      { type: 'I', size: 38 },
      { type: 'R', size: 36 },
      { type: 'R', size: 42 },
      { type: 'I', size: 41 },
      { type: 'I', size: 43 },
    ],
    expected: [],
  },
]

describe('Challenge #5: 👞 Shoe pairing', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: organizeShoes,
  })
})
