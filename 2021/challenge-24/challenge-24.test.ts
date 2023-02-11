import { describe } from 'vitest'
import { checkIsSameTree, type Tree } from './challenge-24'

const tree: Tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
}
const tree2: Tree = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
}

const TEST_CASES: TestCases<[Tree, Tree], boolean> = [
  { args: [tree, tree], expected: true },
  { args: [tree, tree2], expected: false },
  { args: [tree2, tree2], expected: true },
]

describe('Challenge #24: Comparando árboles de Navidad', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: checkIsSameTree,
  })
})
