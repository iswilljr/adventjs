import { describe } from 'vitest'
import { canReconfigure } from './challenge-23'

const TEST_CASES: TestCases<[string, string], boolean> = [
  { args: ['BAL', 'LIB'], expected: true },
  { args: ['CON', 'JUU'], expected: false },
  { args: ['MMM', 'MID'], expected: false },
  { args: ['BR', 'BAD'], expected: false },
]

describe('Challenge #23: ¿Puedes reconfigurar las fábricas para no parar de crear regalos?', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: canReconfigure,
  })
})
