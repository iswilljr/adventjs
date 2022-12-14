import { describe, expect, it } from 'vitest'
import { selectSleigh, Sleight } from '@/challenge-12'

const TEST_CASES: TestCases<[number, Sleight[]], string | null>[] = [
  {
    args: [
      1,
      [
        { name: 'pheralb', consumption: 0.3 },
        { name: 'TMChein', consumption: 0.5 },
      ],
    ],
    expected: 'TMChein',
  },
  {
    args: [
      10,
      [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 5 },
      ],
    ],
    expected: 'Pedrosillano',
  },
  {
    args: [
      10,
      [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 2 },
        { name: 'marcospage', consumption: 3 },
      ],
    ],
    expected: 'SamarJaffal',
  },
  {
    args: [
      50,
      [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 2 },
        { name: 'marcospage', consumption: 3 },
      ],
    ],
    expected: null,
  },
]

describe('Challenge #11: Santa Claus is Scrum Master', () => {
  it('#T should return a string', () => {
    expect(
      typeof selectSleigh(1, [
        { name: 'pheralb', consumption: 0.3 },
        { name: 'TMChein', consumption: 0.5 },
      ])
    ).toBe('string')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(selectSleigh(...args)).toEqual(expected)
    }
  )
})
