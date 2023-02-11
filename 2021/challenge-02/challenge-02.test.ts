import { describe } from 'vitest'
import { listGifts } from './challenge-02'

const TEST_CASES: TestCases<string, Record<string, number>> = [
  {
    args: 'bici coche balón _playstation bici coche peluche',
    expected: {
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1,
    },
  },
]

describe('Challenge #2: ¡Ayuda al elfo a listar los regalos!', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: listGifts,
  })
})
