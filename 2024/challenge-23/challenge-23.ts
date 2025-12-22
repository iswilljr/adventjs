export function getMissingNumbers(nums: number[]): number[] {
  const n = Math.max(...nums)
  const missingNumbers = []

  const presentNumbers = new Set(nums)

  const arr = new Array(n).keys()
  for (const i of arr) {
    if (!presentNumbers.has(i + 1)) {
      missingNumbers.push(i + 1)
    }
  }

  return missingNumbers
}
