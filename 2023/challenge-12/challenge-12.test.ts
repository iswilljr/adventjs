import { describe } from 'vitest'
import { checkIsValidCopy } from './challenge-12'

const TEST_CASES: TestCases<[string, string], boolean> = [
  { args: ['Santa Claus is coming', 'sa#ta cl#us is comin#'], expected: true },
  { args: ['Santa Claus is coming', 'p#nt: cla#s #s c+min#'], expected: false },
  { args: ['Santa Claus', ' Santa Claus '], expected: false },
  { args: ['Santa Claus', '###:. c:+##'], expected: true },
  { args: ['Santa Claus', 'sant##claus+'], expected: false },
  { args: ['S#n:a Claus', 'S#+:. c:. s'], expected: true },
  { args: ['Santa Claus', 's#+:. c:. s'], expected: true },
  { args: ['s+#:.#c:. s', 's#+:.#c:. s'], expected: false },
  { args: ['S#nta Claus', 'S#ntA ClauS'], expected: false },
  { args: ['Santa Claus', 's#+:.#c:. s'], expected: false },
  { args: ['Santa Claus', 'SantA ClauS'], expected: false },
  { args: ['3 #egalos', '3 .+:# #:'], expected: true },
  { args: ['3 regalos', '3 .+:# #:'], expected: true },
  { args: ['3 regalos', '3        '], expected: true },
  { args: ['3 regalos 3', '3 .+:# #: 3'], expected: true },
  {
    args: [
      'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños',
      'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño',
    ],
    expected: false,
  },
]

describe('Challenge #12: Is it a valid copy?', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: checkIsValidCopy,
  })
})
