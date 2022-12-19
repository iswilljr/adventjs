import { describe, expect, it } from 'vitest'
import { createXmasTree } from './challenge-04'

const TEST_CASES: Array<TestCases<number, string>> = [
  {
    args: 5,
    expected: `
____*____
___***___
__*****__
_*******_
*********
____#____
____#____`.trimStart(),
  },
  {
    args: 3,
    expected: `
__*__
_***_
*****
__#__
__#__`.trimStart(),
  },
]

describe('Challenge #4: ¡Es hora de poner la navidad en casa!', () => {
  it('#T should return a string', () => {
    expect(typeof createXmasTree(3)).toBe('string')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(createXmasTree(args)).toEqual(expected)
    }
  )
})
