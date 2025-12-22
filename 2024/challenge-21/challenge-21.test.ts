import { describe } from 'vitest'
import { treeHeight, type TreeNode } from './challenge-21'

const tree: TreeNode = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null,
    },
    right: {
      value: '🎅',
      left: null,
      right: null,
    },
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null,
    },
  },
}

const TEST_CASES: TestCases<TreeNode | null, number> = [
  {
    args: tree,
    expected: 3,
  },
  {
    args: null,
    expected: 0,
  },
  {
    args: { value: '⭐', left: null, right: null },
    expected: 1,
  },
  {
    args: {
      value: 'a',
      left: { value: 'b', left: null, right: null },
      right: null,
    },
    expected: 2,
  },
]

describe('Challenge #21: 🎄 Calculate the height of the Christmas tree', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: treeHeight,
  })
})
