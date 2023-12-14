export function maxGifts(houses: number[]) {
  const dp = []

  dp[0] = houses[0]
  dp[1] = Math.max(houses[0], houses[1])

  let index = 2

  for (const gifts of houses.slice(2)) {
    dp[index] = Math.max(dp[index - 1], dp[index - 2] + gifts)

    index++
  }

  return dp[houses.length - 1]
}
