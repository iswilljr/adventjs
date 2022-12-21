import { describe, expect, it } from 'vitest'
import { canMouseEat, Direction } from './challenge-25'

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*'],
]

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*'],
]

const TEST_CASES: Array<TestCases<[Direction, string[][]], boolean>> = [
  { args: ['up', room], expected: false },
  { args: ['down', room], expected: true },
  { args: ['right', room], expected: false },
  { args: ['left', room], expected: false },
  { args: ['up', room2], expected: false },
  { args: ['down', room2], expected: false },
  { args: ['right', room2], expected: true },
  { args: ['left', room2], expected: false },
]

describe('Challenge #25: El último juego y hasta el año que viene 👋', () => {
  it('#T should return a boolean', () => {
    expect(typeof canMouseEat(...TEST_CASES[0].args)).toBe('boolean')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(canMouseEat(...args)).toEqual(expected)
    }
  )
})
