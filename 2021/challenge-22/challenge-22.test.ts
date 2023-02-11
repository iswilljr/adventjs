import { describe } from 'vitest'
import { countDecorations, type Tree } from './challenge-22'

const TEST_CASES: TestCases<Tree, number> = [
  {
    args: {
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 3, left: null, right: null },
    },
    expected: 6,
  },
  {
    args: {
      value: 1,
      left: {
        value: 5,
        left: {
          value: 7,
          left: { value: 3, left: null, right: null },
          right: null,
        },
        right: null,
      },
      right: {
        value: 6,
        left: { value: 5, left: null, right: null },
        right: { value: 1, left: null, right: null },
      },
    },
    expected: 28,
  },
]

describe('Challenge #22: ¿Cuántos adornos necesita el árbol?', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: countDecorations,
  })
})
