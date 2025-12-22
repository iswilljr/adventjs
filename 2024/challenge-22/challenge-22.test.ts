import { describe } from 'vitest'
import { generateGiftSets } from './challenge-22'

const TEST_CASES: TestCases<string[], string[][]> = [
  {
    args: ['car', 'doll', 'puzzle'],
    expected: [
      ['car'],
      ['doll'],
      ['puzzle'],
      ['car', 'doll'],
      ['car', 'puzzle'],
      ['doll', 'puzzle'],
      ['car', 'doll', 'puzzle'],
    ],
  },
  {
    args: ['ball'],
    expected: [['ball']],
  },
  {
    args: ['game', 'pc'],
    expected: [['game'], ['pc'], ['game', 'pc']],
  },
]

describe('Challenge #22: 🎁 Generate gift combinations', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: generateGiftSets,
  })
})
