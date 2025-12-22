import { describe } from 'vitest'
import { createFrame } from './challenge-02'

const TEST_CASES: TestCases<string[], string> = [
  {
    args: ['midu'],
    expected: '********\n* midu *\n********',
  },
  {
    args: ['midu', 'madeval', 'educalvolpz'],
    expected:
      '***************\n* midu        *\n* madeval     *\n* educalvolpz *\n***************',
  },
  {
    args: ['a', 'bb', 'ccc'],
    expected: '*******\n* a   *\n* bb  *\n* ccc *\n*******',
  },
  {
    args: ['a', 'bb', 'ccc', 'dddd'],
    expected: '********\n* a    *\n* bb   *\n* ccc  *\n* dddd *\n********',
  },
  {
    args: ['midu', 'madeval', 'educalvolpz', 'midu'],
    expected:
      '***************\n* midu        *\n* madeval     *\n* educalvolpz *\n* midu        *\n***************',
  },
]

describe('Challenge #2: 🖼️ Framing Names', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: createFrame,
  })
})
