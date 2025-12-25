import { describe } from 'vitest'
import { isTreesSynchronized, type Tree } from './challenge-24'

const TEST_CASES: TestCases<[Tree, Tree], [boolean, string]> = [
  {
    args: [
      { value: '🎄', left: { value: '⭐' }, right: { value: '🎅' } },
      { value: '🎄', left: { value: '🎅' }, right: { value: '⭐' } },
    ],
    expected: [true, '🎄'],
  },
  {
    args: [
      { value: '🎄', left: { value: '🎅' }, right: { value: '🎁' } },
      { value: '🎄', left: { value: '⭐' }, right: { value: '🎅' } },
    ],
    expected: [false, '🎄'],
  },
  {
    args: [
      { value: '🎄', left: { value: '⭐' }, right: { value: '🎅' } },
      { value: '🎄', left: { value: '⭐' }, right: { value: '🎅' } },
    ],
    expected: [false, '🎄'],
  },
  {
    args: [{ value: '🎅' }, { value: '🧑‍🎄' }],
    expected: [false, '🎅'],
  },
  {
    args: [
      { value: '⭐', left: { value: 'A' }, right: { value: 'B' } },
      { value: '⭐', left: { value: 'B' }, right: { value: 'A' } },
    ],
    expected: [true, '⭐'],
  },
]

describe('Challenge #24: 🪞 Check if trees are magical mirrors', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: isTreesSynchronized,
  })
})
