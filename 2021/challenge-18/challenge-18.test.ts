import { describe } from 'vitest'
import { fixFiles } from './challenge-18'

const TEST_CASES: TestCases<string[], string[]> = [
  {
    args: ['photo', 'postcard', 'photo', 'photo', 'video'],
    expected: ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video'],
  },
  {
    args: ['file', 'file', 'file', 'game', 'game'],
    expected: ['file', 'file(1)', 'file(2)', 'game', 'game(1)'],
  },
  {
    args: ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'],
    expected: ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)'],
  },
]

describe('Challenge #18: El sistema operativo de Santa Claus', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: fixFiles,
  })
})
