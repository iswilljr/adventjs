import { describe } from 'vitest'
import { revealSantaRoute } from './challenge-19'

const TEST_CASES: TestCases<Array<[string, string]>, string[]> = [
  {
    args: [
      ['MEX', 'CAN'],
      ['UK', 'GER'],
      ['CAN', 'UK'],
    ],
    expected: ['MEX', 'CAN', 'UK', 'GER'],
  },
  {
    args: [
      ['USA', 'BRA'],
      ['JPN', 'PHL'],
      ['BRA', 'UAE'],
      ['UAE', 'JPN'],
      ['CMX', 'HKN'],
    ],
    expected: ['USA', 'BRA', 'UAE', 'JPN', 'PHL'],
  },
  {
    args: [
      ['STA', 'HYD'],
      ['ESP', 'CHN'],
    ],
    expected: ['STA', 'HYD'],
  },
]

describe("Challenge #19: 🎄 Santa's Secret Journey", () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: revealSantaRoute,
  })
})
