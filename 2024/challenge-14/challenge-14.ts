export function minMovesToStables(
  reindeer: number[],
  stables: number[],
): number {
  stables.sort()
  return reindeer
    .sort()
    .reduce((acc, curr, i) => acc + Math.abs(curr - stables[i]), 0)
}
