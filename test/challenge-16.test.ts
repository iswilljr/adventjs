import { describe, expect, it } from 'vitest'
import { fixLetter } from '@/challenge-16'

const TEST_CASES: Array<TestCases<string, string>> = [
  {
    args: ' hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  ',
    expected:
      'Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.',
  },
  {
    args: "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?",
    expected:
      "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?",
  },
  { args: '  hi    santa    claus ', expected: 'Hi Santa Claus.' },
  {
    args: '  hi    santa    claus . santa claus is the best  ',
    expected: 'Hi Santa Claus. Santa Claus is the best.',
  },
  {
    args: '  hi,santa claus. are you there ?   ',
    expected: 'Hi, Santa Claus. Are you there?',
  },
  {
    args: 'Hey santa Claus .  I want a bike.   I want a videogame! ',
    expected: 'Hey Santa Claus. I want a bike. I want a videogame!',
  },
]

describe("Challenge #16: Fixing Santa Claus' letters", () => {
  it('#T should return a string', () => {
    expect(typeof fixLetter('  hi    santa    claus ')).toBe('string')
  })

  it.each(TEST_CASES)(
    '# should return $expected when the input is $args',
    ({ args, expected }) => {
      expect(fixLetter(args)).toEqual(expected)
    }
  )
})
