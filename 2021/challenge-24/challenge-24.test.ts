import { describe, expect, it } from 'vitest'
import { checkIsSameTree, Tree } from './challenge-24'

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

const TEST_CASES: Array<TestCases<[Tree, Tree], boolean>> = [
  { args: [tree, tree], expected: true },
  { args: [tree, tree2], expected: false },
  { args: [tree2, tree2], expected: true },
]

describe('Challenge #24: Comparando árboles de Navidad', () => {
  it('#T should return a boolean', () => {
    expect(typeof checkIsSameTree(...TEST_CASES[0].args)).toBe('boolean')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(checkIsSameTree(...args)).toEqual(expected)
    }
  )
})
