import { describe } from 'vitest'
import { createXmasTree } from './challenge-04'

const TEST_CASES: TestCases<number, string> = [
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
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: createXmasTree,
  })
})
