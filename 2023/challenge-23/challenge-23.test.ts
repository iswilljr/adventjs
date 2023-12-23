import { describe } from 'vitest'
import { organizeChristmasDinner } from './challenge-23'

const TEST_CASES: TestCases<string[][], string[][]> = [
  {
    args: [
      ['christmas turkey', 'turkey', 'sauce', 'herbs'],
      ['cake', 'flour', 'sugar', 'egg'],
      ['hot chocolate', 'chocolate', 'milk', 'sugar'],
      ['pizza', 'sauce', 'tomato', 'cheese', 'ham'],
    ],
    expected: [
      ['sauce', 'christmas turkey', 'pizza'],
      ['sugar', 'cake', 'hot chocolate'],
    ],
  },
  {
    args: [
      ['fruit salad', 'apple', 'banana', 'orange'],
      ['berry smoothie', 'blueberry', 'banana', 'milk'],
      ['apple pie', 'apple', 'sugar', 'flour'],
    ],
    expected: [
      ['apple', 'apple pie', 'fruit salad'],
      ['banana', 'berry smoothie', 'fruit salad'],
    ],
  },
  {
    args: [
      ['gingerbread', 'flour', 'ginger', 'sugar'],
      ['glazed ham', 'ham', 'honey', 'sugar', 'vinegar'],
      ['roast chicken', 'chicken', 'rosemary', 'thyme', 'garlic'],
      ['vegetable soup', 'carrot', 'potato', 'onion', 'garlic'],
      ['fruit punch', 'apple juice', 'orange juice', 'sugar'],
    ],
    expected: [
      ['garlic', 'roast chicken', 'vegetable soup'],
      ['sugar', 'fruit punch', 'gingerbread', 'glazed ham'],
    ],
  },
  {
    args: [
      ['pumpkin pie', 'pumpkin', 'cinnamon', 'sugar', 'flour'],
      ['mashed potatoes', 'potatoes', 'butter', 'milk'],
      ['cinnamon rolls', 'flour', 'cinnamon', 'butter', 'sugar'],
      ['turkey stuffing', 'bread crumbs', 'celery', 'onion', 'butter'],
    ],
    expected: [
      ['butter', 'cinnamon rolls', 'mashed potatoes', 'turkey stuffing'],
      ['cinnamon', 'cinnamon rolls', 'pumpkin pie'],
      ['flour', 'cinnamon rolls', 'pumpkin pie'],
      ['sugar', 'cinnamon rolls', 'pumpkin pie'],
    ],
  },
  {
    args: [
      ['chicken alfredo', 'chicken', 'pasta', 'parmesan'],
      ['parmesan chicken', 'chicken', 'parmesan', 'bread crumbs'],
      ['pasta salad', 'pasta', 'olive oil', 'tomato'],
      ['tomato soup', 'tomato', 'basil', 'cream'],
    ],
    expected: [
      ['chicken', 'chicken alfredo', 'parmesan chicken'],
      ['parmesan', 'chicken alfredo', 'parmesan chicken'],
      ['pasta', 'chicken alfredo', 'pasta salad'],
      ['tomato', 'pasta salad', 'tomato soup'],
    ],
  },
  {
    args: [
      ['snowflake cookies', 'flour', 'sugar', 'vanilla'],
      ['winter stew', 'beef', 'carrots', 'potatoes'],
      ['holiday punch', 'cranberry juice', 'orange juice', 'sparkling water'],
      ['festive salad', 'lettuce', 'cranberries', 'walnuts'],
    ],
    expected: [],
  },
]

describe('Challenge #23: Christmas dinner', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: organizeChristmasDinner,
  })
})
