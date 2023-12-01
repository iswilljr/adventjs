declare global {
  interface TestCase<Args, Expected> {
    args: Args
    expected: Expected
  }

  interface BuildChallengeTestOptions<Args, Expected> {
    cases: TestCases<Args, Expected>
    fn?: (args: Args) => Expected
    spreadFn?: (...args: Args) => Expected
  }

  type TestCases<Args, Expected> = Array<TestCase<Args, Expected>>

  function buildChallengeTestCases<Args, Expected>(
    options: BuildChallengeTestOptions<Args, Expected>,
  ): void
}

export {}
