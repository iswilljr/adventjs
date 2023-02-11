import { describe } from 'vitest'
import { wrapGifts } from './challenge-13'

const TEST_CASES: TestCases<string[], string[]> = [
  { args: ['📷', '⚽️'], expected: ['****', '*📷*', '*⚽️*', '****'] },
  {
    args: ['🏈🎸', '🎮🧸'],
    expected: ['******', '*🏈🎸*', '*🎮🧸*', '******'],
  },
  { args: ['📷'], expected: ['****', '*📷*', '****'] },
]

describe('Challenge #13: Envuelve regalos con asteriscos', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: wrapGifts,
  })
})
