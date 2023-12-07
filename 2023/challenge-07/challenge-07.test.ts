import { describe } from 'vitest'
import { drawGift } from './challenge-07'

const TEST_CASES: TestCases<[number, `${string}`], string> = [
  {
    args: [4, '+'],
    expected: `   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n`,
  },
  {
    args: [5, '*'],
    expected: `    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n`,
  },
  {
    args: [1, '^'],
    expected: `#\n`,
  },
  {
    args: [2, '&'],
    expected: ` ##\n###\n##\n`,
  },
  {
    args: [10, '%'],
    expected: `         ##########\n        #%%%%%%%%##\n       #%%%%%%%%#%#\n      #%%%%%%%%#%%#\n     #%%%%%%%%#%%%#\n    #%%%%%%%%#%%%%#\n   #%%%%%%%%#%%%%%#\n  #%%%%%%%%#%%%%%%#\n #%%%%%%%%#%%%%%%%#\n##########%%%%%%%%#\n#%%%%%%%%#%%%%%%%#\n#%%%%%%%%#%%%%%%#\n#%%%%%%%%#%%%%%#\n#%%%%%%%%#%%%%#\n#%%%%%%%%#%%%#\n#%%%%%%%%#%%#\n#%%%%%%%%#%#\n#%%%%%%%%##\n##########\n`,
  },
]

describe('Challenge #7: The 3D boxes', () => {
  buildChallengeTestCases({
    cases: TEST_CASES,
    spreadFn: drawGift,
  })
})
