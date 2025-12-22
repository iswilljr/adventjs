import { describe } from 'vitest'
import { isMirror, type TreeNode } from './challenge-24'

const tree1: TreeNode = {
  value: '🍎',
  left: { value: '🍐' },
  right: { value: '🍊' },
}

const tree2: TreeNode = {
  value: '🍎',
  left: { value: '🍊' },
  right: { value: '🍐' },
}

const tree3: TreeNode = {
  value: '🍎',
  left: { value: '🍐' },
  right: { value: '🍊' },
}

const tree4: TreeNode = {
  value: '🍎',
  left: { value: '🍐' },
  right: { value: '🍊' },
}

const TEST_CASES: TestCases<[TreeNode | null, TreeNode | null], boolean> = [
  {
    args: [tree1, tree2],
    expected: true,
  },
  {
    args: [tree3, tree4],
    expected: false,
  },
  {
    args: [null, null],
    expected: true,
  },
  {
    args: [tree1, null],
    expected: false,
  },
  {
    args: [
      {
        value: 'a',
        left: { value: 'b', left: { value: 'c' } },
        right: { value: 'd' },
      },
      {
        value: 'a',
        left: { value: 'd' },
        right: { value: 'b', right: { value: 'c' } },
      },
    ],
    expected: true,
  },
]

describe('Challenge #24: 🪞 Check if trees are magical mirrors', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: args => isMirror(...args),
  })
})
