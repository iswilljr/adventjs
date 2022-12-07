import { describe, expect } from "vitest";
import { getMaxGifts } from "./challenge-05";

const TEST_VALUES = [
  {
    name: "return type",
    value: typeof getMaxGifts([12, 3, 11, 5, 7], 20, 3),
    expect: "number",
  },
  {
    name: "getMaxGifts([12, 3, 11, 5, 7], 20, 3)",
    value: getMaxGifts([12, 3, 11, 5, 7], 20, 3),
    expect: 20,
  },
  {
    name: "getMaxGifts([50], 15, 1)",
    value: getMaxGifts([50], 15, 1),
    expect: 0,
  },
  {
    name: "getMaxGifts([50], 100, 1)",
    value: getMaxGifts([50], 100, 1),
    expect: 50,
  },
  {
    name: "getMaxGifts([50], 100, 1)",
    value: getMaxGifts([50], 100, 1),
    expect: 50,
  },
  {
    name: "getMaxGifts([50, 70], 100, 1)",
    value: getMaxGifts([50, 70], 100, 1),
    expect: 70,
  },
  {
    name: "getMaxGifts([50, 70, 30], 100, 3)",
    value: getMaxGifts([50, 70, 30], 100, 3),
    expect: 100,
  },
  {
    name: "getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)",
    value: getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4),
    expect: 100,
  },
  {
    name: "getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)",
    value: getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000),
    expect: 115,
  },
];

describe("Challenge #5: Optimizing Santa's trips", (test) => {
  for (const testValue of TEST_VALUES) {
    test(testValue.name, () => {
      expect(testValue.value).toBe(testValue.expect);
    });
  }
});
