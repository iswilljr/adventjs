import { describe } from 'vitest'
import { createXmasTree } from './challenge-04'

const TEST_CASES: TestCases<[number, string], string> = [
  {
    args: [5, '*'],
    expected:
      '____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____',
  },
  {
    args: [3, '+'],
    expected: '__+__\n_+++_\n+++++\n__#__\n__#__',
  },
  {
    args: [6, '@'],
    expected:
      '_____@_____\n____@@@____\n___@@@@@___\n__@@@@@@@__\n_@@@@@@@@@_\n@@@@@@@@@@@\n_____#_____\n_____#_____',
  },
]

describe('Challenge #4: 🎄 Decorating the Christmas tree', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: createXmasTree,
  })
})
