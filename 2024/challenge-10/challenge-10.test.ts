import { describe } from 'vitest'
import { compile } from './challenge-10'

const TEST_CASES: TestCases<string[], number | undefined> = [
  {
    args: ['MOV -1 C', 'INC C', 'JMP C 1', 'MOV C A', 'INC A'],
    expected: 2,
  },
  {
    args: ['INC A', 'INC A', 'DEC A', 'MOV A B'],
    expected: 1,
  },
  {
    args: ['MOV 5 B', 'DEC B', 'MOV B A', 'INC A'],
    expected: 5,
  },
  {
    args: ['INC C', 'DEC C', 'MOV C A', 'JMP A 1', 'MOV 10 A'],
    expected: 9,
  },
]

describe('Challenge #10: 👩‍💻 The elfish assembler', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: compile,
  })
})
