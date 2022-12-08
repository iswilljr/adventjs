import { describe, expect } from "vitest";
import { getGiftsToRefill } from "@/challenge-07";

const TEST_VALUES = [
  {
    name: "return type",
    value: Array.isArray(getGiftsToRefill([], [], [])),
    expect: true,
  },
  {
    name: "getGiftsToRefill(a1, a2, a3)",
    value: JSON.stringify(
      getGiftsToRefill(["bici", "coche", "bici", "bici"], ["coche", "bici", "muñeca", "coche"], ["bici", "pc", "pc"])
    ),
    expect: JSON.stringify(["muñeca", "pc"]),
  },
  {
    name: "getGiftsToRefill([], [], [])",
    value: JSON.stringify(getGiftsToRefill([], [], [])),
    expect: JSON.stringify([]),
  },
  {
    name: "getGiftsToRefill(2)",
    value: JSON.stringify(getGiftsToRefill(["a", "a"], ["a", "a"], ["a", "a"])),
    expect: JSON.stringify([]),
  },
  {
    name: "getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c'])",
    value: JSON.stringify(getGiftsToRefill(["a", "a"], ["b", "b"], ["c", "c"])),
    expect: JSON.stringify(["a", "b", "c"]),
  },
  {
    name: "getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f'])",
    value: JSON.stringify(getGiftsToRefill(["a", "b"], ["c", "d"], ["e", "f"])),
    expect: JSON.stringify(["a", "b", "c", "d", "e", "f"]),
  },
];

describe("Challenge #7: Doing gifts inventory", (test) => {
  for (const testValue of TEST_VALUES) {
    test(testValue.name, () => {
      expect(testValue.value).toBe(testValue.expect);
    });
  }
});
