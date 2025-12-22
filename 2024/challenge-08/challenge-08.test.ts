import { describe } from 'vitest'
import { drawRace } from './challenge-08'

const TEST_CASES: TestCases<[number[], number], string> = [
  {
    args: [[0, 5, -3], 10],
    expected: '  ~~~~~~~~~~ /1\n ~~~~~r~~~~ /2\n~~~~~~~r~~ /3',
  },
  {
    args: [[2, -1, 0, 5], 8],
    expected: '   ~~r~~~~~ /1\n  ~~~~~~~r /2\n ~~~~~~~~ /3\n~~~~~r~~ /4',
  },
  {
    args: [[3, 7, -2], 12],
    expected: '  ~~~r~~~~~~~~ /1\n ~~~~~~~r~~~~ /2\n~~~~~~~~~~r~ /3',
  },
]

describe('Challenge #8: 🦌 The reno race', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: drawRace,
  })
})
