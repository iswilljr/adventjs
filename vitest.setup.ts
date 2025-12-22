import kindOf from 'kind-of'
import { expect, it } from 'vitest'
import deepClone from 'just-clone'

global.buildChallengeTestCases = <Args, Expected>({
  cases,
  fn,
  spreadFn,
}: BuildChallengeTestOptions<Args, Expected>) => {
  const expectedTypeof = kindOf(cases[0].expected)

  const name = fn?.name ?? spreadFn?.name

  const executor = (_args: Args) => {
    const args =
      typeof _args === 'object' ? (deepClone(_args as any) as Args) : _args
    if (fn) return fn(args)
    if (spreadFn) return spreadFn(...(args as any))

    throw Error('buildChallengeTest requires an executor fn')
  }

  it(`#T should return ${expectedTypeof} type`, () => {
    const result = executor(cases[0].args)

    expect(kindOf(result)).toBe(expectedTypeof)
  })

  const nameTemplate = spreadFn
    ? `#%# ${name}(${(cases[0].args as any[])
        .map((_, i) => '$args.' + i)
        .join(', ')}) should return $expected`
    : `#%# ${name}($args) should return $expected`

  it.each(cases)(nameTemplate, ({ args, expected }) => {
    const result = executor(args)

    expect(result).toEqual(expected)
  })
}
