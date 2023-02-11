import kindOf from 'kind-of'
import { expect, it } from 'vitest'

global.buildChallengeTestCases = <Args, Expected>({
  cases,
  fn,
  spreadFn,
}: BuildChallengeTestOptions<Args, Expected>) => {
  const expectedTypeof = kindOf(cases[0].expected)

  const executor = (args: Args) => {
    if (fn) return fn(args)
    if (spreadFn) return spreadFn(...args)

    throw Error('buildChallengeTest requires an executor fn')
  }

  it(`#T should return ${expectedTypeof} type`, () => {
    const result = executor(cases[0].args)

    expect(kindOf(result)).toBe(expectedTypeof)
  })

  const nameTemplate = '#%# should return $expected when the input is $args'

  it.each(cases)(nameTemplate, ({ args, expected }) => {
    const result = executor(args)

    expect(result).toEqual(expected)
  })
}
