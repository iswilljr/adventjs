import { describe, expect, it } from 'vitest'
import { getFilesToBackup } from '@/challenge-13'

const TEST_CASES: TestCases<[number, [number, number][]], number[]>[] = [
  {
    args: [
      1546300800,
      [
        [3, 1546301100],
        [2, 1546300800],
        [1, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
      ],
    ],
    expected: [1, 3],
  },
  {
    args: [
      1546300600,
      [
        [1, 1546300800],
        [2, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
        [3, 1546301100],
      ],
    ],
    expected: [1, 2, 3],
  },
  {
    args: [
      1556300600,
      [
        [1, 1546300800],
        [2, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
        [3, 1546301100],
      ],
    ],
    expected: [],
  },
  { args: [1556300600, []], expected: [] },
]

describe('Challenge #13: Backups for Santa Claus files', () => {
  it('#T should return an array', () => {
    const backupIds = getFilesToBackup(1556300600, [])
    return expect(Array.isArray(backupIds) ? 'array' : typeof backupIds).toBe(
      'array'
    )
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(getFilesToBackup(...args)).toEqual(expected)
    }
  )
})
