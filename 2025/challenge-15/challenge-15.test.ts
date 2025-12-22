import { describe } from 'vitest'
import { drawTable } from './challenge-15'

const people = [
  { name: 'Charlie', city: 'New York' },
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
]

const gifts = [
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 },
  { gift: 'Doll', quantity: 10 },
]

const TEST_CASES: TestCases<
  [Array<Record<string, string | number>>, string],
  string
> = [
  {
    args: [people, 'name'],
    expected:
      '+---------+----------+\n| A       | B        |\n+---------+----------+\n| Alice   | London   |\n| Bob     | Paris    |\n| Charlie | New York |\n+---------+----------+',
  },
  {
    args: [gifts, 'quantity'],
    expected:
      '+----------+----+\n| A        | B  |\n+----------+----+\n| Music CD | 1  |\n| Book     | 5  |\n| Doll     | 10 |\n+----------+----+',
  },
]

describe('Challenge #15: ✏️ Drawing tables', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: drawTable,
  })
})
