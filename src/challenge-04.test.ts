import { describe, expect } from "vitest";
import { fitsInOneBox } from "./challenge-04";

const TEST_VALUES = [
  {
    name: "return type",
    value: typeof fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
    ]),
    expect: "boolean",
  },
  {
    name: "fitsInOneBox([{ l: 1, w: 1, h: 10 }, { l: 3, w: 3, h: 12 }, { l: 2, w: 2, h: 1 }])",
    value: fitsInOneBox([
      { l: 1, w: 1, h: 10 },
      { l: 3, w: 3, h: 12 },
      { l: 2, w: 2, h: 1 },
    ]),
    expect: false,
  },
  {
    name: "fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }])",
    value: fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
    ]),
    expect: true,
  },
  {
    name: "fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }, { l: 3, w: 1, h: 3 }])",
    value: fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 },
    ]),
    expect: false,
  },
  {
    name: "fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }, { l: 2, w: 10, h: 2}])",
    value: fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2 },
    ]),
    expect: false,
  },
  {
    name: "fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 3, w: 3, h: 3 }, { l: 2, w: 2, h: 2 }])",
    value: fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 },
    ]),
    expect: true,
  },
];

describe("Challenge #4: Box inside a box and another...", (test) => {
  for (const testValue of TEST_VALUES) {
    test(testValue.name, () => {
      expect(testValue.value).toBe(testValue.expect);
    });
  }
});
