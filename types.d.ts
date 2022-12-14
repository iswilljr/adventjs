declare global {
  interface TestCases<Args, Expected> {
    args: Args
    expected: Expected
  }
}

export {}
