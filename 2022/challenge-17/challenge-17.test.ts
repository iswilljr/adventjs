import { describe } from 'vitest'
import { carryGifts } from './challenge-17'

const TEST_CASES: TestCases<[string[], number], string[]> = [
  {
    args: [['game', 'bike', 'book', 'toy'], 10],
    expected: ['game bike', 'book toy'],
  },
  {
    args: [['game', 'bike', 'book', 'toy'], 7],
    expected: ['game', 'bike', 'book toy'],
  },
  {
    args: [['game', 'bike', 'book', 'toy'], 4],
    expected: ['game', 'bike', 'book', 'toy'],
  },
  {
    args: [['toy', 'gamme', 'toy', 'bike'], 6],
    expected: ['toy', 'gamme', 'toy', 'bike'],
  },
  { args: [['toy', 'toy', 'toy', 'toy'], 2], expected: [] },
  {
    args: [['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7],
    expected: ['toy toy', 'disk', 'disk toy', 'toy'],
  },
]

describe('Challenge #17: Carrying gifts in bags', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: carryGifts,
  })
})
