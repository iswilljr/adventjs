import { describe } from 'vitest'
import { findNaughtyStep } from './challenge-03'

const TEST_CASES: TestCases<[string, string], string> = [
  { args: ['abcd', 'abcde'], expected: 'e' },
  { args: ['abcde', 'abcd'], expected: 'e' },
  { args: ['xxxx', 'xxoxx'], expected: 'o' },
  { args: ['stepfor', 'stepor'], expected: 'f' },
  { args: ['iiiii', 'iiiii'], expected: '' },
  { args: ['iiii', 'iiiii'], expected: 'i' },
]

describe('Challenge #3: The naughty elf', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: findNaughtyStep,
  })
})
