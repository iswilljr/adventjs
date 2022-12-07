import { describe, expect } from "vitest";
import { countHours } from "./challenge-02";

const TEST_VALUES = [
  {
    name: "return type",
    value: typeof countHours(2023, ["01/06", "04/01", "12/25"]),
    expect: "number",
  },
  {
    name: "countHours(2023, ['01/06', '04/01', '12/25'])",
    value: countHours(2023, ["01/06", "04/01", "12/25"]),
    expect: 4,
  },
  {
    name: "countHours(2022, ['01/06', '04/01', '12/25'])",
    value: countHours(2022, ["01/06", "04/01", "12/25"]),
    expect: 4,
  },
  {
    name: "countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'])",
    value: countHours(1985, ["01/01", "01/06", "02/02", "02/17", "02/28", "06/03", "12/06", "12/25"]),
    expect: 10,
  },
  {
    name: "countHours(2000, ['01/01'])",
    value: countHours(2000, ["01/01"]),
    expect: 0,
  },
];

describe("Challenge #2: Nobody wants to do extra hours at work", (test) => {
  for (const testValue of TEST_VALUES) {
    test(testValue.name, () => {
      expect(testValue.value).toBe(testValue.expect);
    });
  }
});
