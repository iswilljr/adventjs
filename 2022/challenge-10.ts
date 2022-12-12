export function checkJump(heights: number[]) {
  const maxIndex = heights.indexOf(Math.max(...heights))
  const before = heights.slice(0, maxIndex)
  const after = heights.slice(maxIndex + 1, heights.length)
  return (
    after.length > 0 &&
    maxIndex > 0 &&
    after.slice(1).every((h, i) => h <= after[i]) &&
    before.slice(1).every((h, i) => h >= before[i])
  )
}
