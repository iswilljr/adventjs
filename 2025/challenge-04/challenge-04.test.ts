import { describe } from 'vitest'
import { decodeSantaPin } from './challenge-04'

const TEST_CASES: TestCases<string, string | null> = [
  {
    args: '[1++][2-][3+][<]',
    expected: '3144',
  },
  {
    args: '[9+][0-][4][<]',
    expected: '0944',
  },
  {
    args: '[1+][2-]',
    expected: null,
  },
  {
    args: '[4][5++][6--][5++]',
    expected: '4747',
  },
  {
    args: '[9+][0-][0-][8+]',
    expected: '0999',
  },
  {
    args: '[0][<][<][<]',
    expected: '0000',
  },
  {
    args: '[1+++++++++][2--][3----][<]',
    expected: '0099',
  },
]

describe('Challenge #4: 🧮 Decipher the Santa PIN', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: decodeSantaPin,
  })
})
