import { describe } from 'vitest'
import { manufactureGifts } from './challenge-02'

const TEST_CASES: TestCases<
  Array<{ toy: string; quantity: number }>,
  string[]
> = [
  {
    args: [
      { toy: 'car', quantity: 3 },
      { toy: 'doll', quantity: 1 },
      { toy: 'ball', quantity: 2 },
    ],
    expected: ['car', 'car', 'car', 'doll', 'ball', 'ball'],
  },
  {
    args: [
      { toy: 'train', quantity: 0 },
      { toy: 'bear', quantity: -2 },
      { toy: 'puzzle', quantity: 1 },
    ],
    expected: ['puzzle'],
  },
  {
    args: [],
    expected: [],
  },
  {
    args: [
      { toy: 'car', quantity: NaN },
      { toy: 'ball', quantity: 2 },
    ] as any,
    expected: ['ball', 'ball'],
  },
]

describe('Challenge #2: 🏭 Manufacture the toys', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: manufactureGifts,
  })
})
