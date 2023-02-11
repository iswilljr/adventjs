import { describe } from 'vitest'
import { executeCommands } from './challenge-23'

const TEST_CASES: TestCases<string[], number[]> = [
  {
    args: ['MOV 5,V00', 'MOV 10,V01', 'DEC V00', 'ADD V00,V01'],
    expected: [14, 10, 0, 0, 0, 0, 0, 0],
  },
  {
    args: ['MOV 255,V00', 'INC V00', 'DEC V01', 'DEC V01'],
    expected: [0, 254, 0, 0, 0, 0, 0, 0],
  },
  {
    args: ['MOV 10,V00', 'DEC V00', 'INC V01', 'JMP 1', 'INC V06'],
    expected: [0, 10, 0, 0, 0, 0, 1, 0],
  },
  {
    args: [
      'MOV 10,V00',
      'MOV V00,V01',
      'MOV V01,V02',
      'MOV V02,V03',
      'MOV V03,V04',
    ],
    expected: [10, 10, 10, 10, 10, 0, 0, 0],
  },
]

describe('Challenge #23: Santa Claus Compiler', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: executeCommands,
  })
})
