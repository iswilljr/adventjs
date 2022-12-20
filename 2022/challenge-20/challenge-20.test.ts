import { typeOfValue } from 'utils/typeof'
import { describe, expect, it } from 'vitest'
import { howManyReindeers, Reindeer, Gift, Result } from './challenge-20'

const TEST_CASES: Array<TestCases<[Reindeer[], Gift[]], Result[]>> = [
  {
    args: [
      [
        { type: 'Nuclear', weightCapacity: 50 },
        { type: 'Electric', weightCapacity: 10 },
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 },
      ],
      [
        { country: 'Spain', weight: 30 },
        { country: 'France', weight: 17 },
        { country: 'Italy', weight: 50 },
      ],
    ],
    expected: [
      {
        country: 'Spain',
        reindeers: [
          { type: 'Electric', num: 1 },
          { type: 'Gasoline', num: 3 },
          { type: 'Diesel', num: 5 },
        ],
      },
      {
        country: 'France',
        reindeers: [
          { type: 'Electric', num: 1 },
          { type: 'Gasoline', num: 1 },
          { type: 'Diesel', num: 2 },
        ],
      },
      {
        country: 'Italy',
        reindeers: [
          { type: 'Electric', num: 3 },
          { type: 'Gasoline', num: 3 },
          { type: 'Diesel', num: 5 },
        ],
      },
    ],
  },
  {
    args: [
      [
        { type: 'Electric', weightCapacity: 10 },
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 },
      ],
      [{ country: 'Spain', weight: 37 }],
    ],
    expected: [
      {
        country: 'Spain',
        reindeers: [
          { type: 'Electric', num: 2 },
          { type: 'Gasoline', num: 2 },
          { type: 'Diesel', num: 7 },
        ],
      },
    ],
  },
  {
    args: [
      [
        { type: 'Nuclear', weightCapacity: 50 },
        { type: 'Electric', weightCapacity: 10 },
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 },
      ],
      [
        { country: 'Spain', weight: 30 },
        { country: 'Germany', weight: 7 },
        { country: 'France', weight: 17 },
        { country: 'Italy', weight: 50 },
      ],
    ],
    expected: [
      {
        country: 'Spain',
        reindeers: [
          { type: 'Electric', num: 1 },
          { type: 'Gasoline', num: 3 },
          { type: 'Diesel', num: 5 },
        ],
      },
      {
        country: 'Germany',
        reindeers: [
          { type: 'Gasoline', num: 1 },
          { type: 'Diesel', num: 2 },
        ],
      },
      {
        country: 'France',
        reindeers: [
          { type: 'Electric', num: 1 },
          { type: 'Gasoline', num: 1 },
          { type: 'Diesel', num: 2 },
        ],
      },
      {
        country: 'Italy',
        reindeers: [
          { type: 'Electric', num: 3 },
          { type: 'Gasoline', num: 3 },
          { type: 'Diesel', num: 5 },
        ],
      },
    ],
  },
  {
    args: [
      [
        { type: 'Diesel', weightCapacity: 1 },
        { type: 'Gasoline', weightCapacity: 5 },
      ],
      [
        { country: 'Spain', weight: 30 },
        { country: 'Germany', weight: 7 },
      ],
    ],
    expected: [
      {
        country: 'Spain',
        reindeers: [
          { type: 'Gasoline', num: 5 },
          { type: 'Diesel', num: 5 },
        ],
      },
      {
        country: 'Germany',
        reindeers: [
          { type: 'Gasoline', num: 1 },
          { type: 'Diesel', num: 2 },
        ],
      },
    ],
  },
]

describe('Challenge #20: More challenging trips', () => {
  it('#T should return an array', () => {
    expect(typeOfValue(howManyReindeers(...TEST_CASES[0].args))).toBe('array')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(howManyReindeers(...args)).toEqual(expected)
    }
  )
})
