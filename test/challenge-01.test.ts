import { describe, expect } from 'vitest'
import { wrapping } from '@/challenge-01'

const TEST_VALUES = [
  {
    name: 'return type',
    value: Array.isArray(wrapping([])),
    expect: true,
  },
  {
    name: 'wrapping(gifts)',
    value: JSON.stringify(wrapping(['cat', 'game', 'socks'])),
    expect: JSON.stringify([
      '*****\n*cat*\n*****',
      '******\n*game*\n******',
      '*******\n*socks*\n*******',
    ]),
  },
  {
    name: 'wrapping(["will"])',
    value: JSON.stringify(wrapping(['will'])),
    expect: JSON.stringify(['******\n*will*\n******']),
  },
  {
    name: 'wrapping(["a"])',
    value: JSON.stringify(wrapping(['a'])),
    expect: JSON.stringify(['***\n*a*\n***']),
  },
  {
    name: 'wrapping an empty array should return an empty array',
    value: JSON.stringify(wrapping([])),
    expect: JSON.stringify([]),
  },
]

describe('Challenge #1: Automating Christmas gift wrapping!', test => {
  for (const testValue of TEST_VALUES) {
    test(testValue.name, () => {
      expect(testValue.value).toBe(testValue.expect)
    })
  }
})
