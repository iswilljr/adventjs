import { describe } from 'vitest'
import { wrapping } from './challenge-01'

const TEST_CASES: TestCases<string[], string[]> = [
  {
    args: ['cat', 'game', 'socks'],
    expected: [
      '*****\n*cat*\n*****',
      '******\n*game*\n******',
      '*******\n*socks*\n*******',
    ],
  },
  { args: ['will'], expected: ['******\n*will*\n******'] },
  { args: ['a'], expected: ['***\n*a*\n***'] },
  { args: [], expected: [] },
]

describe('Challenge #1: Automating Christmas gift wrapping!', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: wrapping,
  })
})
