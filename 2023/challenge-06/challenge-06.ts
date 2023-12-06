export function maxDistance(movements: string) {
  let maxLeft = 0
  let maxRight = 0

  for (const movement of movements) {
    if (movement === '>') {
      maxRight++
      maxLeft--
    } else if (movement === '<') {
      maxLeft++
      maxRight--
    } else {
      maxLeft++
      maxRight++
    }
  }

  return Math.max(maxLeft, maxRight)
}
