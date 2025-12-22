import { describe } from 'vitest'
import { findGiftPath, type Key } from './challenge-14'

const workshop = {
  storage: {
    shelf: {
      box1: 'train',
      box2: 'switch',
    },
    box: 'car',
  },
  gift: 'doll',
}

const TEST_CASES: TestCases<[Record<string, any>, string], Key[]> = [
  {
    args: [workshop, 'train'],
    expected: ['storage', 'shelf', 'box1'],
  },
  {
    args: [workshop, 'switch'],
    expected: ['storage', 'shelf', 'box2'],
  },
  {
    args: [workshop, 'car'],
    expected: ['storage', 'box'],
  },
  {
    args: [workshop, 'doll'],
    expected: ['gift'],
  },
  {
    args: [workshop, 'plane'],
    expected: [],
  },
]

describe('Challenge #14: 🗃️ Find the gift path', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: findGiftPath,
  })
})
