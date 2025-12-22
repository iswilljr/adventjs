import { describe } from 'vitest'
import { filterGifts } from './challenge-01'

const TEST_CASES: TestCases<string[], string[]> = [
  {
    args: ['car', 'doll#arm', 'ball', '#train'],
    expected: ['car', 'ball'],
  },
  {
    args: ['#broken', '#rusty'],
    expected: [],
  },
  {
    args: [],
    expected: [],
  },
  {
    args: ['train', 'bike', 'doll'],
    expected: ['train', 'bike', 'doll'],
  },
]

describe('Challenge #1: 🎁 Filter the defective gifts', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: filterGifts,
  })
})
