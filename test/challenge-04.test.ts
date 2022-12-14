import { describe, expect, it } from 'vitest'
import { fitsInOneBox, Box } from '@/challenge-04'

const TEST_CASES: TestCases<Box[], boolean>[] = [
  {
    args: [
      { l: 1, w: 1, h: 10 },
      { l: 3, w: 3, h: 12 },
      { l: 2, w: 2, h: 1 },
    ],
    expected: false,
  },
  {
    args: [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
    ],
    expected: true,
  },
  {
    args: [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 },
    ],
    expected: false,
  },
  {
    args: [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2 },
    ],
    expected: false,
  },
  {
    args: [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 },
    ],
    expected: true,
  },
]

describe('Challenge #4: Box inside a box and another...', () => {
  it('#T should return a boolean', () => {
    expect(
      typeof fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
      ])
    ).toBe('boolean')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(fitsInOneBox(args)).toEqual(expected)
    }
  )
})
