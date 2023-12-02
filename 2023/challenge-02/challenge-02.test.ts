import { describe } from 'vitest'
import { manufacture } from './challenge-02'

const TEST_CASES: TestCases<[string[], string], string[]> = [
  {
    args: [['tren', 'oso', 'pelota'], 'tronesa'],
    expected: ['tren', 'oso'],
  },
  { args: [['pelicula', 'serie', 'tv'], 'svtlir'], expected: ['tv'] },
  { args: [['coche', 'muñeca', 'balon'], 'ocmuñalb'], expected: [] },
  { args: [['patineta', 'robot', 'libro'], 'nopor'], expected: [] },
  { args: [[], 'letras'], expected: [] },
]

describe('Challenge #2: We start the factory', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: manufacture,
  })
})
