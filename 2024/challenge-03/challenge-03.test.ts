import { describe } from 'vitest'
import { organizeInventory } from './challenge-03'

const TEST_CASES: TestCases<
  Array<{ name: string; quantity: number; category: string }>,
  Record<string, Record<string, number>>
> = [
  {
    args: [
      { name: 'doll', quantity: 5, category: 'toys' },
      { name: 'car', quantity: 3, category: 'toys' },
      { name: 'ball', quantity: 2, category: 'sports' },
      { name: 'car', quantity: 2, category: 'toys' },
      { name: 'racket', quantity: 4, category: 'sports' },
    ],
    expected: {
      toys: {
        doll: 5,
        car: 5,
      },
      sports: {
        ball: 2,
        racket: 4,
      },
    },
  },
  {
    args: [
      { name: 'book', quantity: 10, category: 'education' },
      { name: 'book', quantity: 5, category: 'education' },
      { name: 'paint', quantity: 3, category: 'art' },
    ],
    expected: {
      education: {
        book: 15,
      },
      art: {
        paint: 3,
      },
    },
  },
  {
    args: [],
    expected: {},
  },
]

describe('Challenge #3: 🏗️ Organizing the inventory', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: organizeInventory,
  })
})
