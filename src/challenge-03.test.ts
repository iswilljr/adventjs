import { describe, expect } from "vitest";
import { distributeGifts } from "./challenge-03";

const TEST_VALUES = [
  {
    name: "return type",
    value: typeof distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"]),
    expect: "number",
  },
  {
    name: 'distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])',
    value: distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"]),
    expect: 2,
  },
  {
    name: "distributeGifts(['a', 'b', 'c'], ['d', 'e'])",
    value: distributeGifts(["a", "b", "c"], ["d", "e"]),
    expect: 1,
  },
  {
    name: "it should return 0 if reindeers can't carry any pack: distributeGifts(['videogames', 'console'], ['will'])",
    value: distributeGifts(["videogames", "console"], ["will"]),
    expect: 0,
  },
  {
    name: "distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])",
    value: distributeGifts(
      ["game", "videoconsole", "computer"],
      ["midudev", "pheralb", "codingwithdani", "carlosble", "blasco", "facundocapua", "madeval", "memxd"]
    ),
    expect: 5,
  },
  {
    name: "distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])",
    value: distributeGifts(
      ["music"],
      ["midudev", "pheralb", "codingwithdani", "carlosble", "blasco", "facundocapua", "madeval", "memxd"]
    ),
    expect: 26,
  },
];

describe("Challenge #3: How many packs of gifts can Santa carry?", (test) => {
  for (const testValue of TEST_VALUES) {
    test(testValue.name, () => {
      expect(testValue.value).toBe(testValue.expect);
    });
  }
});
