import { describe } from 'vitest'
import { decodeFilename } from './challenge-11'

const TEST_CASES: TestCases<string, string> = [
  {
    args: '2023122512345678_sleighDesign.png.grinchwa',
    expected: 'sleighDesign.png',
  },
  {
    args: '42_chimney_dimensions.pdf.hack2023',
    expected: 'chimney_dimensions.pdf',
  },
  {
    args: '987654321_elf-roster.csv.tempfile',
    expected: 'elf-roster.csv',
  },
  {
    args: '2024120912345678_super_duper_sleigh.js.gift',
    expected: 'super_duper_sleigh.js',
  },
]

describe('Challenge #11: 🏴‍☠️ Filenames encoded', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    fn: decodeFilename,
  })
})
