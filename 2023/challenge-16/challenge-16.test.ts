import { describe } from 'vitest'
import { transformTree } from './challenge-16'

const TEST_CASES: TestCases<
  Array<number | null>,
  Record<string, any> | null
> = [
  { args: [], expected: null },
  {
    args: [1],
    expected: {
      value: 1,
      left: null,
      right: null,
    },
  },
  {
    args: [1, 2, 3],
    expected: {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    },
  },
  {
    args: [1, 2, 3, 4, 5],
    expected: {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: {
          value: 5,
          left: null,
          right: null,
        },
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    },
  },
  {
    args: [1, 2, 3, 4, 5, 6, 7],
    expected: {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: {
          value: 5,
          left: null,
          right: null,
        },
      },
      right: {
        value: 3,
        left: {
          value: 6,
          left: null,
          right: null,
        },
        right: {
          value: 7,
          left: null,
          right: null,
        },
      },
    },
  },
  {
    args: [17, 0, null, null, 1],
    expected: {
      value: 17,
      left: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
      right: null,
    },
  },
  {
    args: [3, 1, 0, 8, 12, null, 1],
    expected: {
      value: 3,
      left: {
        value: 1,
        left: {
          value: 8,
          left: null,
          right: null,
        },
        right: {
          value: 12,
          left: null,
          right: null,
        },
      },
      right: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
    },
  },
  {
    args: [2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10],
    expected: {
      value: 2,
      left: {
        value: 7,
        left: null,
        right: {
          value: 6,
          left: {
            value: 1,
            left: null,
            right: null,
          },
          right: {
            value: 11,
            left: null,
            right: null,
          },
        },
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 9,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null,
          },
        },
      },
    },
  },
]

describe('Challenge #16: Friday deployment', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: transformTree,
  })
})
