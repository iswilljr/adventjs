import { describe } from 'vitest'
import { findInAgenda } from './challenge-18'

const agenda = `+34-600-123-456 Calle Alegria 5 <Juan Perez>
Reservas-01 <Maria Garcia> +34-123-456-789 Calle Fin 2`

const TEST_CASES: TestCases<
  [string, string],
  { name: string; address: string } | null
> = [
  {
    args: [agenda, '34-600-123-456'],
    expected: { name: 'Juan Perez', address: 'Calle Alegria 5' },
  },
  {
    args: [agenda, '600-123'],
    expected: { name: 'Juan Perez', address: 'Calle Alegria 5' },
  },
  {
    args: [agenda, '111'],
    expected: null,
  },
  {
    args: [agenda, '1'],
    expected: null,
  },
  {
    args: [`<Babbel Junior> +44-123-456-789 Street 1`, '123-456'],
    expected: { name: 'Babbel Junior', address: 'Street 1' },
  },
]

describe("Challenge #18: 📇 Santa's Magic Agenda", () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: args => findInAgenda(...args),
  })
})
