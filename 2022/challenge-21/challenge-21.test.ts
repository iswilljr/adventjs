import { describe, expect, it } from 'vitest'
import { printTable, Gift } from './challenge-21'

const TEST_CASES: Array<TestCases<Gift[], string>> = [
  {
    args: [
      { name: 'PlayStation 5', quantity: 9234782374892 },
      { name: 'Book Learn Web Dev', quantity: 23531 },
    ],
    expected:
      '++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************',
  },
  {
    args: [
      { name: 'Game', quantity: 2 },
      { name: 'Bike', quantity: 1 },
      { name: 'Book', quantity: 3 },
    ],
    expected:
      '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************',
  },
  {
    args: [{ name: 'Game', quantity: 10000 }],
    expected:
      '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************',
  },
  {
    args: [{ name: 'Game', quantity: 1234567890 }],
    expected:
      '+++++++++++++++++++++\n| Gift | Quantity   |\n| ---- | ---------- |\n| Game | 1234567890 |\n*********************',
  },
  {
    args: [
      { name: 'Toy', quantity: 12 },
      { name: 'Mic', quantity: 123 },
    ],
    expected:
      '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Toy  | 12       |\n| Mic  | 123      |\n*******************',
  },
]

describe('Challenge #21: Creating the gifts table', () => {
  it('#T should return a string', () => {
    expect(typeof printTable(TEST_CASES[0].args)).toBe('string')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(printTable(args)).toEqual(expected)
    }
  )
})
