import { describe } from 'vitest'
import { drawTable } from './challenge-15'

const TABLE_1 = [
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' },
]

const TABLE_1_EXPECTED = `
+---------+----------+
| Name    | City     |
+---------+----------+
| Alice   | London   |
| Bob     | Paris    |
| Charlie | New York |
+---------+----------+
`.trim()

const TABLE_2 = [
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music Box', quantity: 1 },
]

const TABLE_2_EXPECTED = `
+-----------+----------+
| Gift      | Quantity |
+-----------+----------+
| Doll      | 10       |
| Book      | 5        |
| Music Box | 1        |
+-----------+----------+
`.trim()

const TEST_CASES: TestCases<Array<Record<string, string | number>>, string> = [
  { args: TABLE_1, expected: TABLE_1_EXPECTED },
  { args: TABLE_2, expected: TABLE_2_EXPECTED },
]

describe('Challenge #15: ✏️ Drawing tables', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: drawTable,
  })
})
