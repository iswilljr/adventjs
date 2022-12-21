import { typeOfValue } from 'utils/typeof'
import { describe, expect, it } from 'vitest'
import { wrapGifts } from './challenge-13'

const TEST_CASES: Array<TestCases<string[], string[]>> = [
  { args: ['📷', '⚽️'], expected: ['****', '*📷*', '*⚽️*', '****'] },
  {
    args: ['🏈🎸', '🎮🧸'],
    expected: ['******', '*🏈🎸*', '*🎮🧸*', '******'],
  },
  { args: ['📷'], expected: ['****', '*📷*', '****'] },
]

describe('Challenge #13: Envuelve regalos con asteriscos', () => {
  it('#T should return an array', () => {
    expect(typeOfValue(wrapGifts(['📷']))).toBe('array')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(wrapGifts(args)).toEqual(expected)
    }
  )
})
