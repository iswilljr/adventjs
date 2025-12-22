import { describe } from 'vitest'
import { fixGiftList } from './challenge-20'

const TEST_CASES: TestCases<
  [string[], string[]],
  { missing: Record<string, number>; extra: Record<string, number> }
> = [
  {
    args: [
      ['puzzle', 'car', 'doll', 'car'],
      ['car', 'puzzle', 'doll', 'ball'],
    ],
    expected: {
      missing: { ball: 1 },
      extra: { car: 1 },
    },
  },
  {
    args: [
      ['book', 'train', 'kite', 'train'],
      ['train', 'book', 'kite', 'chess'],
    ],
    expected: {
      missing: { chess: 1 },
      extra: { train: 1 },
    },
  },
  {
    args: [
      ['bear', 'bear', 'car'],
      ['bear', 'car', 'puzzle', 'puzzle', 'car'],
    ],
    expected: {
      missing: { puzzle: 2, car: 1 },
      extra: { bear: 1 },
    },
  },
  {
    args: [
      ['car', 'puzzle', 'car'],
      ['car', 'puzzle', 'car'],
    ],
    expected: {
      missing: {},
      extra: {},
    },
  },
]

describe('Challenge #20: 🎁 Find missing and duplicate gifts', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: args => fixGiftList(...args),
  })
})
