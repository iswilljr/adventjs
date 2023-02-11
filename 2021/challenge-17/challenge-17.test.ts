import { describe } from 'vitest'
import { countPackages } from './challenge-17'

const TEST_CASES: TestCases<
  [Array<[string, number, string[]]>, string],
  number
> = [
  {
    args: [
      [
        ['dapelu', 5, ['midu', 'jelowing']],
        ['midu', 2, []],
        ['jelowing', 2, []],
      ],
      'dapelu',
    ],
    expected: 9,
  },
  {
    args: [
      [
        ['lolivier', 8, ['camila', 'jesuspoleo']],
        ['camila', 5, ['sergiomartinez', 'conchaasensio']],
        ['jesuspoleo', 4, []],
        ['sergiomartinez', 4, []],
        ['conchaasensio', 3, ['facundocapua', 'faviola']],
        ['facundocapua', 2, []],
        ['faviola', 1, []],
      ],
      'camila',
    ],
    expected: 15,
  },
]

describe('Challenge #17: La locura de enviar paquetes en esta época', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: countPackages,
  })
})
